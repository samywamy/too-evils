import React from "react"
import PropTypes from "prop-types"
class Answer extends React.Component {
  render () {
    let answerStyling;
    if (this.props.leftAnswer == 'true') {
      answerStyling = "ans-1";
    } else {
      answerStyling = "ans-2";
    }
    return (
      <React.Fragment>
        <div onClick={this.props.voteHandler} className={answerStyling}>
          <p>{this.props.answer}</p>
          <p>{this.props.percentage}</p>
          <p>{this.props.votes} votes</p>
        </div>  
      </React.Fragment>
    );
  }
}

Answer.propTypes = {
  answer: PropTypes.string,
  votes: PropTypes.string,
  percentage: PropTypes.string,
  leftAnswer: PropTypes.bool
};
export default Answer
