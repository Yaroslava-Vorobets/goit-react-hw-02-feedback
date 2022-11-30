import PropTypes from 'prop-types';

const Statistics = ({ good, neutral, bad, total, percentage}) => {      
        return (         
            <div>             
                <ul>
                    <li>good:{good}</li>
                    <li>neutral:{neutral}</li>
                    <li>bad:{bad}</li>
                    <li>total:{total}</li>
                    <li>Positive Feedback:{percentage}%</li>
                </ul>
            </div>
          
        )
    }
    

Statistics.propTypes = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    percentage: PropTypes.number.isRequired,

}       


export default Statistics