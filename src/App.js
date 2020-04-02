import React from 'react';
import logo from './logo.svg';
import './App.css';
import styled from "styled-components";

import Pattern1 from "./patterns/Pattern1";

const S = {}

S.Container = styled.div`
  background-color: grey;
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
`

S.Grid = styled.div`
  height: 70vh;
  width: 70vh;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr; 
  grid-template-rows: 1fr 1fr 1fr; 
  border: solid red 3px;
  box-sizing: border-box;


`

function App() {
  return (
    <S.Container className="App">
      <S.Grid>
        <Pattern1></Pattern1>
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />

      </S.Grid>

    </S.Container>
  );
}

export default App;
