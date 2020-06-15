import React from 'react'
import clock from './clock.module.scss'

export default class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            date: new Date(),
        };
    }
  
    componentDidMount() {
      this.timerID = setInterval(
        () => this.tick(),
        1000
      );
    }
  
    componentWillUnmount() {
      clearInterval(this.timerID);
    }
  
    tick() {
      this.setState({
        date: new Date()
      });
    }
  
    render() {
      return (
        <>
            <div className={clock.container}>
                <span className={clock.data}>{this.state.date.toLocaleDateString()}</span>
                <span className={clock.hora}>{this.state.date.toLocaleTimeString()}</span>
            </div>
        </>
      );
    }
}