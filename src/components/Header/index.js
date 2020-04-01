import React from "react";
import { Button } from "react-bootstrap";

import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css";

export default function Header() {
  return (
    <header className="header-container">
      <h1>Excuse Generator</h1>
      <Button>Enviar desculpa</Button>
    </header>
  );
}
