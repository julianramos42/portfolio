import React from 'react'
import './Habilidades.css'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick'

export default function Habilidades() {
    var settings = {
      dots: true,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 3000,
      pauseOnHover: true
    };

  return (
    <div className='habilidades' id='container-habilidades'>
        <h2 className='habilidades-titulo'>Mis Habilidades</h2>
        <Slider {...settings}>
          <div className='slide-component'>
            <i class="fa-brands fa-html5 fa-beat"></i>
            <h3>HTML5</h3>
            <p>Poseo habilidades avanzadas en HTML, siendo capaz de crear y diseñar sitios web modernos y funcionales con excelente estructura y semántica.</p>
          </div>
          <div className='slide-component'>
            <i class="fa-brands fa-css3-alt fa-beat"></i>
            <h3>CSS3</h3>
            <p>Poseo la capacidad de transformar los diseños de los sitios web en experiencias visualmente atractivas y amigables para el usuario.</p>
          </div>
          <div className='slide-component'>
            <i class="fa-brands fa-square-js fa-beat"></i>
            <h3>JavaScript</h3>
            <p>Poseo un conocimiento sólido de las estructuras de datos, algoritmos y patrones de diseño utilizados en el desarrollo de aplicaciones web interactivas y dinámicas.</p>
          </div>
          <div className='slide-component'>
            <i class="fa-brands fa-react fa-spin"></i>
            <h3>React</h3>
            <p>Poseo un conocimiento profundo y habilidades avanzadas en la creación de aplicaciones web modernas y eficientes. Soy capaz de desarrollar componentes complejos y reutilizables.</p>
          </div>
          <div className='slide-component'>
            <i class="fa-brands fa-node-js fa-beat"></i>
            <h3>NodeJs</h3>
            <p>Poseo habilidades avanzadas en Node.js, Express y MongoDB para crear soluciones personalizadas utilizando estas tecnologías para garantizar una experiencia de usuario excepcional.</p>
          </div>
          <div className='slide-component'>
          <i class="fa-brands fa-git-alt fa-beat"></i>
            <h3>Git</h3>
            <p>Poseo un conocimiento sólido y habilidades avanzadas en el control de versiones de código fuente y en la colaboración en equipo.</p>
          </div>
        </Slider>
    </div>
  )
}
