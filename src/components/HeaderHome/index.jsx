import { Container } from "./styles";
import { Logo } from "../Logo";
import { useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

export const HeaderHome = () => {
  const history = useHistory("");

  const handleSair = () => {
    history.push("/login");
    localStorage.clear();
  };

  return (
    <Container>
      <Logo />
      <button onClick={() => handleSair()}>Sair</button>
    </Container>
  );
};
