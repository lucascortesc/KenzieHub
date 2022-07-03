import { HeaderHome } from "../../HeaderHome";
import { Technologies } from "../../Technologies";
import { WelcomeHome } from "../../WelcomeHome";
import { Container } from "./styles";
import { useHistory } from "react-router-dom/";

export const Home = () => {
  const token = localStorage.getItem("token");
  const history = useHistory();

  if (!token) {
    history.push("/login");
  }

  return (
    <Container>
      <HeaderHome />
      <WelcomeHome />
      <Technologies />
    </Container>
  );
};
