import { Background, Modal, StyledForm } from "../AddTech/styles";
import { ButtonContainer } from "./styles";

import { TextField } from "@mui/material";
import { Select } from "@mui/material";
import { Button } from "@mui/material";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";

import toast from "react-hot-toast";

import axios from "axios";

export const RemoveTech = ({
  handleClose,
  removeTech,
  setDataApi,
  dataApi,
}) => {
  const handleRemove = async () => {
    const token = localStorage.getItem("token");

    axios
      .delete(`https://kenziehub.herokuapp.com/users/techs/${removeTech.id}`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => {
        setDataApi(dataApi.filter(({ id }) => id !== removeTech.id));
        handleClose();
        toast.success("Tecnologia removida com sucesso!", {
          style: {
            background: "#333",
            color: "white",
          },
        });
      });
  };

  return (
    <Background>
      <Modal>
        <div className="container__HeaderModal">
          <h1>Tecnologia Detalhes</h1>
          <p onClick={handleClose}>X</p>
        </div>

        <StyledForm>
          <div className="container__Input">
            <TextField
              disabled
              variant="filled"
              label="Nome do projeto"
              sx={{ height: 48 }}
              margin="dense"
              value={removeTech.title}
            />
          </div>

          <div className="container__Input">
            <InputLabel id="SelecionarModulo">Selecionar módulo</InputLabel>
            <Select
              disabled
              labelId="SelecionarModulo"
              label="Selecionar módulo"
              sx={{ height: 48 }}
              margin="dense"
              value={removeTech.status}
            >
              <MenuItem value={"Iniciante"}>Iniciante</MenuItem>
              <MenuItem value={"Intermediário"}>Intermediário</MenuItem>
              <MenuItem value={"Avançado"}>Avançado</MenuItem>
            </Select>
          </div>
          <ButtonContainer>
            <Button disabled size="small">
              Salvar alterações
            </Button>
            <Button onClick={() => handleRemove()} className="remove">
              Exlcuir
            </Button>
          </ButtonContainer>
        </StyledForm>
      </Modal>
    </Background>
  );
};
