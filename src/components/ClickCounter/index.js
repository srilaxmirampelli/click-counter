// Write your code here
import './index.css'

import {Component} from 'react'

class ClickCounter extends Component {
  state = {count: 0}

  onClickMeButton = () => {
    this.setState(prevCount => ({
      count: prevCount.count + 1,
    }))
  }

  render() {
    const {count} = this.state
    return (
      <div className="click-counter-app">
        <div className="container">
          <h1 className="heading">
            The Button has been clicked{' '}
            <span className="count-value">{count}</span> times
          </h1>
          <p className="paragraph">Click the button to increase the count!</p>
          <button
            className="clickme-btn"
            type="button"
            onClick={this.onClickMeButton}
          >
            Click Me!
          </button>
        </div>
      </div>
    )
  }
}

export default ClickCounter
