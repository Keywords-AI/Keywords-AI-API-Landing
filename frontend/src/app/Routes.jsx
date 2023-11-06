import React, { useEffect } from 'react';
import { useRoutes, Navigate } from 'react-router-dom';
import { Landing } from './pages/Landing';
import { Pricing } from './pages/Pricing/Pricing';
import { NavigationLayout } from './layouts/NavigationLayout/NavigationLayout';
import { PrivacyPolicy } from './pages/PrivacyPolicy/PrivacyPolicy';
import { Tou } from './pages/Tou/Tou';
import { Dpa } from './pages/Dpa/Dpa';
import { PaymentSuccess } from './pages/PaymentSuccess/PaymentSuccess';
import path from 'path';
import { FullScreenLayout } from './layouts/FullScreenLayout/FullScreenLayout';

export const Routes = () => {
  const routes = useRoutes([
    {
      element: <NavigationLayout />,
      children: [
        { path: '/', element: <Landing /> },
        { path: '/pricing', element: <Pricing /> },
        { path: '*', element: <Navigate to="/" /> },
        {
          path: '/privacy-policy',
          element: <PrivacyPolicy />,
        },
        {
          path: '/terms-of-use',
          element: <Tou />,
        },
        {
          path: '/dpa',
          element: <Dpa />,
        },
      ],
    },
    {
      element: <FullScreenLayout />,
      children: [{ path: '/payment-success', element: <PaymentSuccess /> }],
    },
  ]);
  return <div>{routes}</div>;
};
