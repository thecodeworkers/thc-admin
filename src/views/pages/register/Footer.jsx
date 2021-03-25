import React from "react";

import { CButton, CCardFooter, CRow, CCol } from "@coreui/react";

const RegisterFooter = (props) => {
  return (
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
  );
};

export default RegisterFooter;
