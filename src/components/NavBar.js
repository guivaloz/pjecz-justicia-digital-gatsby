import * as React from "react";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";

import * as navbarStyles from "../styles/modules/navbar.module.css";

const NavBar = () => {
  return (
    <header className="d-flex flex-wrap justify-content-center p-3 mb-5 border-bottom">
      <Link
        to="/"
        className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none"
      >
        <StaticImage
          src="../images/logotipo.png"
          alt="PJECZ"
          layout="fixed"
          width={350}
        />
      </Link>
      <ul className="nav nav-pills mt-2">
        <li className="nav-item">
          <Link
            to="/"
            className={navbarStyles.navbarLink}
            activeClassName={navbarStyles.navbarLinkActive}
          >
            Inicio
          </Link>
        </li>
        <li className="nav-item">
          <Link
            to="/privacy_policy"
            className={navbarStyles.navbarLink}
            activeClassName={navbarStyles.navbarLinkActive}
          >
            Política de Privacidad
          </Link>
        </li>
        <li className="nav-item">
          <Link
            to="/service_terms"
            className={navbarStyles.navbarLink}
            activeClassName={navbarStyles.navbarLinkActive}
          >
            Condiciones del Servicio
          </Link>
        </li>
        <li className="nav-item">
          <Link
            to="/contact"
            className={navbarStyles.navbarLink}
            activeClassName={navbarStyles.navbarLinkActive}
          >
            Contacto
          </Link>
        </li>
      </ul>
    </header>
  );
};

export default NavBar;
