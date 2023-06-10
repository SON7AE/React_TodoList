import './App.css'
import HEADER from './components/Header'
import TODOEDITOR from './components/TodoEditor'
import TODOLIST from './components/TodoList'

import { useState, useRef } from 'react'

const mockTodo = [
    {
        id: 0,
        isDone: false,
        content: 'React 공부하기',
        createdDate: new Date().getTime(),
    },
    {
        id: 1,
        isDone: false,
        content: '빨래널기',
        createdDate: new Date().getTime(),
    },
    {
        id: 2,
        isDone: false,
        content: '노래 연습하기',
        createdDate: new Date().getTime(),
    },
]

function App() {
    // 기능 구현에 앞서 CRUD의 대상인 할 일 아이템 생성
    // useState를 이용해 할 일 아이템의 상태를 관리할 State를 만든다.
    // 함수 useState에서 인수로 빈 배열을 전달해 State 변수 todo의 기본값을 빈 배열로 초기화한다.
    // 리액트에서는 보틍 리스트 형태의 데이터를 보관할 때 배열을 이용한다.

    // 아래 코드처럼 현실의 사물이나 개념을 프로그래밍 언어의 객체와 같은 자료구조로 표현하는 행위를 '데이터 모델링'이라고 한다.
    // let author = {
    //     name: '마르코',
    //     gender: 'male',
    // }

    // Ref 객체는 리액트에서 주로 돔을 조작할 때 사용하지만, 컴포넌트의 변수로도 자주 활용한다.
    // 초깃값이 3인 Ref 객체를 생성해 isRef에 저장한다.

    const isRef = useRef(3)
    const [todo, setTodo] = useState(mockTodo)

    const onCreate = (content) => {
        const newItem = {
            id: 0,
            content,
            isDone: false,
            createdDate: new Date().getTime(),
        }
        setTodo([newItem, ...todo])
        isRef.count += 1
    }

    return (
        <div className="App">
            <HEADER />
            <TODOEDITOR onCreate={onCreate} />
            <TODOLIST todo={todo} />
        </div>
    )
}

export default App
