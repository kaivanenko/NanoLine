import { Link, NavLink, Route, Routes } from "react-router-dom";
import "./HuItem.css"
import SpecificationsHu from "./SpecificationsHu/SpecificationsHu";
import Itemh from "./Itemh";



function HuItem(props) {
      
    return (
        <div className="Huitem">

                {/* {linkHu} */}
            
            {props.huitem}
                {/* <div><NavLink to={"/"+ props.num}> {props.num} </NavLink></div>
                <div><NavLink to={"/"+ props.num}> {props.num} </NavLink></div>
                <div><NavLink to={"/"+ props.num}> {props.num} </NavLink></div>
                <div><NavLink to={"/"+ props.num}> {props.num} </NavLink></div> */}
{/* 
                <Routes>
                    <Route path= {"/" + props.num} element={<SpecificationsHu />} />
                    <Route path= {"/" + props.num} element={<SpecificationsHu />} />
                    <Route path= {"/" + props.num} element={<SpecificationsHu />} />
                    <Route path= {"/" + props.num} element={<SpecificationsHu />} />
                </Routes> */}

            <div>
                <textarea> </textarea>
                <button> Умножить число на 2</button>
            </div>
        </div>
    )
}
export default HuItem;