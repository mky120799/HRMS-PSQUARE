import { RouterProvider, createBrowserRouter } from "react-router-dom";
// import ProtectedRoutes from "./routes/ProtectedRoutes";
import MainLayout from "./common/layout/MainLayout.jsx";
import LoginPage from "./pages/LoginPage.jsx";
// import DashboardPage from "./pages/DashboardPage.jsx";
import CandidatesPage from "./pages/CandidatesPage.jsx";
import EmployeesPage from "./pages/EmployeesPage.jsx";
import AttendancePage from "./pages/AttendancePage.jsx";
import LeavesPage from "./pages/LeavesPage.jsx";
const router = createBrowserRouter([
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    element: <MainLayout />,
    children: [
      {
        path: "/candidates",
        element: <CandidatesPage />,
      },
      {
        path: "/employees",
        element: <EmployeesPage />,
      },
      {
        path: "/attendance",
        element: <AttendancePage />,
      },
      {
        path: "/leaves",
        element: <LeavesPage />,
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
