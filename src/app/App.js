import React from "react"
import ToDoItem from "./ToDoItem"
import todoDatas from "./todoDatas"
import "../index.css"

class App extends React.Component
{
	constructor()
	{
		super()
		this.state={
			todo:todoDatas
		}
		this.handleChange=this.handleChange.bind(this)
	}
	handleChange(id)
	{
		this.setState(prevState => {
			const updatedTodos=prevState.todo.map( todo => {
				if(todo.id === id)
					return{
						...todo,
						completed:!todo.completed
					}
					return todo
			})
			
			return{
				todo:updatedTodos
			}
			
		})
	}
	render()
	{
		
		const todoItems=this.state.todo.map(item => <ToDoItem  key={item.id} item={item} handleChange={this.handleChange}/>)
		return(
			<div className="todo-list"> 
			<h2 style={{textAlign:"center",textTransform:"capitalize"}}>To do list</h2>
			{todoItems}
			</div>)
	}
}

export default App