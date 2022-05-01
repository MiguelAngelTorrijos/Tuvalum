/* eslint-disable */
import { createContext, useEffect, useState } from 'react';
import { getDataBiker } from '../services/bikesService';

export const BikesContext = createContext();

export const BikesProvider = ({ children }) => {
  const [bikes, setBikes] = useState([]);
  const [offset, setOffset] = useState(0);
  const [totalBikes, setTotalBikes] = useState(0);

  const limit = 27;

  useEffect(() => {
    getDataBiker(offset, limit).then((response) => {
      setBikes(response.data);
      setOffset(offset + limit);
      setTotalBikes(response.total);
    });
  }, []);

  const deleteBike = (id) => {
    const newBikes = bikes.filter((bike) => bike.id !== id);
    setBikes(newBikes);
  };

  const addBike = (bike) => {
    bikes.push(bike);
    bikes.sort((a, b) => parseInt(a.price.replace('.', '')) - parseInt(b.price.replace('.', '')));
    setBikes([...bikes]);
  };

  return (
    <BikesContext.Provider
      value={{
        bikes,
        setBikes,
        offset,
        setOffset,
        totalBikes,
        setTotalBikes,
        limit,
        deleteBike,
        addBike,
      }}
    >
      {children}
    </BikesContext.Provider>
  );
};
