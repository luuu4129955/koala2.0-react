import Nav from 'components/Nav';
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
      <Nav />
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

