import React from "react"
import "../index.css"

function ToDoItem(props)
{

	const styles={
			color:"blue",
			textDecoration:"line-through"
		}
		return(
			<div className="todo-item">
			<input
			type="checkbox"
			checked={props.item.completed}
			onChange={() => props.handleChange(props.item.id)} 
			/>
			<p style={props.item.completed?styles:null}>{props.item.text}</p>
			</div>
			)
	}







export default ToDoItem