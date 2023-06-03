import './TodoList.css'
import TODOITEM from './TodoItem'

const TODOLIST = () => {
    return (
        <div className="TodoList">
            <h4>Todo List 🌱</h4>
            <input type="text" className="searchbar" placeholder="검색어를 입력하세요." />
            <div className="list_wrapper">
                <TODOITEM />
                <TODOITEM />
                <TODOITEM />
            </div>
        </div>
    )
}

export default TODOLIST
