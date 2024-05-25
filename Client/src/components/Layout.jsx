import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import styled from "styled-components";

const Layout = () => {
  return (
    <>
      <Header />
      <Main className="container-fluid">
        <Outlet />
      </Main>
      <Footer />
    </>
  );
};

export default Layout;

let Main = styled.div``;
