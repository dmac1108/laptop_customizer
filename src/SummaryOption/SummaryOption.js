import React, {Component} from 'react';
import '../SummaryOption/SummaryOption.css';

class SummaryOption extends Component {
    //need to add label, value, cost
    render(){

        

        return(
            
            <div className="summary__options">
                <div className="summary__option__label">
                        {this.props.name}
                </div>
                <div className="summary__option__value">
                        {this.props.selectedFeature.name}
                </div>
                <div className="summary__option__cost">
                { new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD'})
                  .format(this.props.selectedFeature.cost) }
                </div>
            </div>

        );
    }
}

export default SummaryOption;