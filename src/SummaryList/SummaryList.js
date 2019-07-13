import React, {Component} from 'react';
import '../SummaryList/SummaryList.css';
import SummaryOption from '../SummaryOption/SummaryOption';
import SummaryTotal from '../SummaryTotal/SummaryTotal';

class SummaryList extends Component {
    
render(){
        
    const summary = Object.keys(this.props.selectedFeatures)
          .map(key => 
            <SummaryOption name={key} selectedFeature={this.props.selectedFeatures[key]} />
          )
    
    return(
            <section className="main__summary">
                <h3>NEW GREENLEAF 2018</h3>
                {summary}
                <SummaryTotal total={this.props.total} />
            </section>

        );
    
}
}

export default SummaryList;