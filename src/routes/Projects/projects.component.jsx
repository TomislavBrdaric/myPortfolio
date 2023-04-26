import { Fragment } from 'react';
import { NavLink } from 'react-router-dom';

import Home from '../Home/home.component';
import About from '../About/about.component';
import Contacts from '../Contacts/contacts.components';

import WEBSHOP from '../../assets/webshop.png';
import BANKIST from '../../assets/bankist.png';
import ITUNES from '../../assets/itunes.png';
import MAPTY from '../../assets/mapty.png';
import FIRST100 from '../../assets/100.png';
import CHAT from '../../assets/chat.png';

import './projects.styles.scss';

const Projects = () => {
    return (
        <Fragment>
            <div className='nav_container_about'>
                <div className='projects'>
                    <h1>PROJECTS</h1>
                </div>
                <div className='navLinks_container_about'>
                    <nav className='nav_links_about'>
                        <NavLink
                            to='/'
                            element=<Home />
                            className='navLinkAbout'
                        >
                            HOME
                        </NavLink>
                        <NavLink
                            to='/about'
                            element=<About />
                            className='navLinkAbout'
                        >
                            ABOUT
                        </NavLink>
                        <NavLink
                            to='/projects'
                            element={<Projects />}
                            className='navLinkAbout'
                        >
                            PROJECTS
                        </NavLink>
                        <NavLink
                            to='/contacts'
                            element={<Contacts />}
                            className='navLinkAbout'
                        >
                            CONTACTS
                        </NavLink>
                    </nav>
                </div>
            </div>
            <div className='project_container'>
                <div className='page'>
                    <a href='https://idyllic-alpaca-641ddd.netlify.app/'>
                        <h3 className='pageText'>Web Shop</h3>
                        <img className='project' src={WEBSHOP} alt='' />
                    </a>
                </div>
                <div className='page'>
                    <a href='https://tomislavbrdaric.github.io/Bankist/'>
                        <h3 className='pageText'>Bankist</h3>
                        <img className='project' src={BANKIST} alt='' />
                    </a>
                </div>

                <div className='page'>
                    <a href='https://tomislavbrdaric.github.io/iTunesSearch-Engine/'>
                        <h3 className='pageText'>iTUNES Search App</h3>
                        <img className='project' src={ITUNES} alt='' />
                    </a>
                </div>
                <div className='page'>
                    <a href='https://tomislavbrdaric.github.io/Mapty/'>
                        <h3 className='pageText'>Mapty</h3>
                        <img className='project' src={MAPTY} alt='' />
                    </a>
                </div>

                <div className='page'>
                    <a href='https://tomislavbrdaric.github.io/FirstTo100/'>
                        <h3 className='pageText'>First to 100</h3>
                        <img className='project' src={FIRST100} alt='' />
                    </a>
                </div>
                <div className='page'>
                    <a href='https://wondrous-sawine-a5e387.netlify.app/'>
                        <h3 className='pageText'>Let's talk chat app</h3>
                        <img className='project' src={CHAT} alt='' />
                    </a>
                </div>
            </div>
        </Fragment>
    );
};

export default Projects;
