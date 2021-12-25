import React from 'react';
import {Routes, Route, Link, Outlet} from 'react-router-dom';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;

`;

const Main = styled.div`
  flex-grow: 1;
`;

const Nav = styled.div`
  border: 1px solid red;

  > ul {
    display: flex;

    > li {
      width: 33.3333%;
      text-align: center;
      padding: 16px;
    }
  }
`;

export default function App() {
  return (
    <div>
      <Wrapper>
        <Routes>
          <Route path="/" element={<Layout/>}>
            <Route index element={<Money/>}/>
            <Route path="Money" element={<Money/>}/>
            <Route path="labels" element={<Labels/>}/>
            <Route path="statistics" element={<Statistics/>}/>
            <Route path="*" element={<NoMatch/>}/>
          </Route>
        </Routes>
      </Wrapper>
    </div>
  );
}

function Layout() {
  return (
    <>
      <Outlet/>
      <Nav>
        <ul>
          <li><Link to="/labels">标签</Link></li>
          <li><Link to="/money">记账</Link></li>
          <li><Link to="/statistics">统计</Link></li>
        </ul>
      </Nav>
    </>
  );
}

function Money() {
  return (
    <>
      <Main>
        <p>这里是记账页面。</p>
        <nav>
          <Link to="/">Go Home</Link>
        </nav>
      </Main>
    </>
  );
}

function Labels() {
  return (
    <>
      <Main>
        <p>这里是标签页面</p>
        <nav>
          <Link to="/">Home</Link>
        </nav>
      </Main>
    </>
  );
}

function Statistics() {
  return (
    <>
      <Main>
        <p>这里是统计页面</p>
        <nav>
          <Link to="/">Home</Link>
        </nav>
      </Main>
    </>
  );
}

function NoMatch() {
  return (
    <>
      <p>404</p>
      <nav>
        <Link to="/">Go to the home page</Link>
      </nav>
    </>
  );
}

