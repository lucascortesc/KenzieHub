import { StyledDiv } from "./styles";

export const WelcomeHome = () => {
  const { name, course_module } = JSON.parse(localStorage.getItem("userData"));

  return (
    <StyledDiv>
      <h1>Olá, {name}</h1>
      <h2>{course_module}</h2>
    </StyledDiv>
  );
};
