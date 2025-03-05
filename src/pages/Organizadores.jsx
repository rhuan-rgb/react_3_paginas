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


function listOganizadores() {
  const [events, setEvents] = useState([]);

  async function getOrganizadores() {
    //chamada da api
    await api.getOrganizadores().then(
      (response) => {
        console.log(response.data.organizadores);
        setEvents(response.data.organizadores);
      },
      (error) => {
        console.log("Erro:", error);
      }
    );
  }

  const list_organizadores = events.map((events) => {
    return (
      <TableRow key={events.id_organizador}>
        <TableCell align="center">{events.nome}</TableCell>
        <TableCell align="center">{events.email}</TableCell>
        <TableCell align="center">{events.telefone}</TableCell>
      </TableRow>
    );
  });

  useEffect(() => {
    //Aqui deve-se criar ou chamar uma função
    getOrganizadores();
  }, []);

  return (
    <div>
      <h5>Lista de organizadores</h5>
      <TableContainer component={Paper} style={{ margin: "2px" }}>
        <Table size="small">
          <TableHead style={{ backgroundColor: "brown", borderStyle: "solid" }}>
            <TableRow>
              <TableCell align="center">Nome</TableCell>
              <TableCell align="center">Email</TableCell>
              <TableCell align="center">Telefone</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>{list_organizadores}</TableBody>
        </Table>
      </TableContainer>
      <Button component={Link} variant="contained" to="/" style={{display:"flex", gap:'10px', marginBottom: '10px'}}>
        sair
      </Button>
    </div>
  );
}

export default listOganizadores;
