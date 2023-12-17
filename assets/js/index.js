function addItemToCart(itemName, itemPrice) {
    // Perform any cart update logic here (e.g., add item to cart array, update total, etc.)

    // Redirect to the card page
    window.location.href = "/cart"; // Update with your actual cart page URL

    // You can also show a message indicating that the item has been added to the cart
    // You may use alert, modal, or any other UI element for this purpose
    alert(itemName + " has been added to the cart!");
}