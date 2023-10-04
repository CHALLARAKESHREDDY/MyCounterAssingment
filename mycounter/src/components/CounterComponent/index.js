import React,{useState} from 'react';

import './index.css'

function   CounterApplication(){
    const [count,changeCounter]=useState(0)
    const [startClicked, setStartClicked] = useState(true);
   
    const [inputValue, setInputValue] = useState('');
    const [isEditing, setIsEditing] = useState(false);
  const [inputText, setInputText] = useState('');
  const [headingText, setHeadingText] = useState('Tally Counter');

  
    const handleStartClick = () => {
     
      
      setStartClicked(true);
      changeCounter(inputValue)
    };
  
    const handleCounterValueChange = (event) => {
      setInputValue(event.target.value);
    };
  
    const handleCounterStart = () => {
      
      setStartClicked(false);
      
     
    };

    const handleStartEdit = () => {
        setIsEditing(true);
      };
    
      const handleInputChange = (event) => {
        setInputValue(event.target.value);
      };
    
      const handleEditComplete = () => {
        setHeadingText(inputValue);
        setInputText('');
        setIsEditing(false);
      };


  

  const resetCounter=()=>{
    changeCounter(0);

  }

  const decreaseCount=()=>{
    const counterValue=count-1
    changeCounter(counterValue)
  }

  const increaseCount=()=>{
    const counterValue=count+1
    changeCounter(counterValue)
  }
 
 
  
  return(
    <div >
        
        <div className="Home-Counter">
        <p>{headingText}</p>
            <input type="integer" className="Input" value={count}/>
            <div className="Counter-Buttons">
            <button type="button" className="Decrease" onClick={decreaseCount}>-</button>
            <button type="button"  className="Decrease" onClick={increaseCount}>+</button>
            </div>
            <button type="button" className="Button" onClick={resetCounter}>RESET COUNTER</button>
            {startClicked ? (
        <div>
          <button onClick={handleCounterStart} className="Button">Start Value</button>
        </div>
      ) : (
        <div>
          <input
            type="number"
            value={inputValue}
            onChange={handleCounterValueChange}
          />
          <button onClick={handleStartClick} >Set</button>
        </div>
      )}
           {isEditing ? (
        <div>
          <input
            type="text"
            value={inputValue}
            onChange={handleInputChange}
            placeholder="Enter new heading"
          />
          <button onClick={handleEditComplete} >Save</button>
        </div>
      ) : (
        <div>
          
          <button onClick={handleStartEdit} className="Button">Counter Name</button>
        </div>
      )}
        </div>
        <div>
     
    </div>
    </div>
  );
};

export default CounterApplication;