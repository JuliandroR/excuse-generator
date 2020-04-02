import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { FaGrinBeamSweat, FaCopy } from "react-icons/fa";

import "./styles.css";

export default function Footer() {
  return (
    <Container fluid className="container-main">
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

            <Button size="lg">Gerar Desculpa</Button>
          </div>
        </Col>
        <Col sm>
          <div className="big-card-content">

            <h1>O Banco de Desculpas</h1>

            <section className="excuse-container">
              <div className="excuse">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
                  aut debitis dolore, nihil ad laboriosam, optio sit quia
                  perferendis
                </p>
                <Button>
                  <FaCopy />
                  Copiar
                </Button>
              </div>

              <div className="excuse">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
                  aut debitis dolore, nihil ad laboriosam, optio sit quia
                  perferendis
                </p>
                <Button>
                  <FaCopy />
                  Copiar
                </Button>
              </div>
              <div className="excuse">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
                  aut debitis dolore, nihil ad laboriosam, optio sit quia
                  perferendis
                </p>
                <Button>
                  <FaCopy />
                  Copiar
                </Button>
              </div>
              <div className="excuse">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
                  aut debitis dolore, nihil ad laboriosam, optio sit quia
                  perferendis
                </p>
                <Button>
                  <FaCopy />
                  Copiar
                </Button>
              </div>
              <div className="excuse">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
                  aut debitis dolore, nihil ad laboriosam, optio sit quia
                  perferendis
                </p>
                <Button>
                  <FaCopy />
                  Copiar
                </Button>
              </div>
              <div className="excuse">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
                  aut debitis dolore, nihil ad laboriosam, optio sit quia
                  perferendis
                </p>
                <Button>
                  <FaCopy />
                  Copiar
                </Button>
              </div>
              <div className="excuse">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
                  aut debitis dolore, nihil ad laboriosam, optio sit quia
                  perferendis
                </p>
                <Button>
                  <FaCopy />
                  Copiar
                </Button>
              </div>
              <div className="excuse">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
                  aut debitis dolore, nihil ad laboriosam, optio sit quia
                  perferendis
                </p>
                <Button>
                  <FaCopy />
                  Copiar
                </Button>
              </div>
              <div className="excuse">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
                  aut debitis dolore, nihil ad laboriosam, optio sit quia
                  perferendis
                </p>
                <Button>
                  <FaCopy />
                  Copiar
                </Button>
              </div>
              <div className="excuse">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
                  aut debitis dolore, nihil ad laboriosam, optio sit quia
                  perferendis
                </p>
                <Button>
                  <FaCopy />
                  Copiar
                </Button>
              </div>
              <div className="excuse">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
                  aut debitis dolore, nihil ad laboriosam, optio sit quia
                  perferendis
                </p>
                <Button>
                  <FaCopy />
                  Copiar
                </Button>
              </div>
            </section>
          </div>
        </Col>
      </Row>
    </Container>
  );
}
