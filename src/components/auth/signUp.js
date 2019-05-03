import React from "react";
import { graphql } from "react-apollo";
import gql from "graphql-tag";

import { Box, Title, Input, Button, Link } from "../commons/style";

function NewUser(props) {
  return (
    <Box>
      <form autoComplete={"false"}>
        <Title>Registre-se</Title>
        <Input type="text" placeholder={"Usuario"} autoComplete={"false"} />
        <Input type="text" placeholder={"Email"} autoComplete={"false"} />
        <Input type="password" placeholder={"Senha"} />
        <Button>Registrar-se</Button>
        <Button>Cancelar</Button>
      </form>
    </Box>
  );
}

const UserQuery = gql`
  query {
    allUsuarios {
      id
      email
      nome
    }
  }
`;

export default graphql(UserQuery, { name: "Users" })(NewUser);
