import React from 'react';
import { useState } from 'react';


const Home = () => {
  return (
    <> 
        <section id='home'>
          <article className='home__container'>
            <div className='home__txt'>
              <h1 className='home__title'>Bienvenido a Shoply</h1>
              <p className='home__descrip'>Donde comprar tus prendas favoritas es mas fácil que nunca. Ve las mejores ofertas en prendas con la mejor calidad.</p>
            </div>
            
            <figure className='home__figure'>
              <img className='figure__img' src="https://images.unsplash.com/photo-1562157873-818bc0726f68?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=627&q=80" alt="" />
            </figure>
          </article>
        </section>
    </>
  )
}

export default Home