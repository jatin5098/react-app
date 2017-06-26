import React from 'react';
import { Link } from 'react-router-dom';

class RouterComponent extends React.Component {
    constructor() {
        super();
    };

    render() {
        return (
            <div>
                <ul>
                    <li><Link to="/app">App</Link></li>             
                    <li><Link to="/router">Router</Link></li>             
                    <li><Link to="/home">Home</Link></li>             
                    <li><Link to="/about">About</Link></li>             
                    <li><Link to="/contact">Contact</Link></li>             
                    <li><Link to="/redux">Redux</Link></li>             
                </ul>
                {this.props.children}                  
            </div>            
        );
    }
}

export default RouterComponent;