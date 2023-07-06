import React, { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'
import "./Email.css"

export default function Email(){
    const form = useRef()
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [message, setMessage] = useState("")
    const [sent, setSent] = useState(false)


    const sendEmail = (e) => {
        e.preventDefault()
        if (name.length && email.length && message.length && !sent)
        {
            emailjs.sendForm('service_s077lek', 'template_mfx5vlo', form.current, 'iuwyIAY-BROG0TAeC')
            .then((result) => {
                console.log(result.text)
            }, (error) => {
                console.log(error.text)
            })
            setName("")
            setEmail("")
            setMessage("")
            setSent(true)
        }
    }

    return (
        <div className="email-container">
            {sent ? <h1 className="email-thanks">Sent, Thank You</h1> : <></>}
            <h1 className="email-title">Get In Contact</h1>
            <form ref={form} onSubmit={sendEmail} className="form-container">
                <label className="form-text">Name</label>
                <input className="input-field" type="text" name="user_name" value={name} onChange={(e) => !sent && setName(e.target.value)} placeholder='Enter Your Name'/>
                <label className="form-text">Email</label>
                <input className="input-field" type="email" name="user_email" value={email} onChange={(e) => !sent &&  setEmail(e.target.value)} placeholder='Enter Your Email'/>
                <label className="form-text">Message</label>
                <textarea className="input-field" name="message" value={message} onChange={(e) => !sent &&  setMessage(e.target.value)} placeholder='Enter Your Message Here...'/>
                <input className="submit-button" type="submit" value="Send" />
            </form>
        </div>
    )
}