import React, { Component } from 'react';

import conf from '../TemperatureConf';

class Transforms extends Component {
  render() {
    return (
      <div>
        <div className="temp-grid">
          <div className="temp-grid-box"><div className="temp-grid-box-value">{conf.TEMPERATURES_CONFIGURATION[this.props.measure].transform.celsius(this.props.value).toFixed(1)} &deg;{conf.TEMPERATURES_CONFIGURATION.celsius.symbol}</div><div className="temp-grid-box-title">{conf.TEMPERATURES_CONFIGURATION.celsius.title}</div></div>
          <div className="temp-grid-box"><div className="temp-grid-box-value">{conf.TEMPERATURES_CONFIGURATION[this.props.measure].transform.fahrenheit(this.props.value).toFixed(1)} &deg;{conf.TEMPERATURES_CONFIGURATION.fahrenheit.symbol}</div><div className="temp-grid-box-title">{conf.TEMPERATURES_CONFIGURATION.fahrenheit.title}</div></div>
          <div className="temp-grid-box"><div className="temp-grid-box-value">{conf.TEMPERATURES_CONFIGURATION[this.props.measure].transform.kelvin(this.props.value).toFixed(1)} &deg;{conf.TEMPERATURES_CONFIGURATION.kelvin.symbol}</div><div className="temp-grid-box-title">{conf.TEMPERATURES_CONFIGURATION.kelvin.title}</div></div>
          <div className="temp-grid-box"><div className="temp-grid-box-value">{conf.TEMPERATURES_CONFIGURATION[this.props.measure].transform.reaumur(this.props.value).toFixed(1)} &deg;{conf.TEMPERATURES_CONFIGURATION.reaumur.symbol}</div><div className="temp-grid-box-title">{conf.TEMPERATURES_CONFIGURATION.reaumur.title}</div></div>
        </div>
      </div>
    );
  }
}

export default Transforms;
