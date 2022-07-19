import * as React from "react";

const Footer = () => {
  return (
    <footer className="mt-auto text-white-50 py-4 text-center">
      <p className="mt-3">
        Sitio Web{" "}
        <a
          className="text-white"
          href="https://www.pjecz.gob.mx/"
          target="_blank"
          rel="noreferrer"
        >
          www.pjecz.gob.mx
        </a>
        . &copy; {new Date().getFullYear()} Todos los derechos reservados.
      </p>
    </footer>
  );
};

export default Footer;
