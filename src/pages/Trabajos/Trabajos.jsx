import React from 'react'
import './Trabajos.css'
import { Link as Anchor } from 'react-router-dom'

export default function Trabajos() {
  return (
    <div className='trabajos' id='container-trabajos'>
      <h2>Trabajos</h2>
      <div>
        <section className='card lance'>
          <div className='card-text'>
            <h2>Lance</h2>
            <p>
              Proyecto en conjunto que combina tecnologias como HTML/CSS, Javascript, API REST, React, Nodejs, MongoDb, Express, Git y Github.
            </p>
            <div className='card-icons'>
              <Anchor to={'https://github.com/julianramos42/proyecto-final-front'} target='_blank'>
                <div>
                  <i className="fa-brands fa-github fa-xl"></i>
                  <h5>Ver Codigo</h5>
                </div>
              </Anchor>
              <Anchor to={'https://lance-app.vercel.app/'} target='_blank'>
                <div>
                  <i class="fa-brands fa-chrome fa-xl"></i>
                  <h5>Ver Página</h5>
                </div>
              </Anchor>
            </div>
          </div>
        </section>
        <section className='card minga'>
          <div className='card-text'>
            <h2>Minga</h2>
            <p>
              Proyecto en conjunto que combina tecnologias como HTML/CSS, Javascript, API REST, React, Nodejs, MongoDb, Express, Git y Github.
            </p>
            <div className='card-icons'>
              <Anchor to={'https://github.com/julianramos42/minga-front'} target='_blank'>
                <div>
                  <i className="fa-brands fa-github fa-xl"></i>
                  <h5>Ver Codigo</h5>
                </div>
              </Anchor>
              <Anchor to={'https://jr-minga-front.vercel.app/'} target='_blank'>
                <div>
                  <i class="fa-brands fa-chrome fa-xl"></i>
                  <h5>Ver Página</h5>
                </div>
              </Anchor>
            </div>
          </div>
        </section>
        <section className='card petshop'>
          <div className='card-text'>
            <h2>PetShop</h2>
            <p>
              Proyecto en conjunto que combina tecnologias como HTML/CSS, Javascript y API REST.
            </p>
            <div className='card-icons'>
              <Anchor to={'https://github.com/julianramos42/petshop'} target='_blank'>
                <div>
                  <i className="fa-brands fa-github fa-xl"></i>
                  <h5>Ver Codigo</h5>
                </div>
              </Anchor>
              <Anchor to={'https://julianramos42.github.io/petshop/'} target='_blank'>
                <div>
                  <i class="fa-brands fa-chrome fa-xl"></i>
                  <h5>Ver Página</h5>
                </div>
              </Anchor>
            </div>
          </div>
        </section>
        <section className='card amazing'>
          <div className='card-text'>
            <h2>Amazing Events</h2>
            <p>
              Proyecto que combina tecnologias como HTML/CSS, Javascript y API REST.
            </p>
            <div className='card-icons'>
              <Anchor to={'https://github.com/julianramos42/amazingevents'} target='_blank'>
                <div>
                  <i className="fa-brands fa-github fa-xl"></i>
                  <h5>Ver Codigo</h5>
                </div>
              </Anchor>
              <Anchor to={'https://julianramos42.github.io/amazingevents/'} target='_blank'>
                <div>
                  <i class="fa-brands fa-chrome fa-xl"></i>
                  <h5>Ver Página</h5>
                </div>
              </Anchor>
            </div>
          </div>
        </section>
        <section className='card screamers'>
          <div className='card-text'>
            <h2>Screamers</h2>
            <p>
              Proyecto en conjunto el cual combina varias tecnologias como HTML/CSS, Javascript y VueJs.
            </p>
            <div className='card-icons'>
              <Anchor to={'https://github.com/julianramos42/screamers'} target='_blank'>
                <div>
                  <i className="fa-brands fa-github fa-xl"></i>
                  <h5>Ver Codigo</h5>
                </div>
              </Anchor>
              <Anchor to={'https://julianramos42.github.io/screamers/'} target='_blank'>
                <div>
                  <i class="fa-brands fa-chrome fa-xl"></i>
                  <h5>Ver Página</h5>
                </div>
              </Anchor>
            </div>
          </div>
        </section>
        <section className='card sunflower'>
          <div className='card-text'>
            <h2>Sunflower</h2>
            <p>
              Proyecto que combina tecnologias como HTML y CSS.
            </p>
            <div className='card-icons'>
              <Anchor to={'https://github.com/julianramos42/sunflower'} target='_blank'>
                <div>
                  <i className="fa-brands fa-github fa-xl"></i>
                  <h5>Ver Codigo</h5>
                </div>
              </Anchor>
              <Anchor to={'https://julianramos42.github.io/sunflower/index.html'} target='_blank'>
                <div>
                  <i class="fa-brands fa-chrome fa-xl"></i>
                  <h5>Ver Página</h5>
                </div>
              </Anchor>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}