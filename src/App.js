import './App.css';
import DayList from './component/DayList';
import Header from './component/Header';
import Day from './component/Day';
import {BrowserRouter, Routes,  Route} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Header></Header>
      <Routes>
      <Route path='/' element={<DayList/>}>
      </Route>
      <Route path='/day' element={<Day/>}>
      </Route>
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;