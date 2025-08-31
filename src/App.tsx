import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import NavBar from "./modules/Navbar";
import { Home, JobsPage, LoginPage } from "./pages";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/jobs" element={<JobsPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
