import React from 'react';
import { Navigate } from 'react-router-dom';
import DashboardLayout from 'src/layouts/DashboardLayout';
import MainLayout from 'src/layouts/MainLayout';
import AccountView from 'src/views/account/AccountView';
import LoginView from 'src/views/auth/LoginView';
import NotFoundView from 'src/views/errors/NotFoundView';
import PagesSummaryView from 'src/views/pages/PagesSummaryView';
import PageDetailView from 'src/views/pagedetail/PageDetailView';
import PostsSummaryView from 'src/views/posts/PostsSummaryView';
import RegisterView from 'src/views/auth/RegisterView';
import SettingsView from 'src/views/settings/SettingsView';

const routes = [
  {
    path: 'app',
    element: <DashboardLayout />,
    children: [
      { path: 'account', element: <AccountView /> },
      { path: 'pages', element: <PagesSummaryView /> },
      { path: 'page', element: <PageDetailView /> },
      { path: 'posts', element: <PostsSummaryView /> },
      { path: 'settings', element: <SettingsView /> },
      { path: '*', element: <Navigate to="/404" /> }
    ]
  },
  {
    path: '/',
    element: <MainLayout />,
    children: [
      { path: 'login', element: <LoginView /> },
      { path: 'register', element: <RegisterView /> },
      { path: '404', element: <NotFoundView /> },
      { path: '/', element: <LoginView /> },
      { path: '*', element: <Navigate to="/404" /> }
    ]
  }
];

export default routes;
