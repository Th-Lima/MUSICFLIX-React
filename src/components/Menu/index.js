import React from 'react';
import { Link } from 'react-router-dom'
import Logo from '../../assets/images/t8flix-logo.png'
import './menu.css'
import Button from '../Button';

function Menu(){
  return(
    <nav className="Menu">
      <Link to="/">
         <img className="Logo" src={Logo} alt="T8FLIX Logo"></img>
      </Link>
     
      <Button as={Link} className="ButtonLink" to="/cadastro/video">
          Novo vídeo
      </Button>
    </nav>
  ); 
}

export default Menu;