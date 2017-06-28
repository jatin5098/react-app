import React from 'react';
import { connect } from 'react-redux';
import { setUser, setAge } from '../actions/userActions';

class ReduxComponent extends React.Component {
    constructor() {
        super();
    }

    render () {
        return (
            <div>
                <h2>Redux Component</h2>
                <button onClick={() => this.props.setName()}>Set App User</button>
                <button onClick={() => this.props.setAge(30)}>Set App User</button>
                <h4>{this.props.user.name}</h4>
                <h4>{this.props.user.age}</h4>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        user: state.userReducer,
        math: state.mathreducer
    };
}

const mapDispatchToProp = (dispatch) => {
    return {
        setName: () => {
            dispatch(setUser());
        },
        setAge: (age) => {
            dispatch(setAge(age));
        }
    };
}
export default connect(mapStateToProps, mapDispatchToProp)(ReduxComponent);