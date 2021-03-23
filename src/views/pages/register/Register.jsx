import React, { useEffect, useState } from "react";
import * as Yup from "yup";
import { Popover } from "react-bootstrap";
import { Formik, Form, Field } from "formik";
import {
  CButton,
  CCard,
  CCardBody,
  CCardFooter,
  CCol,
  CContainer,
  CInputGroupPrepend,
  CRow,
} from "@coreui/react";
import CIcon from "@coreui/icons-react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { registration, getRoles } from "../../../store/actions";
import Loading from "../../../reusable/spinners/beatloader";
import {
  FormInputField,
  ErrorMessageSpace,
} from "../../../reusable/form/input";
import "./regis_styles.css";

const popover = (
  <Popover.Content>
    <div>
      <p>1. Min 8 character</p>
      <p>2. Upper Case Characters (A-Z)</p>
      <p>3. Lower Case Characters (a-z)</p>
      <p>4. Numbers (0-9)</p>
      <p>5. Special Characters (e.g., ! @ # $)</p>
      <p>6. Does not include User name name, email</p>
    </div>
  </Popover.Content>
);

const popoverContent = [popover, true, "right"];

const Register = (props) => {
  const { action, registration, getRoles } = props;

  const [fetchData, setFetchData] = useState(false);

  const loadData = () => {
    if (getRoles.result === null || getRoles.errors) action.getRoles();
    setTimeout(() => {
      setFetchData(true);
    }, 2000);
  };

  useEffect(() => {
    loadData();
  });

  const postParams = (values, resetForm) => {
    action.registration(values);
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
    <div className="c-app c-default-layout flex-row align-items-center">
      <CContainer>
        <CRow className="justify-content-center">
          <CCol md="9" lg="7" xl="6">
            <CCard className="mx-4">
              <Formik
                initialValues={formValues}
                onSubmit={(values, { resetForm }) => {
                  postParams(values, resetForm);
                }}
                validationSchema={registrationSchema}
              >
                {({ handleChange }) => (
                  <CCardBody className="p-4">
                    <h1>Register</h1>
                    <p className="text-muted">Create your account</p>
                    <Form onChange={handleChange}>
                      <FormInputField
                        icon="cil-envelope-closed"
                        name="email"
                        inputType="text"
                        placeholder="Correo Electronico"
                        popover={null}
                      />
                      <ErrorMessageSpace name="email" />
                      <div className="_input-group-mb3">
                        <CInputGroupPrepend>
                          <div className="_input-group-text">
                            <CIcon name="cil-user" />
                          </div>
                        </CInputGroupPrepend>
                        <Field
                          as="select"
                          name="roleType"
                          type="text"
                          placeholder="Tipo de Usuario"
                          className="_dropdown-space"
                        >
                          <option defaultValue>Tipo de Usuario</option>
                          {getRoles.result.map((res) => {
                            if (res.type !== "Admin") {
                              return (
                                <option key={res.id} value={res.type}>
                                  {res.type}
                                </option>
                              );
                            }
                            return null;
                          }, {})}
                        </Field>
                      </div>
                      <ErrorMessageSpace name="roleType" />
                      <FormInputField
                        icon="cil-lock-locked"
                        name="password"
                        inputType="password"
                        placeholder="Contraseña"
                        popover={popoverContent}
                      />
                      <ErrorMessageSpace name="password" />
                      <FormInputField
                        icon="cil-lock-locked"
                        name="confirmPassword"
                        inputType="password"
                        placeholder="Contraseña"
                        popover={null}
                      />
                      <ErrorMessageSpace name="confirmPassword" />
                      <CButton type="submit" color="success" block>
                        Create Account
                      </CButton>
                    </Form>
                  </CCardBody>
                )}
              </Formik>
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
