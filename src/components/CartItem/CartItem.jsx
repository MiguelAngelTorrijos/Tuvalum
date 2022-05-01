import React, { useContext } from 'react';

import { BikesContext } from '../../contexts/BikeContext';
import { CartContext } from '../../contexts/CartContext';

import './cartItem.scss';

export const CartItem = ({ item }) => {
  const { title, price, image, id } = item;
  const { removeFromCart } = useContext(CartContext);
  const { addBike } = useContext(BikesContext);

  const handleRemoveItemCart = () => {
    removeFromCart(id);
    addBike(item);

  };

  return (
    <div id={id} className='cart-item'>
      <div className='cart-item__img'>
        <img src={image} alt='bike model' />
      </div>
      <div className='cart-item__text'>
        <h2 className='cart-item__text__title'>{title}</h2>
        <div className='cart-item__text__price'>
          <p>Precio</p>
          <p> {price}€</p>
        </div>
        <p className='cart-item__text__btn' onClick={handleRemoveItemCart}>
          Eliminar
        </p>
      </div>
    </div>
  );
};
