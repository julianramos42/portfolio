import React from 'react'
import './Contacto.css'
import persona from '../../images/persona3.webp'
import emailjs from '@emailjs/browser'
import { useRef } from 'react'
import toast, { Toaster } from 'react-hot-toast'

export default function Contacto() {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm(process.env.REACT_APP_SERVICE_ID, process.env.REACT_APP_TEMPLATE_ID, form.current, process.env.REACT_APP_PUBLIC_KEY)
            .then((result) => {
                if (result.text === 'OK') {
                    toast.success('Mensaje Enviado')
                    e.target.reset()
                }
            }, (error) => {
                console.log(error.text);
            });
    };

    return (
        <div className='contacto' id='container-contacto'>
            <div className='contacto-img'>
                <img src={persona} alt='persona' />
            </div>
            <div className='contacto-text'>
                <h3>Contáctame</h3>
                <form ref={form} onSubmit={sendEmail}>
                    <input autoComplete='off' type="text" name="user_name" placeholder='Nombre' />
                    <input autoComplete='off' type="email" name="user_email" placeholder='Email' />
                    <textarea name="message" placeholder='Mensaje' />
                    <input autoComplete='off' type="submit" value="Send" className='submit' />
                </form>
            </div>
            <Toaster />
        </div>
    )
}
