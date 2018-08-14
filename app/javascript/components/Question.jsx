import React from "react"
import PropTypes from "prop-types"
import Answer from "./Answer"

class Question extends React.Component {
  constructor(props) {
    super();
    this.state = props.question;
    this.state.answered = false;
    this.calculatePercentages();
    this.handleVote = this.handleVote.bind(this);
  }

  calculatePercentages() {
    const total = this.state.votes_answer_1 + this.state.votes_answer_2;
    if (total > 0) {
      this.state.percentage_1 = Math.round(this.state.votes_answer_1 * 100 / total) + '%';
      this.state.percentage_2 = Math.round(this.state.votes_answer_2 * 100 / total) + '%';
    } else {
      this.state.percentage_1 = 0;
      this.state.percentage_2 = 0;
    }
  }

  handleVote(answer) {
    fetch('/vote/' + this.state.id + '/' + answer)
                   // ^ from line 8         ^ from params
      .then(res => res.json())
      .then(
        (result) => {
          let currentState = this.state;
          currentState.answered = true;
          currentState.votes_answer_1 = result.votes_answer_1;
          currentState.votes_answer_2 = result.votes_answer_2;
          this.calculatePercentages();
          this.setState(currentState);
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }

  render() {
    return (
      <React.Fragment>

        <div className="container index-container">

        <div className="row">
        <h4 className="q">Would you rather...</h4>
        </div>

        <div className="row q-row">
        <div className="col">
        <Answer answer={this.state.answer_1} votes={this.state.votes_answer_1} percentage={this.state.percentage_1} voteHandler={event => this.handleVote(1)} leftAnswer={true} answered={this.state.answered} />
        </div>

        <div className="col">
        <Answer answer={this.state.answer_2} votes={this.state.votes_answer_2} percentage={this.state.percentage_2} voteHandler={event => this.handleVote(2)} leftAnswer={false} answered={this.state.answered} />
        </div>

        </div>
        </div>


      </React.Fragment>
    );
  }
}

Question.propTypes = {
  question: PropTypes.object
};
export default Question
