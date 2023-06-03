import './Header.css'

const HEADER = () => {
    return (
        <div className="Header">
            <h3>오늘은 📆</h3>
            {/* 날짜를 문자열로 표시 */}
            <h1>{new Date().toDateString()}</h1>
        </div>
    )
}

export default HEADER
