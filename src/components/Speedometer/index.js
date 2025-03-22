// Write your code here
// src/components/Speedometer/index.js

import React, {Component} from 'react'
import './index.css'

class Speedometer extends Component {
  state = {speed: 0}

  accelerate = () => {
    this.setState(prevState => {
      if (prevState.speed < 200) {
        return {speed: prevState.speed + 10}
      }
      return null
    })
  }

  brake = () => {
    this.setState(prevState => {
      if (prevState.speed > 0) {
        return {speed: prevState.speed - 10}
      }
      return null
    })
  }

  render() {
    const {speed} = this.state
    return (
      <div className="speedometer-container">
        <h1 className="heading">SPEEDOMETER</h1>
        <img
          src="https://assets.ccbp.in/frontend/react-js/speedometer-img.png"
          alt="speedometer"
          className="speedometer-image"
        />
        <h2 className="speed-display">Speed is {speed}mph</h2>
        <p className="description">Min Limit is 0mph, Max Limit is 200mph</p>
        <div className="button-container">
          <button className="accelerate-button" onClick={this.accelerate}>
            Accelerate
          </button>
          <button className="brake-button" onClick={this.brake}>
            Apply Brake
          </button>
        </div>
      </div>
    )
  }
}

export default Speedometer
