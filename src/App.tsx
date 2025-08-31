import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import NavBar from "./modules/Navbar";
import { Home, JobsPage, LoginPage } from "./pages";
import { AuthProvider } from "./context/AuthContext";
import { CookiesProvider } from "react-cookie";
import ProtectedRoute from "./modules/ProtectedRoute";

function App() {
  return (
    <CookiesProvider>
      <AuthProvider>
        <BrowserRouter>
          <div className="App">
            <NavBar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<LoginPage />} />
              <Route element={<ProtectedRoute />}>
                <Route path="/jobs" element={<JobsPage />} />
                <Route path="/home" element={<Home />} />
              </Route>
            </Routes>
          </div>
        </BrowserRouter>
      </AuthProvider>
    </CookiesProvider>
  );
}

export default App;
