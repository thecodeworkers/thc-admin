import React from "react";
import { Formik, Form } from "formik";
import { CButton, CCardBody, CRow, CCol } from "@coreui/react";
import {
  FormInputField,
  ErrorMessageSpace,
} from "../../../reusable/form/input";

const LoginForm = (props) => {
  return (
    <Formik
      initialValues={props.formValues}
      onSubmit={(values, { resetForm }) => {
        props.postParams(values, resetForm);
      }}
      validationSchema={props.loginSchema}
    >
      {({ handleChange }) => (
        <CCardBody className="p-3">
          <Form onChange={handleChange}>
            <FormInputField
              icon="cil-envelope-closed"
              name="email"
              inputType="text"
              placeholder="Correo Electronico"
              popover={null}
            />
            <ErrorMessageSpace name="email" />
            <FormInputField
              icon="cil-lock-locked"
              name="password"
              inputType="password"
              placeholder="Contraseña"
              popover={null}
            />
            <ErrorMessageSpace name="password" />
            <CRow>
              <CCol xs="6">
                <CButton type="submit" color="primary" className="px-4">
                  Ingresar
                </CButton>
              </CCol>
              <CCol xs="6" className="text-right">
                <CButton
                  color="link"
                  className="px-0"
                  style={{
                    position: "relative",
                    top: "-10px",
                    textAlign: "right",
                  }}
                >
                  Olvidaste tu contraseña?
                </CButton>
              </CCol>
            </CRow>
          </Form>
        </CCardBody>
      )}
    </Formik>
  );
};

export default LoginForm;
