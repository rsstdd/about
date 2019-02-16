import React from "react";
import PropTypes from "prop-types";

import keyId from "../utils/key-id";

const Employee = ({ employee, count }) => (
  <div className="employee col-auto" key={keyId()}>
    <figure className={`team-member-${count}`}>
      <a href={employee.url} target="_blank" rel="noopener noreferrer">
        <img
          alt=""
          className={`team-member-${count} employee-img flex-img`}
          srcSet={`${employee.img}`}
          src={employee.img}
        />
      </a>
    </figure>
    <h4 className={`team-member-${count}`}>{employee.name}</h4>
    <p className={`team-member-${count}`}>{employee.role}</p>
  </div>
);

Employee.propTypes = {
  employee: PropTypes.object,
  count: PropTypes.number
};

export default Employee;
