import { Link } from "react-router-dom";
import styled from "styled-components";

const Login = () => {
  return (
    <Main>
      <div className="container-fluid d-flex justify-content-center align-items-center">
        <form>
          <div className="row">
            <div className="col">
              <img
                src="https://img.freepik.com/free-vector/user-verification-unauthorized-access-prevention-private-account-authentication-cyber-security-people-entering-login-password-safety-measures_335657-3530.jpg"
                alt=""
                className="img-fluid"
              />
            </div>
            <div className="col">
              <span className="text-center text-warning d-flex justify-content-center align-items-center flex-column fs-1 fw-bold mb-2">
                LOGIN
              </span>
              <div className="form-floating mb-3">
                <input
                  type="email"
                  className="form-control"
                  id="floatingInput"
                  placeholder=""
                  autoComplete="off"
                  required
                />
                <label for="floatingInput">Email</label>
              </div>
              <div className="form-floating">
                <input
                  type="password"
                  className="form-control"
                  id="floatingPassword"
                  placeholder=""
                  autoComplete="off"
                  required
                />
                <label for="floatingPassword">Password</label>
              </div>
              <div className="form_btns d-flex justify-content-center align-items-center mt-4">
                <button type="submit" className="btn btn-dark">
                  LOGIN
                </button>
              </div>
              <div className="my-3 d-flex justify-content-between align-items-center px-3">
                <Link to={"/notfound"}>forgot password</Link>
                <Link to={"/register"}>Register</Link>
              </div>
              <div className="row">
                <span className="text-center text-secondary fs-6">
                  or Sign in from
                </span>
                <div
                  className="icons d-flex justify-content-center align-items-center gap-5 mt-4 fs-3"
                  style={{ cursor: "pointer" }}
                >
                  <i className="bi bi-google"></i>
                  <i className="bi bi-instagram"></i>
                  <i className="bi bi-facebook"></i>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </Main>
  );
};

export default Login;

let Main = styled.div`
  height: 100vh;

  .container-fluid {
    height: 100%;

    input {
      outline: none;
      box-shadow: none;
      border-color: lightgray;

      &:focus {
        /* border: transparent; */
        box-shadow: 0 0.15rem 0 gold;
      }
    }

    a {
      text-decoration: none;
      color: darkgray;
      transition: all 0.5s;

      &:hover {
        color: black;
        transform: translateY(-0.05rem);
        border-bottom: 0.01rem solid tomato;
      }
    }
  }
`;
