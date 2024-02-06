import logo from './logo.svg';
import './App.css';
import Header from './Home/Header/HeaderHome';
import ThreeJs from './Home/ThreeJs/ThreeJs';
import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
import SpecificationsHu from './Home/Hu/ItemHu/SpecificationsHu/SpecificationsHu';
import HuItem from './Home/Hu/ItemHu/HuItem';
import Itemh from './Home/Hu/ItemHu/Itemh';

function App() {
  let hu = [
    {num: 220348912, height: 4, length: 3, depth: 10},
    {num: 220348910, height: 7, length: 2, depth: 7},
    {num: 220348911, height: 14, length: 23, depth: 2},
    {num: 220348913, height: 1, length: 2, depth: 1},
    {num: 220348915, height: 0.5, length: 1, depth: 0.5},
  ];
  let huitem = hu.map( h => 
    <Itemh num={h.num} height={h.height} length={h.length} depth={h.depth}  />
  )

  return (
    
    <div className="App">
      
      <Header />

      <HuItem huitem = {huitem}/>

      <ThreeJs />

    </div>

  );
}

export default App;         