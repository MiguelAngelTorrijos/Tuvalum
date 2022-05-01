import { useContext } from 'react';

import { CartContext } from '../../contexts/CartContext';

import logo from '../../styles/images/logo.svg';

import './navbar.scss';
import { BiCartAlt } from 'react-icons/bi';
import { FaBars } from 'react-icons/fa';
import { BsXLg } from 'react-icons/bs';

export const Navbar = ({ open, setOpen }) => {
  const NavItems = ['Carretera', 'Montaña', 'E-Bikes', 'Marcas', 'Accesorios'];
  const { cart } = useContext(CartContext);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <div className='navbar'>
      <div className='navbar__logo'>
        <img src={logo} alt='Tuvalum logo' />
      </div>
      <ul className='navbar__list'>
        {NavItems.map((item) => (
          <li className='navbar__list__item' key={item}>
            {item}
          </li>
        ))}
      </ul>
      <div className='disabled-icons'>
        {open ? (
          <BsXLg className={open ? 'navbar__close' : 'disabled-icon'} onClick={handleClick} />
        ) : (
          <BiCartAlt
            open={open}
            onClick={handleClick}
            className={
              cart.length > 0
                ? 'badge navbar__close'
                : 'disabled-icon' || open
                ? 'navbar__close'
                : 'disabled-icon'
            }
          />
        )}
        <FaBars className='navbar__menu' />
      </div>
    </div>
  );
};
