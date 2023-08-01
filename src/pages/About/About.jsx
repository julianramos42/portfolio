import React from 'react'
import './About.css'
import persona from '../../images/persona2.webp'

export default function About() {
  return (
    <div className='about' id='container-about'>
        <div className='about-text'>
          <h1>Quien soy</h1>
          <p>Mi nombre es Julián y soy Desarrollador Web Full Stack – MERN, cuento con experiencia en varias tecnologías, las más importantes son HTML/CSS, JavaScript, React, React Native, Redux, NodeJs, MongoDB, Express y Git/Github.</p>
          <p>Así como tengo habilidades técnicas, también están presentes las blandas, tengo una muy buena comunicación, muchísima paciencia, adaptabilidad y la capacidad de analizar y resolver.</p>
          <p>En el tiempo que llevo desarrollando, trabajé en distintos proyectos tanto de manera individual como en equipo contando con la metodología agile (Scrum) y pude destacarme como una persona organizada y proactiva, ya que siempre estoy en constante desarrollo y aprendizaje, así me adapto a las tecnologías que siempre están actualizándose.</p>
        </div>
        <div className='about-img'><img src={persona} alt='persona'/></div>
    </div>
  )
}
