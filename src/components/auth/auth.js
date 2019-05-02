import React from "react";
import { graphql } from "react-apollo";
import gql from "graphql-tag";

import {Box, Title, Input, Button} from './style'

function Auth(props) {

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
