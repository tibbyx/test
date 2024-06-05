import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Startseite from "./components/Startseite";
import Form from "./components/Form";

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/watering' element={<Startseite />} />
        <Route path='/watering/submit' element={<Form />} />
      </Routes>
    </Router>
  );
}

export default App;
