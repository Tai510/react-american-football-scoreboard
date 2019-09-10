//TODO: STEP 1 - Import the useState hook.
import React, {useState} from "react";
import "./App.css";
import BottomRow from "./BottomRow";

function App() {
  //TODO: STEP 2 - Establish your applictaion's state with some useState hooks.  You'll need one for the home score and another for the away score.
  const [homeCount , setHomeCount] = useState(0);
  const [awayCount , setAwayCount] = useState(0);

  const [home , setHome] = useState('Home Team is up')
  const [away , setAway] = useState('Away Team is up')
  const [tie , setTie] = useState('The Game is Tied!')

  const scoreUpdate = () => {
    if(homeCount > awayCount) {
      return home
    } else if(homeCount - awayCount === 0) {
      return tie
    } else {
      return away
    }
  }

  
  // const [count , setCount] = useState(0);
  return (
    <div className="container">
      <section className="scoreboard">
        <div className='score-update'>
          <p> {scoreUpdate(setHome , setAway , setTie)} {/* is up by {homeCount - awayCount && awayCount - homeCount} points */}</p>
        </div>
        <button onClick={() => setHomeCount(0) || setAwayCount(0)} className='reset-button'>Reset</button>

        <div className="topRow">
          <div className="home">
            <h2 className="home__name">Lions</h2>

            {/* TODO STEP 3 - We need to change the hardcoded values in these divs to accept dynamic values from our state. */}

            <div className="home__score">{homeCount}</div>
          </div>
          <div className="timer">00:00</div>
          <div className="away">
            <h2 className="away__name">Tigers</h2>
            <div className="away__score">{awayCount}</div>
          </div>
        </div>
        <BottomRow/>
      </section>
      <section className="buttons">
        <div className="homeButtons">
          {/* TODO STEP 4 - Now we need to attach our state setter functions to click listeners. */}
          <button onClick={() => setHomeCount(homeCount + 7)} className="homeButtons__touchdown">Home Touchdown</button>
          <button onClick={() => setHomeCount(homeCount + 3)} className="homeButtons__fieldGoal">Home Field Goal</button>
        </div>
        <div className="awayButtons">
          <button onClick={() => setAwayCount(awayCount + 7)} className="awayButtons__touchdown">Away Touchdown</button>
          <button onClick={() => setAwayCount(awayCount + 3)} className="awayButtons__fieldGoal">Away Field Goal</button>
        </div>
      </section>
    </div>
  );
}

export default App;
