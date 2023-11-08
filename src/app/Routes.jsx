import React from "react";
import { useRoutes, Navigate } from "react-router-dom";
import { Landing } from "./pages/Landing";
import { Pricing } from "./pages/Pricing/Pricing";
import { NavigationLayout } from "./layouts/NavigationLayout/NavigationLayout";
import { PrivacyPolicy } from "./pages/PrivacyPolicy/PrivacyPolicy";
import { Tou } from "./pages/Tou/Tou";
import { Dpa } from "./pages/Dpa/Dpa";
import { PaymentSuccess } from "./pages/PaymentSuccess/PaymentSuccess";
import { FullScreenLayout } from "./layouts/FullScreenLayout/FullScreenLayout";
import { NotFound } from "./pages/NotFound/NotFound";
import { ConfirmRegistration } from "./pages/ConfirmRegistration/ConfirmRegistration";
import { Unauthorized } from "./pages/Unauthorized/Unauthorized";
import { Unauthenticated } from "./pages/Unauthenticated";
import { SignUp } from "./pages/SignUp/SignUp";
import { LogIn } from "./pages/LogIn";
import { ResetPassword } from "./pages/ResetPassword/ResetPassword";
import { ForgotPassword } from "./pages/ForgotPassword/ForgotPassword";

export const Routes = () => {
  const routes = useRoutes([
    {
      element: <NavigationLayout />,
      children: [
        { path: "/", element: <Landing /> },
        { path: "/pricing", element: <Pricing /> },
        {
          path: "/privacy-policy",
          element: <PrivacyPolicy />,
        },
        {
          path: "/terms-of-use",
          element: <Tou />,
        },
        {
          path: "/dpa",
          element: <Dpa />,
        },
      ],
    },
    {
      element: <FullScreenLayout />, // layout without navigation bar
      children: [
        { path: "/payment-success", element: <PaymentSuccess /> },
        { path: "*", element: <Navigate to="/not-found" /> },
        { path: "/not-found", element: <NotFound /> },
        { path: "/confirm-registration", element: <ConfirmRegistration /> },
        { path: "/unauthorized", element: <Unauthorized /> },
        { path: "/unauthenticated", element: <Unauthenticated /> },
        { path: "/login", element: <LogIn /> },
        { path: "/signup", element: <SignUp /> },
        { path: "/reset-password", element: <ResetPassword /> },
        {
          path: "/forgot-password",
          element: <ForgotPassword />,
        },
      ],
    },
  ]);
  return <div>{routes}</div>;
};
