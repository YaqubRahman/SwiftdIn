import pfp from "../assets/pfpplaceholder.png";
import flag from "../assets/UKflag.png";
import "../components/Home.css";
import home from "../assets/home.png";
import connectionImage from "../assets/connections-images.png";
import messageImage from "../assets/messages-image.png";
import postImage from "../assets/posts-image.png";

import BangladeshFlag from "../assets/CountryChoose/Bangladesh.png";
import LebanonFlag from "../assets/CountryChoose/Lebanon.png";
import TurkishFlag from "../assets/CountryChoose/Turkey.png";
import SaudiFlag from "../assets/CountryChoose/Saudi.png";
import IraqFlag from "../assets/CountryChoose/Iraq.png";
import PakistanFlag from "../assets/CountryChoose/Pakistan.png";
import MalasiaFlag from "../assets/CountryChoose/Malasia.png";
import EgyptFlag from "../assets/CountryChoose/Egypt.png";
import { useEffect, useState } from "react";

const countries = [
  { code: "BD", name: "Bangladesh", flag: BangladeshFlag },
  { code: "LB", name: "Lebanon", flag: LebanonFlag },
  { code: "TR", name: "Turkey", flag: TurkishFlag },
  { code: "SA", name: "Saudi Arabia", flag: SaudiFlag },
  { code: "IQ", name: "Iraq", flag: IraqFlag },
  { code: "PK", name: "Pakistan", flag: PakistanFlag },
  { code: "MY", name: "Malaysia", flag: MalasiaFlag },
  { code: "EG", name: "Egypt", flag: EgyptFlag },
];

const country = localStorage.getItem("country");

const userString = localStorage.getItem("user");
const userData = userString ? JSON.parse(userString) : null;
const user_name = userData ? userData.firstName : "";

function getCountryCode() {
  console.log("Country from localStorage:", country);
  for (let i = 0; i < countries.length; i++) {
    if (countries[i].code == country) {
      console.log("Matched country:", countries[i].flag);
      return countries[i].flag;
    }
  }
  console.log("No match found");
  return flag;
}

function getCountryName() {
  for (let i = 0; i < countries.length; i++) {
    if (countries[i].code == country) {
      console.log("Country Name:", countries[i].name);
      return countries[i].name;
    }
  }
}

function Home() {
  const [imageURL, setImageUrl] = useState("");
  const [selectedCountry, setCountry] = useState<string | null>(
    localStorage.getItem("country")
  );

  useEffect(() => {
    function updateCountry() {
      setCountry(localStorage.getItem("country"));
    }

    // Listen for localStorage changes in another tab
    window.addEventListener("storage", updateCountry);

    return () => {
      window.removeEventListener("storage", updateCountry);
    };
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      const newCountry = localStorage.getItem("country");
      if (newCountry !== selectedCountry) {
        setCountry(newCountry);
      }
    }, 500); // Check every 500ms

    return () => clearInterval(interval);
  }, [selectedCountry]);

  function handleOnChange(e: React.FormEvent<HTMLInputElement>) {
    const target = e.target as HTMLInputElement & {
      files: FileList;
    };
    console.log("target", target.files);
    const previewImage = URL.createObjectURL(target.files[0]);
    setImageUrl(previewImage);
  }

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="#"></a>
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
                <a
                  className="nav-link active"
                  aria-current="page"
                  href="#/home"
                >
                  <img src={home} alt="Swiftdn Logo" />
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  <img src={connectionImage} alt="Swiftdn Logo" />
                  Connections
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  <img src={messageImage} alt="Swiftdn Logo" />
                  Messages
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  <img src={postImage} alt="Swiftdn Logo" />
                  Posts
                </a>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              ></input>
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>

      <div className="parent-container">
        <div className="containerhome">
          <div className="childcontainer1">
            <div className="namecard">
              <img
                src={imageURL || pfp}
                className="logo"
                alt="pfp PlaceHolder"
              />
              <div className="homefont">
                <h1>{user_name}</h1>
              </div>

              <p>Junior Software Engineer</p>

              <p>Currently working at SwiftdIn as a full stack engineer</p>

              <img src={getCountryCode()} className="flag" alt="Country Flag" />

              <p>{getCountryName()}</p>
            </div>

            <input type="file" name="pfp_image" onChange={handleOnChange} />

            <div className="card">
              <h2>Experience</h2>

              <div className="trending">
                <p>
                  2018-Present Meta - Junior Software Engineer<br></br>
                  2014-2018 Netflix - Junior Software Engineer<br></br>
                  2009-2014 Amazon - Junior Software Engineer<br></br>
                  2008-2009 Apple - Junior Software Engineer<br></br>
                  2006-2008 Microsoft - Junior Software Engineer<br></br>
                </p>
              </div>
            </div>

            <div className="card">
              <p>Available</p>
            </div>
          </div>

          <p className="read-the-docs">This is a work in progress</p>
        </div>

        <div className="containerconnections">
          <div className="card">
            <h2>Connections List:</h2>
            <div className="paragraph-font">
              <div className="connection-item">
                <img
                  src={pfp}
                  className="logo-connections"
                  alt="pfp PlaceHolder"
                />
                <p>Talip Tun</p>
              </div>

              <div className="connection-item">
                <img
                  src={pfp}
                  className="logo-connections"
                  alt="pfp PlaceHolder"
                />
                <p>Yaseen Barlas</p>
              </div>

              <div className="connection-item">
                <img
                  src={pfp}
                  className="logo-connections"
                  alt="pfp PlaceHolder"
                />
                <p>Ahmad Sabsaby</p>
              </div>

              <div className="connection-item">
                <img
                  src={pfp}
                  className="logo-connections"
                  alt="pfp PlaceHolder"
                />
                <p>Sayed Iqbal</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
