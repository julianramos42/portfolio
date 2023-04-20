import React from 'react'
import './Index.css'
import { useRef } from 'react'
import Home from '../Home/Home'

export default function Index() {
  let present = useRef()
  let presentTitle = useRef()
  let container = useRef()

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
        <h1 className='presentTitle' ref={presentTitle}>Julián Ramos</h1>
      </div>

      <div ref={container}>
        <Home/>
      </div>
    </> 
  )
}