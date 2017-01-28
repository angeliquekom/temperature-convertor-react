import React, { Component } from 'react';
const styles = {
  selected:{
    'backgroundColor': '#939393',
    'color': 'white'
  }
}
class Select extends Component {
  clicked(measure) {
    if(this.props.onChangeMeasure) {
      this.props.onChangeMeasure(measure);
    }
  }
  render() {
    return (
      <div>
        <div className="select">
          <div className="circle" style={(this.props.measure === 'celsius') ? styles.selected : {}} onClick={(event) => this.clicked('celsius')}>C</div>
          <div className="circle" style={(this.props.measure === 'fahrenheit') ? styles.selected : {}} onClick={(event) => this.clicked('fahrenheit')}>F</div>
          <div className="circle" style={(this.props.measure === 'kelvin') ? styles.selected : {}} onClick={(event) => this.clicked('kelvin')}>K</div>
          <div className="circle" style={(this.props.measure === 'reaumur') ? styles.selected : {}} onClick={(event) => this.clicked('reaumur')}>R</div>
        </div>
      </div>
    );
  }
}

export default Select;
