import React from 'react';
import Item from './Item';

const ItemList = ({ productos }) => {

  return (
    <>
      <article id='itemList'>
        {productos.map((producto) => (
          <Item key={producto.id} 
          id={producto.id}
          title={producto.title}
          price={producto.price}
          description={producto.description}
          stock={producto.stock}
          category={producto.category}
          img={producto.img}
          />
        ))}
      </article>
    </>
  );
};

export default ItemList;
