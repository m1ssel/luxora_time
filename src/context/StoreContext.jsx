import { createContext, useState, useEffect } from "react";
import db from '../assets/db.json';

export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {
    const [cartItems, setCartItems] = useState({});
    const [favoriteItems, setFavoriteItems] = useState([]);
    const [formattedTotalAmount, setFormattedTotalAmount] = useState('0');

    const addToFavorites = (product) => {
        setFavoriteItems((prevFavorites) => [...prevFavorites, product]);
    };

    const removeFromFavorites = (productId) => {
        setFavoriteItems((prevFavorites) => 
            prevFavorites.filter((item) => item.id !== productId)
        );
    };

    const updateTotalAmount = (amount) => {
        setFormattedTotalAmount(amount.toLocaleString('en'));
    };

    const addToCart = (itemId) => {
        if (!cartItems[itemId]) {
            setCartItems((prev) => ({ ...prev, [itemId]: 1 }));
        } else {
            setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
        }
    };

    const removeFromCart = (itemId) => {
        setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
    };

    useEffect(() => {
        console.log(cartItems);
    }, [cartItems]);

    const contextValue = {
        db,
        cartItems,
        addToCart,
        removeFromCart,
        formattedTotalAmount,
        updateTotalAmount,
        favoriteItems,
        addToFavorites,
        removeFromFavorites
    };

    return (
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    );
}

export default StoreContextProvider;
