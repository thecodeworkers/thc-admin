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
            este correo electronico {props.email}
          </p>
        </div>
        <h5>Are you a returning customer?</h5>
        <div style={{ marginBottom: "15px" }}>
          <p style={{ marginBottom: "4px" }}>Sign-In</p>
          <p style={{ marginBottom: "4px" }}> Forgot your password?</p>
        </div>
        <h5>New Customer</h5>
        <div style={{ marginBottom: "15px" }}>
          <span>
            Create a new account with a{" "}
            <span className="_url-styles" onClick={() => props.reRouting(true)}>
              different e-mail address
            </span>
          </span>
        </div>
      </div>
    </CCardBody>
  );
};

export default DuplicateUserForm;
