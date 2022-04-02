import React from 'react'
import './about.css'
import ME from '../../assets/me-about.jpg'
import {FaAward} from "react-icons/fa"
import {FiUsers} from "react-icons/fi"


const About = () => {
  return (
    <section id='about'>
      <h5>Mi información</h5>
      <h2>Sobre mi</h2>
      <div className='container about__container'>
        <div className='about__me'>
          <div className='about__me-image'>
            <img src={ME} alt="About Image"/>
          </div>
        </div>

        <div className='about__content'>
          <div className='about__cards'>
            <article className='about__card'>
              <FaAward className='about__icon'/>
              <h5>Experience</h5>
              <small>1+ año trabajando</small>
            </article>

            <article className='about__card'>
              <FiUsers className='about__icon'/>
              <h5>Clientes</h5>
              <small>1+ A nivel mundial</small>
            </article>

            <article className='about__card'>
              <FiUsers className='about__icon'/>
              <h5>Proyectos</h5>
              <small>10+ Completos</small>
            </article>
          </div>

          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Architecto totam laborum ex consequuntur perferendis dolorum vitae pariatur eos asperiores illo, facilis itaque odio quae sequi sit natus atque minus aliquid.</p>

          <a href='#contact' className='btn btn-primary'>Hablemos</a>
        </div>
      </div>
    </section>
  )
}

export default About