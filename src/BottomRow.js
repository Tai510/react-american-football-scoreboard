import React, {useState} from "react";
import "./App.css";



const BottomRow = () => {

  const [downs, setDowns] = useState(1);
  const [yards, setYards] = useState(10);
  const [ballOn1, setBallOn1] = useState(20);
  const [ballOn2, setBallOn2] = useState(0);
  const [quarters, setQuarters] = useState(1);


  return (
<div>
    <div className="bottomRow">

      <div className="down">
        <h3 className="down__title">Down</h3>
        <div className="down__value">{downs}</div>
        <div>
            <button onClick={() => setDowns(downs + 1)}>+</button>
            <button onClick={() => setDowns(downs - 1)}>-</button>
        </div>
      </div>

      <div className="toGo">
        <h3 className="toGo__title">To Go</h3>
        <div className="toGo__value">{yards}</div>
        <div>
            <button onClick={() => setYards(yards + 1)}>+</button>
            <button onClick={() => setYards(yards - 1)}>-</button>
        </div>
      </div>

      <div className="ballOn">
        <h3 className="ballOn__title">Ball on</h3>
        <div className="ballOn__value">{ballOn1}</div>
        <div>
            <button onClick={() => setBallOn1(ballOn1 + 1)}>+</button>
            <button onClick={() => setBallOn1(ballOn1 - 1)}>-</button>
            {/* <button onClick={() => setBallOn2(ballOn2 + 1)}>+</button>
            <button onClick={() => setBallOn2(ballOn2 - 1)}>-</button> */}
        </div>
      </div>

      <div className="quarter">
        <h3 className="quarter__title">Quarter</h3>
        <div className="quarter__value">{quarters}</div>
        <div>
            <button onClick={() => setQuarters(quarters + 1)}>+</button>
            <button onClick={() => setQuarters(quarters - 1)}>-</button>
        </div>
      </div>
           
    </div>

    <div>
    <button  onClick={() => setDowns(1) || setYards(10) || setBallOn1(0) || setBallOn2(0) || setQuarters(1) } id='reset-button'>Reset</button>
    </div>
</div>  
   
  );
};

export default BottomRow;
