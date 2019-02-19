import React from "react"
import PropTypes from "prop-types"

import createMarkup from "../../utils/create-markup"

const FaqItems = ({ faq, icon, displayAnswer }) => {
  const questionClassName = `question-${faq.questionNumber}`
  const iconClassName = icon[`question${faq.questionNumber}`] === "caret-down" ? "inactive" : "active"
  const displayAnswerClassName = displayAnswer[`question${faq.questionNumber}`]

  return (
    <div className={`faq-item box-shadow-2 ${questionClassName}`}>
      <h4 id="gtm-q1-riders-or-drivers" className={`${questionClassName} faq-title ${iconClassName}`} dangerouslySetInnerHTML={createMarkup(faq.question)} />
      <i className={`${iconClassName} ${questionClassName}`} aria-hidden="true" />
      <p className={`${displayAnswerClassName} ${questionClassName} faq-answer`} dangerouslySetInnerHTML={createMarkup(faq.answer)} />
    </div>
  )
}

FaqItems.propTypes = {
  count: PropTypes.number,
  faq: PropTypes.object,
  icon: PropTypes.object,
  displayAnswer: PropTypes.object,
}

export default FaqItems
