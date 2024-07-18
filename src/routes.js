import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import MainLayouts from './layouts/mainLayout';
import Home from './pages/home';

const routes = createBrowserRouter([
    { path: '/', element: <MainLayouts><Home /></MainLayouts> },
]);

const MainRouter = () => {
    return <RouterProvider router={routes} />;
};

export default MainRouter;
