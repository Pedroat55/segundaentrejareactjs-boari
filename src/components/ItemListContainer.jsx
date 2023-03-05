import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ItemList from './ItemList';



const ItemListContainer = () => {
  
  const { category } = useParams();
  const [productos, setProductos] = useState([]);


  async function getData() {
    try {
      const respuesta = await fetch("./products.json");
      const datos = await respuesta.json();
      return datos.products;
    } catch (error) {
      console.error(error);
    }
  }
  
  useEffect(() => {
      getData().then((data) => {
      setProductos(data);
    });
  }, []);



  const catFilter = productos.filter((producto) => producto.category === category);
  

  return (
    <section id='catalogue'>
      {category ? <ItemList productos={catFilter} /> : <ItemList productos={productos} />}
    </section>
  );
     

}

export default ItemListContainer;

