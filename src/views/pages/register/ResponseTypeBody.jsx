import React from "react";
import { CCardFooter } from "@coreui/react";

const DuplicateUserBody = (props) => (
  <>
    <div style={{ marginBottom: "15px" }}>
      <h2>Usuario ya existe!</h2>
      <p>
        Usted indicó que es un usuario nuevo, pero una cuenta ya existe con este
        correo electrónico <strong>{props.email}</strong>
      </p>
    </div>
    <h5>Eres un usuario existente?</h5>
    <div style={{ marginBottom: "15px" }}>
      <p style={{ marginBottom: "4px" }}>
        <span className="_url-styles" onClick={() => props.login("/login")}>
          Ingresa
        </span>
      </p>
      <p style={{ marginBottom: "4px" }}>
        <span className="_url-styles" onClick={() => {}}>
          Olvidaste tu contraseña?
        </span>
      </p>
      <p style={{ marginBottom: "4px" }}>
        <span className="_url-styles" onClick={() => {}}>
          Reenviar link de confirmación?
        </span>
      </p>
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
  </>
);

const RegisterSuccessBody = (props) => (
  <>
    <div style={{ padding: "4px" }}>
      <div style={{ marginBottom: "15px" }}>
        <h4 style={{ textAlign: "center" }}>
          Revisa tu correo electronicó para terminar el registro
        </h4>
      </div>
      <div style={{ marginBottom: "15px" }}>
        <div className="_mail-image" />
        <div style={{ textAlign: "left" }}>
          <h6>Te hemos mandado un link a</h6>
        </div>
        <p className="_mail-message">{props.email}</p>
      </div>
    </div>
    <CCardFooter className="p-4">
      <div className="_success-body-footer ">
        <p className="_success-body-footer-p ">Reenviar link de registro</p>
        <p>Cambiar correo electrónico</p>
      </div>
    </CCardFooter>
  </>
);

export { DuplicateUserBody, RegisterSuccessBody };
