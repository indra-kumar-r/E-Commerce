import { Link } from "react-router-dom";
import styled from "styled-components";
import logo from "../assets/images/logo.png";

const Footer = () => {
  return (
    <Main>
      <div className="container-fluid bg-dark text-white py-5 px-1">
        <div className="row">
          <div className="col col-sm-2 d-flex justify-content-center align-items-center flex-column">
            <div className="Links">
              <Link to={"about"}>About</Link>
              <Link to={"/"}>Home</Link>
              <Link to={"cart"}>Cart</Link>
              <Link to={"wishlist"}>Wishlist</Link>
              <Link to={"profile"}>Profile</Link>
              <Link to={"admin"}>Admin</Link>
            </div>
          </div>
          <div className="col col-sm-2 d-flex justify-content-center align-items-center flex-column">
            <div className="Links">
              <Link to={"/"}>Nuts & Seeds</Link>
              <Link to={"/"}>Chocolates & Sweets</Link>
              <Link to={"/"}>Snacks</Link>
              <Link to={"/"}>Dried Fruits</Link>
              <Link to={"/"}>Gifts</Link>
            </div>
          </div>
          <div className="col col-sm-2 d-flex justify-content-center align-items-center flex-column">
            <div className="Links">
              <Link to={"/"}>Contact Us</Link>
              <Link to={"/"}>Media</Link>
              <Link to={"/"}>Careers</Link>
              <Link to={"/"}>Help</Link>
              <Link to={"/"}>Privacy Policy</Link>
            </div>
          </div>
          <div className="col col-sm-6 d-flex justify-content-center align-items-center flex-column">
            <a className="d-flex gap-2 logo_footer" href="/">
              <img src={logo} alt="Logo" width="100px" height="100px" />
              <span className="d-flex justify-content-center align-items-center">
                CRUNCHYNUTS
              </span>
            </a>
          </div>
        </div>
        <div className="row d-flex flex-column flex-column-reverse flex-sm-row">
          <div className="col d-flex justify-content-center align-items-end">
            <div className="row my-2">
              All rights reserved @ CrunchyNuts 2024
            </div>
          </div>
          <div className="col">
            <div className="text-center my-2">Join us on Social Media</div>
            <div className="social_icons d-flex justify-content-center align-items-center gap-3 gap-sm-4">
              <i className="bi bi-instagram icon"></i>
              <i className="bi bi-twitter icon"></i>
              <i className="bi bi-youtube icon"></i>
              <i className="bi bi-facebook icon"></i>
              <i className="bi bi-whatsapp icon"></i>
            </div>
          </div>
        </div>
      </div>
    </Main>
  );
};

export default Footer;

let Main = styled.div`
  .Links {
    max-width: 100%;
    display: flex;
    flex-direction: column;
  }

  a {
    text-shadow: none;
    text-decoration: none;
    color: #a0a0a0;
    max-width: 100%;
    padding: 0.25rem;
    transition: all 0.2s;
    border-bottom: 0.05rem solid transparent;
    transform: translateY(0);

    &:hover {
      color: white;
      border-bottom: 0.05rem solid gold;
      transform: translateY(-0.05rem);
    }

    &.logo_footer {
      color: white;

      img {
        filter: drop-shadow(0.25rem 0.5rem 0 gold);
      }
    }

    &.logo_footer:hover {
      color: gold;
      border-bottom: 0.05rem solid transparent;
      transform: translateY(-0.15rem);
      transition: 1.5s;
    }
  }

  .social_icons {
    & i {
      cursor: pointer;
      font-size: 1.5rem;
      transition: all 0.15s;

      &:hover {
        filter: drop-shadow(0 0 0.05rem white);
      }
    }
  }
`;
