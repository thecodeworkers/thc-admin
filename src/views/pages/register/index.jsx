import React, { useEffect, useState } from "react";
import * as Yup from "yup";
import {
  CButton,
  CCard,
  CCardFooter,
  CCol,
  CContainer,
  CRow,
} from "@coreui/react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { registration, getRoles } from "../../../store/actions";
import Loading from "../../../reusable/spinners/beatloader";
import RegisterForm from "./RegisterForm";
import DuplicateUserForm from "./DuplicateUserForm";
import "./regis_styles.css";

const Register = (props) => {
  const { action, registration, getRoles } = props;

  const [fetchData, setFetchData] = useState(false);

  const [duplicateUser, setDuplicateUser] = useState({
    isDuplicate: true,
    email: "",
  });

  const loadData = () => {
    if (getRoles.result === null || getRoles.errors) action.getRoles();
    setTimeout(() => {
      setFetchData(true);
    }, 2000);
  };

  const handleUserChange = (name, value) => {
    setDuplicateUser((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const rerouteToRegisterForm = (value) => {
    if (value === true) setDuplicateUser({ isDuplicate: false, email: "" });
  };

  useEffect(() => {
    const checkRegistrationResponse = () => {
      if (registration.error != null)
        if (registration.error.status === 422) {
          handleUserChange("isDuplicate", true);
          registration.error = null;
        }
    };
    checkRegistrationResponse();
  }, [registration]);

  useEffect(() => {
    loadData();
  });

  const postParams = (values, resetForm) => {
    action.registration(values);
    handleUserChange("email", values.email);
    resetForm({ values: "" });
  };

  const formValues = {
    email: "",
    roleType: "",
    password: "",
    confirmPassword: "",
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
              {duplicateUser.isDuplicate ? (
                <DuplicateUserForm
                  email={duplicateUser.email}
                  reRouting={rerouteToRegisterForm}
                />
              ) : (
                <RegisterForm
                  formValues={formValues}
                  postParams={postParams}
                  registrationSchema={registrationSchema}
                  getRolesArray={getRoles.result}
                />
              )}
              <CCardFooter className="p-4">
                <CRow>
                  <CCol xs="12" sm="6">
                    <CButton className="btn-facebook mb-1" block>
                      <span>facebook</span>
                    </CButton>
                  </CCol>
                  <CCol xs="12" sm="6">
                    <CButton className="btn-twitter mb-1" block>
                      <span>twitter</span>
                    </CButton>
                  </CCol>
                </CRow>
              </CCardFooter>
            </CCard>
          </CCol>
        </CRow>
      </CContainer>
    </div>
  ) : (
    <Loading color="#ff0000" />
  );
};

const mapStateToProps = ({ registration, getRoles }) => {
  return {
    registration,
    getRoles,
  };
};

const mapDispatchToProps = (dispatch) => {
  const actions = {
    registration,
    getRoles,
  };
  return {
    action: bindActionCreators(actions, dispatch),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Register);
