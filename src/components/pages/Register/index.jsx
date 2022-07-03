import { StyledForm, Container, RegisterHeader } from "./styles";
import { Logo } from "../../Logo";

import { TextField } from "@mui/material";
import { Select } from "@mui/material";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";

import { useState } from "react";
import { useHistory } from "react-router-dom";

import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

import axios from "axios";

import toast, { Toaster } from "react-hot-toast";

export const Register = () => {
  const history = useHistory();

  const [modulo, setModulo] = useState(
    "Primeiro módulo (Introdução ao Frontend)"
  );

  const handleChange = (event) => {
    setModulo(event.target.value);
  };

  const formSchema = yup.object().shape({
    name: yup
      .string()
      .required("Campo obrigatório")
      .min(3, "Mínimo caracteres: 3")
      .matches(/^[aA-zZ\s]+$/, "Nome só pode conter letras"),

    email: yup.string().required("Campo obrigatório").email("Email inválido"),

    password: yup
      .string()
      .required("Campo obrigatório")
      .matches(/^(?=.{6,})/, "Senha deve conter no mínimo 6 caracteres"),

    confirmPassword: yup
      .string()
      .required("Campo obrigatório")
      .oneOf([yup.ref("password")], "Senhas diferentes"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  const onSubmit = async (data) => {
    const newUser = {
      ...data,
      bio: "Lorem ipsum dolor emet",
      contact: "null",
      course_module: modulo,
    };

    axios
      .post("https://kenziehub.herokuapp.com/users", newUser)
      .then(() => {
        toast.success(
          "Usuário cadastrado com sucesso\n Redirecionando para página de login",
          {
            style: {
              background: "#333",
              color: "white",
            },
            duration: 2999,
          }
        );

        setTimeout(() => {
          history.push("/login");
        }, 3000);
      })
      .catch((err) =>
        toast.error("Email já cadastrado", {
          style: {
            background: "#333",
            color: "white",
          },
        })
      );
  };

  const handleVoltar = () => {
    history.push("/login");
  };

  return (
    <Container>
      <div>
        <Toaster position="top-right" />
      </div>
      <RegisterHeader>
        <Logo />
        <button onClick={() => handleVoltar()}> Voltar</button>
      </RegisterHeader>
      <StyledForm onSubmit={handleSubmit(onSubmit)}>
        <h1>Crie sua conta</h1>
        <p>Rápido e grátis, vamos nessa</p>

        <div className="container__Input">
          <span className="erro">{errors.name?.message}</span>
          <TextField
            variant="filled"
            label="Nome"
            sx={{ height: 48 }}
            margin="dense"
            {...register("name")}
            error={!!errors.name}
          />
        </div>

        <div className="container__Input">
          <span className="erro">{errors.email?.message}</span>
          <TextField
            variant="filled"
            label="Email"
            sx={{ height: 48 }}
            margin="dense"
            {...register("email")}
            error={!!errors.email}
          />
        </div>

        <div className="container__Input">
          <span className="erro">{errors.password?.message}</span>
          <TextField
            type={"password"}
            variant="filled"
            label="Senha"
            sx={{ height: 48 }}
            margin="dense"
            {...register("password")}
            error={!!errors.password}
          />
        </div>

        <div className="container__Input">
          <span className="erro">{errors.confirmPassword?.message}</span>
          <TextField
            type={"password"}
            variant="filled"
            label="Confirmar Senha"
            sx={{ height: 48 }}
            margin="dense"
            {...register("confirmPassword")}
            error={!!errors.confirmPassword}
          />
        </div>

        <div className="container__Input">
          <InputLabel id="SelecionarModulo">Selecionar módulo</InputLabel>
          <Select
            labelId="SelecionarModulo"
            label="Selecionar módulo"
            sx={{ height: 48 }}
            margin="dense"
            value={modulo}
            onChange={handleChange}
          >
            <MenuItem value={"Primeiro módulo (Introdução ao Frontend)"}>
              Primeiro módulo (Introdução ao Frontend)
            </MenuItem>
            <MenuItem value={"Segundo módulo (Frontend Avançado)"}>
              Segundo módulo (Frontend Avançado)
            </MenuItem>
            <MenuItem value={"Terceiro módulo (Introdução ao Backend)"}>
              Terceiro módulo (Introdução ao Backend)
            </MenuItem>
            <MenuItem value={"Quarto módulo (Backend Avançado)"}>
              Quarto módulo (Backend Avançado)
            </MenuItem>
          </Select>
        </div>

        <button type="submit">Cadastrar</button>
      </StyledForm>
    </Container>
  );
};
