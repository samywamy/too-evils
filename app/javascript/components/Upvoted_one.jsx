import React from "react"
import PropTypes from "prop-types"

class UpvotedOne extends React.Component {
    constructor(props) {
        super();
        // this.state = {};
        // this.state.q_votes = props.q_votes;
        this.state = {q_votes: props.q_votes};
        this.handleVote = this.handleVote.bind(this);
    }

    handleVote() {
        fetch('/vote/' + this.props.q_id)
        .then(res => res.json())
        .then(
          (result) => {
            this.setState({
                q_votes: result.question_votes
            });
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

    render () {
        if (this.state.q_votes < this.props.max_votes) {
          return (
            <React.Fragment>
                <div> 
                  <p>Would you rather "{this.props.ans_1}" or "{this.props.ans_2}"? Has been voted on {this.state.q_votes} times <button onClick={this.handleVote} type="button" className="btn btn-outline-danger btn-sm">Vote</button></p>
                </div>
            </React.Fragment>
          );
        } else {
          return (
            <React.Fragment>
            </React.Fragment>
          );
        }
    }
  }
  
  UpvotedOne.propTypes = {
    ans_1: PropTypes.string,
    ans_2: PropTypes.string,
    q_id: PropTypes.number,
    q_votes: PropTypes.number,
    max_votes: PropTypes.number
  };
  export default UpvotedOne