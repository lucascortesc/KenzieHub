import { StyledForm } from "./styles";
import { Logo } from "../../Logo";
import { Container } from "./styles";

import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

import axios from "axios";

import toast, { Toaster } from "react-hot-toast";

import { TextField } from "@mui/material";
import { useHistory } from "react-router-dom";

export const Login = () => {
  const history = useHistory();

  const formSchema = yup.object().shape({
    email: yup.string().required("Campo obrigatório").email("Email inválido"),
    password: yup.string().required("Campo obrigatório"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  const onSubmit = async (data) => {
    const response = await axios
      .post("https://kenziehub.herokuapp.com/sessions", data)
      .catch((err) =>
        toast.error("Usuário não encontrado", {
          style: {
            background: "#333",
            color: "white",
          },
        })
      );

    if (response.data) {
      const { token } = response.data;

      localStorage.setItem("token", token);
      localStorage.setItem("userData", JSON.stringify(response.data.user));

      toast.success("Login feito com sucesso\n Redirecionando para HomePage", {
        style: {
          background: "#333",
          color: "white",
        },
        duration: 2999,
      });

      setTimeout(() => {
        history.push("/");
      }, 3000);
    }
  };

  const handleCadastrar = () => {
    history.push("/register");
  };

  return (
    <Container>
      <div>
        <Toaster position="top-right" />
      </div>
      <Logo />
      <StyledForm onSubmit={handleSubmit(onSubmit)}>
        <h1>Login</h1>

        <div className="container__Input">
          <span className="erro">{errors.email?.message}</span>
          <TextField
            variant="filled"
            label="E-mail"
            sx={{ height: 48 }}
            margin="dense"
            {...register("email")}
            error={!!errors.email}
          />
        </div>

        <div className="container__Input">
          <span className="erro">{errors.password?.message}</span>
          <TextField
            variant="filled"
            label="Senha"
            sx={{ height: 48 }}
            margin="dense"
            type="password"
            {...register("password")}
            error={!!errors.password}
          />
        </div>

        <button type="submit">Entrar</button>

        <p>Ainda não possui uma conta?</p>

        <h2 className="cadastrar" onClick={() => handleCadastrar()}>
          Cadastre-se
        </h2>
      </StyledForm>
    </Container>
  );
};
