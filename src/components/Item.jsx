import React from 'react';
import { NavLink } from 'react-router-dom';

const Item = ({ id, title, price, description, stock, category, img }) => {


  return (
    <>
      <div className='productCard' id={id}>
          <h2 className='productCard__title'>{title}</h2>
          <p className='productCard__category'>{category}</p>
          <img className='productCard__img' src={img} alt='' />
          <p className='productCard__descrip'>{description.slice(0, 80)}...</p>
          <NavLink to={`/item/${id}`}><button className='productCard__btn'>Detalle</button></NavLink>
      </div>
    </>
  );
};

export default Item;
