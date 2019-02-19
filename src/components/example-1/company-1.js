import React from "react";
import Employee from "./employee-1";
import keyId from "../../utils/key-id";

const Company = () => {
  const rootUrl = ``;
  const company = [
    {
      img: "http://lorempixel.com/output/people-q-g-250-250-7.jpg",
      liUrl: "",
      firstName: "John",
      lastName: "Smithsonian",
      role: "Engineer"
    },
    {
      img: "http://lorempixel.com/output/people-q-g-250-250-8.jpg",
      liUrl: "",
      firstName: "Johnlottaletters",
      lastName: "Smith",
      role: "Variable Length Engineer"
    },
    {
      img: "http://lorempixel.com/output/people-q-g-250-250-9.jpg",
      liUrl: "",
      firstName: "John",
      lastName: "Smith",
      role: "Engineer"
    },
    {
      img: "http://lorempixel.com/output/people-q-g-250-250-10.jpg",
      liUrl: "",
      firstName: "John",
      lastName: "Smith",
      role: "Engineer"
    },
    {
      img: "http://lorempixel.com/output/people-q-g-250-250-4.jpg",
      liUrl: "",
      firstName: "John",
      lastName: "Smith",
      role: "Engineer"
    },
    {
      img: "http://lorempixel.com/output/people-q-g-250-250-2.jpg",
      liUrl: "",
      firstName: "John",
      lastName: "Smith",
      role: "Engineer"
    },
    {
      img: "http://lorempixel.com/output/people-q-g-250-250-8.jpg",
      liUrl: "",
      firstName: "John",
      lastName: "Smith",
      role: "Engineer"
    },
    {
      img: "http://lorempixel.com/output/people-q-g-250-250-8.jpg",
      liUrl: "",
      firstName: "John",
      lastName: "Smith",
      role: "Engineer"
    },
    {
      img: "http://lorempixel.com/output/people-q-g-250-250-8.jpg",
      liUrl: "",
      firstName: "John",
      lastName: "Smith",
      role: "Engineer"
    },
    {
      img: "http://lorempixel.com/output/people-q-g-250-250-6.jpg",
      liUrl: "",
      firstName: "John",
      lastName: "Smith",
      role: "Engineer"
    },
    {
      img: "http://lorempixel.com/output/people-q-g-250-250-2.jpg",
      liUrl: "",
      firstName: "John",
      lastName: "Smith",
      role: "Engineer"
    },
    {
      img: "http://lorempixel.com/output/people-q-g-250-250-6.jpg",
      liUrl: "",
      firstName: "John",
      lastName: "Smith",
      role: "Engineer"
    },
    {
      img: "http://lorempixel.com/output/people-q-g-250-250-5.jpg",
      liUrl: "",
      firstName: "John",
      lastName: "Smith",
      role: "Engineer"
    },
    {
      img: "http://lorempixel.com/output/people-q-g-250-250-4.jpg",
      liUrl: "",
      firstName: "John",
      lastName: "Smith",
      role: "Engineer"
    },
    {
      img: "http://lorempixel.com/output/people-q-g-250-250-3.jpg",
      liUrl: "",
      firstName: "John",
      lastName: "Smith",
      role: "Engineer"
    },
    {
      img: "http://lorempixel.com/output/people-q-g-250-250-1.jpg",
      liUrl: "",
      firstName: "John",
      lastName: "Smith",
      role: "Engineer"
    }
  ];

  return (
    <div className="card-container">
      <div className="">
        <p className="">
          Looking to join the team? Check out our{" "}
          <a href={`${rootUrl}/careers/`} className="career-link">
            career page
          </a>
        </p>
      </div>
      <div className="inner-container">
        <div className="cards">
          {company.map((employee, idx) => (
            <Employee employee={employee} count={idx} key={keyId} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Company;
