import React from "react";
import PropTypes from "prop-types";

import keyId from "../utils/key-id";

const Employee = ({ employee, count }) => (
  <div className="cards-wrapper" key={keyId()}>
    <a href={employee.url} target="_blank" rel="noopener noreferrer">
      <img
        alt=""
        className={`cards-image team-member-${count}`}
        srcSet={`${employee.img}`}
        src={employee.img}
      />
    </a>
    <div className="cards-copy">
      <h4 className={`team-member-${count}`}>{employee.name}</h4>
      <p className={`team-member-${count}`}>{employee.role}</p>
    </div>
  </div>
);

Employee.propTypes = {
  employee: PropTypes.object,
  count: PropTypes.number
};

export default Employee;
