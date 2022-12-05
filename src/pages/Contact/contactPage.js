import React from 'react'
import Loader from 'react-loaders'
import { useEffect, useState, useRef } from 'react'
import { MapContainer, TileLayer, Circle } from 'react-leaflet'
import AnimatedLetters from '../../components/AnimatedLetter/animatedLetters.js'
import emailjs from '@emailjs/browser'
import './contactPageStyles.scss'

const Contact = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const refForm = useRef()

  const center = [55.69, 12.54]
  const fillBlueOptions = { fillColor: 'blue' }

  useEffect(() => {
    setTimeout(() => {
      return setLetterClass('text-animate-hover')
    }, 3000)
  }, [])

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs
      .sendForm(
        'service_xnhk05k',
        'template_qux40ug',
        refForm.current,
        'R_o5HGHZar99rCC95'
      )
      .then(
        () => {
          alert('Message successfully sent!')
          window.location.reload(false)
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
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'm', 'e']}
              idx={15}
            />
          </h1>
          <p>
            I have experience working in an agile environment (using Jira) to
            make a product as a team. Being active, sociable and open to new
            experiences means I am a good long term investment for your company.
          </p>
          <p>
            I have a solid practical knowledge of JavaScript, React, Node JS,
            HTML and CSS and am familiar with Git and Github. I am able to
            collaborate efficiently within a team, reviewing code and helping
            improve applications. I currently volunteer for Hack Your Future
            Denmark reviewing projects for newer students, including providing
            feedback and guidance on their code.
          </p>
          <p>
            Do you want to hear more about me?
            <br />
            Don't hesitate to send me an e-mail.
            <span>&#128522;</span>
          </p>
          <div className="contact-form">
            <form ref={refForm} onSubmit={sendEmail}>
              <ul>
                <li className="half">
                  <input type="text" name="name" placeholder="Name" required />
                </li>
                <li className="half">
                  <input
                    type="email"
                    name="email"
                    placeholder="e-mail"
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
          Vahab Lotfi
          <br />
          Copenhagen - Denmark
          <br />
          København - N 2200 <br />
        </div>
        <div className="map-wrap">
          <MapContainer
            center={[55.69, 12.54]}
            zoom={14}
            scrollWheelZoom={false}
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Circle
              center={center}
              pathOptions={fillBlueOptions}
              radius={700}
            />
          </MapContainer>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default Contact


