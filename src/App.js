import React, { Component } from 'react';
import Counter from './components/Counter';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      records:[
        {id:"first",count:0},
        {id:"second",count:0},
        {id:"third",count:0}
      ],
      AllCount:0
    }
  }

  getCount(record,data,offset){
    const ChangeIndex = this.state.records.indexOf(record)
    //console.log("index is " + ChangeIndex)
    const newRecords = this.state.records.map((item,index) => {
      if(index !== ChangeIndex){
        return item
      }

      return {
        ...item,
        ...data
      }
    })



    this.setState({
      records:newRecords,
      AllCount:this.state.AllCount + offset
    })
  }

  render() {
    return (
      <div className="App">
        {this.state.records.map((record) => <Counter key={record.id} record={record} 
              sentCount={this.getCount.bind(this)}/>)}
        <hr/>
        AllCount is: {this.state.AllCount}
      </div>
    );
  }
}

export default App;
