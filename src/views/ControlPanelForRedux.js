import React, { Component } from 'react';
import CounterForRedux from './CounterForRedux';
import SummaryForRedux from './SummaryForRedux';

const style = {
  margin: '20px'
};

class ControlPanelForRedux extends Component {

  render() {
    return (
      <div style={style}>
        <CounterForRedux caption="First" />
        <CounterForRedux caption="Second" />
        <CounterForRedux caption="Third" />
        <hr/>
        <SummaryForRedux />
      </div>
    );
  }
}

export default ControlPanelForRedux;

