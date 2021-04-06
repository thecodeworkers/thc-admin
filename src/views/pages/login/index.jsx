import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { login } from "../../../store/actions";

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
import ErrorAlert from "../../../reusable/errors/ErrorAlert";
import { TitleSpace } from "../../../reusable/form/FormItem";
import "../register/regis_styles.css";
import "./login_styles.css";

const ErrorLink = (props) => {
  return props.linkType === 404 ? (
    <Link to="/register">
      <span className="_url-styles"> Registrate!</span>
    </Link>
  ) : props.linkType === 403 ? (
    <span className="_url-styles"> Reenviar Link</span>
  ) : props.linkType === 401 ? (
    <span className="_url-styles"> Olvidaste tu contraseña?</span>
  ) : null;
};

const Login = (props) => {
  const { history } = props;

  const [showAlert, setShowAlert] = useState(false);

  const [linkType, setLinkType] = useState({ message: "", status: null });

  const [isLoading, setIsLoading] = useState(false);

  const loginData = useSelector((state) => state.loginState);

  const dispatch = useDispatch();

  const displayAlert = () => {
    setShowAlert(true);
    setIsLoading(false);
  };

  useEffect(() => {
    if (loginData.error != null) {
      displayAlert();
      setLinkType({
        message: loginData.error.data.result,
        status: loginData.error.status,
      });
      loginData.error = null;
    }
  }, [loginData, showAlert]);

  useEffect(() => {
    if (loginData.result != null) {
      history.push("/dashboard");
      setIsLoading(false);
      loginData.result = null;
    }
  }, [loginData, history]);

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
    setLinkType({ message: "", status: null });
    setShowAlert(false);
    setIsLoading(true);
    dispatch(login(values));
    resetForm({ values: "" });
  };

  const formValues = {
    email: "",
    password: "Cimabel1$",
  };

  return (
    <div className="c-app c-default-layout flex-column align-items-center">
      <TitleSpace />
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
                  {showAlert ? (
                    <div
                      style={{
                        marginLeft: "17px",
                        marginTop: "5px",
                      }}
                    >
                      <ErrorAlert
                        class="_zero-margin"
                        message={linkType.message}
                        link={<ErrorLink linkType={linkType.status} />}
                      />
                    </div>
                  ) : null}
                  <LoginForm
                    formValues={formValues}
                    postParams={postParams}
                    loginSchema={loginSchema}
                    isLoading={isLoading}
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
                        Registrate Ahora!
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
