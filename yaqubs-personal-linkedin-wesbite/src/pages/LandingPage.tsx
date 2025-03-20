import logo from "../assets/SwiftdIn_Logo.png";
import "../components/LandingPage.css";
import { Link } from "react-router-dom";

function LandingPage() {
  return (
    <>
      <h1>Swiftdn</h1>
      <p>Smarter, Simpler, Smoother</p>

      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img src={logo} alt="Swiftdn Logo" width="50" height="40" />
          </a>
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
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Features
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Pricing
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Reviews
                </a>
              </li>
            </ul>
            <div className="login-signup-button">
              <Link
                to="/loginsignup"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <button type="button" className="btn btn-info">
                  Login/Signup
                </button>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <div className="hero-section">
        <div className="hero-text">
          <h1 className="gradient-text">A new alternative to LinkdIn</h1>
          <p>Smarter 💡, Simpler 🪶, Smoother 🌊</p>
        </div>
      </div>
    </>
  );
}

export default LandingPage;
