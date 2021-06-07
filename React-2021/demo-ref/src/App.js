import logo from './logo.svg';
import './App.css';
import React, {Component} from 'react';

class App extends Component {
  constructor(props){
    super(props);
    this.inputElement = React.createRef();
  }
  componentDidMount(){
    //debugger;  
    this.inputElement.current.focus();

  }
  render(){
    return(
      <div className="App">
        <input type='text' ref={this.inputElement}></input>
      </div>
    )
  }
}

export default App;
