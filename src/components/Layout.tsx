import { Outlet } from "react-router-dom";
import styled from "styled-components";
import Nav from "./Nav";


function Layout() {
  return (
    <>
      <Wrapper>
        <Main>
          <Outlet/>
        </Main>
        <Nav/>
      </Wrapper>
    </>
  );
}

export default Layout

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

const Main = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
`;
