import React from 'react';
import { useState, useEffect } from 'react';
import ItemDetail from './ItemDetail';


const ItemDetailContainer = () => {
  const [prendas, setPrendas] = useState([]);

  async function getData() {
    try {
      const respuesta = await fetch("../products.json");
      const data = await respuesta.json();
      return data.products;
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getData().then((data) => {
      setPrendas(data);
    });
  }, []);

  if(prendas.length > 0){
    return (
      <section id='itemDetailContainer'>
        <ItemDetail prendas={prendas}/>
      </section>
    )
  }
};

export default ItemDetailContainer;