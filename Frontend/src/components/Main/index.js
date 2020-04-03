import React, { useEffect, useState } from "react";
import { Container, Row, Col, Button, Alert } from "react-bootstrap";
import { FaGrinBeamSweat, FaCopy } from "react-icons/fa";

import copy from "copy-to-clipboard";
import { Random } from "random-js";

import "./styles.css";
import "bootstrap/dist/css/bootstrap.min.css";

import api from "../../services/api";

export default function Footer() {
  const [excuses, setExcuses] = useState([]);
  const [alert, setAlert] = useState();
  const [excuseDraw, setExcuseDraw] = useState();

  const random = new Random();

  useEffect(() => {
    api.get("excuses").then(response => {
      setExcuses(response.data);
    });
  }, []);

  function showAlert() {
    setAlert(
      <Alert variant="success">Copiado para a área de transferência</Alert>
    );
    setTimeout(() => setAlert(), 3000);
  }

  async function copyToClipboard(text) {
    await copy(`${text}`);
    showAlert();
  }

  function drawExcuse() {
    const value = random.integer(0, excuses.length);
    let item = excuses[value]
    setExcuseDraw(
      <div className="excuse">
        <p>{item.excuse}</p>
        <Button onClick={() => copyToClipboard(item.excuse)}>
          <FaCopy /> Copiar
        </Button>
      </div>
    );
  }

  return (
    <Container fluid className="container-main">
      <div className="alert">{alert}</div>
      <Row>
        <Col sm>
          <div className="small-card-content">
            <div className="icon-top">
              <FaGrinBeamSweat />
            </div>
            <p>
              Cansado de sempre usar a mesma desculpa para fugir de um
              compromisso ou tentar explicar o motivo do seu esquecimento?
            </p>
            <p>
              Bem Vindo ao Excuse Generator, clique em gerar desculpa e tenha a
              sua disposição um arsenal de opções para usar naquela hora
              necessária.
            </p>

            <Button size="lg" onClick={() => drawExcuse()}>Gerar Desculpa</Button>
            {excuseDraw}
          </div>
        </Col>
        <Col sm>
          <div className="big-card-content">
            <h1>O Banco de Desculpas</h1>

            <section className="excuse-container">
              {excuses.map(item => (
                <div key={item.id} className="excuse">
                  <p>{item.excuse}</p>
                  <Button onClick={() => copyToClipboard(item.excuse)}>
                    <FaCopy /> Copiar
                  </Button>
                </div>
              ))}
            </section>
          </div>
        </Col>
      </Row>
    </Container>
  );
}
