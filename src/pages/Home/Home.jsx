import React from 'react'
import './Home.css'
import logo from '../../images/logo.png'
import { Link as Anchor } from 'react-router-dom'
import { useState } from 'react'

export default function Home() {
    let [anchorActive, setAnchorActive] = useState('')

    function changeActive(e) {
        setAnchorActive(e.target.id)
    }

    return (
        <div className='home'>
            <div className='myInfo'>
                <img src={logo} className='logo' />
                <section className='name'>
                    <h1>Julián</h1>
                    <h1>Ramos.</h1>
                    <div className='barrita'></div>
                </section>
                <nav className='redes'>
                    <Anchor to={''}><i className="fa-brands fa-whatsapp fa-xl"></i></Anchor>
                    <Anchor to={''}><i className="fa-brands fa-linkedin-in fa-xl"></i></Anchor>
                </nav>
            </div>
            <div className='techInfo'>
                <nav className='anchors'>
                    <div>
                        <Anchor className={anchorActive === 'trabajos' && 'active'} id='trabajos' onClick={changeActive}>Trabajos</Anchor>
                        <div className={anchorActive === 'trabajos' ? 'puntito' : 'none'} id='trabajos'></div>
                    </div>
                    <div>
                        <Anchor className={anchorActive === 'habilidades' && 'active'} id='habilidades' onClick={changeActive}>Habilidades</Anchor>
                        <div className={anchorActive === 'habilidades' ? 'puntito' : 'none'} id='trabajos'></div>
                    </div>
                    <div>
                        <Anchor className={anchorActive === 'about' && 'active'} id='about' onClick={changeActive}>Sobre Mí</Anchor>
                        <div className={anchorActive === 'about' ? 'puntito' : 'none'} id='trabajos'></div>
                    </div>
                    <div><i className={anchorActive === '' ? 'fa-solid fa-arrow-left fa-beat' : 'none'}></i></div>
                </nav>
                <h2 className='techDescription'>lorem lorem loremlorem lorem lorem lorem loremlorem lorem lorem lorem loremlorem lorem</h2>
                <div className='contactMe'>
                    <h3>Contactame</h3>
                    <i className="fa-solid fa-arrow-right"></i>
                </div>
            </div>
        </div>
    )
}
