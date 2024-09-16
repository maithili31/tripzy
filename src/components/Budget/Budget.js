import React from 'react'
import styled from "styled-components";
import HomeComponent from "./modules/home";

const Container = styled.div`
  background-color: lightblue;
  color: darkblue;
  display: flex;
  flex-direction: column;
  margin: 0 15px;
  align-items: center;
  height: 100vh;
  width: 98%;
  padding-top: 50px ;
  font-family: Montserrat;
`;

const Header = styled.div`
  background-color: lightblue;
  color: darkblue;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 22px;
  font-size: 25px;
  font-weight: bold;
`;

const Budget = () => {
  return (
    <Container>
      <Header>Expense Tracker</Header>
      <HomeComponent />
    </Container>
  )
}

export default Budget