import { useRoutes, Navigate } from "react-router-dom"
import DashboardLayout from './layout/DashboardLayout';
import Login from "./pages/Login"
import LogoOnlyLayout from "./layout/LogoOnlyLayout";
import Home from './pages/home';
import Gettingstarted from "./pages/getting-started";
import Integration from "./pages/integration"
import Authentication from "./pages/authentication";
import Method from "./pages/methods"
import Errors from "./pages/errors";
import Callback from "./pages/callback"
import Brandguidelines from "./pages/brand-guidelines"
import Keys from "./pages/keys"
import FAQ from "./pages/faq"
import Signup from "./pages/signup"
import Forgetpassword from "./pages/forgetpassword";
import Resetpassword from "./pages/restepassword"
import Bankaccount from "./pages/bankaccount";

export default function Router() {
  return useRoutes([
    {
      path: '/dashboard',
      element: <DashboardLayout />,
      children: [
        { path: '/dashboard', element: <Navigate to="/dashboard/home" replace /> },
        { path: "home", element: < Home /> },
        { path: "integration", element: < Integration /> },
        { path: "getting-started", element: < Gettingstarted /> },
        { path: "authentication", element: < Authentication /> },
        { path: "errors", element: < Errors /> },
        { path: "methods-api", element: < Method /> },
        { path: "callback", element: < Callback /> },
        { path: "brand-guidelines", element: < Brandguidelines /> },
        { path: "keys", element: <Keys /> },
        { path: "faq", element: < FAQ /> },
        { path: "bank-account", element: <Bankaccount /> },
      ],
    },

    {
      path: '/',
      element: <LogoOnlyLayout />,
      children: [
        { path: '/', element: <Navigate to="/dashboard" replace /> },
        { path: "/login", element: <Login /> },
        { path: "/signup", element: <Signup /> },
        { path: "/forget-password", element: <Forgetpassword /> },
        { path: "/reset-password", element: <Resetpassword /> },
      ]
    },
  ])
}


