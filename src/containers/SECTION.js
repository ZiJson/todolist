import ToDo from '../components/TODO';
import gif from '../img/drag.gif'
const SECTION = ({toDoList, handleToggle, userInput, handleChange, handleSubmit, deleteSingle}) => {
    const KeyPress = (e) => {
        if(e.key === 'Enter' && e.target.value!==""){
            e.preventDefault();
            handleSubmit(e)
        };
    }

    return (
        <section class="todo-app__main">
            <input type="text" value={userInput} onChange={handleChange} onKeyPress={KeyPress} class="todo-app__input" placeholder="What needs to be done?"/>
            <ul class="todo-app__list" id="todo-list">
                {toDoList.map(todo => {
                    return (
                        <ToDo todo={todo} handleToggle={handleToggle} deleteSingle={deleteSingle}/>
                    )
                })}
            </ul>
            <img src={gif} alt="gif" className='gif'></img>
        </section>
    )
};

export default SECTION;