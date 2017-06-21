import React from 'react';
import ReactDOM from 'react-dom';

class StateChangeComponent extends React.Component {
    constructor() {
        super();
        this.state = {
            stateValue: 'Initial state'
        }
        this.changeCurrentState = this.changeCurrentState.bind(this);
        this.forceUpdateHandler = this.forceUpdateHandler.bind(this);
        this.findDomNodeHandler = this.findDomNodeHandler.bind(this);
    }

   changeCurrentState() {
      this.setState({stateValue: 'State changed'})
   }

   forceUpdateHandler() {
      this.forceUpdate();
   }

   findDomNodeHandler() {
      const myDiv = document.getElementById('myDiv');
      ReactDOM.findDOMNode(myDiv).style.color = 'green';
   }
   
    render(){
        return(
            <div>
                <div>
                    <button onClick = {this.changeCurrentState}>Click to Change State</button>
                    <h3>{this.state.stateValue}</h3>
                </div>
                <div>
                    <button onClick = {this.forceUpdateHandler}>FORCE UPDATE</button>
                    <h4>Random number: {Math.random()}</h4>
                </div>
                <div>
                    <button onClick = {this.findDomNodeHandler}>FIND DOME NODE</button>
                    <div id = "myDiv">NODE</div>
                </div>
            </div>
        );
    }
}
export default StateChangeComponent;