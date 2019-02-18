import React from "react"

const rootUrl = ""

const CompanyIntro = ({ employee, count }) => (
  <div className="company-intro">
    <h2>Our Team</h2>
    <p className="team-description">
      But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue
      pleasure rationally encounter consequences that are extremely painful
    </p>
    <p className="link-to-career">
      Looking to join the team? Check out our{" "}
      <a href={`${rootUrl}/careers/`} className="career-link">
        career page
      </a>
      .
    </p>
  </div>
)

export default CompanyIntro
