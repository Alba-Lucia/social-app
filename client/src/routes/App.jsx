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
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const queryClient = new QueryClient()

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
    <QueryClientProvider client={queryClient}>
      <div>
        <RouterProvider router={router} />
      </div>
    </QueryClientProvider>
  );
}

export default App;
