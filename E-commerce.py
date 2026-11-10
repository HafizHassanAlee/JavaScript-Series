
class Product:
    def __init__(self, product_id, name, price, stock):
        self.product_id = product_id
        self.name = name
        self.price = price
        self.stock = stock

    def display_product(self):
        print(f"{self.product_id:<10} {self.name:<15} Rs.{self.price:<10} {self.stock}")

    def update_stock(self, quantity):
        new_stock = self.stock + quantity

        if new_stock < 0:
            print("Error: Not enough stock available!")
            return False

        self.stock = new_stock
        return True


class ShoppingCart:
    def __init__(self):
        self.items = {}  # Product ID: Quantity
        self.discount_rate = 0

    def add_item(self, product, quantity):
        if quantity <= 0:
            print("Quantity must be greater than zero.")
            return

        current_quantity = self.items.get(product.product_id, 0)

        if current_quantity + quantity > product.stock:
            print("Not enough stock available!")
            return

        self.items[product.product_id] = current_quantity + quantity
        print(f"{quantity} x {product.name} added to cart.")

    def remove_item(self, product):
        if product.product_id in self.items:
            del self.items[product.product_id]
            print(f"{product.name} removed from cart.")
        else:
            print("Product not found in cart.")

    def calculate_subtotal(self, products):
        subtotal = 0

        for product_id, quantity in self.items.items():
            product = products[product_id]
            subtotal += product.price * quantity

        return subtotal

    def apply_discount(self, discount_rate):
        if 0 <= discount_rate <= 100:
            self.discount_rate = discount_rate
            print(f"{discount_rate}% discount applied.")
        else:
            print("Invalid discount percentage.")

    def calculate_discount(self, products):
        subtotal = self.calculate_subtotal(products)
        return subtotal * self.discount_rate / 100

    def calculate_total(self, products):
        subtotal = self.calculate_subtotal(products)
        discount = self.calculate_discount(products)
        return subtotal - discount

    def display_cart(self, products):
        if not self.items:
            print("\nYour shopping cart is empty.")
            return

        print("\n========== SHOPPING CART ==========")

        for product_id, quantity in self.items.items():
            product = products[product_id]
            total = product.price * quantity

            print(
                f"{product.name:<15} "
                f"{product.price:>8} x {quantity:<3} = Rs.{total}"
            )

        subtotal = self.calculate_subtotal(products)
        discount = self.calculate_discount(products)
        final_total = self.calculate_total(products)

        print("-----------------------------------")
        print(f"Subtotal:       Rs.{subtotal:.2f}")
        print(f"Discount:       Rs.{discount:.2f}")
        print(f"Final Total:    Rs.{final_total:.2f}")


class Customer:
    def __init__(self, customer_id, name, email):
        self.customer_id = customer_id
        self.name = name
        self.email = email
        self.cart = ShoppingCart()
        self.order_history = []

    def display_customer(self):
        print("\n========== CUSTOMER INFORMATION ==========")
        print(f"Customer ID: {self.customer_id}")
        print(f"Name:        {self.name}")
        print(f"Email:       {self.email}")

    def add_to_cart(self, product, quantity):
        self.cart.add_item(product, quantity)

    def remove_from_cart(self, product):
        self.cart.remove_item(product)


