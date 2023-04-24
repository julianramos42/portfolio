import React, { useState } from 'react'
import './Index.css'
import { useRef } from 'react'
import Home from '../Home/Home'
import Trabajos from '../Trabajos/Trabajos'
import Habilidades from '../Habilidades/Habilidades'
import About from '../About/About'
import Contacto from '../Contacto/Contacto'

export default function Index() {
  let present = useRef()
  let presentTitle = useRef()
  let container = useRef()
  let [activePresent,setactivePresent] = useState(true)

  let [selectedAnchor, setselectedAnchor] = useState('')

  setTimeout(() => {
    present.current?.classList.toggle('ease')
    presentTitle.current?.classList.toggle('easeTitle')
  }, 1500)
  
  setTimeout( () => {
    present.current?.classList.toggle('none')
    setactivePresent(false)
  }, 2500)

  return (
    <>
      {
        activePresent ? <div className='present' ref={present}>
        <h1 className='presentTitle' ref={presentTitle}>Bienvenido!</h1>
      </div> : ''
      }

      <div ref={container}>
        <Home setselectedAnchor={setselectedAnchor}/>
        { selectedAnchor === 'trabajos' && <Trabajos/> }
        { selectedAnchor === 'habilidades' && <Habilidades/> }
        { selectedAnchor === 'about' && <About/> }
        { selectedAnchor === 'contacto' && <Contacto/> }
      </div>
    </> 
  )
}