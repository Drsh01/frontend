import { useNavigate } from 'react-router';
import '../Styles/Navbar.css'

export default function Navbar() {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('#');
        if(localStorage.getItem('token')) {
            localStorage.clear();
        }
    }

    return (
        <nav className="navbar navbar-expand-lg fixed-top justify-start" style={{ background: '#004691' }}>
            <div className="container">
                <a className="navbar-brand" href="/">
                    <img
                        id="LMA-logo"
                        src="https://i.pinimg.com/736x/3f/c0/52/3fc052dd7dddc69831b16f6de8e3b19a.jpg"
                        alt="LMA Logo"
                        draggable="false"
                        height="60"
                        style={{borderRadius: "25%", border: "2px solid #ccc"}}
                    />
                </a>
                <h2 className="page-heading">LOAN MANAGEMENT APPLICATION</h2>
                <button class="btn my-2 my-sm-0" onClick={handleClick} type="submit">{localStorage.getItem('token') ? 'Sign Out' : 'Sign In'}</button>
                {/* <button style={{ opacity: 0 }}>qa4g</button> */}
            </div>
        </nav>
    )
}