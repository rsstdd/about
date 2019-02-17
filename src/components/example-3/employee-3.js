import React from "react";
import PropTypes from "prop-types";

import keyId from "../../utils/key-id";

const Employee = ({ employee, count }) => (
  <div className="cards-wrapper-3" key={keyId()}>
    <a href={employee.url} target="_blank" rel="noopener noreferrer">
      <div
        alt=""
        className={`cards-image-3 ${employee.imgClass} team-member-${count}`}
      >
        &nbsp;
      </div>
    </a>
    <div className="cards-copy">
      <h4 className={`team-member-${count} name-heading`}>
        <span className="name-heading-span name-heading-span-3">
          {employee.firstName} {employee.lastName}
        </span>
      </h4>
      <p className={`team-member-${count} title`}>
        <span className="name-heading-span span-shadow">{employee.role}</span>
      </p>
      {/* Comment this */}
      <p className={`team-member-${count} title`}>
        <span className="name-heading-span span-shadow connect-with u-fw-2">
          <a href="#" className="card-link">Connect with {employee.firstName}</a>
        </span>
      </p>
    </div>
    {/* Comment/Uncomment This */}
    {/* <p className="name-heading caption card-link">
      <a href="#" className="card-link">
        Connect with {employee.firstName}
      </a>
    </p> */}
  </div>
);

Employee.propTypes = {
  employee: PropTypes.object,
  count: PropTypes.number
};

export default Employee;
