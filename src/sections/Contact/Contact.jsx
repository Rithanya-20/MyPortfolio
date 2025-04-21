import React, { useState } from 'react'
import styles from './ContactStyles.module.css'
function Contact() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
  return (
    <section id='contact' className={styles.container}>
        <h1 className='sectionTitle'>Contact</h1>

        <form action="https://formspree.io/f/mrbpldre" method='post'>
            <div className='formGroup'>
            <label htmlFor="name" hidden>Name</label>
            <input type="text"
            name='name'
            id='name'
            placeholder='Name...'
            required
            value={name}
            onChange={(e) => setName(e.target.value)} />
             </div>
           
             <div className='formGroup'>
             <label htmlFor="email" hidden>Email</label>
           <input type="email"
            name='email'
            id='email'
            placeholder='Email...'
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)} />
            </div>

            <div className='formGroup'>
            <label htmlFor="message" hidden>Message</label>
            <textarea type="text"
            name='message'
            id='message'
            placeholder='Message...'
            required
            value={message}
            onChange={(e) => setMessage(e.target.value)} />
            </div>

            <input type='submit'
            className='hover btn'
            value="Submit"/>

           
        </form>
    </section>
  )
}

export default Contact