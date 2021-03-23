import React from "react";
import {
  CPopover,
  CInputGroup,
  CInputGroupPrepend,
  CInputGroupText,
} from "@coreui/react";

import CIcon from "@coreui/icons-react";
import { Field, ErrorMessage } from "formik";
import exclamation from "../../static/img/exclamation-mark-emoji.png";

const FormInputField = (props) => {
  return (
    <CInputGroup className="mb-3">
      <CInputGroupPrepend>
        <CInputGroupText>
          <CIcon name={props.icon} />
        </CInputGroupText>
      </CInputGroupPrepend>
      {props.popover ? (
        <CPopover
          placement={props.popover[2]}
          content={props.popover[0]}
          trigger="click"
        >
          <Field
            className="form-control"
            name={props.name}
            type={props.inputType}
            placeholder={props.placeholder}
          />
        </CPopover>
      ) : (
        <Field
          className="form-control"
          name={props.name}
          type={props.inputType}
          placeholder={props.placeholder}
        />
      )}
    </CInputGroup>
  );
};

const ErrorMessageSpace = (props) => {
  return (
    <div className="_form-error-box">
      <ErrorMessage name={props.name}>
        {(msg) => (
          <div>
            {" "}
            <img alt="exclamation sign" src={exclamation} />
            <span className="_form-error-message">{msg}</span>
          </div>
        )}
      </ErrorMessage>
    </div>
  );
};

export { FormInputField, ErrorMessageSpace };
