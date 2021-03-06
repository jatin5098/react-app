import React from 'react';
import { connect } from 'react-redux';
import DisplayList from './DisplayList.jsx';

import appReducer from '../reducers/appReducer.js';
import { addList } from '../actions/listActions';

import request from 'superagent';

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
            dispatch(addList());
            //Do some async operation
            request.get("http://date.jsontest.com")
                .end((err, res) => {
                    console.log(res.text);                       
                    dispatch(addList());
                });
            
        }
    }
};
export default connect(mapStateToProps, mapDispatchToProp)(AppComponent);