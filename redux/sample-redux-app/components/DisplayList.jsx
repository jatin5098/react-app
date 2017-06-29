import React from 'react';

const Lists = (props) => {
    return(
        <li>{props.topic}</li>
    );
}

const displayList = (props) => {
    return(
        <div>
            Display List
            <div>
                <ul>
                    {props.lists.map((list) => {
                        <Lists 
                            topic = {list.topic}
                            duration = {list.duration} />;
                    })}
                </ul>                
            </div>
        </div>
    );
};

export default displayList;