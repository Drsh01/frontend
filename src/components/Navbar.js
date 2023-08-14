export default function Navbar() {
    return (
        <nav class="navbar navbar-expand-lg fixed-top bg-light navbar-light justify-end">
            <div class="container">
                <a class="navbar-brand" href="#"
                ><img
                        id="LMA-logo"
                        src="https://nicholasfinancial.com/wp-content/uploads/2017/10/Cons_Loan_Icon_01.png"
                        alt="LMA Logo"
                        draggable="false"
                        height="50"
                    /></a>
                <button
                    class="navbar-toggler"
                    type="button"
                    data-mdb-toggle="collapse"
                    data-mdb-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <i class="fas fa-bars"></i>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav ms-auto align-items-center">
                        <li class="nav-item">
                            <a class="nav-link mx-2" href="#!"><i class="fas fa-plus-circle pe-2"></i>Post</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link mx-2" href="#!"><i class="fas fa-bell pe-2"></i>Alerts</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link mx-2" href="#!"><i class="fas fa-heart pe-2"></i>Trips</a>
                        </li>
                        <li class="nav-item ms-3">
                            <a class="btn btn-black btn-rounded" href="#!">Sign in</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}