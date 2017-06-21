import React from 'react';

class FormComponent extends React.Component {
    constructor() {
        super();
        this.state = {
            data: 'Initial state'
        };
        this.updateState = this.updateState.bind(this);
    }

    updateState(e) {
        this.setState({data: e.target.value});
    }

    render() {
        return (
            <div>
                <input 
                    type = "text" 
                    value = {this.state.data} 
                    onChange = {this.updateState} />
                <p>{this.state.data}</p>
            </div>
        );
    }
}

export default FormComponent;