import { useEffect, useState } from "react";
import "./App.css";
import Login from "./Login";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./Home";
import { ProtectedRoute, AnonymousRoute } from "./ProtectedRoute";

function App() {
  // Initialize state from localStorage
  const [user, setUser] = useState(() => {
    const storedUser = localStorage.getItem("user");
    console.log("Stored user:", storedUser);
    return storedUser !== null ? JSON.parse(storedUser) : null;
  });


  // Side-effect to persist state changes to localStorage
  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(user));
  }, [user]);

  const handleLogin = (userData) => setUser(userData);

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/home" replace />} />

          <Route element={<AnonymousRoute isAuthenticated={!!user} />}>
            <Route path="/login" element={<Login onLogin={handleLogin} />} />
            {/* ... other "anonymous" routes ... */}
          </Route>

          <Route element={<ProtectedRoute isAuthenticated={!!user} />}>
            <Route
              path="/home"
              element={<Home user={user} setUser={setUser} />}
            />
            {/* ... other "authenticated" routes ... */}
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
