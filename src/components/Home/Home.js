import React from 'react';

import './Home.css';

class Home extends React.Component {
  render () {
    return (
      <div className="Home">
        <div className="catch-of-the-day">
          <div className="menu">
            <header className="top">
              <h1>
                Catch
                <span className="ofThe">
                  <span className="of">of</span>
                  <span className="the">the</span>
                </span>
                Day
              </h1>
              <h3 className="tagline">
                <span>Fresh Seafood Market</span>
              </h3>
            </header>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
