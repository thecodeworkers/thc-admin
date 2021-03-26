import React from "react";
import { Link } from "react-router-dom";
import * as Yup from "yup";
import {
  CButton,
  CCard,
  CCardBody,
  CCardGroup,
  CCol,
  CContainer,
  CRow,
} from "@coreui/react";
import LoginForm from "./LoginForm";

const Login = (props) => {
  const { action } = props;

  const loginSchema = Yup.object().shape({
    email: Yup.string()
      .email("Por favor ingrese un correo electrónico valido")
      .required("Por favor ingrese correo electrónico")
      .matches(
        /^[\S]+@([\w-]+\.)+[\w-]{2,4}$/,
        "Por favor ingrese un correo electrónico valido"
      ),
    password: Yup.string().required("Por favor ingrese una contraseña"),
  });

  const postParams = (values, resetForm) => {
    // handleUserChange("isLoading", true);
    action.login(values);
    resetForm({ values: "" });
  };

  const formValues = {
    email: "",
    password: "Cimabel1$",
  };

  return (
    <div className="c-app c-default-layout flex-row align-items-center">
      <CContainer>
        <CRow className="justify-content-center">
          <CCol md="8">
            <CCardGroup>
              <CCard className="p-2">
                <CCardBody>
                  <div style={{ marginLeft: "17px" }}>
                    <h1>Acceso</h1>
                    <p className="text-muted">Ingrese a su cuenta</p>
                  </div>
                  <LoginForm
                    formValues={formValues}
                    postParams={postParams}
                    loginSchema={loginSchema}
                  />
                </CCardBody>
              </CCard>
              <CCard
                className="text-white bg-primary py-5 d-md-down-none"
                style={{ width: "44%" }}
              >
                <CCardBody className="text-center">
                  <div>
                    <h2>Registrate!</h2>
                    <p>
                      Si aun no tienes una cuenta con nosotros, hace click en
                      este bottón para que inicies el proceso.
                    </p>
                    <Link to="/register">
                      <CButton
                        color="primary"
                        className="mt-3"
                        active
                        tabIndex={-1}
                      >
                        Register Now!
                      </CButton>
                    </Link>
                  </div>
                </CCardBody>
              </CCard>
            </CCardGroup>
          </CCol>
        </CRow>
      </CContainer>
    </div>
  );
};

export default Login;
