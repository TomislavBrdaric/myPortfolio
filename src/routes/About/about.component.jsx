import { NavLink } from 'react-router-dom';
import { Fragment } from 'react';

import Home from '../Home/home.component';
import Projects from '../Projects/projects.component';
import Contacts from '../Contacts/contacts.components';

import htmlImg from '../../assets/HTML5_logo_and_wordmark.svg.png';
import cssImg from '../../assets/CSS3_logo_and_wordmark.svg.png';
import jsImg from '../../assets/1200px-Javascript-shield.svg.png';
import scssImg from '../../assets/2560px-Sass_Logo_Color.svg.png';
import reactImg from '../../assets/React-icon.svg.png';
import viteImg from '../../assets/vite.svg';
import gitImg from '../../assets/1280px-Git-logo.svg.png';
import githubImg from '../../assets/Github-circle2_(CoreUI_Icons_v1.0.0).svg.png';
import programerImg from '../../assets/computer-setting-3635143-3041090.png';

import './about.styles.scss';

const About = () => {
    return (
        <Fragment>
            <div className='nav_container_about'>
                <div className='about'>
                    <h1>ABOUT ME</h1>
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
                        <NavLink to='/about' className='navLinkAbout'>
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
            <div className='main'>
                <div className='text_container'>
                    <h3>
                        Hello world :)
                        <br /> I am Tomi, passionate Front-End Developer
                        <br /> based in Zagreb Croatia. <br />
                        <br /> I love problem solving, learning new skills and
                        perfecting old ones.
                        <br /> I’m well organized and love working in teams.
                        <br /> In my spare time I enjoy skateboarding,
                        photography and playing guitar as well as spending time
                        with friends and family.
                        <br />
                        <br /> Interested in sharing my skills and working with
                        positive ambitious people.
                    </h3>
                </div>
                <div className='image-container'>
                    <div className='firstRow'>
                        <img className='imageIcons' src={htmlImg} alt='' />
                        <img className='imageIcons' src={cssImg} alt='' />
                        <img className='imageIcons' src={jsImg} alt='' />
                    </div>
                    <div className='secondRow'>
                        <img className='imageIcons' src={scssImg} alt='' />
                        <img className='imageIcons' src={reactImg} alt='' />
                        <img className='imageIcons' src={viteImg} alt='' />
                    </div>
                    <div className='thirdRow'>
                        <img
                            className='imageIcons'
                            id='github'
                            src={githubImg}
                            alt=''
                        />
                        <img
                            className='imageIcons'
                            id='git'
                            src={gitImg}
                            alt=''
                        />
                    </div>
                    <div className='fourthRow'>
                        <img className='mainIcon' src={programerImg} alt='' />
                    </div>
                </div>
            </div>
        </Fragment>
    );
};

export default About;
