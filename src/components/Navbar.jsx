import { Link, useNavigate } from "react-router-dom"


const Navbar = () => {
    const navigate = useNavigate()

    const handleLogout = () => {
        sessionStorage.removeItem("user")
        navigate("/")
    }


    const currentUser = JSON.parse(sessionStorage.getItem("user"))
    console.log(currentUser)

    return (
        <nav  className="navbar navbar-expand-lg bg-primary " >
            <div className="container-fluid" style={{ display: "flex" }}>
                <Link style={{ color: "darkblue", flexGrow: "24" }} className="navbar-brand  ms-3" to="/">
                    <h2 className="text-white banausta" style={{ fontFamily:'Bungee Inline'}}>banausta</h2>
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarText">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0 fw-bolder">
                        {currentUser ? (
                            <>
                                <li className="nav-item ">
                                    <Link className="nav-link active me-2 text-white" aria-current="page" to="/home">Home</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link active text-white" aria-current="page" to="/" onClick={handleLogout}>Logout</Link>
                                </li>
                            </>
                        ) : (
                            <>
                                <li className="nav-item">
                                        <Link className="nav-link me-2 text-white fs-5" to="/login">Login</Link>
                                </li>
                                
                                <li className="nav-item">
                                        <Link className="nav-link text-white fs-5" to="/register">Register</Link>
                                </li>
                            </>
                        )}
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar