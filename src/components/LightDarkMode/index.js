// Write your code here
import {Component} from 'react'
import './index.css'

class LightDarkMode extends Component {
  state = {isState: true}

  onClickButton = () => {
    this.setState(prevState => ({isState: !prevState.isState}))
  }

  getColorClass = () => {
    const {isState} = this.state

    return isState ? 'Light Mode' : 'Dark Mode'
  }

  getHeadingColor = () => {
    const {isState} = this.state

    return isState ? 'light-color' : 'dark-color'
  }

  getBackgroundColor = () => {
    const {isState} = this.state

    return isState ? 'dark-bg-color' : 'light-bg-color'
  }

  render() {
    const onChangeColor = this.getColorClass()
    const onChangeHeadingColor = this.getHeadingColor()
    const onChangeBackGroundColor = this.getBackgroundColor()
    return (
      <div className="container">
        <div className={`card-container ${onChangeBackGroundColor}`}>
          <h1 className={`${onChangeHeadingColor} heading`}>
            Click To Change Mode
          </h1>
          <button className="btn" onClick={this.onClickButton} type="button">
            {onChangeColor}
          </button>
        </div>
      </div>
    )
  }
}
export default LightDarkMode
