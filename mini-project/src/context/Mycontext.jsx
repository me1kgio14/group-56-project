import { createContext, useState } from "react";

export const CartContext = createContext()

export const CartProvider = ({children}) => {
    const [cartItems, setCartItems] = useState([])

 const addToCart = (item) => {
    setCartItems((prevItems) => {
        const exists = prevItems.find((i) => i.id === item.id);

        if (exists) {
            
            return prevItems.map((i) =>
                i.id === exists.id ? { ...i, quantity: i.quantity + 1 } : i

            );
            
        } else {
            
            return [...prevItems, { ...item, quantity: 1 }];
        }
    });
};

        const removeFromCart = (itemId) => {
            setCartItems((prevItems) => 
                prevItems.filter((item) => item.id !== itemId)
            )
        }
        const decreaseQuantity = (itemId) => {
            setCartItems((prevItems) => 
                prevItems.map((item) => 
                    item.id === itemId 
                    ? {...item, quantity: item.quantity > 1 ? item.quantity - 1 : 1} 
                    : item
                )
            )
        }

        const clearCart = () => {
            setCartItems([])
        }
   
        const TotalPrice = cartItems.reduce(
            (total, item) => total + item.price * item.quantity,
            0
        );
        const increment = (itemId) => {
            setCartItems((prevItems) =>
                prevItems.map((item) =>
                    item.id === itemId
                    ? { ...item, quantity: item.quantity + 1 }
                    : item
                )
            )
        }

    return (
       <CartContext.Provider
        value={{
            cartItems,
            addToCart,
            removeFromCart,
            decreaseQuantity,
            clearCart,
            TotalPrice,
            increment,
        }}
>
        {children}
    </CartContext.Provider>
    )
}