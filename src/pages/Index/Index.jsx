import React, { useState } from 'react'
import './Index.css'
import { useRef } from 'react'
import Home from '../Home/Home'
import Trabajos from '../Trabajos/Trabajos'
import Habilidades from '../Habilidades/Habilidades'
import About from '../About/About'

export default function Index() {
  let present = useRef()
  let presentTitle = useRef()
  let container = useRef()

  let [selectedAnchor, setselectedAnchor] = useState('')

  setTimeout(() => {
    present.current?.classList.toggle('ease')
    presentTitle.current?.classList.toggle('easeTitle')
  }, 1500)
  
  setTimeout( () => {
    present.current?.classList.toggle('none')
  }, 2500)

  return (
    <>
      <div className='present' ref={present}>
        <h1 className='presentTitle' ref={presentTitle}>Elegi el idioma</h1>
      </div>

      <div ref={container}>
        <Home setselectedAnchor={setselectedAnchor}/>
        { selectedAnchor === 'trabajos' && <Trabajos/> }
        { selectedAnchor === 'habilidades' && <Habilidades/> }
        { selectedAnchor === 'about' && <About/> }
      </div>
    </> 
  )
}