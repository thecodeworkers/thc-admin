import React, { useState, useEffect } from "react";
import { Formik, Form, Field } from "formik";
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
      validationSchema={props.registrationSchema}
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
            <CRow>
              <CCol xs="6">
                <CButton color="primary" className="px-4">
                  Login
                </CButton>
              </CCol>
              <CCol xs="6" className="text-right">
                <CButton color="link" className="px-0">
                  Forgot password?
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
