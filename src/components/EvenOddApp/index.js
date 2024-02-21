// Write your code here
import './index.css'
import {Component} from 'react'

class EvenoddApp extends Component {
  state = {count: 0}

  increment = () => {
    const number = Math.floor(Math.random() * 100)
    this.setState({count: number})
  }

  render() {
    const {count} = this.state
    return (
      <div className="main-container">
        <h1>Count {count}</h1>
        {count % 2 === 0 ? (
          <p className="result">Count is Even</p>
        ) : (
          <p className="result">Count is Odd</p>
        )}
        <button type="button" onClick={this.increment}>
          Increment
        </button>
        <p>Increase By Random Number Between 0 to 100</p>
      </div>
    )
  }
}
export default EvenoddApp
