import {Link} from 'react-router-dom';
import '../../App.css';



export default function NavBar() {
    return (
        <div style={{height: '100px',
                    position: 'relative',
                    top: '40%',
                    }}>
            
            <ul style={{
                listStyleType: 'none',
                display: 'flex',
                justifyContent: 'space-between',
                width: '70%',
                position: "absolutely",
               
            }}>
                <li>
                    <Link to="/" className='link'>Main</Link>
                </li>

                <li>
                    <Link to="/about" className='link'>About</Link>
                </li>

                <li>
                    <Link to="/contact" className='link'>Contact</Link>
                </li>
            </ul>
        </div>
    )
}
