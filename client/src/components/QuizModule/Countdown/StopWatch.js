import React from "react";
import { Icon } from "semantic-ui-react";
class StopWatch extends React.Component {
  state = { secondsElapsed: 0 };

  getSeconds() {
    return ("0" + (this.state.secondsElapsed % 60)).slice(-2);
  }
  getMinutes() {
    return Math.floor(this.state.secondsElapsed / 60);
  }

  handleStartClick = () => {
    var _this = this;
    this.incrementer = setInterval(function() {
      _this.setState({
        secondsElapsed: _this.state.secondsElapsed + 1
      });
    }, 1000);
  };
  componentDidMount() {
    this.handleStartClick();
  }

  handleStopClick = () => {
    clearInterval(this.incrementer);
    console.log(
      "TIme stopped at" +
        this.getMinutes() +
        "min and second" +
        this.getSeconds()
    );
    this.props.displayStopWatchTimer(this.getMinutes(), this.getSeconds());
  };
  componentWillUnmount() {
    this.handleStopClick();
  }

  render() {
    return (
      <span>
        <h3>
          <Icon name="clock" />
          {this.getMinutes()}:{this.getSeconds()}
        </h3>
      </span>
    );
  }
}

export default StopWatch;
