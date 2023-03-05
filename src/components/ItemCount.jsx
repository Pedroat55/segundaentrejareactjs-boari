import React, { useState } from 'react';

const ItemCount = ({ stockDisponible }) => {
    const [count, setCount] = useState(0);

    const suma = () => {
        if(count >= 0 && stockDisponible > 0 && count < stockDisponible ){
            setCount(count + 1);
        };
    };
    const resta = () => {
        if(count > 0){
            setCount(count - 1);
        };
    };

  return (
    <>
        <div id='itemCount'>
            <button className='itemCount__btn' onClick={suma}>+</button>
            <div id='itemCounter'>{count}</div>
            <button className='itemCount__btn' onClick={resta}>-</button>
        </div>
    </>
  );
};

export default ItemCount;