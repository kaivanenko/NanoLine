import "./HeaderHome.css"
function Header () {
    return (
        <header className="App-header">
            <a href="/"><button className="header1"> Погрузка вручную</button> </a>
            
            <button className="header1"> ТЕ/Помещения </button> 
            <button className="header1"> Поставки </button> 
            <button className="header1"> Настройки </button> 
        </header>

    )
}
export default Header;