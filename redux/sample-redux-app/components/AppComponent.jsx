import React from 'react';
import { connect } from 'react-redux';
import DisplayList from './DisplayList.jsx';

import appReducer from '../reducers/appReducer.js';

class AppComponent extends React.Component {
    constructor() {
        super();
    }

    render() {
        return(
            <div>
                <h2>App Component</h2>
                <DisplayList lists = {this.props.appReducer.displayList}/>
                <button onClick = {() => this.props.addNew()} >Add New Item</button>
            </div>
        );
    };
}

const mapStateToProps = (state) => {
    return {
        appReducer: state.appReducer
    }
};

const mapDispatchToProp = (dispatch) => {
    return {
        addNew: () => {
            dispatch({
                type: 'ADD_NEW',
                payload: {
                    topic: 'new topic',
                    duration: '44'
                 }
            });
        }
    }
};
export default connect(mapStateToProps, mapDispatchToProp)(AppComponent);