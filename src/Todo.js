import React, { useState } from 'react'
import "./todo.css"

const Todo = () => {
    let [todoList, setTodoList] = useState([])

    const saveTodoList = (e) => {

        let toname = e.target.toname.value;
        // alert(toname);
        if (!todoList.includes(toname)) {
            let finalTodoList = [...todoList, toname];
            setTodoList(finalTodoList);
        } else {
            alert("todo data is already exits..");
        }
        e.target.toname.value = "";
        e.preventDefault();

    }
    let list = todoList.map((v, i) => {
        return (
            <>
                <TodoListItems value={v} key={i} />
            </>
        )
    })
    return (
        <>
            <div className='todoList'>
                <h1>todo list</h1>
                <form onSubmit={saveTodoList}>
                    <input type="text" name="toname" /><button>save</button>
                </form>
                <div className="outerDIv">
                    <ul>

                        {list}
                    </ul>

                </div>

            </div>
        </>
    )
}

export default Todo


function TodoListItems({ value }) {
    return (
        <>
            <li>{value} <span>&times;</span></li>
        </>
    )

}
