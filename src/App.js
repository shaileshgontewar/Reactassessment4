import "./App.css";
import "./component/Style.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./component/Home";
import Navbar from "./component/Navbar";
import Contact from "./component/Contact";
import Student from "./component/Student";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/Contact" element={<Contact />}></Route>
          <Route path="/Student" element={<Student />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
