import React from "react";
import AddItem from "./Components/AddItem";
import TodoItem from './Components/TodoItem'

class App extends React.Component {
  state ={
    items:[
      {id:1,name:'mohamed',age:'12'},
      {id:2,name:'ahmed',age:'15'},
      {id:3,name:'tamer',age:'18'}
    ]
  }
  deletItem=(id)=>{
let items=this.state.items.filter(item=>{
  return item.id !==id

})
this.setState({items})
}
addItem=(item)=>{
  item.id=Math.random();
  let items=this.state.items;
  items.push(item);
  this.setState({items})
console.log(item)
}
  render(){
  return (
    <div className="container">
    <h1 className='text-center'>Todo list </h1>
<TodoItem items={this.state.items} deletItem={this.deletItem}/>
<AddItem addItem={this.addItem} />
    </div>
  );
}}

export default App;
