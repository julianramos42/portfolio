import React, { useEffect } from 'react'
import './Index.css'
import { useRef } from 'react'

export default function Index() {
  let present = useRef()
  let presentTitle = useRef()

  setTimeout(() => {
    present.current?.classList.toggle('ease')
    presentTitle.current?.classList.toggle('easeTitle')
  }, 1500)

  setTimeout( () => {
    present.current?.classList.toggle('none')
  }, 3000)

  return (
    <>
      <div className='present' ref={present}>
        <h1 className='presentTitle' ref={presentTitle}>Julián Ramos</h1>
      </div>
      <div>
        <nav>
          <a>a</a>
          <a>a</a>
          <a>a</a>
        </nav>
      </div>
    </>
  )
}