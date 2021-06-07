import logo from './logo.svg';
import './App.css';
import TrafficLight from './components/TrafficLight';
import React, {Component} from 'react';

const Red = 0;
const Orange = 1;
const Green = 2;

class App extends Component {
  constructor(){
    super();
    this.state = {
        currentColor: Red
    };
    setInterval(() => {
        this.setState({
                currentColor: this.getNextColor(this.state.currentColor)
            });
    }, 1000);
}

getNextColor(color){
    switch(color){
        case Red: 
            return Orange;
        case Orange: 
            return Green;
        default: 
            return Red;
    }
}
  render(){
    const {currentColor} = this.state;
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
            <TrafficLight currentColor = {currentColor}/>
        </header> 
      </div>
    );
  }
}

export default App;
