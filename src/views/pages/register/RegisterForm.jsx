import React from "react";
import { Popover } from "react-bootstrap";
import { Formik, Form, Field } from "formik";
import { CButton, CCardBody, CInputGroupPrepend } from "@coreui/react";
import CIcon from "@coreui/icons-react";
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

const RegisterForm = (props) => {
  return (
    <Formik
      initialValues={props.formValues}
      onSubmit={(values, { resetForm }) => {
        props.postParams(values, resetForm);
      }}
      validationSchema={props.registrationSchema}
    >
      {({ handleChange }) => (
        <CCardBody className="p-4">
          <h1 className="_form-title">Crear cuenta</h1>
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
                {props.getRolesArray.map((res) => {
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
              placeholder="Confirmar Contraseña"
              popover={null}
            />
            <ErrorMessageSpace name="confirmPassword" />
            <CButton type="submit" color="success" block>
              Crear Tu Cuenta THC
            </CButton>
          </Form>
        </CCardBody>
      )}
    </Formik>
  );
};

export default RegisterForm;
