import { NavLink } from "react-router-dom";
import logo from "../assets/images/logo.png";
import styled from "styled-components";

const Header = () => {
  return (
    <Main>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand d-flex logo_custom" href="/">
            <img
              src={logo}
              alt="Logo"
              width="100px"
              height="100px"
              className="d-inline-block align-text-top"
            />
            <span className="d-flex justify-content-center align-items-center text-warning fw-bold">
              CRUNCHYNUTS
            </span>
          </a>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse d-flex-sm justify-content-end"
            id="navbarNavAltMarkup"
          >
            <div className="navbar-nav d-flex gap-3 nav_custom">
              <NavLink to="/">
                <i className="bi bi-house"></i> Home
              </NavLink>
              <NavLink to="/cart">
                <i className="bi bi-cart"></i> Cart
              </NavLink>
              <NavLink to="/wishlist">
                <i className="bi bi-heart"></i> Wishlist
              </NavLink>
              <NavLink to="/profile">
                <i className="bi bi-person"></i> Profile
              </NavLink>
            </div>
          </div>
        </div>
      </nav>
    </Main>
  );
};

export default Header;

let Main = styled.div`
  .navbar-toggler {
    outline: none;
    box-shadow: none;
  }

  @media screen and (min-width: 0px) {
    .logo_custom {
      & img {
        width: 4rem;
        height: 4rem;
        filter: drop-shadow(0.25rem 0.75rem 0 gold);
        transition: all 0.5s;
      }

      & span {
        font-size: 1.25rem;
      }

      &:hover img {
        filter: drop-shadow(-0.25rem -0.75rem 0 tomato);
      }
    }

    .nav_custom {
      a {
        text-decoration: none;
        color: #3e3e3e;
        border-bottom: 0.05rem solid transparent;
        transition: all 0.25s;

        &:hover {
          color: black;
          transform: translateY(-0.05rem);
          border-bottom: 0.05rem solid tomato;
        }

        &[aria-current] {
          color: black;
          transform: translateY(-0.15rem);
          border-bottom: 0.05rem solid tomato;
        }
      }
    }
  }

  @media screen and (min-width: 0px) and (max-width: 991px) {
    .nav_custom {
      a {
        text-decoration: none;
        color: #3e3e3e;
        border-bottom: 0.05rem solid transparent;
        transition: all 0.25s;

        &:hover {
          color: red;
          transform: none;
          border-bottom: 0.05rem solid transparent;
        }

        &[aria-current] {
          color: red;
          transform: none;
          border-bottom: 0.05rem solid transparent;
        }
      }
    }
  }

  @media screen and (min-width: 400px) {
    .logo_custom {
      & img {
        width: 5rem;
        height: 5rem;
      }

      & span {
        font-size: 1.75rem;
      }
    }
  }
`;
