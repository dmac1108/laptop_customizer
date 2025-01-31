import React, {Component} from 'react';
import '../SummaryTotal/SummaryTotal.css';

class SummaryTotal extends Component {
    render(){
        return(
            <div className="summary__total">
                <div className="summary__total__label">
                    Your Price:
                </div>
                <div className="summary__total__value">
                { new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD'})
                  .format(this.props.total) }
                </div>
            </div>
        );
    }
}

export default SummaryTotal;