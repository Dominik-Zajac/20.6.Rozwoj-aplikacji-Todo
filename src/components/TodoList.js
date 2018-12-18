import React from 'react';
import style from './TodoList.css';

const TodoList = props => props.list.map(task => (
	<div className={style.task} key={task.id}>
		<p>{task.text}</p>
		<button className={style.delete} key={task.id} onClick={() => props.remove(task.id)}>
			x
		</button>
	</div>
	)
);

export default TodoList;
