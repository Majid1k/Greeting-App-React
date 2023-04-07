import React from 'react';

function App() {

  let currDate = new Date();       //Testing: year,month,date,hour1-24
  currDate = currDate.getHours();
  
  let greeting = '';
  const cssStyle = {};
   
  
      if (currDate >= 1 && currDate <= 11){
        greeting = "Good Morning"
        cssStyle.color = "green"
      }else if (currDate >= 12 && currDate <= 19 ){
        greeting = "Good Afternoon" 
        cssStyle.color = "orange"
      } else {
        cssStyle.color = "black";
        greeting = "Good Night"
      }

    return (
     <>
      <div>
      <h1>Hello, <span style={cssStyle}> {greeting} </span></h1>
      </div>      
     </>
      );
    };
    
      
export default App;
