import styled from "styled-components";
import notFoundError from "../assets/images/404.gif";
import { useEffect } from "react";

const NotFound = () => {
  useEffect(() => {
    setTimeout(() => {
      location.assign("/");
    }, 3000);
  }, []);

  return (
    <Main>
      <div className="d-flex justify-content-center align-items-center flex-column">
        <span className="text-left">
          Page not found, Redirecting to Home
          <span className="ps-2">
            ,Or click on <a href="/">Home</a>
          </span>
        </span>
        <img
          src={notFoundError}
          className="img-fluid rounded"
          width={"50%"}
          height={"50%"}
        />
      </div>
    </Main>
  );
};

export default NotFound;

let Main = styled.div`
  height: 100vh;

  & > div {
    height: 100%;
    color: darkgray;

    a {
      text-decoration: none;
      border-bottom: 0.01rem solid tomato;
    }
  }
`;
