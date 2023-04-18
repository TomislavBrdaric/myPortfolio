import Home from './routes/Home/home.component';
import About from './routes/About/about.component';
import Projects from './routes/Projects/projects.component';
import Contacts from './routes/Contacts/contacts.components';

import { Routes, Route } from 'react-router-dom';

const App = () => {
    return (
        <div className='app'>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/about' element={<About />} />
                <Route path='/projects' element={<Projects />} />
                <Route path='/contacts' element={<Contacts />} />
            </Routes>
        </div>
    );
};

export default App;
