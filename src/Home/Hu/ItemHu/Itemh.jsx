import { NavLink, Route, Routes } from "react-router-dom";
import SpecificationsHu from "./SpecificationsHu/SpecificationsHu";

function Itemh (props) {
    return (
        <div className="item">
            <NavLink className="item1" to={"/" + props.num}>{props.num}</NavLink>
            <Routes><Route path= {"/" + props.num} style="text-decoration: none;" element={<SpecificationsHu height={props.height} length={props.length} depth={props.depth}/>} /></Routes>
        </div>
    )
}

export default Itemh;