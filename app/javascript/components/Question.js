import React from "react"
import PropTypes from "prop-types"
import Answer from "./Answer"

class Question extends React.Component {
  constructor(props) {
    super();
    this.state = props.question;
  }  

  render () {
    return (
      <React.Fragment>
        would you rather...
        <Answer answer={this.state.answer_1} votes={this.state.votes_answer_1} />
        orrrrr.......
        <Answer answer={this.state.answer_2} votes={this.state.votes_answer_2} />
      </React.Fragment>
    );
  }
}

Question.propTypes = {
  question: PropTypes.node
};
export default Question
