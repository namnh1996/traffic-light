
import './App.css';
import TodoItem from './components/TodoItem';
import React, {Component} from 'react';

class App extends Component {
  constructor(){
    super();
    this.todoItems = [
        'Mua bim bim',
        'Đi đá bóng',
        'Đi đổ xăng'
    ]
  }
  render(){
      return(
          <div className="App">
            {
              this.todoItems.map((item,index) => <TodoItem key={index} title={item}></TodoItem>)
            }
          </div>
      );
  }
}

export default App;
