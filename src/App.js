//TODO: STEP 1 - Import the useState hook.
import React, {useState, useEffect} from "react";
import "./App.css";
//import BottomRow from "./BottomRow";

function App() {
  //TODO: STEP 2 - Establish your applictaion's state with some useState hooks.  You'll need one for the home score and another for the away score.
  const [awayScore, setAwayScore] = useState(0);
  const [homeScore, setHomeScore] = useState(0);
  

  const handleAddHomeTouchdown = e => {
    setHomeScore(homeScore + 7);
  }

  const handleAddAwayTouchdown = e => {
    setAwayScore(awayScore + 7);
  }

  const handleAddHomeFG = e => {
    setHomeScore(homeScore + 3);
  }

  const handleAddAwayFG = e => {
    setAwayScore(awayScore + 3);
  }

  const [quarter, setQuarter] = useState(1);
  const handleQuarter = e => {
  setQuarter(quarter + 1)}
  const handleReset = e => {
    setHomeScore(0);
    setAwayScore(0);
    setQuarter(1);
  }

  //const [gameTime, setGameTime] = useState(10:00);
  //useEffect(() => {
  //  setTime(time - :01)
  //})
  const BottomRow = () => {
    return (
      <div className="bottomRow">
        <div className="down">
          <h3 className="down__title">Down</h3>
          <div className="down__value">3</div>
        </div>
        <div className="toGo">
          <h3 className="toGo__title">To Go</h3>
          <div className="toGo__value">7</div>
        </div>
        <div className="ballOn">
          <h3 className="ballOn__title">Ball on</h3>
          <div className="ballOn__value">21</div>
        </div>
        <div className="quarter">
          <h3 className="quarter__title">Quarter</h3>
          <div onClick={handleQuarter} className="quarter__value">{quarter}</div>
        </div>
      </div>
    );
  };

  return (
    <div className="container">
      <section className="scoreboard">
        <div className="topRow">
          <div className="home">
            <h2 className="home__name">Lions</h2>

            {/* TODO STEP 3 - We need to change the hardcoded values in these divs to accept dynamic values from our state. */}

            <div className="home__score">{homeScore}</div>
          </div>
          <div className="timer">00:03</div>
          <div className="away">
            <h2 className="away__name">Tigers</h2>
            <div className="away__score">{awayScore}</div>
          </div>
        </div>
        <BottomRow />
      </section>
      <section className="buttons">
        <div className="homeButtons">
          {/* TODO STEP 4 - Now we need to attach our state setter functions to click listeners. */}
          <button onClick={handleAddHomeTouchdown} className="homeButtons__touchdown">Home Touchdown</button>
          <button onClick={handleAddHomeFG} className="homeButtons__fieldGoal">Home Field Goal</button>
        </div>
        <div className="otherButtons">
          <button onClick={handleReset} className="otherButtons__reset">Reset</button>
        </div>
        <div className="awayButtons">
          <button onClick={handleAddAwayTouchdown} className="awayButtons__touchdown">Away Touchdown</button>
          <button onClick={handleAddAwayFG} className="awayButtons__fieldGoal">Away Field Goal</button>
        </div>
      </section>
    </div>
  );
  }

export default App;
