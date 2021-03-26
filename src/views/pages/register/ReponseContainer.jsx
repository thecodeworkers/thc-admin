import React from "react";
import { CCardBody } from "@coreui/react";
import "./regis_styles.css";

const ResponseContainer = (props) => {
  return (
    <CCardBody className="p-4">
      <div className="_duplicate-user-body">{props.body}</div>
    </CCardBody>
  );
};

export default ResponseContainer;
