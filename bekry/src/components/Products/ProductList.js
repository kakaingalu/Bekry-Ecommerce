import React from 'react';
import './Products.css'
import ProductItem from './ProductItem';
import withContext from '../../withContext';
// import HeaderImg from '../../Assets/headerImg1.jpg';


const ProductList = props => {
    const { products } = props.context;

    return (
        <>
            <div>
                <div>
                    <h4>Our Products</h4>
                </div>
            </div>
            <div>
                {/* <div className='headerImage' height="400">
                    <h1 className='intro'>Welcome to Bekry</h1>
                    <h3 className='intro'>An online pastry Shop</h3>
                    <button className='shopButton'>Shop Now</button>
                    <img className="headerImg" src={HeaderImg} alt='header Image' />  
                </div> */}
                <p>Our top picks</p>
                <div className='products'>
                    {products && products.length ? (
                        products.map((product, index) => (
                            <ProductItem
                                product={product}
                                key={index}
                                addToCart={props.context.addToCart}
                            />
                        ))
                    ) : (
                        <div>
                            <span>No products found!</span>
                        </div>
                    )
                    }
                </div>
            </div>
        </>
    );
};

export default withContext(ProductList);
