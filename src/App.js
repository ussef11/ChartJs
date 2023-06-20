import './App.css';
import Home from './Home/Home';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Apexchart from './apexchart';
import DisplayChart from './Chart/DisplayChart';
function App() {
  return (
    <div className="App">
       <BrowserRouter>
  
  <Routes>

    <Route path="/" element={<Home />}></Route>
    <Route path="/test" element={<Apexchart />}></Route>
    <Route path="/Chart" element={<DisplayChart />}></Route>
  </Routes>
</BrowserRouter>
    </div>
  );
}

export default App;
