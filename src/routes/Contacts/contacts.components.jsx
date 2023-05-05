import React, { useRef, Fragment } from 'react';
import { NavLink } from 'react-router-dom';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Home from '../Home/home.component';
import Projects from '../Projects/projects.component';
import About from '../About/about.component';

import './contacts.styles.scss';

const Contacts = () => {
    const form = useRef();
    const notify = () =>
        toast.success('Email sent', {
            position: 'top-center',
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: 'light',
        });

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
                    form.current.reset();
                    notify();
                },
                (error) => {
                    console.log(error.text);
                }
            );
    };
    return (
        <Fragment>
            <div className='nav_container_about'>
                <div className='contact'>
                    <h1>CONTACT ME</h1>
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
                            element=<Projects />
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
                <ToastContainer
                    position='top-center'
                    autoClose={5000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                    theme='light'
                />
            </div>
        </Fragment>
    );
};

export default Contacts;
