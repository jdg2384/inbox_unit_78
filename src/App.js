import React, { Component } from 'react';
//Components
import Toolbar from './Toolbar/Toolbar.js'
import MessageList from './Messages/messagelist.js'
import './App.css';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {messages: this.messages, toggle: false, readToggle: true}
    
  }
  
  //Toolbar Select all/ None
  selectAllClickHandler = (event) => {
    let toggleBoolean =  this.state.toggle
    const newMessage = [...this.props.messages]
    if(toggleBoolean === false){
        newMessage.map((message,index)=> {
          return newMessage[index].selected = true;
        })
    }
    else if(toggleBoolean === true){
      newMessage.map((message,index)=> {
        return newMessage[index].selected = false;
      })
    } 
    this.state.toggle = !this.state.toggle
    this.newMessage = !this.newMessage
    this.setState({
      messages: newMessage
    })
  }

  // Read Click Handler
  readAllClickHandler = () => {
    let toggleBoolean =  this.state.readToggle
    const newMessage = [...this.props.messages]
    if(toggleBoolean === true){
      newMessage.map((message,index)=> {
        return newMessage[index].starred = true;
      })
    }
    this.setState({
      messages: newMessage
    })
  }

  // Unread Handler
  unreadClickHandler = () => {
    let toggleBoolean =  this.state.readToggle
    const newMessage = [...this.props.messages]
    if(toggleBoolean === true){
      newMessage.map((message,index)=> {
        return newMessage[index].starred = false;
      })
    }
    this.setState({
      messages: newMessage
    })  
  }

  // Star Toggle Click Handler
  starClickHandler = (id) => {
    const messageIndex = this.props.messages.findIndex(message => {
      return message.id === id;
    })
    const newMessage = [...this.props.messages];
    newMessage[messageIndex].starred = !newMessage[messageIndex].starred
    this.setState({
      messages: newMessage
    })
  }

  // Check Selected Click Handler
  selectClickHandler = (id) => {
    const messageIndex = this.props.messages.findIndex(message => {
      return message.id === id;
    })
    const newMessage = [...this.props.messages];
    newMessage[messageIndex].selected = !newMessage[messageIndex].selected
    this.setState({
      messages: newMessage
    })
  }

  render(props) {
    return (
      <div className="App">
          < Toolbar 
              selectAll={this.selectAllClickHandler}
              toggle={this.state.toggle}
              read={this.readAllClickHandler}
              readToggle={this.state.readToggle}
              unread={this.unreadClickHandler}
              toolBarMessages={this.props.messages.map(item => {
                  return item.selected
                  ;
              })}
          />
          
          < MessageList 
              messages={this.props.messages} 
              starClick={this.starClickHandler} 
              selectClick={this.selectClickHandler}
          />
      </div>
    );
  }
}

export default App;
