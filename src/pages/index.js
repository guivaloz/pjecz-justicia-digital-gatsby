import * as React from "react";
import Layout from "../components/Layout";
import { StaticImage } from "gatsby-plugin-image";

import * as indexStyles from "../styles/modules/index.module.css";
import * as videoStyles from "../styles/modules/video.module.css";

const IndexPage = () => {
  return (
    <Layout>
      <div className="px-4 py-4 my-5 text-center">
        <h1 className="display-5 fw-bold">Justicia Digital</h1>
        <div className="col-lg-6 mx-auto">
          <p className="lead mb-2">
            Bienvenido a los sistemas de información del Poder Judicial del
            Estado de Coahuila de Zaragoza.
          </p>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-6 mx-auto">
          <div
            className={`card mb-4 border-secondary text-center ${indexStyles.bgCard}`}
          >
            <StaticImage
              src="../images/card-plataforma-web.svg"
              alt="Plataforma Web"
              layout="constrained"
            />
            <div className="card-body">
              <h2 className="card-title">Plataforma Web</h2>
              <p className="card-text">
                Consulte y administre lo que se publica en{" "}
                <a
                  className="text-white"
                  href="https://www.pjecz.gob.mx/"
                  target="_blank"
                  rel="noreferrer"
                >
                  www.pjecz.gob.mx
                </a><br />
                Para ingresar necesita una cuenta registrada de Google o Microsoft. No usa contraseñas.
              </p>
              <div className="btn-group">
                <a
                  href="https://plataforma-web.justiciadigital.gob.mx/"
                  class="btn btn-primary"
                >
                  Ir a Plataforma Web
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-6 mx-auto">
          <div
            className={`card mb-4 border-secondary text-center ${indexStyles.bgCard}`}
          >
            <StaticImage
              src="../images/card-api-oauth2.svg"
              alt="API OAuth2"
              layout="constrained"
            />
            <div className="card-body">
              <h2 className="card-title">API OAuth2</h2>
              <p className="card-text">
                Haga que su aplicación obtenga la información de forma directa.<br />
                Llene la solicitud de registro para obtener una cuenta de usuario y contraseña.
              </p>
              <div className="btn-group">
                <a
                  href="https://plataforma-web-api-oauth2.justiciadigital.gob.mx/docs"
                  class="btn btn-primary"
                >
                  Ver la documentación
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={videoStyles.videoContainer}>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/LRG-0qOdQSA"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
    </Layout>
  );
};

export default IndexPage;
