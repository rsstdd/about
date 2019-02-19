/* eslint-disable max-len */
import React from "react"
import PropTypes from "prop-types"
import FaqItem from "./faq-item"
import faqData from "./faq-data"

const Faqs = ({ toggleHidden, displayAnswer, icon }) => {
  return (
    <div id="faq" className="faqs-wrapper box-shadow-1">
      <div className="faqs" onClick={toggleHidden}>
        <div className="faqs-img">{/* <img src={} alt="Migo - Find your ride" /> */}</div>
        {faqData.map(faq => (
          <FaqItem key={faq.gtmClassName} faq={faq} icon={icon} displayAnswer={displayAnswer} />
        ))}
      </div>
    </div>
  )
}

Faqs.propTypes = {
  toggleHidden: PropTypes.func,
  displayAnswer: PropTypes.object,
  icon: PropTypes.object,
}

export default Faqs
