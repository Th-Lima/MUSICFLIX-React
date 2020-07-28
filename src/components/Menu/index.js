import React from 'react';
import Logo from '../../assets/images/t8flix-logo.png'
import './menu.css'
import Button from '../Button';

function Menu(){
  return(
    <nav className="Menu">
      <a href="/">
         <img className="Logo" src={Logo} alt="T8FLIX Logo"></img>
      </a>
     
      <Button as="a" className="ButtonLink" href="/">
          Novo vídeo
      </Button>
    
    </nav>
  ); 
}

export default Menu;