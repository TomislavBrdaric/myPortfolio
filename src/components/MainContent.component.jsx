import { useState } from 'react';
import './MainContent.styles.scss';
import NavBar from './NavBar.component';

import picture from '../assets/IMG_20230413_144158.png';
import liImage from '../assets/linkedin.svg';
import instaImage from '../assets/1200px-Instagram.svg.png';
import ghImage from '../assets/Github-circle_(CoreUI_Icons_v1.0.0).svg.png';

const MainContent = () => {
    const [color, setColor] = useState(false);

    return (
        <div>
            <NavBar color={color} setColor={setColor} />
            <div className='greeting_container'>
                <div
                    className='greeting'
                    style={{ color: color ? 'yellow' : 'white' }}
                >
                    <h1>HI, I'M TOMI</h1>
                    <h3>"Enthusiastic Frontend Developer" </h3>
                    <div className='resume_container'>
                        <h2 id='resume'>
                            <a href=''> RESUME </a>
                        </h2>
                        <div className='links'>
                            <a href='https://www.linkedin.com/in/tomislav-brdaric-b902a0242/'>
                                {' '}
                                <img
                                    className='link'
                                    src={liImage}
                                    alt='linked in'
                                />
                            </a>
                            <a href='https://www.instagram.com/fourshoesyeah/'>
                                {' '}
                                <img
                                    className='link'
                                    src={instaImage}
                                    alt='linked in'
                                />
                            </a>
                            <a href='https://github.com/TomislavBrdaric'>
                                {' '}
                                <img
                                    className='link'
                                    src={ghImage}
                                    alt='linked in'
                                />
                            </a>
                        </div>
                    </div>
                </div>
                <div className='image_container'>
                    <img id='image' src={picture} alt='' />
                </div>
            </div>
        </div>
    );
};

export default MainContent;
