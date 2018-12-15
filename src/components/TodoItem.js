import React, { Component } from 'react';

//const data = ['Take an appointment', 'do hosuework']
const itemstyle = {
    height :'10%',
    padding : '1em',
    margin:'1em',
    backgroundColor : '#FFFFFF'
}

class TodoItem extends Component {
    deleteElement(event){
        console.log(event)
    }

  render() {
    return (
      <div className="App">
            {this.props.data.map((item,index)  => {
                return (
                    <div key={index} style={itemstyle} onClick = {(event) => {this.deleteElement(event)}}>{item}</div>
                )
            } 
            )}
      </div>
    );
  }
}

export default TodoItem;

