import React from "react"
import PropTypes from "prop-types"
class Answer extends React.Component {
  render () {
    return (
      <React.Fragment>
        Answer: {this.props.answer}
        Votes: {this.props.votes}
        Percentage: {this.props.percentage}
      </React.Fragment>
    );
  }
}

Answer.propTypes = {
  answer: PropTypes.string,
  votes: PropTypes.string,
  percentage: PropTypes.string
};
export default Answer
