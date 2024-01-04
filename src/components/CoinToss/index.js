// Write your code here
import {Component} from 'react'

import './index.css'

class CoinToss extends Component {
  state = {coin: 0, total: 0, heads: 0, tails: 0}

  onChangeCoin = () => {
    this.setState({coin: Math.floor(Math.random() * 2)})
  }

  render() {
    const {coin, total, heads, tails} = this.state
    const image =
      coin === 0
        ? 'https://assets.ccbp.in/frontend/react-js/heads-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/tails-img.png'
    return (
      <div className="bg-container">
        <div className="sm-container">
          <h1 className="heading">Coin Toss Game</h1>
          <p className="para">Heads (or) Tails</p>
          <img src={image} className="image" alt="toss results" />
          <div>
            <button type="button" onClick={this.onChangeCoin}>
              Toss Coin
            </button>
          </div>
          <div className="para1">
            <p>Total:{total} </p>
            <p>Heads:{heads} </p>
            <p>Tails:{tails} </p>
          </div>
        </div>
      </div>
    )
  }
}

export default CoinToss
