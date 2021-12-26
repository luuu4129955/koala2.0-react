import Layout from 'components/Layout';
import Nav from 'components/Nav';
import React from 'react';
import {Routes, Route} from 'react-router-dom';
import styled from 'styled-components';
import Money from 'views/Money';
import NoMatch from 'views/NoMatch';
import Statistics from 'views/Statistics';
import Tags from 'views/Tags';

export default function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<Money/>}/>
          <Route path="money" element={<Money/>}/>
          <Route path="labels" element={<Tags/>}/>
          <Route path="statistics" element={<Statistics/>}/>
          <Route path="*" element={<NoMatch path="*"/>}/>
        </Route>
      </Routes>
    </div>
  );
}

