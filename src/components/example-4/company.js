import React from "react"
import Employee from "./employee"
import keyId from "../../utils/key-id"

import CompanyIntro from "./company-intro"
import peopleData from "./people-data"

const Company = () => (
  <div className="card-container-3">
    <CompanyIntro />
    <div className="inner-container-3">
      <div className="cards-3">
        {peopleData.map((employee, idx) => (
          <Employee employee={employee} count={idx} key={keyId} />
        ))}
      </div>
    </div>
  </div>
)

export default Company
