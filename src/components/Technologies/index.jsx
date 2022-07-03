import { Card } from "../Card";
import { AddTech } from "../AddTech";
import { RemoveTech } from "../RemoveTech";

import { TechContainer, ListContainer, Container } from "./styles";

import AddBoxIcon from "@mui/icons-material/AddBox";

import { useHistory } from "react-router-dom";
import { useEffect, useState } from "react";

import { Toaster } from "react-hot-toast";

import axios from "axios";

export const Technologies = () => {
  const history = useHistory();

  if (!localStorage.getItem("userData")) {
    history.push("/login");
  }

  const [openAdd, setOpenAdd] = useState(false);
  const handleOpenAdd = () => setOpenAdd(true);
  const handleCloseAdd = () => setOpenAdd(false);

  const [openRemove, setOpenRemove] = useState(false);
  const handleOpenRemove = (event) => setOpenRemove(true);
  const handleCloseRemove = () => setOpenRemove(false);

  const { id } = JSON.parse(localStorage.getItem("userData"));
  const token = localStorage.getItem("token");

  const [dataApi, setDataApi] = useState("");
  const [removeTech, setRemoveTech] = useState("");

  useEffect(() => {
    async function getData() {
      axios
        .get(`https://kenziehub.herokuapp.com/users/${id}`, {
          headers: { Authorization: `Bearer ${token}` },
        })
        .then((response) => {
          setDataApi(response.data.techs);
        });
    }

    getData();
  }, []);

  return (
    <Container>
      <div>
        <Toaster position="top-right" />
      </div>
      <TechContainer>
        <h1>Tecnologias</h1>
        <AddBoxIcon onClick={() => handleOpenAdd()} sx={{ color: "white" }} />
      </TechContainer>

      <ListContainer>
        {dataApi &&
          dataApi.map((el) => {
            return (
              <Card
                Tech={el}
                key={el.id}
                id={el.id}
                handleOpenRemove={handleOpenRemove}
                setRemoveTech={setRemoveTech}
              />
            );
          })}
      </ListContainer>
      {openAdd && (
        <AddTech
          token={token}
          dataApi={dataApi}
          setDataApi={setDataApi}
          handleClose={handleCloseAdd}
        />
      )}
      {openRemove && (
        <RemoveTech
          handleClose={handleCloseRemove}
          removeTech={removeTech}
          dataApi={dataApi}
          setDataApi={setDataApi}
        />
      )}
    </Container>
  );
};
