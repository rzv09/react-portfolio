import { Link, NavLink } from 'react-router-dom'
import './index.scss'
import LogoR from '../../assets/images/Raman_Logo.png'
import LogoSubtitle from '../../assets/images/Raman-sub.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faUser, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin, faTelegram } from '@fortawesome/free-brands-svg-icons'

const Sidebar = () => (
    <div className='nav-bar'>
        <Link className='logo' to='/'>
            {/* <img src={LogoS} alt='logo' /> */}
            <img src={LogoR} alt="logo" />
            <img className='sub-logo' src={LogoSubtitle} alt='raman' />
        </Link>
        <nav>
            <NavLink exact="true" activeclassname="active" className="home" to="/" end>
                <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
            </NavLink>
            <NavLink  exact="true" activeclassname="active" className="about-link" to="/about">
                <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
            </NavLink>
            <NavLink  exact="true" activeclassname="active" className="contact-link" to="/contact">
                <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
            </NavLink>
        </nav>
        <ul>
            <li>
                <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/raman-zatsarenko/">
                <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e"></FontAwesomeIcon>
                </a>
            </li>
            <li>
                <a target="_blank" rel="noreferrer" href="https://github.com/rzv09">
                <FontAwesomeIcon icon={faGithub} color="#4d4d4e"></FontAwesomeIcon>
                </a>
            </li>
            <li>
                <a target="_blank" rel="noreferrer" href="https://t.me/rzzzz09">
                <FontAwesomeIcon icon={faTelegram} color="#4d4d4e"></FontAwesomeIcon>
                </a>
            </li>
        </ul>
    </div>
)


export default Sidebar