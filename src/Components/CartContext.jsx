import React, { createContext, useContext, useState } from 'react'

const CartContext = createContext();

export const useCartContext = () => useContext(CartContext);

export const CartContextProvider = ({ children }) => {
    let variable = "context";
    const [cart, setCart] = useState([]);

    const addItem = (item, cantidad) => {
        const index = cart.findIndex((i) => i.item.id === item.id);

    if (index > -1){
        const oldQy = cart[index].cantidad;
        cart.splice(index,1);
        setCart([...cart,{item,cantidad: cantidad + oldQy}]);
    } 
    
    else {
        setCart([...cart,{item,cantidad}]);
    }
};

    const clearCart=() => {
        setCart([]);
    }

    const removeItem = (id) => {
        const deleteProduct = cart.filter ((prod) => prod.item.id !== id);
        setCart ([...deleteProduct]);
    };

    const cartWidgetItems = () => {
        return cart.reduce((acum,valor) => acum + valor.cantidad,0);
    };

    const totalPrice = () => {
        return cart.reduce(
            (acum,valor) => acum + valor.cantidad * valor.item.precio,0
        );
    };

    return (
        <CartContext.Provider
        value={{
            variable,
            cart,
            setCart,
            addItem,
            clearCart,
            removeItem,
            cartWidgetItems,
            totalPrice,
        }}
        >
            {children}
        </CartContext.Provider>
    );
};