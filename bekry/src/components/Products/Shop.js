import React from 'react';
import withContext from '../../withContext';
import ProductList from './ProductList';
import HeaderImg from '../../Assets/headerImg1.jpg';

const Shop = (props) => {
    return (
        <>
            <div className='headerImage' height="400">
                <h1 className='intro'>Welcome to Bekry</h1>
                <h3 className='intro'>An online pastry Shop</h3>
                <button className='shopButton'>Shop Now</button>
                <img className="headerImg" src={HeaderImg} alt='header Image' />  
            </div>
            <ProductList />
        </>
   
    )
}

export default withContext(Shop);