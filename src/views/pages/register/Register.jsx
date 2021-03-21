import React from "react";
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
  CDropdown,
  CDropdownItem,
  CDropdownMenu,
  CDropdownToggle,
  CInputGroup,
  CInputGroupPrepend,
  CInputGroupText,
  CPopover,
  CRow,
} from "@coreui/react";
import CIcon from "@coreui/icons-react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { registration } from "../../../store/actions";

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

const UserDropDown = () => {
  return (
    <CDropdown>
      <CDropdownToggle caret color="info">
        Tipo de Usuario
      </CDropdownToggle>
      <CDropdownMenu>
        <CDropdownItem>Another Action</CDropdownItem>
      </CDropdownMenu>
    </CDropdown>
  );
};

const Register = (props) => {
  const { action, registration } = props;

  const postParams = (values, resetForm) => {
    action.registration(values);
    resetForm({ values: "" });
  };

  const formValues = {
    email: "",
    password: "",
    confirmPassword: "",
  };

  return (
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
              >
                {({ errors, touched, handleBlur, handleChange }) => (
                  <CCardBody className="p-4">
                    <h1>Register</h1>
                    <p className="text-muted">Create your account</p>
                    <Form>
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
                      <CInputGroup className="mb-3">
                        <CInputGroupPrepend>
                          <CInputGroupText>
                            <CIcon name="cil-envelope-closed" />
                          </CInputGroupText>
                        </CInputGroupPrepend>
                        <Field
                          component={UserDropDown}
                          name="roleType"
                          className="form-control"
                          placeholder="Tipo de Usuario"
                        />
                      </CInputGroup>
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
  );
};

const mapStateToProps = ({ registration }) => {
  {
    return {
      registration,
    };
  }
};

const mapDispatchToProps = (dispatch) => {
  const actions = {
    registration,
  };
  return {
    action: bindActionCreators(actions, dispatch),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Register);
