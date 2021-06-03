
import logo from './logo.svg';
import './App.css';
import TodoItem from './components/TodoItem';
import React, {Component} from 'react';
import tick from './images/check.svg';

class App extends Component {
  constructor(){
    super();
    this.state = {
      newItem: '',
      todoItems: [
        // { title: 'Mua bim bim', isComplete: true},
        // { title: 'Đi đá bóng', isComplete: true},
        // { title: 'Đọc sách'},
        // { title: 'Đi ngủ'},
        // { title: 'Dậy sớm để thành công'}
    ]};
    this.onKeyUp= this.onKeyUp.bind(this);
    this.onChange= this.onChange.bind(this);
  }
  onItemClicked(item) {
    //console.log('Item Clicked', item);
      return(event) => {
        const {todoItems} = this.state;
        const isComplete = item.isComplete;
        const index = todoItems.indexOf(item);
        this.setState({
          todoItems: [
            ...todoItems.slice(0,index),
            {
              ...item,
              isComplete: !isComplete
            },
            ...todoItems.slice(index + 1)
          ]
        })
      }
  }

  onKeyUp(event){
    if(event.keyCode === 13){
    let text = event.target.value;
    if(!text || text === ''){
      return;
    }

    //xoa cac dau cach
    text = text.trim();
    if(!text){return;}
      this.setState({
        newItem: '',
        todoItems: [
          {title: text, isComplete: false},
          ...this.state.todoItems
        ]
      })
    }
  }

  onChange(event){
    this.setState({
      newItem: event.target.value
    })
  }

  render(){
    return <div className="App">
      <div className="header">
        <img src={tick} width={32}></img>
        <input 
          type="text" 
          placeholder="Add a new item" 
          onKeyUp={this.onKeyUp}
          value={this.state.newItem}
          onChange={this.onChange}
        >
          
        </input>
      </div>
      {this.state.todoItems.length > 0 && this.state.todoItems.map((item, index) =>
       (
        <TodoItem 
          key={index}
          item={item} 
          onClick={this.onItemClicked(item)}/>
      ))}
      {this.state.todoItems.length === 0 && 'Nothing here.'}
    </div>
  }
}

export default App;
