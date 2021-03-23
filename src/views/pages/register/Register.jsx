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
  CInputGroup,
  CInputGroupPrepend,
  CInputGroupText,
  CPopover,
  CRow,
} from "@coreui/react";
import CIcon from "@coreui/icons-react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { registration, getRoles } from "../../../store/actions";
import Spinner from "../../../reusable/spinner";
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
      .email()
      .required("Please enter email")
      .matches(
        /^[\S]+@([\w-]+\.)+[\w-]{2,4}$/,
        "Please enter a valid email address"
      ),
    roleType: Yup.string().required("Please select profession"),
    password: Yup.string()
      .min(8, "Password has to be at least 8 characters")
      .required("Please enter password")
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[~`!@#$%^&*+=_:;”’?/<>,./|]).*$/,
        "Invalid password. Please check rules"
      ),
    confirmPassword: Yup.string()
      .min(8, "Invalid Password")
      .required("Please enter password")
      .test("passwords-match", "Passwords must match", function (value) {
        return this.parent.password === value;
      }),
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
                {({ errors, touched, handleBlur, handleChange, values }) => (
                  <CCardBody className="p-4">
                    <h1>Register</h1>
                    <p className="text-muted">Create your account</p>
                    <Form onChange={handleChange}>
                      <CInputGroup className="mb-3">
                        <CInputGroupPrepend>
                          <CInputGroupText>
                            <CIcon name="cil-envelope-closed" />
                          </CInputGroupText>
                        </CInputGroupPrepend>
                        <Field
                          className="form-control"
                          name="email"
                          type="text"
                          placeholder="Correo Electronico"
                        />
                      </CInputGroup>
                      <div className="_input-group-mb3">
                        <CInputGroupPrepend>
                          <div className="_input-group-text">
                            <CIcon name="cil-user" />
                          </div>
                        </CInputGroupPrepend>
                        <Field
                          as="select"
                          name="roleType"
                          placeholder="Tipo de Usuario"
                          className="_dropdown-space"
                        >
                          <option>Tipo de Usuario</option>
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
                      <CInputGroup className="mb-3">
                        <CInputGroupPrepend>
                          <CInputGroupText>
                            <CIcon name="cil-lock-locked" />
                          </CInputGroupText>
                        </CInputGroupPrepend>
                        <CPopover
                          placement="right"
                          content={popover}
                          trigger="click"
                        >
                          <Field
                            className="form-control"
                            name="password"
                            type="password"
                            placeholder="Contraseña"
                          />
                        </CPopover>
                      </CInputGroup>
                      <CInputGroup className="mb-3">
                        <CInputGroupPrepend>
                          <CInputGroupText>
                            <CIcon name="cil-lock-locked" />
                          </CInputGroupText>
                        </CInputGroupPrepend>
                        <Field
                          className="form-control"
                          name="confirmPassword"
                          type="password"
                          placeholder="Confirme Contraseña"
                        />
                      </CInputGroup>
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
    <Spinner />
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
