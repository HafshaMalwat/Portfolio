import { useEffect, useState } from 'react'
import Loader from 'react-loaders'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import { useRef } from 'react'
import emailjs from '@emailjs/browser'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'
import Sidebar from '../SideBar'
import Layout from '../Layout'

const Contact = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  // const form = useRef()
  const form = document.querySelector("form");
  

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setLetterClass('text-animate-hover');
    }, 3000);
  
    
    return () => clearTimeout(timeoutId);
  }, []);

  emailjs.init("XabGp7H0-P3FjxiGS");

  
  function sendEmail(event) {
    event.preventDefault();
    emailjs
      .sendForm("service_7m1n7dj", "template_ndvayt6", form)
      .then(
        function (response) {
          console.log("Email sent successfully!", response);
          alert('Message successfully sent!', response)
          window.location.reload(false)
          
        },
        function (error) {
          console.log("Failed to send email!", error);
          alert('Failed to send the message, please try again', error)
        }
      );
  }

 
  

  return (
    <>
    <Layout />
      <div className="container contact-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'm', 'e']}
              idx={15}
            />
          </h1>
          <p>
            I am interested in freelance opportunities - especially on ambitious
            or large projects. However, if you have any other requests or
            questions, don't hesitate to contact me using below form either.
          </p>
          <div className="contact-form">
            <form onSubmit={sendEmail}>
              <ul>
                <li className="half">
                  <input placeholder="Name" id='name' type="text" name="name" required />
                </li>
                <li className="half">
                  <input
                    placeholder="Email"
                    id='email'
                    type="email"
                    name="email"
                    required
                  />
                </li>
                <li>
                  <input
                    placeholder="Subject"
                    id='subject'
                    type="text"
                    name="subject"
                    required
                  />
                </li>
                <li>
                  <textarea
                    placeholder="Message"
                    id='message'
                    name="message"
                    required
                  ></textarea>
                </li>
                <li>
                  <input type="submit" onClick={sendEmail} className="flat-button" value="SEND" />
                </li>
              </ul>
            </form>
          </div>
        </div>
        <div className="info-map">
          Husain Malwat,
          <br />
          Hostel,
          <br />
          IIT Gandhinagar <br />
          Gujarat, India <br />
          <br />
          <span>husainmalwat@iitgn.ac.in</span>
        </div>
        <div className="map-wrap">
          <MapContainer center={[44.96366, 19.61045]} zoom={5} language="en">
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            <Marker position={[23.2199, 72.6847]}>
              <Popup>Husain lives here, come over for a cup of coffee :)</Popup>
            </Marker>
          </MapContainer>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )

  
}

export default Contact
