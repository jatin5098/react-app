import React from 'react';

class Content extends React.Component {
    render() {
        return (
            <div>
                <h2>Content</h2>
                <h4>{this.props.headerProp}</h4>
                <h4>{this.props.contentProp}</h4>
            </div>    
        );
    }
}

export default Content;