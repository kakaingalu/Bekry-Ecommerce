import React from 'react';
import withContext from '../../withContext';
import ProductList from './ProductList';
import HeaderImg from '../../Assets/headerImg1.jpg';
import { useNavigate } from 'react-router-dom';

const Shop = (props) => {
    const navigate = useNavigate();
    return (
        <>
            <div className='headerImage' height="400">
                <h1 className='intro'>Welcome to Bekry</h1>
                <h3 className='intro'>An online pastry Shop</h3>
                <button onClick={() => navigate('/Login')} className='shopButton'>Shop Now</button>
                <img className="headerImg" src={HeaderImg} alt='header Image' />  
            </div>
            <ProductList />
        </>
   
    )
}

export default withContext(Shop);