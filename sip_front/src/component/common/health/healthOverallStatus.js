import React, { Fragment, useEffect, useState } from "react";
import Breadcrumb from "../breadcrumb/breadcrumb";
import "react-datepicker/dist/react-datepicker.css";

const HealthOverallStatus = () => {
  return (
    <Fragment>
      <Breadcrumb parent="health" title="헬스케어 모니터링" />
    </Fragment>
  );
};

export default HealthOverallStatus;
