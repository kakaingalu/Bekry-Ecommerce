import React from 'react';
import ProductItem from './ProductItem';
import withContext from '../../withContext';

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
                <div>
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