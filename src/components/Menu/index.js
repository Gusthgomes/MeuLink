import './menu.css';
import { BsInstagram, BsLinkedin} from 'react-icons/bs';
import { Link } from 'react-router-dom';

export default function Menu(){
    return(
        <div className='menu'>
            <a className='social' href="https://www.linkedin.com/in/gustavo-gomes-da-rosa-3a2039259/">
              <BsLinkedin color="#fff" size={25}/>  
            </a>

            <a className='social' href="https://www.instagram.com/gusth_gomess/">
              <BsInstagram color="#fff" size={25}/>  
            </a>

            <Link className='menu-item' to="/links">
                Meus links
            </Link>

            <Link className='menu-item' to="/contact">
                Sobre mim
            </Link>
        </div>
    )
}