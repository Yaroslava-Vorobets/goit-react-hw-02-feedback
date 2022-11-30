import PropTypes from 'prop-types';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
    return options.map((option, index) => {
        return (            
            <div>                
                <button key={index} onClick={() => onLeaveFeedback(option)} type="button" >{option}</button>              
            </div>
         
        )
    })
       
    
}


FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
export default FeedbackOptions