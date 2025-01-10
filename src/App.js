import './App.css';
import Toolbar from './components/Toolbar';
import { BrowserRouter as Router } from "react-router-dom"; 
import { Route, Routes } from "react-router-dom";
import DatabasePage from './components/DatabasePage';

function App() {
  return (
    <Router>
      <div className="App">
          <Toolbar/>
          <Routes>
        <Route path="/database" element={<DatabasePage />} />
      </Routes>
      </div>
    </Router>
  );
}

export default App;
