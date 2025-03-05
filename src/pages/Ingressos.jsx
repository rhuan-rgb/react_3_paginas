import { useState, useEffect } from "react";
// Imports para criação de tabela
import Table from "@mui/material/Table";
import TableContainer from "@mui/material/TableContainer";

// TableHead é onde colocamos os titulos
import TableHead from "@mui/material/TableHead";

// TableBody é onde colocamos o conteúdo
import TableBody from "@mui/material/TableBody";

import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import Paper from "@mui/material/Paper";
import api from "../axios/axios";
import Button from "@mui/material/Button";
import {Link} from "react-router-dom"


function listIngressos() {
  const [events, setEvents] = useState([]);

  async function getIngressos() {
    //chamada da api
    await api.getIngressos().then(
      (response) => {
        console.log(response.data.events);
        setEvents(response.data.events);
      },
      (error) => {
        console.log("Erro:", error);
      }
    );
  }

  const list_ingressos = events.map((events) => {
    return (
      <TableRow key={events.id_ingresso}>
        <TableCell align="center">{events.preco}</TableCell>
        <TableCell align="center">{events.tipo}</TableCell>
        <TableCell align="center">{events.fk_id_evento}</TableCell>
      </TableRow>
    );
  });

  useEffect(() => {
    //Aqui deve-se criar ou chamar uma função
    getIngressos();
  }, []);

  return (
    <div>
      <h5>Lista de ingressos</h5>
      <TableContainer component={Paper} style={{ margin: "2px" }}>
        <Table size="small">
          <TableHead style={{ backgroundColor: "brown", borderStyle: "solid" }}>
            <TableRow>
              <TableCell align="center">Preço</TableCell>
              <TableCell align="center">Tipo</TableCell>
              <TableCell align="center">Evento</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>{list_ingressos}</TableBody>
        </Table>
      </TableContainer>
      <Button component={Link} variant="contained" to="/" style={{display:"flex", gap:'10px', marginBottom: '10px'}}>
        sair
      </Button>
    </div>
  );
}

export default listIngressos;
