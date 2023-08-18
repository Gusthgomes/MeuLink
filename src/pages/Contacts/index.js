import './contact.css'; 
import { Link } from 'react-router-dom';

export default function Contact(){
    return(
        <div className="container-geral">

            <div className="container-header">
                <img src="foto.png" alt="foto"/>
                <h1>Sobre mim</h1>
            </div>

            <div className="container-info">
                <p>
                    Olá, me chamo Gustavo Gomes e tenho 27 anos, trabalho com programação já fazem 2 anos e tenho familiaridade com Python, React e typescript. Essa aplicação foi construída usando ReactJS, consumindo uma api do bitly para encurtar as URLs.
                </p>

                <p>
                    Para mais informações favor mandar um e-mail para: gomesgustavo20@outlook.com
                </p>
            </div>
            
            <Link className='button' to="/">
                Voltar para home
            </Link>
            
        </div>
    )
}