import React, {Component} from 'react';
import '../FeatureList/FeatureList.css';
import Feature from '../Feature/Feature'

class FeatureList extends Component {
    



    render(){
        const features = Object.keys(this.props.features)
          .map(key => {
            const options = this.props.features[key].map((item, index) => {
              const selectedClass = item.name === this.props.selectedFeatures[key].name ? 'feature__selected' : '';
              const featureClass = 'feature__option ' + selectedClass;
              return <li key={index} className="feature__item">
                <div className={featureClass}
                  
                  onClick={e => this.props.handleUpdate(key, item)}>
                    { item.name }
                    ({ new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD'})
                      .format(item.cost) })
                </div>
              </li>
            });

            return <Feature name ={key} options={options} handleUpdate={this.props.handleUpdate}/>
          });      
        
        

        


        return(
        <section className="main__form">
            <h3>TECH SPECS AND CUSTOMIZATIONS</h3>
            {features}
        </section>


        );
        }

}

FeatureList.defaultProps = {
  features: []
};

export default FeatureList;

