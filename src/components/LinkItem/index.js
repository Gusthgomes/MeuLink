import './link.css';
import { FiX, FiClipboard } from 'react-icons/fi';

export default function LinkItem({ closeModal }){
    return(
        <div className='modal-container'>
            <div className='modal-header'>
                <h2>Link encurtado</h2>
                <button onClick={ closeModal }>
                    <FiX size={28} color="#000"/>
                </button>
            </div>

            <span>
                https://google.com
            </span>

            <button className='modal-link'>
            https://gle.com
            <FiClipboard size={20} color='#fff' />
            </button>

            
        </div>
    )
}