/* eslint-disable camelcase */
import React, { Component } from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Faqs from "../components/example-5/faqs"

import getClassName from "../utils/get-faq-question-class-name"

class FaqPage extends Component {
  constructor(props) {
    super(props)

    this.state = {
      displayAnswer: {
        question1: "hide",
        question2: "hide",
        question3: "hide",
        question4: "hide",
        question5: "hide",
        question6: "hide",
        question7: "hide",
        question8: "hide",
        question9: "hide",
        question10: "hide",
        question11: "hide",
        question12: "hide",
        question13: "hide",
      },
      icon: {
        question1: "caret-down",
        question2: "caret-down",
        question3: "caret-down",
        question4: "caret-down",
        question5: "caret-down",
        question6: "caret-down",
        question7: "caret-down",
        question8: "caret-down",
        question9: "caret-down",
        question10: "caret-down",
        question11: "caret-down",
        question12: "caret-down",
        question13: "caret-down",
      },
    }

    this.toggleHidden = this.toggleHidden.bind(this)
  }

  toggleHidden(e) {
    let targetClassName = e.target.className
    let displayAnswer = Object.assign({}, this.state.displayAnswer)
    let icon = Object.assign({}, this.state.icon)

    if (targetClassName && targetClassName.includes("question")) {
      let questionClass = getClassName(targetClassName)
      let clickedFaq = questionClass.split("-").join("") ? questionClass.split("-").join("") : false

      // reset Display Ansers != clickedFaq
      for (let prop in this.state.displayAnswer) {
        if (clickedFaq && prop) {
          if (prop === clickedFaq) {
            continue
          } else {
            displayAnswer[prop] = "hide"
            icon[prop] = "caret-down"
          }
        }
      }

      // update reset state; then update the rest
      this.setState({ displayAnswer, icon }, () => {
        let toggleDisplayAnswer = Object.assign({}, this.state.displayAnswer)
        let toggleIcon = Object.assign({}, this.state.icon)

        // update the e.target
        switch (questionClass) {
          case "question-1":
            if (this.state.displayAnswer.question1 === "display") {
              toggleDisplayAnswer.question1 = "hide"
              toggleIcon.question1 = "caret-down"
            } else {
              toggleDisplayAnswer.question1 = "display"
              toggleIcon.question1 = "caret-up"
            }
            this.setState({
              displayAnswer: toggleDisplayAnswer,
              icon: toggleIcon,
            })
            break
          case "question-2":
            if (this.state.displayAnswer.question2 === "display") {
              toggleDisplayAnswer.question2 = "hide"
              toggleIcon.question2 = "caret-down"
            } else {
              toggleDisplayAnswer.question2 = "display"
              toggleIcon.question2 = "caret-up"
            }
            this.setState({
              displayAnswer: toggleDisplayAnswer,
              icon: toggleIcon,
            })
            break
          case "question-3":
            if (this.state.displayAnswer.question3 === "display") {
              toggleDisplayAnswer.question3 = "hide"
              toggleIcon.question3 = "caret-down"
            } else {
              toggleDisplayAnswer.question3 = "display"
              toggleIcon.question3 = "caret-up"
            }
            this.setState({
              displayAnswer: toggleDisplayAnswer,
              icon: toggleIcon,
            })
            break
          case "question-4":
            if (this.state.displayAnswer.question4 === "display") {
              toggleDisplayAnswer.question4 = "hide"
              toggleIcon.question4 = "caret-down"
            } else {
              toggleDisplayAnswer.question4 = "display"
              toggleIcon.question4 = "caret-up"
            }
            this.setState({
              displayAnswer: toggleDisplayAnswer,
              icon: toggleIcon,
            })
            break
          case "question-5":
            if (this.state.displayAnswer.question5 === "display") {
              toggleDisplayAnswer.question5 = "hide"
              toggleIcon.question5 = "caret-down"
            } else {
              toggleDisplayAnswer.question5 = "display"
              toggleIcon.question5 = "caret-up"
            }
            this.setState({
              displayAnswer: toggleDisplayAnswer,
              icon: toggleIcon,
            })
            break
          case "question-6":
            if (this.state.displayAnswer.question6 === "display") {
              toggleDisplayAnswer.question6 = "hide"
              toggleIcon.question6 = "caret-down"
            } else {
              toggleDisplayAnswer.question6 = "display"
              toggleIcon.question6 = "caret-up"
            }
            this.setState({
              displayAnswer: toggleDisplayAnswer,
              icon: toggleIcon,
            })
            break
          case "question-7":
            if (this.state.displayAnswer.question7 === "display") {
              toggleDisplayAnswer.question7 = "hide"
              toggleIcon.question7 = "caret-down"
            } else {
              toggleDisplayAnswer.question7 = "display"
              toggleIcon.question7 = "caret-up"
            }
            this.setState({
              displayAnswer: toggleDisplayAnswer,
              icon: toggleIcon,
            })
            break
          case "question-8":
            if (this.state.displayAnswer.question8 === "display") {
              toggleDisplayAnswer.question8 = "hide"
              toggleIcon.question8 = "caret-down"
            } else {
              toggleDisplayAnswer.question8 = "display"
              toggleIcon.question8 = "caret-up"
            }
            this.setState({
              displayAnswer: toggleDisplayAnswer,
              icon: toggleIcon,
            })
            break
          case "question-9":
            if (this.state.displayAnswer.question9 === "display") {
              toggleDisplayAnswer.question9 = "hide"
              toggleIcon.question9 = "caret-down"
            } else {
              toggleDisplayAnswer.question9 = "display"
              toggleIcon.question9 = "caret-up"
            }
            this.setState({
              displayAnswer: toggleDisplayAnswer,
              icon: toggleIcon,
            })
            break
          case "question-10":
            if (this.state.displayAnswer.question10 === "display") {
              toggleDisplayAnswer.question10 = "hide"
              toggleIcon.question10 = "caret-down"
            } else {
              toggleDisplayAnswer.question10 = "display"
              toggleIcon.question10 = "caret-up"
            }
            this.setState({
              displayAnswer: toggleDisplayAnswer,
              icon: toggleIcon,
            })
            break
          case "question-11":
            if (this.state.displayAnswer.question11 === "display") {
              toggleDisplayAnswer.question11 = "hide"
              toggleIcon.question11 = "caret-down"
            } else {
              toggleDisplayAnswer.question11 = "display"
              toggleIcon.question11 = "caret-up"
            }
            this.setState({
              displayAnswer: toggleDisplayAnswer,
              icon: toggleIcon,
            })
            break
          case "question-12":
            if (this.state.displayAnswer.question12 === "display") {
              toggleDisplayAnswer.question12 = "hide"
              toggleIcon.question12 = "caret-down"
            } else {
              toggleDisplayAnswer.question12 = "display"
              toggleIcon.question12 = "caret-up"
            }
            this.setState({
              displayAnswer: toggleDisplayAnswer,
              icon: toggleIcon,
            })
            break
          case "question-13":
            if (this.state.displayAnswer.question13 === "display") {
              toggleDisplayAnswer.question13 = "hide"
              toggleIcon.question13 = "caret-down"
            } else {
              toggleDisplayAnswer.question13 = "display"
              toggleIcon.question13 = "caret-up"
            }
            this.setState({
              displayAnswer: toggleDisplayAnswer,
              icon: toggleIcon,
            })
            break
          default:
            break
        }
      })
    }
  }

  render() {
    return (
      <Layout>
        <SEO title="FAQs" keywords={[`gatsby`, `application`, `react`]} />
        <Faqs toggleHidden={this.toggleHidden} displayAnswer={this.state.displayAnswer} icon={this.state.icon} />
      </Layout>
    )
  }
}

export default FaqPage
