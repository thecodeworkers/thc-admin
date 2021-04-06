import React, { useEffect, useState } from "react";
import * as Yup from "yup";
import { CCard, CCol, CContainer, CRow } from "@coreui/react";
import { useSelector, useDispatch } from "react-redux";
import { register, getRoles } from "../../../store/actions";
import { Link } from "react-router-dom";
import Loading from "../../../reusable/spinners/beatloader";
import Footer from "../../../reusable/form/Footer";
import RegisterForm from "./RegisterForm";
import ResponseContainer from "./ReponseContainer";
import { DuplicateUserBody, RegisterSuccessBody } from "./ResponseTypeBody";
import "./regis_styles.css";

const Register = (props) => {
  const [fetchData, setFetchData] = useState(false);

  const [isLoading, setIsLoading] = useState(false);

  const [response, setResponse] = useState(false);

  const [email, setEmail] = useState("");

  const rolesData = useSelector((state) => state.roleState);

  const registrationData = useSelector((state) => state.registrationState);

  const dispatch = useDispatch();

  const loadData = () => {
    if (rolesData.result === null || rolesData.errors) dispatch(getRoles());
    setTimeout(() => {
      setFetchData(true);
      registrationData.result = null;
      registrationData.error = null;
    }, 2000);
  };

  const rerouteToRegisterForm = (value) => {
    if (value === true) {
      setResponse(false);
      setEmail("");
      registrationData.result = null;
      registrationData.error = null;
    }
  };

  useEffect(() => {
    loadData();
  });

  useEffect(() => {
    if (registrationData.result != null || registrationData.error != null) {
      setResponse(true);
      setIsLoading(false);
    }
  }, [registrationData]);

  const postParams = (values, resetForm) => {
    setEmail(values.email);
    setIsLoading(true);
    dispatch(register(values));
    resetForm({ values: "" });
  };

  const formValues = {
    email: "",
    roleType: "",
    password: "Cimabel1$",
    confirmPassword: "Cimabel1$",
  };

  const registrationSchema = Yup.object().shape({
    email: Yup.string()
      .email("Por favor ingrese un correo electrónico valido")
      .required("Por favor ingrese correo electrónico")
      .matches(
        /^[\S]+@([\w-]+\.)+[\w-]{2,4}$/,
        "Por favor ingrese un correo electrónico valido"
      ),
    roleType: Yup.string()
      .required("Por favor seleccione que tipo de usuario eres")
      .test(
        "select-real-value",
        "Por favor seleccione que tipo de usuario eres",
        function (value) {
          if (value === "Tipo de Usuario") return false;
          else return true;
        }
      ),
    password: Yup.string()
      .min(8, "La contraseña necesita minimo 8 caracteres")
      .required("Por favor ingrese una contraseña")
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[~`!@#$%^&*+=_:;”’?/<>,./|]).*$/,
        "Contraseña no es valida. Por favor revisar reglas"
      ),
    confirmPassword: Yup.string().test(
      "passwords-match",
      "Contraseña no es igual",
      function (value) {
        if (this.parent.password === undefined) return true;
        return this.parent.password === value;
      }
    ),
  });

  return fetchData ? (
    <div className="c-app c-default-layout flex-column align-items-center">
      <div className="_thc-title">
        <h1>THC</h1>
      </div>
      <CContainer>
        <CRow className="justify-content-center">
          <CCol md="9" lg="7" xl="6">
            <CCard className="mx-4">
              {!response ? (
                <>
                  <RegisterForm
                    formValues={formValues}
                    postParams={postParams}
                    registrationSchema={registrationSchema}
                    getRolesArray={rolesData.result}
                    isLoading={isLoading}
                  />
                  <Footer
                    message={
                      <Link to="/login">
                        <span
                          className="_url-styles"
                          style={{ color: "#768192" }}
                        >
                          Ya tienes una cuenta THC? Ingresa
                        </span>
                      </Link>
                    }
                  />
                </>
              ) : (
                <ResponseContainer
                  body={
                    registrationData.result != null ? (
                      <RegisterSuccessBody email={email} />
                    ) : (
                      <DuplicateUserBody
                        email={email}
                        reRouting={rerouteToRegisterForm}
                      />
                    )
                  }
                />
              )}
            </CCard>
          </CCol>
        </CRow>
      </CContainer>
    </div>
  ) : (
    <Loading color="#ff0000" />
  );
};

// const mapStateToProps = ({ registration, getRoles }) => {
//   return {
//     registration,
//     getRoles,
//   };
// };

// const mapDispatchToProps = (dispatch) => {
//   const actions = {
//     registration,
//     getRoles,
//   };
//   return {
//     action: bindActionCreators(actions, dispatch),
//   };
// };

export default Register;
