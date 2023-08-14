import { BrowserRouter, Routes, Route} from 'react-router-dom';

import Home from './pages/Home';
import Link from './pages/Links';

function RoutesApp(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/links" element={<Link/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default RoutesApp;