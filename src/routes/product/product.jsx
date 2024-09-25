import React, { useContext } from 'react'

import { useParams } from 'react-router-dom';
import { BsHeart } from "react-icons/bs";
import ProductInfo from '../../components/product-info/product-info';
import { StoreContext } from '../../context/StoreContext';

import './product.scss'

const Product = () => {
    const {addToCart, addToFavorites, db} = useContext(StoreContext);
    const { name } = useParams()
    const product = db.find(item => item.name == name)

    if (!product) {
        return <div>Product not found</div>
    }
    return (
        <div className='product-container'>
            <div className='main-product-container'>
                <div className='img-container'>
                    <img src={product.img} alt={product.name} className='product-img' />
                </div>
                <div className='product-info'>
                    <h2 className='product-name'>{product.name}</h2>
                    <p className='product-color-container'>Color: <div className='product-color'>{product.color}</div></p>
                    <img src={product.img} alt={product.name} className='product-mini-img' />
                    <p className='product-price'>${product.price.toLocaleString('en')}</p>
                    <div className='buttons-container'>
                        <button className='btn-heart' onClick={() => addToFavorites(product)}> <BsHeart className='btn-heart-img'/> </button>
                        <button className='btn-add' onClick={()=>addToCart(product.id)}>Add to Cart</button>
                    </div>
                </div>
            </div>
            <ProductInfo />
        </div>
    )
}

export default Product