import { useContext } from 'react';

import { BikesContext } from '../../contexts/BikeContext';
import { CartContext } from '../../contexts/CartContext';

import './bikeCard.scss';
import { BiCartAlt } from 'react-icons/bi';

export default function BikeCard({ bike }) {
  const { id, image, price, title, year } = bike;

  const { addToCart } = useContext(CartContext);
  const { deleteBike } = useContext(BikesContext);

  const handleClick = () => {
    addToCart({ image, price, id, title });
    deleteBike(id);
  };

  return (
    <div id={id} className='bikeCard-container'>
      <div className='bikeCard-container__img'>
        <img src={image} alt='bike model' />
      </div>
      <div className='bikeCard-container__text'>
        <h2 className='bikeCard-container__text__title'>{title}</h2>
        <p className='bikeCard-container__text__year'>{year}</p>
      </div>
      <p className='bikeCard-container__price'>{price} EUR</p>
      <div className='bikeCard-container__btn'>
        <button onClick={handleClick}>
          Añadir al carrito <BiCartAlt />
        </button>
      </div>
    </div>
  );
}
