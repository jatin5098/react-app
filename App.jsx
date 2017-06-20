import React from 'react';
import Header from './Header.jsx';
import Content from './Content.jsx';

class App extends React.Component {
   render() {
      var myStyle = {
         fontSize: 18,
         color: '#FF0000'
      };
      return (
         <div>
            <Header/>
            <Content/>            
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