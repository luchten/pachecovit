import React from 'react'
import '../styles/mainMenu.css'
import { Link } from 'gatsby'

export default function MainMenu() {
  return (
    <div className='main-menu'>
        <Link to='/'><img src="pachecovit/imagespachecovit1.svg" alt="" /></Link>        
        <div className="main-menu-links">
            <Link to='/'>HOME</Link>
            <Link to='/'>VÍDEOS</Link>
            <Link to='/noticias'>NOTÍCIAS</Link>
        </div>
    </div>
  )
}
