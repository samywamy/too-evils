import React from "react"
import PropTypes from "prop-types"
class QuestionsCarousel extends React.Component {
  constructor(props) {
    super();
    this.state.maxId = props.maxId;
    this.state.usedIds = [];
  }

  componentDidMount() {
    
  }

  render () {
    return (
      <React.Fragment>
        Max: {this.props.maxId}
      </React.Fragment>
    );
  }
}

QuestionsCarousel.propTypes = {
  maxId: PropTypes.number
};
export default QuestionsCarousel
