import React from "react";
import { FiGithub, FiChrome } from "react-icons/fi";

import "./styles.css";

export default function Footer() {
  return (
    <footer className="footer-container">
      <span>Desenvolvido por Juliandro Rocha</span>

      <div className="container-social-networks">
        <a href="https://github.com/JuliandroR">
          <FiGithub />
        </a>
        <a href="https://juliandror.github.io">
          <FiChrome />
        </a>
      </div>
    </footer>
  );
}
