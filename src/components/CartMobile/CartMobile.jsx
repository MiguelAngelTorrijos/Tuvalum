import { useContext } from 'react';

import { CartContext } from '../../contexts/CartContext';
import { CartItem } from '../CartItem/CartItem';

import './cartMobile.scss';
import { BsCheckLg } from 'react-icons/bs';
import { ImLock } from 'react-icons/im';

export const CartMobile = ({ open, item }) => {
  const { cart, calculateTotal } = useContext(CartContext);

  const total = calculateTotal(item);
  return (
    <div>
      <div open={open} className={open ? 'cart-mobile open' : 'cart-mobile close'}>
        <h2 className='cart-mobile__title'>Cesta de compra</h2>
        {!cart.length > 0 ? (
          <p className='cart-mobile__empty'>Tu cesta está vacía</p>
        ) : (
          cart.map((item, i) => (
            <div key={i}>
              <CartItem item={item} />
              <hr />
            </div>
          ))
        )}
        <div className='cart-mobile__total'>
          <h1>Total</h1>
          <h1>{total.toLocaleString()}€</h1>
        </div>
        <div className='cart-mobile__send'>
          <div className='cart-mobile__send__title'>
            <ImLock className='cart-mobile__send__title__icon' />
            <h2>Compra sin riesgos</h2>
          </div>

          <div className='cart-mobile__send__text'>
            <BsCheckLg className='cart-mobile__send__text__icon' />
            <p>Envío directo y seguro.</p>
          </div>

          <div className='cart-mobile__send__text'>
            <BsCheckLg className='cart-mobile__send__text__icon' />
            <p>Los plazos de entrega habituales son de 3 a 5 días hábiles.</p>
          </div>

          <div className='cart-mobile__send__text'>
            <BsCheckLg className='cart-mobile__send__text__icon' />
            <p>Una vez revisada y certificada te la enviaremos en 7-10 días hábiles.</p>
          </div>
        </div>
      </div>
    </div>
  );
};
