import React from 'react';
import cakeSlice from '../../Assets/Chocolate_mouse.jpg';
import carrot from '../../Assets/Carrot_cake.jpg';
import Strawberry from '../../Assets/Strawberry.jpg';
import chocolate from '../../Assets/Death_by _chocolate.jpg';
import Wedding1 from '../../Assets/Wedding1.jpg';
import Wedding2 from '../../Assets/Wedding2.jpg';
import Wedding3 from '../../Assets/Wedding3.jpg';


const ProductItem = (props) => {
    const { product } = props;
    const images = [
        {
            src: cakeSlice,
            alt: 'chocolate mouse',
        },
        {
            src: carrot,
            alt: 'carrot cake',
        },
        {
            src: Strawberry,
            alt: 'strawberry cupcake',
        },
        {
            src: chocolate,
            alt: 'Death by chocolate',
        },
        {
            src: Wedding1,
            alt: 'Classic white cake',
        },
        {
            src: Wedding2,
            alt: 'Rustic wedding cake',
        },
        {
            src: Wedding3,
            alt: '3 Tier wedding cake',
        }
    ]
    const filteredImages = images.filter(image => image.alt === product.name); 

    return (
        <div>
            <div className="imgContainer">
                <div className='img'>
                {filteredImages.map((image, index) => (
                    <figure>
                        <img src={image.src} key={index} alt={image.alt} width="100" height="100" />

                    </figure>
                    
                ))}
                </div>
                <div className='productName'>
                    {product.name}{" "}
                    <span>ksh{product.price}</span>
                <div className='productDesc'>{product.shortDesc}</div>
                {product.stock > 0 ? (
                    <small>{product.stock + " Available"}</small>
                ) : (
                    <small>Out of Stock</small>
                )
                }
                </div>
                <div className='addToCart'>
                    <button onClick={() => {
                        props.addToCart({
                            id: product.name,
                            product,
                            amount: 1
                        })
                    }}
                    >
                        Add to Cart
                    </button>
                
                </div>
                
            </div>

        </div>
    )
}

export default ProductItem;