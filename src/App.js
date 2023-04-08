import { useEffect, useState } from "react";
import "./App.css";
import Login from "./Login";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./Home";
import { ProtectedRoute, AnonymousRoute } from "./ProtectedRoute";
import Unauthorized from './components/UnAuthorized'
import RoleAccess from './RoleAccess'
import AdminDashboard from "./AdminDashboard";

function App() {
  // Initialize state from localStorage
  const [user, setUser] = useState(() => {
    const storedUser = localStorage.getItem("user");
    return storedUser !== null ? JSON.parse(storedUser) : null;
  });


  // Side-effect to persist state changes to localStorage
  useEffect(() => {
  console.log('useEffect called');
    localStorage.setItem("user", JSON.stringify(user));
  }, [user]);

  const handleLogin = (userData) =>{ 
    console.log('handleLogin called with', userData);
    setUser(userData);
  }

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/home" replace />} />

          {/*public Routes*/}
          <Route element={<AnonymousRoute isAuthenticated={!!user} />}>
            <Route path="/login" element={<Login onLogin={handleLogin} />} />
            <Route path="/unauthorized" element={<Unauthorized />} />
            {/* ... other "anonymous" routes ... */}
          </Route>

          {/*we want to protect this Route*/}
          <Route element={<ProtectedRoute isAuthenticated={!!user} user={user} />}>
            <Route
              path="/home"
              element={<Home user={user} setUser={setUser} />}
            />
            <Route
              element={(
                <RoleAccess
                  roles={["ADMINISTRATOR"]}
                  redirectTarget="/home" // <-- safe authenticated, non-role-access route
                  user={user}
                />
              )}
            >
              <Route
                path="/admin/*"
                element={<AdminDashboard />}
              />
              {/* ... other "admin" routes ... */}
            </Route>

            {/* ... other "authenticated" routes ... */}
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
