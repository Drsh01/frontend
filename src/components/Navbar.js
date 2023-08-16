export default function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg fixed-top navbar-light justify-start" style={{ background: '#1e90ff' }}>
            <div className="container">
                <a className="navbar-brand" href="/">
                    <img
                        id="LMA-logo"
                        src="https://nicholasfinancial.com/wp-content/uploads/2017/10/Cons_Loan_Icon_01.png"
                        alt="LMA Logo"
                        draggable="false"
                        height="50"
                    />
                </a>
                <h2>LOAN MANAGEMENT APPLICATION</h2>
                <button style={{ opacity: 0 }}>qa4g</button>
            </div>
        </nav>
    )
}