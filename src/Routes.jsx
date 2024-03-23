import React, { useEffect, useState } from "react";
import { useRoutes, Navigate, useLocation } from "react-router-dom";
// import { Landing } from "./pages/Landing";
import { Landing } from "./pages/Landing1/Landing";
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
import { ComponentGrid } from "./pages/ComponentGrid";
import { isUserLoggedIn } from "./utilities/Authentication";
import { BetaAccess } from "./pages/BetaAccess/BetaAccess";
import AuthContext from "./authentication/AuthContext";
import { ToastProvider } from "@radix-ui/react-toast";
import { ChangeLog } from "./pages/ChangeLog";
import { MobileLanding } from "./pages/MobileLanding/MobileLanding";



const useScreenWidth = () => {
  const [width, setWidth] = useState(window.innerWidth);
  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return width;
};

export const Routes = () => {
  const { user, setUser } = React.useContext(AuthContext);
  const location = useLocation();
  const screenWidth = useScreenWidth();
  const isMobile = screenWidth < 768; 
  // React.useEffect(() => {
  //   // check user login status for each navigation
  //   const checkIsLogin = async () => {
  //     try {
  //       const fetchedUser = await isUserLoggedIn();
  //       console.log("fetchedUser:", fetchedUser);
  //       setUser(fetchedUser);
  //     } catch (error) {
  //       setUser(null);
  //     }
  //   };

  //   checkIsLogin();
  // }, [location.pathname]);

  const routes = useRoutes([
    {
      element: <NavigationLayout mobile={isMobile}/>,
      children: [
        { path: "/", element: isMobile ? <MobileLanding /> : <Landing /> },
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
        {
          path: "/changelog",
          element: <ChangeLog />,
        },
        // {
        //   path: "/componentgrid",
        //   element: user ? <ComponentGrid /> : <Navigate to="/" />,
        // },
      ],
    },
    {
      element: <FullScreenLayout />, // layout without navigation bar
      children: [
        // { path: "/payment-success", element: <PaymentSuccess /> },
        // { path: "/confirm-registration", element: <ConfirmRegistration /> },
        // { path: "/unauthorized", element: <Unauthorized /> },
        // { path: "/unauthenticated", element: <Unauthenticated /> },
        // { path: "/login", element: <LogIn /> },
        // { path: "/signup", element: <SignUp /> },
        {
          path: "/beta-access",
          element: <BetaAccess />,
        },
        // { path: "/reset-password", element: <ResetPassword /> },
        // {
        //   path: "/forgot-password",
        //   element: <ForgotPassword />,
        // },
        { path: "*", element: <NotFound /> },
      ],
    },
  ]);
  return (
    <div>
      <ToastProvider>{routes}</ToastProvider>
    </div>
  );
};
