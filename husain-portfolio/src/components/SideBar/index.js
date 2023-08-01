import {Link, NavLink} from 'react-router-dom'
import './index.scss'
import LogoS from '../../assets/images/H.png'
import LogoSubtitle from '../../assets/images/logo_sub.png'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {
    faLinkedin,
    faGithub,
    faYoutube,
    faSkype,
  } from '@fortawesome/free-brands-svg-icons'
  import {
    faHome,
    faUser,
    faEnvelope,
    faSuitcase,
    faBars,
    faClose,
  } from '@fortawesome/free-solid-svg-icons'

const Sidebar = () => (
    <div className='nav-bar'>
        <Link className='logo' to='/Portfolio'>
            <img src={LogoS} alt='logo'/>
            <img className="sub-logo" src={LogoSubtitle} alt='husain'/>
        </Link>
        <nav>
            <NavLink exact="true" activeclassname="active" to="/Portfolio">
                <FontAwesomeIcon icon={faHome}   color="4d4d4e" />
            </NavLink>
            
            <NavLink exact="true" activeclassname="active" className="about-link" to="/about">
                <FontAwesomeIcon icon={faUser} color="4d4d4e" />
            </NavLink>
            <NavLink exact="true" activeclassname="active" className="contact-link" to="/contact">
                <FontAwesomeIcon icon={faEnvelope} color="4d4d4e" />
            </NavLink>
        </nav>
        <ul>
            <li>
                <a target='_blank' rel='noreferrer' href='https://www.linkedin.com/in/husain-malwat-371207226/'>
                <FontAwesomeIcon icon={faLinkedin} className="anchor-icon" color='#4d4d4e'/>
                </a>
            </li>
            <li>
                <a target='_blank' rel='noreferrer' href='https://www.linkedin.com/in/husain-malwat-371207226/'>
                <FontAwesomeIcon icon={faGithub} className="anchor-icon" color='#4d4d4e'/>
                </a>
            </li>
        </ul>
    </div>
)

export default Sidebar