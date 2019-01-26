import React, { Component } from 'react';
require('./Counter.css')

class Counter extends Component {
    handleCount(event){
        var data = null;
        var offset = 0
        if(event.target.innerHTML === 'add'){
            data ={
                id:this.props.record.id,
                count: this.props.record.count + 1
            };
            offset = 1;

        }
        if(event.target.innerHTML === 'Sub'){
            data ={
                id:this.props.record.id,
                count: this.props.record.count - 1
            };
            offset = -1;
        }
        this.props.sentCount(this.props.record, data, offset);
    }

    render() {
        return (
            <div>
                <button onClick={this.handleCount.bind(this)}>add</button>
                <button onClick={this.handleCount.bind(this)}>Sub</button>
                {this.props.record.count}
            </div>
        );
    }
}
export default Counter;