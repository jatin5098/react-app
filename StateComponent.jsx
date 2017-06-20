import React from 'react';

class StateComponent extends React.Component {
    constructor() {
        super();
        this.state = {
            header: "Header from state...",
            content: "Content from state..."
        }
    }

    render() {
        return(
            <div>
                <h3>{this.state.header}</h3>
                <h3>{this.state.content}</h3>
                <h3>{this.props.headerProp}</h3>
                <h3>{this.props.contentProp}</h3>
                <h3>{this.props.defaultHeaderProp}</h3>
                <h3>{this.props.defaultHontentProp}</h3>
            </div>
        );
    }
}

StateComponent.defaultProps = {
   defaultHeaderProp: "Header from defaultprops...",
   defaultHontentProp:"Content from defaultprops..."
}

export default StateComponent;