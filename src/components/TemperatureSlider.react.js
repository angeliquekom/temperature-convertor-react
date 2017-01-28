import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import Slider from 'material-ui/Slider';

const styles = {
  root: {
    display: 'inline-block',
    height: 500,
    flexDirection: 'column',
    justifyContent: 'space-around'
  },
};

class TemperatureSlider extends Component {
  constructor(props) {
    super(props);
    this.state = { value: (this.props.min + this.props.max) / 2,
    theme: getMuiTheme({
      slider: {
        selectionColor: this.props.color
      }
    })};
  }
  changeSliderValue(event, value) {
    if(this.props.value) {
      this.setState({
        value: value,
        theme: getMuiTheme({
          slider: {
            selectionColor: this.props.color
          }
        })
      });
      this.props.value(value);
    }
  }
  componentWillReceiveProps(nextProps) {
    this.setState({
      value: nextProps.currentValue,
      theme: getMuiTheme({
        slider: {
          selectionColor: nextProps.color
        }
      })
    });
  }
  render() {
    return (
      <div>
        <div className="current-value" style={{backgroundColor: this.props.color}}><span>{this.state.value} &deg;{this.props.measure}</span></div>
        <div className="range-value-max"><span>{this.props.max}</span></div>
        <div style={styles.root}>
          <MuiThemeProvider muiTheme={this.state.theme}>
            <Slider style={{height: styles.root.height}}
                  axis='y'
                  min={this.props.min}
                  max={this.props.max}
                  name='slider'
                  step={0.01}
                  value={this.state.value}
                  onChange={(event, value) => this.changeSliderValue(event, value)}
                  defaultValue={(this.props.min + this.props.max) / 2} />
          </MuiThemeProvider>
        </div>
        <div className="range-value-min"><span>{this.props.min}</span></div>
      </div>
    );
  }
}

export default TemperatureSlider;
