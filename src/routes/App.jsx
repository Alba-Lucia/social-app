import { useContext } from "react";
import {
  createBrowserRouter, Navigate, RouterProvider
} from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { Layout } from "../layout/Layout";
import { Home } from "../pages/home/Home";
import { Login } from "../pages/login/Login";
import { Profile } from "../pages/profile/Profile";
import { Register } from "../pages/register/Register";

function App() {
  const { currentUser } = useContext(AuthContext);

  const ProtecteRoute = ({ children }) => {
    if (!currentUser) {
      return <Navigate to="/login" />;
    }
    return children;
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <ProtecteRoute>
          <Layout />
        </ProtecteRoute>
      ),
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/profile/:id",
          element: <Profile />,
        },
      ],
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/register",
      element: <Register />,
    },
  ]);

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
