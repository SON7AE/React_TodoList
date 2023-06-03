import './App.css'
import HEADER from './components/Header'
import TODOEDITOR from './components/TodoEditor'
import TODOLIST from './components/TodoList'

function App() {
    return (
        <div className="App">
            <HEADER />
            <TODOEDITOR />
            <TODOLIST />
        </div>
    )
}

export default App
