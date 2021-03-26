import React from "react";
import { CAlert } from "@coreui/react";

const ErrorAlert = (props) => {
  return (
    <CAlert color="info" closeButton>
      {props.message}
    </CAlert>
  );
};

export default ErrorAlert;
