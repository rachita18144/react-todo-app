import React, { Component } from 'react';
import './App.css';
import TodoItem from './components/TodoItem';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

const style = {
  margin:'4em',
  backgroundColor:'#5ea3d0',
  textAlign: 'center'
}
const todoStyle = {
  padding:'2.5em',
  width: '50%',
  display: 'inline-block'
}
const textStyle = {
  padding:'0.5em',
  fontWeight: '300',
  color: 	'#FFFFFF', 
  fontSize :'200%'
}
const textFieldStyle = {
  padding:'1em',
  marginLeft :'1em'
  
}

class App extends Component {
  constructor() {
    super()
    this.state = {
        data: [],
        value: null
    }
  }

  //get text value from textfield and add in array
  //everytime you update the state, always create a new variable and a new memory should be allocated
  //data.push will update in the same array and won't create a new memory
  //dom update occurs only in that case
  createElement(){
    this.setState({
      data: [...this.state.data,this.state.value]
    })
  }

  setStateValue(event){
    this.setState({value : event.target.value});
  }

  render() {
    return (
      <div className="App" style={style}>
        <div id="todoArea" style= {todoStyle}>
          <div style={textStyle}>TODO APP</div>
            <div >
            <TextField id="todoText" variant="filled" onChange = {(event) => {this.setStateValue(event)}}/>
            <Button variant="contained" color="primary" style={textFieldStyle} id = "todoButtonId" onClick={() => this.createElement()}> Add Item </Button>
           </div>
       <TodoItem data={this.state.data} />
       </div>
      </div>
    );
  }
}

export default App;
