import PropTypes from 'prop-types';
import React from 'react';


class CofeeFeedback extends React.Component {   
   
    state = {
        good: 0,
        neutral:0,
        bad: 0
    }

    onGoodIncrement = () => {
        this.setState(state => ({
            good: this.state.good + 1,
        }));
    }
    
    onNeutralIncrement = () => {
        this.setState(state => ({
            neutral: this.state.neutral + 1,
        }));
    }
    
    onBadIncrement = () => {
        this.setState(prevState => ({             
            bad: this.prevState.bad + 1,            
        }));
     
    } 
    
    countTotalFeedback = () => { }
    
    countPositiveFeedbackPercentage = () => { }

    render() {
        return (
            <>
                <div>
                    <h1>Please leave feedback</h1>
                    <button type="button" onClick={this.onGoodIncrement}>good</button>
                    <button type="button" onClick={this.onNeutralIncrement}>neutral</button>
                    <button type="button" onClick={this.onBadIncrement }>bad</button>
                </div> 
                 <div>
                    <h2>Statistics</h2>
                    <ul>
                        <li>good:{this.state.good}</li>
                        <li>neutral:{this.state.neutral}</li>
                        <li>bad:{this.state.bad}</li>
                   </ul>
                </div>
            </>
        )
    }
    
}
CofeeFeedback.propTypes = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad:PropTypes.number.isRequired,

}       


export default CofeeFeedback