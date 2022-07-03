import { Background, Modal, StyledForm } from "./styles";

import { TextField } from "@mui/material";
import { Select } from "@mui/material";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";

import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

import toast from "react-hot-toast";

import { useState } from "react";

import axios from "axios";

export const AddTech = ({ token, dataApi, setDataApi, handleClose }) => {
  const [status, setStatus] = useState("Iniciante");

  const handleChange = (event) => {
    setStatus(event.target.value);
  };

  const formSchema = yup.object().shape({
    title: yup.string().required("Campo obrigatório"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  const onSubmit = async (data) => {
    const tech = { ...data, status: status };

    async function setData() {
      axios
        .post(`https://kenziehub.herokuapp.com/users/techs`, tech, {
          headers: { Authorization: `Bearer ${token}` },
        })
        .then((res) => {
          setDataApi([...dataApi, res.data]);
          handleClose();
          toast.success("Tecnologia cadastrada com sucesso!", {
            style: {
              background: "#333",
              color: "white",
            },
          });
        })
        .catch((err) =>
          toast.error("Tecnologia já cadastrada", {
            style: {
              background: "#333",
              color: "white",
            },
          })
        );
    }

    setData();
  };

  return (
    <Background>
      <Modal>
        <div className="container__HeaderModal">
          <h1>Cadastrar Tecnologia</h1>
          <p onClick={() => handleClose()}>X</p>
        </div>

        <StyledForm onSubmit={handleSubmit(onSubmit)}>
          <div className="container__Input">
            <span className="erro">{errors.title?.message}</span>
            <TextField
              variant="filled"
              label="Nome"
              sx={{ height: 48 }}
              margin="dense"
              {...register("title")}
              error={!!errors.title}
            />
          </div>

          <div className="container__Input">
            <InputLabel id="SelecionarModulo">Selecionar módulo</InputLabel>
            <Select
              labelId="SelecionarModulo"
              label="Selecionar módulo"
              sx={{ height: 48 }}
              margin="dense"
              value={status}
              onChange={handleChange}
            >
              <MenuItem value={"Iniciante"}>Iniciante</MenuItem>
              <MenuItem value={"Intermediário"}>Intermediário</MenuItem>
              <MenuItem value={"Avançado"}>Avançado</MenuItem>
            </Select>
          </div>

          <button type="submit">Cadastrar Tecnologia</button>
        </StyledForm>
      </Modal>
    </Background>
  );
};
