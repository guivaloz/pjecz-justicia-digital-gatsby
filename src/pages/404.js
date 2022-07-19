import * as React from "react";
import { Link } from "gatsby";

const NotFoundPage = () => {
  return (
    <main>
      <title>Not found</title>
      <h1>Página no encontrada</h1>
      <p>
        No existe la página que está solicitando.
        <br />
        {process.env.NODE_ENV === "development" ? (
          <>
            <br />
            Revise las páginas definidas en <code>src/pages/</code>.
            <br />
          </>
        ) : null}
        <br />
        <Link to="/">Ir al inicio.</Link>.
      </p>
    </main>
  );
};

export default NotFoundPage;
