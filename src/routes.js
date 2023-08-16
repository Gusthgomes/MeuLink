import { BrowserRouter, Routes, Route} from 'react-router-dom';

import Home from './pages/Home';
import Links from './pages/Links';
import Contact from './pages/Contacts';

function RoutesApp(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/links" element={<Links/>}/>
                <Route path="/contact" element={<Contact/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default RoutesApp;