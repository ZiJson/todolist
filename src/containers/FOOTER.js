const FOOTER = ({toDoList, setFilter, Nums, filterCompleted}) => {
    
    const filterrrr = (e) =>{
        setFilter(e.target.id)
    };
    const Left = () => {
        if(toDoList.length===Nums.length){
            return toDoList.filter(todo=>todo.complete===false).length
        }
        else{
            return toDoList.length
        }
    }
    return (
        <footer id="todo-footer" className={Nums.length ? "todo-app__footer" : "todo-app__footer displaynon"}>
            <div class="todo-app__total">
                {Left()} left
            </div>
            <ul class="todo-app__view-buttons">
                <button id="All" onClick={filterrrr}>All</button>
                <button id="active" onClick={filterrrr}>Active</button>
                <button id="completed"onClick={filterrrr}>Completed</button>
            </ul>
            <div class="todo-app__clean">
                <button className={toDoList.filter(todo=>todo.complete===true).length ? '':'invisable'} onClick={filterCompleted}>Clean completed</button>
            </div>
        </footer>
    )
};

export default FOOTER;