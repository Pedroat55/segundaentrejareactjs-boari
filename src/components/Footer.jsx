import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <>
    <footer id='footer'>
        <Link to={"/"}>
            <img className='footer__logo' src="https://img.freepik.com/iconos-gratis/bolsa-compra_318-205056.jpg?w=2000" alt="" />
        </Link>
        <p>All rights reserverd 2023</p>
    </footer>
    </>
  );
};

export default Footer;