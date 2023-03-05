import React from 'react'
import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import CartWidget from './CartWidget'
import { Icon } from '@iconify/react';

const NavBar = () => {
    // Para mostrar los botones de categorias
    const [mostrarCategorias, setMostrarCategorias] = useState(false);
    const desplegarCategorias = () =>{
        setMostrarCategorias(!mostrarCategorias);
    };
    // Para mostrar el menu
    const [mostrarMenu, setMostrarMenu] = useState(false);
    const desplegarMenu = () =>{
        setMostrarMenu(!mostrarMenu);
    };

  return (
    <>
    <header id='header'>
        <figure id='header__figure'>
            <Link to={"/"}><img className='figure__img' src="https://img.freepik.com/iconos-gratis/bolsa-compra_318-205056.jpg?w=2000" alt="" /></Link>
            <Link className='figure__brand' to={"/"}>Shoply</Link>
        </figure>

        <button id="header__menu" onClick={desplegarMenu}><Icon icon="material-symbols:menu-rounded" style={{ color: '#00a7e1', fontSize: '32px' }} /></button> {mostrarMenu && (
        
        <nav id='header__navbar'>
                <ul className='navbar'>
                    <li className='navbar__item'><Link className='item__btn' to={"/catalogue"}>Catalogo</Link></li>   

                    <li className='navbar__item'>
                        <button className='item__btn' onClick={desplegarCategorias}>Categorias</button>
                        {mostrarCategorias && (
                            <ul id='catPanel'>
                                <li><NavLink to={`/category/${"men"}`}>Hombre</NavLink></li>
                                <li><NavLink to={`/category/${"women"}`}>Mujer</NavLink></li>
                                <li><NavLink to={`/category/${"children"}`}>Niños</NavLink></li>
                            </ul>
                        )}
                    </li>
                    <li className='navbar__item'><Link  className='item__btn' to={"/about-us"}>Sobre Nosotros</Link></li>
                    <li className='navbar__item'><Link className='item__btn' to={"/contact"}>Contacto</Link></li>
                    <li className='navbar__item' id='userIcon'><Link className='item__btn' to={"/user-panel"}><img src="https://www.citypng.com/public/uploads/small/11639594342hjraqgbufi3xlb66lt30fz1pwfcydxkjqbynfqdpvufz41ysjtngiet4dyrywgqqqqu56w5nozgrhyecs4ixrlllkl150ogbiid1.png" alt="" /></Link></li>
                    <li className='navbar__item' id='cartIcon'><Link to={"/cart"}><CartWidget /></Link></li>
                </ul>
            </nav>
        )}
            
    </header>
    </>
  )
}

export default NavBar