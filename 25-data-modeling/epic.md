For epic mode, we're going to design an Amazon clone.

# Quest 1 - Products

You're building something like Amazon. You have an incredibly large number of products. These products have all of the descriptive information required to convince people to buy them, a price, and the ability to have a temporarily reduced price.

They can belong to many categories, and those categories have a hierarchy (so like, Entertainment -> Video Games -> Xbox One would be three categories that are related).

They have many reviews from users. These reviews have a rating. The products have an aggregate rating representing the average of all of these.

Products can have any number of images.

# Quest 2 - The Cart

You have products. Now you need a place to hold them while the user is waiting to buy them. Keep in mind, the user can buy more than one of a product.

# Quest 3 - User Information

To make the customer's life easier, we need more complex information about them. We want to store their shipping and billing addresses, as well as some payment information. Keep in mind with payment information, you want to store some information to show the user, but we never want to store it all in plain text. If you use fields for sensitive information like a password or a credit card number, note in your design that it should be encrypted.

# Quest 4 - Completed Orders

Once they've completed their purchase, you need to permanently save it. In addition to saving mock information like was their payment successful, you'll need to track the actual monetary value of all of these things--how much did they pay and for what. If someone buys a product on sale and returns it later, you need to know not to refund the full price.
