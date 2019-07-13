import React, {Component} from 'react';
import '../Feature/Feature.css';

class Feature extends Component {
  //need feature name and list of features   

  render(){
    return(
    <div className="feature">
      <div className="feature__name">
        {this.props.name}
      </div>
      <ul className="feature__list">
        {this.props.options}
        
      </ul>
    </div>
    );
  }
}



export default Feature;