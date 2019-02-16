import React from "react";
import Employee from "./employee";
import keyId from "../utils/key-id";

const Company = () => {
  const rootUrl = `https://www.getmigo.com`;
  const company = [
    {
      img: "http://lorempixel.com/output/people-q-g-250-250-7.jpg",
      liUrl: "",
      name: "Joe Smith",
      role: "Engineer"
    },
    {
      img: "http://lorempixel.com/output/people-q-g-250-250-8.jpg",
      liUrl: "",
      name: "Joe Smith",
      role: "Engineer"
    },
    {
      img: "http://lorempixel.com/output/people-q-g-250-250-9.jpg",
      liUrl: "",
      name: "Joe Smith",
      role: "Engineer"
    },
    {
      img: "http://lorempixel.com/output/people-q-g-250-250-10.jpg",
      liUrl: "",
      name: "Joe Smith",
      role: "Engineer"
    },
    {
      img: "http://lorempixel.com/output/people-q-g-250-250-4.jpg",
      liUrl: "",
      name: "Joe Smith",
      role: "Engineer"
    },
    {
      img: "http://lorempixel.com/output/people-q-g-250-250-2.jpg",
      liUrl: "",
      name: "Joe Smith",
      role: "Engineer"
    },
    {
      img: "http://lorempixel.com/output/people-q-g-250-250-8.jpg",
      liUrl: "",
      name: "Joe Smith",
      role: "Engineer"
    },
    {
      img: "http://lorempixel.com/output/people-q-g-250-250-8.jpg",
      liUrl: "",
      name: "Joe Smith",
      role: "Engineer"
    },
    {
      img: "http://lorempixel.com/output/people-q-g-250-250-8.jpg",
      liUrl: "",
      name: "Joe Smith",
      role: "Engineer"
    },
    {
      img: "http://lorempixel.com/output/people-q-g-250-250-6.jpg",
      liUrl: "",
      name: "Joe Smith",
      role: "Engineer"
    },
    {
      img: "http://lorempixel.com/output/people-q-g-250-250-2.jpg",
      liUrl: "",
      name: "Joe Smith",
      role: "Engineer"
    },
    {
      img: "http://lorempixel.com/output/people-q-g-250-250-6.jpg",
      liUrl: "",
      name: "Joe Smith",
      role: "Engineer"
    },
    {
      img: "http://lorempixel.com/output/people-q-g-250-250-5.jpg",
      liUrl: "",
      name: "Joe Smith",
      role: "Engineer"
    },
    {
      img: "http://lorempixel.com/output/people-q-g-250-250-4.jpg",
      liUrl: "",
      name: "Joe Smith",
      role: "Engineer"
    },
    {
      img: "http://lorempixel.com/output/people-q-g-250-250-3.jpg",
      liUrl: "",
      name: "Joe Smith",
      role: "Engineer"
    },
    {
      img: "http://lorempixel.com/output/people-q-g-250-250-1.jpg",
      liUrl: "",
      name: "Joe Smith",
      role: "Engineer"
    }
  ];

  return (
    <div className="">
      <div className="">
        <p className="">
          Looking to join the team? Check out our{" "}
          <a href={`${rootUrl}/careers/`} className="career-link">
            career page
          </a>
        </p>
      </div>
      <div className="">
        {company.map((employee, idx) => (
          <Employee employee={employee} count={idx} key={keyId} />
        ))}
      </div>
    </div>
  );
};

export default Company;
