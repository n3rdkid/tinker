import React from "react";

class CountDownTimer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      time: {},
      seconds: 0,
      timeLimit: this.props.timeLimit
    };
    this.timer = 0;
    this.startTimer = this.startTimer.bind(this);
    this.countDown = this.countDown.bind(this);
  }
  secondsToTime(secs) {
    let hours = Math.floor(secs / (60 * 60));

    let divisor_for_minutes = secs % (60 * 60);
    let minutes = Math.floor(divisor_for_minutes / 60);

    let divisor_for_seconds = divisor_for_minutes % 60;
    let seconds = Math.ceil(divisor_for_seconds);

    let obj = {
      h: hours,
      m: minutes,
      s: seconds
    };
    return obj;
  }

  componentDidMount() {
    let timeLeftVar = this.secondsToTime(this.state.seconds);
    this.setState({ time: timeLeftVar });
  }

  startTimer() {
    if (this.state.seconds === 0) {
      this.setState({ seconds: this.state.timeLimit });
    }
    if (this.timer === 0 && this.state.seconds > 0) {
      this.timer = setInterval(this.countDown, 1000);
    }
  }
  resetTime() {
    this.setState({ seconds: this.props.timeLimit });
  }
  resetTimeAndChangeQuestion() {
    this.setState({ seconds: this.props.timeLimit });
    let e = {
      target: {
        id: 0
      }
    };
    e.target.id = 0;
    this.props.nextQuestion(e);
  }

  countDown() {
    // Remove one second, set state so a re-render happens.

    let seconds = this.state.seconds - 1;
    this.setState({
      time: this.secondsToTime(seconds),
      seconds: seconds
    });

    // if (seconds <= 5 && this.props.stopCount != 5) {
    //   document.getElementById("quizTimer").classList.toggle("text-danger");
    // } else if (seconds >= 5 && this.props.stopCount != 5) {
    //   document.getElementById("quizTimer").classList.toggle("text-success");
    // }

    // Check if we're at zero.
    if (seconds === 0) {
      this.resetTimeAndChangeQuestion();
    }
    //else if (seconds === 0 && this.props.stopCount <= 5) {
    //}
  }

  render() {
    if (this.props.stopCount !== 5) {
      this.startTimer();
    }

    //  console.log(this.state.seconds);
    return (
      <div>
        <h1 key="timer">Time: {this.state.seconds}</h1>
      </div>
    );
  }
}

export default CountDownTimer;
