import React, { useState } from "react";
import { Button, Form, Alert } from "react-bootstrap";

import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css";

import api from "../../services/api";

export default function Contribution() {
  const [excuse, setExcuse] = useState("");
  const [author, setAuthor] = useState("");
  const [display, setDisplay] = useState("");
  const [alert, setAlert] = useState();

  async function sendContribution(e) {
    e.preventDefault();

    setAlert(<Alert variant="primary">Processando....</Alert>);

    let data = {
      excuse,
      author
    };

    try {
      await api.post("contributions/create", data);

      setAlert(
        <Alert variant="success">Contribuição enviado com sucesso</Alert>
      );
      setTimeout(() => {
          setAlert()
          setDisplay("none")}, 3000);
    } catch (error) {
      setAlert(
        <Alert variant="danger">Algum erro ocorreu, tente novamente</Alert>
      );
    }
  }

  return (
    <div className="contribution-container" style={{ display }}>
      <div className="alert">{alert}</div>

      <form onSubmit={sendContribution}>
        <textarea
          placeholder="Digite a desculpa"
          value={excuse}
          onChange={e => setExcuse(e.target.value)}
        />

        <input
          type="text"
          placeholder="Digite o seu nome"
          value={author}
          onChange={e => setAuthor(e.target.value)}
        />

        <Form.Check
          type="checkbox"
          className="checkbox"
          label={`Não quero me indentificar`}
          onChange={e => setAuthor("Desconhecido")}
        />

        <Button type="submit" variant="primary">
          Contribuir
        </Button>
        <span onClick={() => {setDisplay("none")}}>Voltar</span>
      </form>
    </div>
  );
}
