import { Link } from "react-router-dom"
import logistoceanImage from './assets/images/logo.png';  
import { useEffect } from "react";

export default function Navbar() {
  useEffect(() => {
    const navbarToggler = document.querySelector(".navbar-toggler");
    const navbarMenu = document.querySelector("#navbarNav");

    if (navbarToggler && navbarMenu) {
      navbarToggler.addEventListener("click", () => {
        navbarMenu.classList.toggle("show");
      });
    }
  }, []);
  return (
    <nav className="navbar navbar-expand-lg navbar-light shadow-sm fixed-top" style={{ backgroundColor: "#2972b6" }}>
    <div className="container">
      <Link className="navbar-brand d-flex align-items-center" to="/">
        <img src={logistoceanImage} width={60} alt="Logistocean Logo" className="me-2" />
        <span className="fw-bold text-white">Logistocean</span>
      </Link>

      <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>


      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ms-auto">
          <li className="nav-item mx-1">
            <Link className="nav-link text-white fw-semibold px-3 py-2 rounded-pill" to="/">Home</Link>
          </li>
          <li className="nav-item mx-1">
            <Link className="nav-link text-white fw-semibold px-3 py-2 rounded-pill" to="/Product">All Products</Link>
          </li>
          <li className="nav-item mx-1">
            <Link className="nav-link text-white fw-semibold px-3 py-2 rounded-pill" to="/About">About Us</Link>
          </li>
          <li className="nav-item mx-1">
            <Link className="nav-link text-white fw-semibold px-3 py-2 rounded-pill" to="/Contact">Contact Us</Link>
          </li>
        </ul>
      </div>
    </div>

    <style jsx>{`
      .navbar {
        padding-top: 0.7rem;
        padding-bottom: 0.7rem;
      }

      .navbar-brand img {
        filter: brightness(0) invert(1);
      }

      .navbar-toggler {
        border-color: white;
      }
    `}</style>
  </nav>
  )
}

