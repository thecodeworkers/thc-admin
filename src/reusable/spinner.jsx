import React from "react";

import { CSpinner } from "@coreui/react";

export default () => (
  <div className="d-flex justify-content-between align-items-center">
    <CSpinner color="success" size="sm" />
    <CSpinner color="info" />
    <CSpinner color="primary" style={{ width: "4rem", height: "4rem" }} />
    <CSpinner size="sm" variant="grow" />
    <CSpinner color="warning" variant="grow" />
    <CSpinner
      style={{ width: "4rem", height: "4rem" }}
      color="danger"
      variant="grow"
    />
  </div>
);
