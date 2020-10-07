export const addItemToCart = (cartItems, cartItemToAdd) => {
    const existingCartItem = cartItems.find(cartItem => {
        return (cartItem.id === cartItemToAdd.id && cartItem.size === cartItemToAdd.size)
    });
     if (existingCartItem) {
         return cartItems.map(cartItem =>(
             (cartItem.id === cartItemToAdd.id && cartItem.size === cartItemToAdd.size)
             ? {...cartItem, quantity: cartItem.quantity + 1} 
             : cartItem
         ))
     }

     return [...cartItems, {...cartItemToAdd, quantity: 1}]
};


export const removeItemFromCart = (cartItems, itemToRemove) => {
    const existingCartItem = cartItems.find(item => (item.id === itemToRemove.id && item.size === itemToRemove.size))
    if (existingCartItem.quantity === 1) {
        return cartItems.filter( item => (item.id !== itemToRemove.id || item.size !== itemToRemove.size))
    }
    return cartItems.map(item => (
        (item.id === itemToRemove.id && item.size === itemToRemove.size)
        ? {...item, quantity: item.quantity - 1}
        : item
    ))
}