import './TodoEditor.css'
import { useState, useRef } from 'react'

// 추가버튼에 대한 이벤트 핸들러 onSubmit을 생성한다.
// onSubmit은 함수 onCreate를 호출하고 인수로 content의 값을 전달한다.
// 버튼 클릭 이벤트 핸들러로 함수 onSubmit을 설정한다.

const TODOEDITOR = ({ onCreate }) => {
    const [content, setContent] = useState('')
    const inputRef = useRef()

    const onChangeContent = (event) => {
        setContent(event.target.value)
    }
    const onSubmit = () => {
        if (!content) {
            inputRef.current.focus()
            return
        }
        onCreate(content)
        setContent('') // Input Value 초기화
    }
    // Enter Key를 눌러 아이템 추가하기
    const onKeyDown = (event) => {
        if (event.keyCode === 13) {
            onSubmit()
        }
    }

    return (
        <div className="TodoEditor">
            <h4>새로운 Todo 작성하기 ✏️</h4>
            <div className="editor_wrapper">
                {/* 1. 할 일 입력 폼을 제어할 객체 inputRef를 생성한다. */}
                {/* 2. 함수 onSubmit은 현재 content 값이 빈 문자열이면, inputRef가 현잿값(current)으로 저장한 요소에 포커스하고 종료한다. */}
                {/* 3. 할 일 입력 폼의 ref에 inputRef를 설정한다. 이제 inputRef는 현잿값으로 이 요소를 저장한다. */}

                {/* 함수 onKeyDown은 사용자가 Enter 키를 눌렀을 때 호출할 이벤트 핸들러이다. */}
                {/* event.keyCode에는 현재 사용자가 누른 키보드의 키가 숫자로 변환되어 저장되어 있는데, 13은 Enter 키를 의미한다. */}
                {/* 따라서 event.keyCode가 13이면 함수 onSubmit을 호출한다. */}
                {/* 입력 폼의 키 입력 이벤트 핸들러를 함수 onKeyDown으로 설정한다. */}
                <input ref={inputRef} value={content} type="text" placeholder="새로운 Todo..." onChange={onChangeContent} onKeyDown={onKeyDown} />
                <button onClick={onSubmit}>추가</button>
            </div>
        </div>
    )
}

export default TODOEDITOR
