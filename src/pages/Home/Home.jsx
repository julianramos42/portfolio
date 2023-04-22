import React from 'react'
import './Home.css'
import logo from '../../images/logo.png'
import { Link as Anchor } from 'react-router-dom'
import { useState } from 'react'

export default function Home({setselectedAnchor}) {
    let [anchorActive, setAnchorActive] = useState('')

    function changeActive(e) {
        setAnchorActive(e.target.id)
        setselectedAnchor(e.target.id)
    }

    return (
        <div className='home'>
            <div className='myInfo'>
                <img src={logo} className='logo' alt='logo' />
                <section className='name'>
                    <h1>Julián</h1>
                    <h1>Ramos.</h1>
                    <div className='barrita'></div>
                </section>
                <nav className='redes'>
                    <Anchor to={'https://api.whatsapp.com/send/?text=Hola Julian, me gustaria que tengamos una reunion.&phone=541150234561'} target='_blank'><i className="fa-brands fa-whatsapp fa-xl"></i></Anchor>
                    <Anchor to={'https://github.com/julianramos42'} target='_blank'><i className="fa-brands fa-github fa-xl"></i></Anchor>
                    <Anchor to={'https://www.linkedin.com/in/julian-ramos42/'} target='_blank'><i className="fa-brands fa-linkedin-in fa-xl"></i></Anchor>
                </nav>
            </div>
            <div className='techInfo'>
                <nav className='anchors'>
                    <div>
                        <Anchor className={anchorActive === 'trabajos' && 'active'} id='trabajos' onClick={changeActive}>Trabajos</Anchor>
                        <div className={anchorActive === 'trabajos' ? 'puntito' : 'none'}></div>
                    </div>
                    <div>
                        <Anchor className={anchorActive === 'habilidades' && 'active'} id='habilidades' onClick={changeActive}>Habilidades</Anchor>
                        <div className={anchorActive === 'habilidades' ? 'puntito' : 'none'}></div>
                    </div>
                    <div>
                        <Anchor className={anchorActive === 'about' && 'active'} id='about' onClick={changeActive}>Sobre Mí</Anchor>
                        <div className={anchorActive === 'about' ? 'puntito' : 'none'}></div>
                    </div>
                    <div><i className={anchorActive === '' ? 'fa-solid fa-arrow-left fa-beat' : 'none'}></i></div>
                </nav>
                <div className='techText'>
                    <p>- Introducción</p>
                    <div>
                        <h2 className='techDescription'>Desarrollador Web Full Stack – MERN</h2>
                        <h2 className='techDescription'>MongoDB, Express, React, NodeJs</h2>
                    </div>
                    <p>Si estas buscando un desarrollador, me gustaría que estemos en contacto y así ayudarnos mutuamente a crecer</p>
                </div>
                <div className='contactMe'>
                    <h3>Contactame</h3>
                    <i className="fa-solid fa-arrow-right"></i>
                </div>
            </div>
        </div>
    )
}
