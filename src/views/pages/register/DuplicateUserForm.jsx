import React, { useEffect } from "react";
import { CCardBody } from "@coreui/react";
import "./regis_styles.css";

const DuplicateUserForm = (props) => {
  return (
    <CCardBody className="p-4">
      <div className="_duplicate-user-body">
        <div style={{ marginBottom: "15px" }}>
          <h2>Usuario ya existe!</h2>
          <p>
            Usted indicó que es un usuario nuevo, pero una cuenta ya existe con
            este correo electrónico <strong>{props.email}</strong>
          </p>
        </div>
        <h5>Eres un usuario existente?</h5>
        <div style={{ marginBottom: "15px" }}>
          <p style={{ marginBottom: "4px" }}>Ingresa</p>
          <p style={{ marginBottom: "4px" }}>Olvidaste tu contraseña?</p>
        </div>
        <h5>Nuevo Usuario</h5>
        <div style={{ marginBottom: "15px" }}>
          <span>
            Crea una cuenta nueva con otro{" "}
            <span className="_url-styles" onClick={() => props.reRouting(true)}>
              correo electrónico distinto
            </span>
          </span>
        </div>
      </div>
    </CCardBody>
  );
};

export default DuplicateUserForm;
