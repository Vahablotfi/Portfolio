import React from 'react'
import Loader from 'react-loaders'
import { useEffect, useState } from 'react'
import spiceShop from '../../assets/images/spiceShop.gif'
import mealSharing from '../../assets/images/mealSharing.gif'
import AnimatedLetters from '../../components/AnimatedLetter/animatedLetters.js'
import './aboutPageStyles.scss'

const AboutPage = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    setTimeout(() => {
      return setLetterClass('text-animate-hover')
    }, 3000)
  }, [])
  return (
    <>
      <div className="container contact-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
              idx={15}
            />
            <p>
              I am a highly motivated full-stack developer based in Copenhagen.
              I have completed a Full-Stack Developer bootcamp with{' '}
              <a
                className="link"
                target="_blank"
                rel="noreferrer"
                href="https://www.hackyourfuture.dk/"
              >
                Hack Your Future
              </a>{' '}
              and am ready for my next challenge.
            </p>
            <p>
              I have a solid practical knowledge of JavaScript, React, Node JS,
              HTML and CSS and am familiar with Git and Github. I am able to
              collaborate efficiently within a team, reviewing code and helping
              improve applications. I currently volunteer for Hack Your Future
              Denmark reviewing projects for newer students, including providing
              feedback and guidance on their code.
            </p>
          </h1>
        </div>

        <div className="map-wrap">
          <div className="project-1">
            <img className="gif" src={spiceShop} alt="" />
            <div class="text-container">
              <h4>This is web-shop project</h4>
              <p>
                This is a full stack project where 11 people created a clean,
                mobile-friendly webshop, using React js and Express js, as our
                final project to graduate from the bootcamp. The purpose of the
                project was to reinforce our knowledge of full stack development
                and work in a team within a scrum environment.
              </p>
              <div className="source-btn">
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://staging-webshop-class20-fp.herokuapp.com/"
                >
                  <button
                    className="flat-button demo-btn"
                    data-hover="Since Heroku stopped providing free tier, this link does not work. I am working on another solution, and will make the project live again"
                  >
                    demo
                  </button>
                </a>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://github.com/HackYourFuture-CPH/fp-class20"
                >
                  <button className="flat-button">Source</button>
                </a>
              </div>
            </div>
          </div>
          <div className="project-1">
            <img className="gif" src={mealSharing} alt="" />
            <div class="text-container">
              <h4>This is meal-sharing project</h4>
              <p>
                Created a clean, booking website, using react js, and expressjs,
                deployed in heroku as individual projekt.
              </p>
              <div className="source-btn">
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://meal-sharing-hyf.up.railway.app/"
                >
                  <button
                    className="flat-button"
                  >
                    demo
                  </button>
                </a>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://github.com/Vahablotfi/meal-sharing"
                >
                  <button className="flat-button">Source</button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default AboutPage


