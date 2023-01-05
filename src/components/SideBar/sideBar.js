import './sideBarStyles.scss'
import { Link, NavLink } from 'react-router-dom'
import React from 'react'
import LogoS from '../../assets/images/myLogo-s.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'
import { faHome, faUser, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'

const SideBar = () => {
  const [ burgerNavClass, setBurgerNavClass ] = useState( "burger-nav unClicked" );
  const [burgerNavActive, setBurgerNavActive] = useState(
    'navigation-bar-hidden'
  )
  const [burgerNavIsClicked, setBurgerNavIsClicked] = useState(false)

  
  const burgerNavigation = () => {
    if (!burgerNavIsClicked) {
      setBurgerNavClass( 'burger-nav clicked' )
      setBurgerNavActive('navigation-bare')
      // setBurgerNavIsClicked(true)
    } else {
      setBurgerNavClass( 'burger-nav unClicked' )
      setBurgerNavActive('navigation-bar-hidden')
      setBurgerNavIsClicked(false)
    }
    setBurgerNavIsClicked(!burgerNavIsClicked)
  }

  return (
    // <div className="navigation-bar">
    <div className={burgerNavActive}>
      <div className="burger-menu" onClick={burgerNavigation}>
        {/* <span className="burger-menu-bars"></span>
        <span className="burger-menu-bars"></span>
        <span className="burger-menu-bars"></span> */}
        <hr className={burgerNavClass}></hr>
        <hr className={burgerNavClass}></hr>
        <hr className={burgerNavClass}></hr>
      </div>
      <div className="nav-bar">
        {/* <div className={burgerNavActive}> */}
        <Link className="logo" to="/Portfolio">
          <img src={LogoS} alt="logo" />
        </Link>
        <nav>
          <NavLink exact="true" activeclassname="active" to="/Portfolio">
            <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
          </NavLink>
          <NavLink
            exact="true"
            activeclassname="active"
            className="about-link"
            to="/about"
          >
            <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
          </NavLink>
          <NavLink
            exact="true"
            activeclassname="active"
            className="contact-link"
            to="/contact"
          >
            <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
          </NavLink>
        </nav>
        <ul>
          <li>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.linkedin.com/in/vahablotfi/"
            >
              <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e" />
            </a>
          </li>
          <li>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://github.com/Vahablotfi"
            >
              <FontAwesomeIcon icon={faGithub} color="#4d4d4e" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  )
}
export default SideBar