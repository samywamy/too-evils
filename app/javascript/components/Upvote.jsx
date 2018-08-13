import React from "react"
import PropTypes from "prop-types"
import UpvotedOne from "./Upvoted_one"

class Upvote extends React.Component {
  
    render () {
      return (
        <React.Fragment>
      {this.props.votees.map(q => { return ( <UpvotedOne ans_1={q.answer_1} ans_2={q.answer_2} q_id={q.id} q_votes={q.question_votes} max_votes={this.props.max_votes}/>); } )}
        </React.Fragment>
      );
    }
}
  
  Upvote.propTypes = {
    votees: PropTypes.array,
    max_votes: PropTypes.number
  };
  export default Upvote