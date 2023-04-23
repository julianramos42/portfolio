import React from 'react'
import './Contacto.css'
import persona from '../../images/persona3.png'
import emailjs from '@emailjs/browser'
import { useRef } from 'react'
import toast, { Toaster } from 'react-hot-toast'

export default function Contacto() {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_kqgic3o', 'template_leehb6s', form.current, '0YvX8r0UZHozF6N1s')
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
