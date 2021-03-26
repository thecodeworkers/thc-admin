import React from "react";

import { CButton, CCardFooter, CRow, CCol } from "@coreui/react";

const Footer = (props) => {
  return (
    <CCardFooter className="p-4">
      <CRow
        style={{
          justifyContent: "center",
          paddingLeft: "14px",
          paddingRight: "14px",
        }}
      >
        {props.message}
      </CRow>
    </CCardFooter>
  );
};

export default Footer;
