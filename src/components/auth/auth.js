import React from "react";
import styled from "styled-components";
import { graphql } from "react-apollo";
import gql from "graphql-tag";

const Auth = props => {
  const Title = styled.h1`
    color: white;
    text-transform: uppercase;
    font-weight: 500;
  `;

  const Input = styled.input`
    background: #191919 !important;
    display: block;
    margin: 20px auto;
    text-align: center;
    border: 2px solid #3498db;
    padding: 14px 10px;
    width: 200px;
    outline: none;
    color: white !important;
    border-radius: 24px;
    transition: 0.25s;

    :focus {
      width: 280px;
      border-color: #2ecc71;
    }
  `;

  const Button = styled.button`
    background: #191919;
    display: block;
    margin: 20px auto;
    text-align: center;
    border: 2px solid #2ecc71;
    padding: 14px 40px;
    outline: none;
    color: white !important;
    border-radius: 24px;
    transition: 0.25s;
    cursor: pointer;

    :hover {
      background: #2ecc71;
    }
  `;

  const Box = styled.div`
    width: 300px;
    padding: 40px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: #191919;
    text-align: center;
  `;
  console.log(props);
  return (
    <Box>
      <form autoComplete={"false"}>
        <Title>Login</Title>
        <Input type="text" placeholder={"Usuario"} autoComplete={"false"} />
        <Input type="password" placeholder={"Senha"} />
        <Button>Login</Button>
      </form>
    </Box>
  );
};

const UserQuery = gql`
  query {
    allUsuarios {
      id
      email
      nome
    }
  }
`;

export default graphql(UserQuery, { name: "Users" })(Auth);
