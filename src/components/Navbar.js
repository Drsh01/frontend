import '../Styles/Navbar.css'
import { useAuth } from './AuthProvider';

export default function Navbar() {
    const { token, setToken, setRole, setId } = useAuth();

    const handleClick = () => {
        setToken();
        setRole();
        setId();
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
                <button class="btn my-2 my-sm-0" onClick={handleClick} type="submit">{token ? 'Sign Out' : 'Sign In'}</button>
                {/* <button style={{ opacity: 0 }}>qa4g</button> */}
            </div>
        </nav>
    )
}