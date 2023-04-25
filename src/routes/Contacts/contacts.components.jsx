import React, { useRef, Fragment } from 'react';
import { NavLink } from 'react-router-dom';
import emailjs from '@emailjs/browser';

import Home from '../Home/home.component';
import Projects from '../Projects/projects.component';
import About from '../About/about.component';

import './contacts.styles.scss';

const Contacts = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm(
                'service_ci62dcx',
                'template_9nmic9j',
                form.current,
                'TRLj-k9KeKCtgsF7F'
            )
            .then(
                (result) => {
                    console.log(result.text);
                    console.log('message sent');
                },
                (error) => {
                    console.log(error.text);
                }
            );
    };
    return (
        <Fragment>
            <div className='nav_container_contact'>
                <div className='contact'>
                    <h1>CONTACT ME</h1>
                </div>
                <div className='navLinks_container_contact'>
                    <nav className='nav_links_contact'>
                        <NavLink
                            to='/'
                            element=<Home />
                            className='navLinkcontact'
                        >
                            HOME
                        </NavLink>
                        <NavLink
                            to='/about'
                            element=<About />
                            className='navLinkcontact'
                        >
                            ABOUT
                        </NavLink>
                        <NavLink
                            to='/projects'
                            element=<Projects />
                            className='navLinkcontact'
                        >
                            PROJECTS
                        </NavLink>
                        <NavLink
                            to='/contacts'
                            element={<Contacts />}
                            className='navLinkcontact'
                        >
                            CONTACTS
                        </NavLink>
                    </nav>
                </div>
            </div>
            <div className='form_container'>
                <form className='form' ref={form} onSubmit={sendEmail}>
                    <label>YOUR NAME</label>
                    <input className='name' type='text' name='user_name' />
                    <label>YOUR E-MAIL</label>
                    <input className='email' type='email' name='user_email' />
                    <label>MESSAGE</label>
                    <textarea className='message' name='message' />
                    <input className='submit' type='submit' value='Send' />
                </form>
            </div>
        </Fragment>
    );
};

export default Contacts;
