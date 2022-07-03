import { Container } from "./styles";

export const Card = ({ Tech, handleOpenRemove, setRemoveTech }) => {
  return (
    <Container
      onClick={() => {
        handleOpenRemove();
        setRemoveTech(Tech);
      }}
    >
      <h1>{Tech.title}</h1>
      <h2>{Tech.status}</h2>
    </Container>
  );
};
