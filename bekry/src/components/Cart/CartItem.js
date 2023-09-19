import React from "react";
import cakeSlice from '../../Assets/Chocolate_mouse.jpg';
import carrot from '../../Assets/Carrot_cake.jpg';
import Strawberry from '../../Assets/Strawberry.jpg';
import chocolate from '../../Assets/Death_by _chocolate.jpg';
import Wedding1 from '../../Assets/Wedding1.jpg';
import Wedding2 from '../../Assets/Wedding2.jpg';
import Wedding3 from '../../Assets/Wedding3.jpg';


const CartItem = props => {
  const { cartItem, cartKey } = props;

  const { product, amount } = cartItem;
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
    <div className=" column is-half">
      <div className="box">
        <div className="media">
          <div className="media-left">
            {filteredImages.map((image, index) => (
                <figure className="image is-64x64" key={index}>
                <img
                    src={image.src}
                    alt={image.alt}
                    width="100"
                    height="100"
                />
                </figure>
            ))}
          </div>
          <div className="media-content">
            <b style={{ textTransform: "capitalize" }}>
              {product.name}{" "}
              <span className="tag is-primary">Ksh{product.price}</span>
            </b>
            <div>{product.shortDesc}</div>
            <small>{`${amount} in cart`}</small>
          </div>
          <button
            className="media-right"
            onClick={() => props.removeFromCart(cartKey)}
          > Remove Item
            <span className="delete is-large"></span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
