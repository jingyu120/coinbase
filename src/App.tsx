import React, { useEffect } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import { useGetUserQuery } from "./api/users.api";
import { useAppDispatch } from "./app/hooks";
import ProtectedRoute from "./app/ProtectedRoute";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import { setAuthState } from "./slices/auth.slice";

function App() {
  const { data: user } = useGetUserQuery(undefined);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      dispatch(setAuthState({ user }));
      navigate("/");
    }
  }, [user, dispatch, navigate]);

  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
        />
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<Signup />} />
      </Routes>
    </div>
  );
}

export default App;
