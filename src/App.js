import React from 'react';
import logo from './logo.svg';
import './App.css';
import styled from 'styled-components';
import Block from './Components/Block';
import Header from './Components/Header'
import About from './Components/About';
import MoreInfo from './Components/MoreInfo';
const Layout = styled.div`
  
`;

function App() {
  return (
    <Layout>
        <Header/>
        <About/>
    </Layout>
  );
}

export default App;
