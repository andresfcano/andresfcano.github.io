import { useEffect, useState } from 'react'
import Loader from 'react-loaders'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import { useRef } from 'react'
import emailjs from '@emailjs/browser'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'

const Contact = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const form = useRef()

  useEffect(() => {
    setTimeout(() => {
      return setLetterClass('text-animate-hover')
    }, 3000)
  }, [])

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs
      .sendForm('service_kcysgkb', 'template_c8v4p0o', form.current, 'phQaRqEuINksq188c')
      .then(
        () => {
          alert('Message successfully sent!')
          form.current.reset()
        },
        () => {
          alert('Failed to send the message, please try again')
        }
      )
  }

  return (
    <>
      <div className="container contact-page">
        <div className="text-zone">
          <h1>
          <span className="contact-title">
            <AnimatedLetters
              letterClass={letterClass}
              strArray={"Contact me at:".split("")}
              idx={15}
            />
            <br />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={"andrescano30@gmail.com".split("")}
              idx={5}
            />
          </span>
          </h1>
          <p>
            Or leave me a message below to get in touch!
          </p>
          <div className="contact-form">
            <form ref={form} onSubmit={sendEmail}>
              <ul>
                <li className="half">
                  <input placeholder="Name" type="text" name="name" required />
                </li>
                <li className="half">
                  <input
                    placeholder="Email"
                    type="email"
                    name="email"
                    required
                  />
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
                  <input type="submit" className="flat-button" value="SEND" />
                </li>
              </ul>
            </form>
          </div>
        </div>
        <div className="info-map">
          Andres Felipe Cano Botero
          <br />
          Data Scientist | Researcher
          <br />
          Conway, MA. 01341. USA <br />
          <br />
          <span>andrescano30@gmail.com</span>
        </div>
        <div className="map-wrap">
          <MapContainer center={[42.5082, -72.6987]} zoom={13}>
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            <Marker position={[42.5082, -72.6987]}>
              <Popup>Andres lives here, come over to talk about soccer, tennis, chess and calisthenics :)</Popup>
            </Marker>
          </MapContainer>
        </div>
      </div>
      <Loader type="ball-scale-ripple-multiple" />
    </>
  )
}

export default Contact
