import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import BODY from "./component/BODY/BODY";
import Home from './component/home/home' 
import Inform from './component/Inform/Inform'
import Slider from "./component/slider/slider";
import Setting from "./component/setting/setting";


function App() {
  return (
    <BrowserRouter>
    <Slider />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="inform" element={<Inform />} />
      <Route path="BODY" element={<BODY />} />
      <Route path="Setting" element={<Setting />} />
    </Routes>
    </BrowserRouter>

  );
}
export default App;
