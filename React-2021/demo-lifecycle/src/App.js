import logo from './logo.svg';
import './App.css';
import Counter from './counter/Counter';
import React,{Component} from 'react';

class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      showCounter: true
    }
  }
  componentDidUpdate() {
    console.log('App updated');
  }

  removeCounter() {
    this.setState({
      showCounter: false
    })
  }

  render() {
    console.log('App render');
    return (
      <div className="App">
        <button onClick={() => this.removeCounter()}>Remove counter</button>
        {this.state.showCounter && <Counter />}
      </div>
    )
  }

  //kiem tra lai ham nay > phai dat no trong noi muon thay doi state
  shouldComponentUpdate(nextProps, nextState){
    return false;
  }
}

export default App;
