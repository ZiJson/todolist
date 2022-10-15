import X from '../img/x.png'

const ToDo = ({todo, handleToggle, deleteSingle}) => {
    const handleClick = (e) => {
        e.preventDefault()
        handleToggle(e.target.id)
    }
    const XX = (e) => {
        e.preventDefault();
        deleteSingle(e.target.id)
    }

    return (
        <li class="todo-app__item">
            <div class="todo-app__checkbox" >
                <input type="checkbox" id={todo.id}  className={todo.complete ? "checked" : ""} onClick={handleClick}/>   
                <label for={todo.id} className={todo.complete ? "checked" : ""}></label>                
            </div>
            <h1 className={todo.complete ? "completed todo-app__item-detail" : "todo-app__item-detail"}>
                {todo.task}
            </h1>
            
            <img src={X} id={todo.id} alt="X" class="todo-app__item-x" onClick={XX}/>
        </li>
    )
}

export default ToDo;