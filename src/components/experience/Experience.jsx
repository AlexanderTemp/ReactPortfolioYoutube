import React from 'react'
import './experience.css'
import {BsPatchCheckFill} from 'react-icons/bs'

const Experience = () => {
  return (
    <section id='experience'>
      <h5>Que Skills tengo</h5>
      <h2>Mi experiencia</h2>

      <div className='container experience__container'>
        <div className='experience__frontend'>
          <h3>Desarrollo Frontend</h3>
          <div className='experience__content'>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <h4>HTML</h4>
              <small className='text-light'>Experto</small>
            </article>

            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <h4>CSS</h4>
              <small className='text-light'>Principiante</small>
            </article>

            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <h4>JavaScript</h4>
              <small className='text-light'>Principiante</small>
            </article>

            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <h4>Bootstrap</h4>
              <small className='text-light'>Principiante</small>
            </article>

            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <h4>Tailwind</h4>
              <small className='text-light'>Que es eso</small>
            </article>

            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <h4>React</h4>
              <small className='text-light'>Principiante</small>
            </article>
          </div>
        </div>

        {/* Fin del frontend */}

        <div className='experience__backend'>
          <h3>Desarrollo Backend</h3>
          <div className='experience__content'>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <h4>Node JS</h4>
              <small className='text-light'>Experto</small>
            </article>

            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <h4>MongoDB</h4>
              <small className='text-light'>Principiante</small>
            </article>

            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <h4>PHP</h4>
              <small className='text-light'>Principiante</small>
            </article>

            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <h4>MySQL</h4>
              <small className='text-light'>Principiante</small>
            </article>

            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <h4>Python</h4>
              <small className='text-light'>Que es eso</small>
            </article>

            
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience