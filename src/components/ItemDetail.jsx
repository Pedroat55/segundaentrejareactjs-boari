import React from 'react';
import { useParams } from 'react-router-dom';
import ItemCount from './ItemCount';


const ItemDetail = ({ prendas }) => {
  const { id } = useParams();

  const prendaElegida = prendas.filter((prenda) => prenda.id === id);
  const producto = prendaElegida[0];
  let categoria;
  
  console.log(prendas)
  if(producto.category === 'men'){
    categoria = 'Prendas de Hombre';  
  }else if(producto.category === 'children'){
    categoria = 'Prendas de Niño';
  }else{
    categoria = 'Prendas de mujer';
  };
  

  return (
    <article id='itemDetail'>
      <figure className='itemDetail__figure'>
        <img className='figure__img' src={producto.img} alt="" />
      </figure>
      <div className='itemDetail__article'>
        <h2 className='article__title'>{producto.title}</h2>
        <p className='article__price'>${producto.price}</p>
        <p className='article__category'><span>Categoria:</span> {categoria}</p>
        <p className='article__stock'><span>Stock Disponible:</span> {producto.stock}</p>
        <p className='article__description'><span>Descripcion:</span> {producto.description}</p>
        <div className='article__footer'>
          <ItemCount stockDisponible={producto.stock}/>
          <button id='buyBtn'>Comprar</button>
        </div>
      </div>
    </article>
  );
};

export default ItemDetail;