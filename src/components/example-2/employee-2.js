import React from "react";
import PropTypes from "prop-types";

import keyId from "../../utils/key-id";

const Employee = ({ employee, count }) => (
  <div className="employee-2" key={keyId()}>
    <a href={employee.url} target="_blank" rel="noopener noreferrer">
      <figure className={`employee-image-wrapper`}>
        <img
          alt=""
          className={`employee-image`}
          srcSet={`${employee.img}`}
          src={employee.img}
        />
      </figure>
    </a>
    <div className="employee-text-wrapper">
      <h4 className={`name-heading`}>
        <span className="name-heading-span">
          {employee.firstName} {employee.lastName}
        </span>
      </h4>
      <p className={`title`}>
        <span className="">{employee.role}</span>
      </p>
      <span className="underline">
        <a href="#" className="connect-with">
          Connect with {employee.firstName}
        </a>
      </span>
    </div>
  </div>
);

Employee.propTypes = {
  employee: PropTypes.object,
  count: PropTypes.number
};

export default Employee;
