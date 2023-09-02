import {useState} from 'react'
import {Link, withRouter, useLocation} from 'react-router-dom'

import {AiFillCloseCircle} from 'react-icons/ai'
import {MdOutlinePlaylistPlay} from 'react-icons/md'

import './index.css'

const MobileHeader = props => {
  const [isMenuClicked, onToggleMenuBar] = useState(false)

  const {match} = props
  const {params} = match
  const {stateId} = params

  const path = useLocation().pathname

  let applyMobileHomeStyle
  if (path === '/' || path === `/state/${stateId}`) {
    applyMobileHomeStyle =
      'apply-mobile-navbar-menu-card-content-card-home-item-style'
  } else {
    applyMobileHomeStyle = null
  }

  let applyMobileVaccinationStyle
  if (path === '/vaccination') {
    applyMobileVaccinationStyle =
      'apply-mobile-navbar-menu-card-content-card-vaccination-item-style'
  } else {
    applyMobileVaccinationStyle = null
  }

  let applyMobileAboutStyle
  if (path === '/about') {
    applyMobileAboutStyle =
      'apply-mobile-navbar-menu-card-content-card-about-item-style'
  } else {
    applyMobileAboutStyle = null
  }

  let applyDesktopHomeStyle
  if (path === '/' || path === `/state/${stateId}`) {
    applyDesktopHomeStyle = 'apply-desktop-navbar-menu-card-home-item-style'
  } else {
    applyDesktopHomeStyle = null
  }

  let applyDesktopVaccinationStyle
  if (path === '/vaccination') {
    applyDesktopVaccinationStyle =
      'apply-desktop-navbar-menu-card-vaccination-item-style'
  } else {
    applyDesktopVaccinationStyle = null
  }

  let applyDesktopAboutStyle
  if (path === '/about') {
    applyDesktopAboutStyle = 'apply-desktop-navbar-menu-card-about-item-style'
  } else {
    applyDesktopAboutStyle = null
  }

  const onShowMobileMenuCard = () => {
    onToggleMenuBar(true)
  }

  const onCloseMobileMenuCard = () => {
    onToggleMenuBar(false)
  }

  return (
    <nav className="mobile-navbar">
      <div className="mobile-navbar-main-card">
        <Link to="/" className="navbar-link-item">
          <h1 className="navbar-header-text">
            COVID19<span className="navbar-header-text-span">INDIA</span>
          </h1>
        </Link>
        <div className="mobile-navbar-header-card">
          <button
            className="mobile-navbar-header-card-button"
            type="button"
            onClick={onShowMobileMenuCard}
          >
            <MdOutlinePlaylistPlay className="mobile-navbar-header-card-button-icon" />
          </button>
          <ul className="desktop-navbar-menu-card">
            <li className="desktopNavbarMenuCardListItemOne">
              <Link to="/" className="header-list-link-item">
                <button
                  className={`desktop-navbar-menu-card-item ${applyDesktopHomeStyle}`}
                  type="button"
                >
                  Home
                </button>
              </Link>
            </li>
            <li className="desktopNavbarMenuCardListItemTwo">
              <Link to="/vaccination" className="header-list-link-item">
                <button
                  className={`desktop-navbar-menu-card-item ${applyDesktopVaccinationStyle}`}
                  type="button"
                >
                  Vaccination
                </button>
              </Link>
            </li>
            <li className="desktopNavbarMenuCardListItemThree">
              <Link to="/about" className="header-list-link-item">
                <button
                  className={`desktop-navbar-menu-card-item ${applyDesktopAboutStyle}`}
                  type="button"
                >
                  About
                </button>
              </Link>
            </li>
          </ul>
        </div>
      </div>
      {isMenuClicked && (
        <div className="mobile-navbar-menu-card">
          <ul className="mobile-navbar-menu-card-content-card">
            <li
              key="mobileNavbarMenuCardContentCardListItemOne"
              className="navbar-mobile-item"
            >
              <Link to="/" className="header-list-link-item">
                <button
                  type="button"
                  className={`mobile-navbar-menu-card-content-card-item ${applyMobileHomeStyle}`}
                >
                  Home
                </button>
              </Link>
            </li>
            <li
              key="mobileNavbarMenuCardContentCardListItemTwo"
              className="navbar-mobile-item"
            >
              <Link to="/vaccination" className="header-list-link-item">
                <button
                  type="button"
                  className={`mobile-navbar-menu-card-content-card-item ${applyMobileVaccinationStyle}`}
                >
                  Vaccination
                </button>
              </Link>
            </li>
            <li
              key="mobileNavbarMenuCardContentCardListItemThree"
              className="navbar-mobile-item"
            >
              <Link to="/about" className="header-list-link-item">
                <button
                  type="button"
                  to="/about"
                  className={`mobile-navbar-menu-card-content-card-item ${applyMobileAboutStyle}`}
                >
                  About
                </button>
              </Link>
            </li>
          </ul>
          <button
            className="mobile-navbar-menu-card-button"
            type="button"
            onClick={onCloseMobileMenuCard}
          >
            <AiFillCloseCircle className="mobile-navbar-menu-card-button-icon" />
          </button>
        </div>
      )}
    </nav>
  )
}

export default withRouter(MobileHeader)
