import React from "react";
import { CAlert } from "@coreui/react";

const ErrorAlert = (props) => {
  return (
    <CAlert className={props.class} color="info" closeButton>
      <p>
        {props.message} {props.link}
      </p>
    </CAlert>
  );
};

export default ErrorAlert;
