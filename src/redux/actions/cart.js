export const addPizzaToCart = pizzaObj => ({
    type: "ADD_PIZZA_CART",
    payload: pizzaObj
})

export const clearCart = payload => ({
    type: "CLEAR_CART",
    payload
})

export const removeCartItem = id => ({
    type: "REMOVE_CART_ITEM",
    payload: id
})

export const decreasePizza = id => ({
    type: "ON_PIZZA_DECREASE",
    payload: id
})

export const increasePizza = id => ({
    type: "ON_PIZZA_INCREASE",
    payload: id
})
