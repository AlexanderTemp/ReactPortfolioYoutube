import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/me.png'
import HeaderSocials from './HeaderSocials'

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hola Yo soy</h5>
        <h1>Alexander Nina</h1>
        <h5 className="text-light">Aprendiz de React</h5>
        <CTA/>
        <HeaderSocials/>
        <div className="me">
          <img src={ME} alt="me"/>
        </div>
        <a href='#contact' className="scroll__down">Bajar</a>
      </div>
    </header>
  )
}

export default Header