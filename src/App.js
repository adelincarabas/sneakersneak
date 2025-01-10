import "./App.css";
import Toolbar from "./components/Toolbar";
import { Route, Routes, useLocation } from "react-router-dom";
import DatabasePage from "./components/DatabasePage";
import MainPage from "./components/MainPage";

function App() {
  const location = useLocation();

  return (
    <div className="App">
      {location.pathname !== "/database" && <Toolbar />}
      {location.pathname === "/" && <MainPage />}
      <Routes>
        <Route path="/database" element={<DatabasePage />} />
      </Routes>
    </div>
  );
}

export default App;
