import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { StoreContext } from '../../context/StoreContext';

import './profile.scss';

const Profile = () => {
    const { addToCart, favoriteItems, removeFromFavorites } = useContext(StoreContext);

    return (
        <div className='profile-container'>
            <h1 className='profile'>Favorite</h1>
            <div className='favorite-items'>
                {favoriteItems.length > 0 ? (
                    favoriteItems.map((item) => (
                        <div key={item.id} className='favorite-item'>
                            <img src={item.img} alt={item.name} className='item-img' />
                            <p className='item-name'>{item.name}</p>
                            <div className='buttons-container'>
                                <button className='btn-add' onClick={() => addToCart(item.id)}>Add to Cart</button>
                                <button className='btn-delete' onClick={() => removeFromFavorites(item.id)}>Delete</button> 
                            </div>
                        </div>
                    ))
                ) : (
                    <p>No favorite items</p>
                )}
            </div>
        </div>
    );
}

export default Profile;
