import React, { useState } from "react";
import { Button } from "react-bootstrap";

import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css";

import Contribution from "../Contribution";

export default function Header() {
  const [contribution, setContribution] = useState();
  return (
    <header className="header-container">
      <h1>Excuse Generator</h1>
      <Button onClick={() => setContribution(<Contribution />)}>
        Enviar desculpa
      </Button>
      {contribution}
    </header>
  );
}
