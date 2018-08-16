import React from "react"
import PropTypes from "prop-types"
import Question from "./Question"

class QuestionsCarousel extends React.Component {
    constructor(props) {
        super();
        this.state = {};
        this.state.qArr = props.qArr;
        this.state.idx = 0;
        this.state.message = 'Loading...';
        this.fetchNextQuestion = this.fetchNextQuestion.bind(this);
    }

    fetchNewQuestion(id) {
        fetch('/questions/' + id + '.json')
            .then(res => res.json())
            .then(
                (result) => {
                    let currentState = this.state;
                    currentState.question = result;
                    currentState.idx = currentState.idx + 1;    
                    this.setState(currentState);
                },

                (error) => {
                    let currentState = this.state;
                    currentState.question = undefined;
                    currentState.idx = currentState.idx + 1;    
                    currentState.message = 'oops, try again....';
                    this.setState(currentState);
                }
            )
    }

    fetchNextQuestion() {
        if (this.state.idx < this.state.qArr.length) {
            this.fetchNewQuestion(this.state.qArr[this.state.idx]);
        } else {
            let currentState = this.state;
            currentState.question = undefined;
            currentState.message = 'No more, go play elsewhere...';
            this.setState(currentState);
        }
    }

    componentDidMount() {
        this.fetchNextQuestion();
    }

    render() {
        return (
            <React.Fragment>
                <div className="container">

                    <div className="row title">
                        <div className="q">WOULD YOU RATHER</div>
                    </div>

                    <div className="row q-row">
                        {this.state.question ? (<Question question={this.state.question} />) : this.state.message}
                    </div>

                    <div className="row">
                        <button id="next" class="btn btn-link" onClick={this.fetchNextQuestion}>></button>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

QuestionsCarousel.propTypes = {
    qArr: PropTypes.array
};
export default QuestionsCarousel
