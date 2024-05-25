import { useState } from "react";
import styled from "styled-components";
import ProductList from "./AdminPages/ProductList";
import ContentDashboard from "./AdminPages/ContentDashboard";

const Admin = () => {
  const [view, setView] = useState("ProductList");

  const adminOptions = [
    {
      option: "Products",
      value: "ProductList",
    },
    {
      option: "Content Dashboard",
      value: "ContentDashboard",
    },
  ];

  const componentMapping = {
    ProductList: ProductList,
    ContentDashboard: ContentDashboard,
  };

  const DynamicComponent = componentMapping[view];

  return (
    <Main>
      <div className="container-fluid d-flex justify-content-center align-items-center flex-column">
        <span className="fs-1 fw-bold text-center text-secondary">Admin</span>
        <nav className="navbar navbar-expand-sm">
          <div className="container-fluid d-flex justify-content-end">
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span>
                <i className="bi bi-three-dots"></i>
              </span>
            </button>
            <div
              className="collapse navbar-collapse d-flex-md justify-content-center align-items-center"
              id="navbarNav"
            >
              <ul className="navbar-nav d-flex">
                {adminOptions.map((option) => (
                  <li
                    key={option.option}
                    className="nav-item"
                    onClick={() => setView(option.value)}
                  >
                    {option.option}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </nav>
        <DynamicComponent />
      </div>
    </Main>
  );
};

export default Admin;

const Main = styled.div`
  min-height: 100vh;

  .container-fluid {
    width: 100%;
  }

  .navbar {
    min-width: 100%;
    max-width: 100%;
    border-bottom: 0.1rem solid tomato;
    font-size: small;

    & button {
      outline: none;
      box-shadow: none;
    }

    & ul {
      gap: 1rem;
    }

    & li {
      color: darkgray;
      cursor: pointer;
      transition: all 0.2s;

      &:hover {
        color: tomato;
        transform: translateY(-0.1rem);
      }
    }
  }

  @media screen and (min-width: 576px) {
    .navbar {
      min-width: 0%;
      max-width: 100%;
      border-bottom: 0.1rem solid gold;
      font-size: medium;
    }
  }
`;
