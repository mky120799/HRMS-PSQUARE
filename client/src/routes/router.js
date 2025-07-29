import { createBrowserRouter } from "react-router-dom";
import ProtectedRoutes from "./ProtectedRoutes";
import MainLayout from "../common/layout/MainLayout";
import LoginPage from "../pages/LoginPage";
import DashboardPage from "../pages/DashboardPage";
import CandidatesPage from "../pages/CandidatesPage";
import EmployeesPage from "../pages/EmployeesPage"; // ✅ Add this

export const router = createBrowserRouter([
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    element: <ProtectedRoutes />,
    children: [
      {
        element: <MainLayout />,
        children: [
          {
            path: "/",
            element: <DashboardPage />,
          },
          {
            path: "/candidates",
            element: <CandidatesPage />,
          },
          {
            path: "/employees", // ✅ New route
            element: <EmployeesPage />,
          },
        ],
      },
    ],
  },
]);
