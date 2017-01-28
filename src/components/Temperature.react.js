import React, { Component } from 'react';
import TemperatureSlider from './TemperatureSlider.react';
import Transforms from './Transforms.react';
import Select from './Select.react';
import './Temperature.css';
import conf from '../TemperatureConf';

class Temperature extends Component {
  constructor(props) {
      super(props);
      this.state = {
          sliderMeasure: 'kelvin',
          value: ((conf.TEMPERATURES_CONFIGURATION.kelvin.range.max + conf.TEMPERATURES_CONFIGURATION.kelvin.range.min) / 2),
          color: this.getFeeling('kelvin', ((conf.TEMPERATURES_CONFIGURATION.kelvin.range.max + conf.TEMPERATURES_CONFIGURATION.kelvin.range.min) / 2)).color,
          feeling: this.getFeeling('kelvin', ((conf.TEMPERATURES_CONFIGURATION.kelvin.range.max + conf.TEMPERATURES_CONFIGURATION.kelvin.range.min) / 2)).feeling
      };
  }
  handleValueChange = (value) => {
      this.setState({
          value: value,
          color: this.getFeeling(this.state.sliderMeasure, value).color,
          feeling: this.getFeeling(this.state.sliderMeasure, value).feeling
      })
  }
  handleMeasureChange = (value) => {
      this.setState({
          sliderMeasure: value,
          value: (conf.TEMPERATURES_CONFIGURATION[value].range.max + conf.TEMPERATURES_CONFIGURATION[value].range.min) / 2,
          color: this.getFeeling(value, (conf.TEMPERATURES_CONFIGURATION[value].range.max + conf.TEMPERATURES_CONFIGURATION[value].range.min) / 2).color,
          feeling: this.getFeeling(value, (conf.TEMPERATURES_CONFIGURATION[value].range.max + conf.TEMPERATURES_CONFIGURATION[value].range.min) / 2).feeling
      })
  }
  getFeeling = (measure, value) => {
    let color = null;
    let feeling = null;

    if (conf.TEMPERATURES_CONFIGURATION[measure].transform.celsius(value) < 10) {
        color = '#1E88E5';
        feeling = 'Cold';
    } else if (conf.TEMPERATURES_CONFIGURATION[measure].transform.celsius(value) >= 10 && conf.TEMPERATURES_CONFIGURATION[measure].transform.celsius(value) < 30) {
        color = '#4CAF50';
        feeling = 'Perfect!';
    } else if (conf.TEMPERATURES_CONFIGURATION[measure].transform.celsius(value) >= 30 && conf.TEMPERATURES_CONFIGURATION[measure].transform.celsius(value) < 40) {
        color = '#FF9800';
        feeling = 'Hot';
    } else {
        color = '#F44336';
        feeling = 'Too hot!';
    }

    return {
        color: color,
        feeling: feeling
    };
  }
  render() {
    return (
      <div>
        <div className="app-title"><span>Temperature Convertor</span></div>
        <div className="temperature__layout">
          <div className="temperature__layout-thermometer">
              <TemperatureSlider
                color={this.state.color}
                value={this.handleValueChange}
                currentValue={this.state.value}
                measure={conf.TEMPERATURES_CONFIGURATION[this.state.sliderMeasure].symbol}
                min={conf.TEMPERATURES_CONFIGURATION[this.state.sliderMeasure].range.min}
                max={conf.TEMPERATURES_CONFIGURATION[this.state.sliderMeasure].range.max} />
          </div>
          <div className="temperature__layout-results">
            <div className="temperature__layout-results-feeling" style={{'background': this.state.color}}>{this.state.feeling}</div>
            <Select measure={this.state.sliderMeasure} onChangeMeasure={this.handleMeasureChange} />
            <Transforms measure={this.state.sliderMeasure} value={this.state.value} />
          </div>
        </div>
      </div>
    );
  }
}

export default Temperature;
