// Write your code here
import {Component} from 'react'
import './index.css'

class ShowHide extends Component {
  state = {
    showFastName: false,
    showLastName: false,
  }

  onShowFirstName = () => {
    this.setState(prevState => ({showFastName: !prevState.showFastName}))
  }

  onShowLastName = () => {
    this.setState(prevState => ({showLastName: !prevState.showLastName}))
  }

  render() {
    const {showFastName, showLastName} = this.state
    return (
      <div className="bg-container">
        <h1 className="heading">Show/Hide</h1>
        <div className="card-container">
          <dv className="first-card">
            <button
              className="first-btn"
              type="button"
              onClick={this.onShowFirstName}
            >
              Show/Hide Firstname
            </button>
            {showFastName && <p className="name">Joe</p>}
          </dv>
          <dv className="second-card">
            <button
              className="first-btn"
              type="button"
              onClick={this.onShowLastName}
            >
              Show/Hide Lastname
            </button>
            {showLastName && <p className="name">Jonas</p>}
          </dv>
        </div>
      </div>
    )
  }
}
export default ShowHide
