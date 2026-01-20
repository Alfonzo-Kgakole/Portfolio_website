import Sidebar from "../sidebar/Sidebar";
import "./Navbar.scss"

const Navbar = () => {
    return (
        <div className="navbar">
            <Sidebar />
            <div className="wrapper">
                <span>Alfonzo Kgakole</span>
                <div className="social-links">
                     <a href="#">
                    <img src="/facebook.png" alt="facebook" />
                   </a>
                     <a href="#">
                    <img src="/instagram.png" alt="instagram" />
                   </a>
                     <a href="#">
                    <img src="youtube.png" alt="youtube" />
                   </a>
                     <a href="#">
                    <img src="/dribbble.png" alt="dribbble" />
                   </a>
                </div>
            </div>
        </div>
    )
}

export default Navbar;