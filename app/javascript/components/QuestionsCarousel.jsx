import React from "react"
import PropTypes from "prop-types"
import Question from "./Question"

class QuestionsCarousel extends React.Component {
    constructor(props) {
        super();
        this.state = {};
        this.state.maxId = props.maxId;
        this.state.usedIds = [];
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
                    currentState.usedIds.push(id);    
                    this.setState(currentState);
                },

                (error) => {
                    let currentState = this.state;
                    currentState.question = undefined;
                    currentState.usedIds.push(id);    
                    currentState.message = 'oops, try again....';
                    this.setState(currentState);
                }
            )
    }

    fetchNextQuestion() {
        if (this.state.maxId > 0 && this.state.usedIds.length < this.state.maxId) {
            let randomId =  Math.floor(Math.random()*this.state.maxId + 1);
            while (this.state.usedIds.includes(randomId)) {
                randomId =  Math.floor(Math.random()*this.state.maxId + 1);
            }
            this.fetchNewQuestion(randomId);
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
                <div className="container index-container">

                    <div className="row">
                        <h4 className="q">Would you rather...</h4>
                    </div>

                    <div className="row q-row">
                        {this.state.question ? (<Question question={this.state.question} />) : this.state.message}
                    </div>

                    <div className="row">
                        <button onClick={this.fetchNextQuestion}>></button>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

QuestionsCarousel.propTypes = {
    maxId: PropTypes.number
};
export default QuestionsCarousel
