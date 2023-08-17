import { BrowserRouter, Routes, Route} from 'react-router-dom';

import Home from './pages/Home';
import Links from './pages/Links';
import Contact from './pages/Contacts';
import Error from './pages/Error';

function RoutesApp(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/links" element={<Links/>}/>
                <Route path="/contact" element={<Contact/>}/>
                <Route path="*" element={<Error/>} />
            </Routes>
        </BrowserRouter>
    )
}

export default RoutesApp;