import { useEffect, useRef, useState } from 'react'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'
import emailjs from '@emailjs/browser'
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'

const Contact = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    const refForm = useRef()
    
    useEffect(() => {
        setTimeout(() => {
           return setLetterClass('text-animate-hover')
       }, 3000)
   }, [])

   const sendEmail = (e) => {
    e.preventDefault()

    emailjs.sendForm(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        refForm.current,
        process.env.REACT_APP_PUBLIC_KEY
    )
    .then(
        () => {
            alert('Message sent!')
            window.location.reload(false)
        },
        () => {
            alert('Failed to send the message, please try again')
        }
    )
   }
    return (
        <>
            <div className='container contact-page'>
                <div className='text-zone'>
                    <h1>
                        <AnimatedLetters 
                            letterClass={letterClass}
                            strArray={['C','o','n','t','a','c','t',' ','m','e']}
                            idx={15}
                        />
                    </h1>
                    <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat 
                    non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                    <div className='contact-form'>
                        <form ref={refForm} onSubmit={sendEmail}>
                            <ul>
                                <li className='half'>
                                    <input type="text" name="name" placeholder="Name" required />
                                    
                                </li>
                                <li className='half'>
                                    <input type="email" name="email" placeholder="Email" required />
                                </li>
                                <li>
                                    <input
                                    placeholder="Subject"
                                    type="text"
                                    name="subject"
                                    required 
                                    />
                                </li>
                                <li>
                                    <textarea
                                    placeholder="Message"
                                    name="message"
                                    required
                                    ></textarea>
                                </li>
                                <li>
                                    <input type="submit" className='flat-button' value="SEND"/>
                                </li>
                            </ul>
                        </form>
                    </div>
                </div>
                <div className='info-map'>
                    Raman Zatsarenko,
                    <br/>
                    United States,
                    <br/>
                    Rochester Institute of Technology <br />
                    Rochester, New York <br />
                    <span>rzv090701@gmail.com</span>
                </div>
                <div className='map-wrap'>
                    <MapContainer center={[43.08501499089588, -77.67162084753365]} zoom={13}>
                    <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                    <Marker position={[43.08501499089588, -77.67162084753365]}>
                        <Popup>Come check this place out, I study here</Popup>
                    </Marker>
                    </MapContainer>
                </div>
            </div>
            
        </>
    )
}

export default Contact