class Order:
    next_order_id = 1001

    def __init__(self, customer, products):
        self.order_id = Order.next_order_id
        Order.next_order_id += 1

        self.customer = customer
        self.items = {}
        self.subtotal = 0
        self.discount = 0
        self.final_total = 0
        self.status = "Pending"

        # Take a snapshot of cart items
        for product_id, quantity in customer.cart.items.items():
            product = products[product_id]

            self.items[product_id] = {
                "name": product.name,
                "price": product.price,
                "quantity": quantity
            }

        self.subtotal = customer.cart.calculate_subtotal(products)
        self.discount = customer.cart.calculate_discount(products)
        self.final_total = self.subtotal - self.discount

    @classmethod
    def generate_order(cls, customer, products):
        if not customer.cart.items:
            print("Cannot generate an order with an empty cart.")
            return None

        # Verify stock before processing
        for product_id, quantity in customer.cart.items.items():
            product = products[product_id]

            if quantity > product.stock:
                print(f"Insufficient stock for {product.name}.")
                return None

        order = cls(customer, products)

        # Reduce product stock
        for product_id, quantity in order.items.items():
            product = products[product_id]
            product.update_stock(-quantity)

        customer.order_history.append(order)

        # Clear cart after successful order
        customer.cart.items.clear()
        customer.cart.discount_rate = 0

        print("\nOrder generated successfully!")
        return order

    def update_status(self, status):
        allowed_statuses = [
            "Pending", "Confirmed", "Shipped",
            "Delivered", "Cancelled"
        ]

        if status not in allowed_statuses:
            print("Invalid order status.")
            return

        self.status = status
        print("Order status updated.")

    def display_order(self):
        print("\n========================================")
        print("              ORDER RECEIPT")
        print("========================================")

        print(f"Order ID: {self.order_id}")
        print(f"Customer: {self.customer.name}")
        print(f"Status:   {self.status}")

        print("\nProducts:")

        for item in self.items.values():
            total = item["price"] * item["quantity"]

            print(
                f"{item['name']:<15} "
                f"{item['price']:>8} x "
                f"{item['quantity']} = Rs.{total}"
            )

        print("----------------------------------------")
        print(f"Subtotal:       Rs.{self.subtotal:.2f}")
        print(f"Discount:       Rs.{self.discount:.2f}")
        print(f"Final Total:    Rs.{self.final_total:.2f}")
        print("========================================")
        print("       Thank you for shopping!")
        print("========================================")


# ==========================================
# MAIN PROGRAM
# ==========================================

# Create products
product_list = [
    Product(101, "Rice", 2000, 20),
    Product(102, "Cooking Oil", 1500, 15),
    Product(103, "Spices", 500, 30),
    Product(104, "Sugar", 180, 40),
    Product(105, "Flour", 250, 25)
]

# Store products in a dictionary using product ID
products = {
    product.product_id: product
    for product in product_list
}

# Create customer
customer = Customer(
    1,
    "Hassan",
    "hassan@example.com"
)

orders = []

while True:

    print("\n========== ONLINE SHOPPING SYSTEM ==========")
    print("1. Display Available Products")
    print("2. Display Customer Information")
    print("3. Add Product to Cart")
    print("4. Remove Product from Cart")
    print("5. Display Shopping Cart")
    print("6. Apply Discount")
    print("7. Generate Order")
    print("8. Display Order History")
    print("9. Update Order Status")
    print("10. Exit")

    choice = input("\nEnter your choice: ")

    if choice == "1":

        print("\nID         Product         Price       Stock")
        print("---------------------------------------------")

        for product in product_list:
            product.display_product()

    elif choice == "2":

        customer.display_customer()

    elif choice == "3":

        try:
            product_id = int(input("Enter Product ID: "))
            quantity = int(input("Enter Quantity: "))

            if product_id in products:
                customer.add_to_cart(products[product_id], quantity)
            else:
                print("Product not found.")

        except ValueError:
            print("Please enter valid numbers.")

    elif choice == "4":

        try:
            product_id = int(input("Enter Product ID to remove: "))

            if product_id in products:
                customer.remove_from_cart(products[product_id])
            else:
                print("Product not found.")

        except ValueError:
            print("Please enter a valid product ID.")

    elif choice == "5":

        customer.cart.display_cart(products)

    elif choice == "6":

        try:
            discount = float(input("Enter discount percentage: "))
            customer.cart.apply_discount(discount)

        except ValueError:
            print("Enter a valid discount.")

    elif choice == "7":

        order = Order.generate_order(customer, products)

        if order:
            orders.append(order)
            order.display_order()

    elif choice == "8":

        if not orders:
            print("No orders found.")

        for order in orders:
            order.display_order()

    elif choice == "9":

        if not orders:
            print("No orders available.")
            continue

        try:
            order_id = int(input("Enter Order ID: "))

            selected_order = next(
                (o for o in orders if o.order_id == order_id),
                None
            )

            if selected_order:
                print("Statuses: Pending, Confirmed, Shipped, Delivered, Cancelled")
                new_status = input("Enter new status: ").strip().title()
                selected_order.update_status(new_status)
            else:
                print("Order not found.")

        except ValueError:
            print("Enter a valid order ID.")

    elif choice == "10":

        print("Thank you for using our shopping system!")
        break

    else:
        print("Invalid choice. Please try again.")