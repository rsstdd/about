import React from "react";
import Employee from "./employee-3";
import keyId from "../../utils/key-id";

const Company = () => {
  const rootUrl = ``;
  const company = [
    {
      imgClass: "cards-image-3--5",
      liUrl: "",
      firstName: "John",
      lastName: "Smithsonian",
      role: "Engineer"
    },
    {
      imgClass: "cards-image-3--2",
      liUrl: "",
      firstName: "John",
      lastName: "Smith",
      role: "Variable Length Engineer"
    },
    {
      imgClass: "cards-image-3--3",
      liUrl: "",
      firstName: "John",
      lastName: "Smith",
      role: "Engineer"
    },
    {
      imgClass: "cards-image-3--4",
      liUrl: "",
      firstName: "John",
      lastName: "Smith",
      role: "Engineer"
    },
    {
      imgClass: "cards-image-3--1",
      liUrl: "",
      firstName: "John",
      lastName: "Smith",
      role: "Engineer"
    },
    {
      imgClass: "cards-image-3--1",
      liUrl: "",
      firstName: "John",
      lastName: "Smith",
      role: "Engineer"
    },
    {
      imgClass: "cards-image-3--1",
      liUrl: "",
      firstName: "John",
      lastName: "Smith",
      role: "Engineer"
    },
    {
      imgClass: "cards-image-3--1",
      liUrl: "",
      firstName: "John",
      lastName: "Smith",
      role: "Engineer"
    },
    {
      imgClass: "cards-image-3--1",
      liUrl: "",
      firstName: "John",
      lastName: "Smith",
      role: "Engineer"
    },
    {
      imgClass: "cards-image-3--1",
      liUrl: "",
      firstName: "John",
      lastName: "Smith",
      role: "Engineer"
    },
    {
      imgClass: "cards-image-3--1",
      liUrl: "",
      firstName: "John",
      lastName: "Smith",
      role: "Engineer"
    },
    {
      imgClass: "cards-image-3--1",
      liUrl: "",
      firstName: "John",
      lastName: "Smith",
      role: "Engineer"
    },
    {
      imgClass: "cards-image-3--1",
      liUrl: "",
      firstName: "John",
      lastName: "Smith",
      role: "Engineer"
    },
    {
      imgClass: "cards-image-3--1",
      liUrl: "",
      firstName: "John",
      lastName: "Smith",
      role: "Engineer"
    },
    {
      imgClass: "cards-image-3--1",
      liUrl: "",
      firstName: "John",
      lastName: "Smith",
      role: "Engineer"
    },
    {
      imgClass: "cards-image-3--1",
      liUrl: "",
      firstName: "John",
      lastName: "Smith",
      role: "Engineer"
    }
  ];

  return (
    <div className="card-container-3">
      <div className="">
        <p className="">
          Looking to join the team? Check out our{" "}
          <a href={`${rootUrl}/careers/`} className="career-link">
            career page
          </a>
        </p>
      </div>
      <div className="inner-container-3">
        <div className="cards-3">
          {company.map((employee, idx) => (
            <Employee employee={employee} count={idx} key={keyId} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Company;
