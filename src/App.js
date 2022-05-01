/* eslint-disable */
import { useContext, useState } from 'react';
import { CartProvider } from './contexts/CartContext';
import { BikesContext } from './contexts/BikeContext';

import { getDataBiker } from './services/bikesService';

import BikeCard from './components/BikeCard/BikeCard';
import { Cart } from './components/Cart/Cart';
import { CartMobile } from './components/CartMobile/CartMobile';
import { Grid } from './components/Grid/Grid';
import { Footer } from './components/Footer/Footer';
import { Navbar } from './components/Navbar/Navbar';

import './styles/home.scss';

function App() {
  const { bikes, setBikes, offset, setOffset, totalBikes, limit } = useContext(BikesContext);
  const [open, setOpen] = useState(false);

  const handlePagination = () => {
    if (offset <= totalBikes) {
      getDataBiker(offset, limit).then((response) => {
        bikes.push(...response.data);
        setBikes(bikes);
        setOffset(offset + limit);
      });
    }
  };

  return (
    <CartProvider>
      <Navbar open={open} setOpen={setOpen} />
      <CartMobile open={open} />
      <header className='header'>
        <h1>Miles de biciletas desenado que las lleves de aventura</h1>
      </header>
      <div className='subtitle-home'>
        <hr />
        <h2>Comienza tu aventura</h2>
      </div>
      <div className='home-grid'>
        <Grid className='home-grid__bikes'>
          {bikes.map((bike) => (
            <BikeCard key={bike.id} bike={bike} />
          ))}
        </Grid>
        <Cart className='home-grid__cart' />
        <button
          className='home-grid__btn '
          hidden={offset >= totalBikes}
          onClick={handlePagination}
        >
          Ver mas
        </button>
      </div>
      <Footer />
    </CartProvider>
  );
}

export default App;
