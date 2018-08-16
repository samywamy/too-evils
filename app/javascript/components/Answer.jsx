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
                        <div>{this.props.answer}</div>
                        <div id="percentage">{this.props.percentage}</div>
                        <div id="a-votes">{this.props.votes} votes</div>
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
