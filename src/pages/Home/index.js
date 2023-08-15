import {FiLink } from 'react-icons/fi';
import './home.css';
import Menu from '../../components/Menu';

export default function Home(){
    return(
      <div className="container-home">
        <div className="logo">
            <img src="/links.png" alt="My links"/>
            <h1>My links</h1>
            <span>Cole o seu link para encurtar 👇</span>
        </div>
        <div className="area-input">
            <div>
                <FiLink size={24} color="#fff"/>
                <input
                    placeholder='Cole o seu link aqui...'
                />
            </div>

            <button>
                Encurtar link
            </button>
        </div>
        <Menu/>
      </div>
    )
  }