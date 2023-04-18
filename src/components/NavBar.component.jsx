import { useState } from 'react';
import { NavLink } from 'react-router-dom';

import './NavBar.styles.scss';
import Home from '../routes/Home/home.component.jsx';
import About from '../routes/About/about.component';
import Projects from '../routes/Projects/projects.component';
import Contacts from '../routes/Contacts/contacts.components';

import LIGHT from '../assets/ceiling-lamp-off.png';
import LIGHTON from '../assets/ceiling-lamp.png';

import clickSound from '../assets/sound.mp3';

const NavBar = ({ color, setColor, portret, setPortret }) => {
    const [image, setImage] = useState(LIGHT);

    const playSound = () => {
        new Audio(clickSound).play();
    };

    const handleClick = (event) => {
        let value = image;

        if (value === LIGHT) {
            setImage(LIGHTON);

            setColor(!color);
            playSound();
        } else {
            setImage(LIGHT);

            setColor(!color);
            playSound();
        }
    };

    return (
        <div>
            <div className='nav_container'>
                <div className='light_container'>
                    <img
                        onClick={handleClick}
                        className='light'
                        src={image}
                        alt=''
                    />
                </div>
                <div className='navLinks_container'>
                    <nav className='nav_links'>
                        <NavLink to='/' element=<Home /> className='navLink'>
                            HOME
                        </NavLink>
                        <NavLink
                            to='/about'
                            element=<About />
                            className='navLink'
                        >
                            ABOUT
                        </NavLink>
                        <NavLink
                            to='/projects'
                            element={<Projects />}
                            className='navLink'
                        >
                            PROJECTS
                        </NavLink>
                        <NavLink
                            to='/contacts'
                            element=<Contacts />
                            className='navLink'
                        >
                            CONTACTS
                        </NavLink>
                    </nav>
                </div>
            </div>
        </div>
    );
};

export default NavBar;
