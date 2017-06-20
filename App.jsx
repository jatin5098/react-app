import React from 'react';
import Header from './Header.jsx';
import Content from './Content.jsx';
import StateComponent from './StateComponent.jsx';

class App extends React.Component {
   constructor() {
       super();
       this.state = {
        header: "Header from state...",
        content: "Content from state..."
      };
   }
   render() {
      const myStyle = {
         fontSize: 18,
         color: '#FF0000'
      };
      
      return (
         <div>
            <Header/>
            <Content
                headerProp = {this.state.header}
                contentProp = {this.state.content}/>
            <StateComponent 
                headerProp = "Header from props..."
                contentProp = "Content from props..."/>           
            <p style= {myStyle}>This is the content!!!</p>
            <p data-myattribute = "somevalue">This is the content!!!</p>
            <h4>{2+2}</h4>
            {
                //End of the line Comment...
            }
            {
                /*Multi line comment...*/
            }
         </div>
      );
   }
}

export default App;