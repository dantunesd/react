class Timer extends React.Component {
    constructor(props) {
      super(props);
      this.state = { seconds: 0, minutes: 0 };
    }
  
    tick() {
      let seconds = this.state.seconds + 1
      let minutes = this.state.minutes
      
      if (seconds === 60)  {
        seconds = 0;
        minutes++;
      }
  
      this.setState(state => ({
        seconds: seconds,
        minutes: minutes
      }));
    }
  
    componentDidMount() {
      this.interval = setInterval(() => this.tick(), 1000);
    }
  
    componentWillUnmount() {
      clearInterval(this.interval);
    }
  
    render() {
      return (
        <div>
          Minutos: {this.state.minutes}<br />
          Segundos: {this.state.seconds}
        </div>
      );
    }
  }
  
  ReactDOM.render(
    <Timer />,
    document.getElementById('timer-example')
  );