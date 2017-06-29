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
                    {props.lists.map((list, index) => 
                        <li key = {index}>
                            {list.topic}
                        </li>)
                    }
                </ul>                
            </div>
        </div>
    );
};

export default displayList;