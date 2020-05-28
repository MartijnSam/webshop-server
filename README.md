# webshop-server

### API URLs:

https://mug-webshop.herokuapp.com/products
>GET gives all products


>POST adds a product with parameters 
    `name, price, inStock, description, img`
    
https://mug-webshop.herokuapp.com/products/:productId
>GET gives the product with :productId

https://mug-webshop.herokuapp.com/categories
>GET gives all categories


>POST adds a category with parameters
    `name, discription`
    
https://mug-webshop.herokuapp.com/categories/:categoryId
>GET gives the category with :categoryId

https://mug-webshop.herokuapp.com/categories/:categoryId/products
>GET gives the category with :categoryId and all products within that category


>POST adds a product to the category with :categoryId with parameters
    `productId`
    
https://mug-webshop.herokuapp.com/customers
>GET gives all customers

https://mug-webshop.herokuapp.com/customers/signup
>POST adds a customer with parameters
    `email, password, firstName, lastName, phone, profileImg`
    
https://mug-webshop.herokuapp.com/customers/:customerId
>GET gives the customer with :customerId

https://mug-webshop.herokuapp.com/customers/:customerId/addresses
>GET gives the addresses of the customer with :customerId


>POST adds a new address to the customer with :customerId with parameters
    `street, number, postcode, city, country`
    
https://mug-webshop.herokuapp.com/customers/:customerId/orders
>GET gives the orders of the customer with :customerId


>POST adds a new order to the customer with :customerId with parameters 
    `totalPrice, orderProducts (orderProducts eg: [{productId:1, quantity:1}])`
    
    
    
    




