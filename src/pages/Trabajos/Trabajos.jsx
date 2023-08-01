import React from 'react'
import './Trabajos.css'
import { Link as Anchor } from 'react-router-dom'
import data from '../../data.json'

export default function Trabajos() {
  return (
    <div className='trabajos' id='container-trabajos'>
      <h2>Trabajos</h2>
      <div>
        {
          data.map((obj, i) => {
            return <section className={'card ' + obj.class} key={i}>
              <div className='card-text'>
                <h2>{obj.titulo}</h2>
                <p>{obj.descripcion}</p>
                <div className='card-icons'>
                  <Anchor to={obj.github} target='_blank'>
                    <div>
                      <i className="fa-brands fa-github fa-xl"></i>
                      <h5>Ver Codigo</h5>
                    </div>
                  </Anchor>
                  <Anchor to={obj.pagina} target='_blank'>
                    <div>
                      <i className="fa-brands fa-chrome fa-xl"></i>
                      <h5>Ver Página</h5>
                    </div>
                  </Anchor>
                </div>
              </div>
            </section>
          })
        }
      </div>
    </div>
  )
}