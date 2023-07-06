
import React from 'react';
import AppBar from '@mui/material/AppBar';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
/*#404040display: flex*/ 
const NavBar = () => {
  return (
    <nav className="navbar">
      <Link href='/' className="logo"><h1>TecnoGaleon Store</h1></Link>
      <ul className='menu'>
        <li><Link className='menu-link' href="/">Home</Link></li>
        <li><Link className='menu-link' href="/productos">Productos</Link></li>
        <li><Link className='menu-link' href="/productos/Notebooks">Notebooks</Link></li>
        <li><Link className='menu-link' href="/productos/Placas">Placas de Videos</Link></li>
        <li><Link className='menu-link' href="/productos/consolas">Consolas</Link></li>
        <li><Link className='menu-link' href="/productos/monitor">Monitores</Link></li>
        <li><Link className='menu-link' href="/Nosotros">Nosotros</Link></li>
        <li><Link className='menu-link' href="/Contacto">Contacto</Link></li>
      </ul>
    </nav>
  );
}

export default NavBar;