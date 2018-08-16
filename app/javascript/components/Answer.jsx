import React from "react"
import PropTypes from "prop-types"
class Answer extends React.Component {

    render() {
        let answerStyling;
        if (this.props.leftAnswer) {
            answerStyling = "ans-1";
        } else {
            answerStyling = "ans-2";
        }

        if (this.props.answered) {
            return (
                <React.Fragment>
                    <div className={answerStyling}>
                        <p>{this.props.answer}</p>
                        <p id="percentage">{this.props.percentage}</p>
                        <p id="a-votes">{this.props.votes} votes</p>
                    </div>
                </React.Fragment>
            );
        } else {
            return (
                <React.Fragment>
                    <div onClick={this.props.voteHandler} className={answerStyling}>
                        <p>{this.props.answer}</p>
                    </div>
                </React.Fragment>
            );
        }
    }
}

Answer.propTypes = {
    answer: PropTypes.string,
    votes: PropTypes.number,
    percentage: PropTypes.string,
    leftAnswer: PropTypes.bool,
    answered: PropTypes.bool
};
export default Answer
