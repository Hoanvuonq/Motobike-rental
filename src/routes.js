import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import MainLayouts from './layouts/mainLayout';
import Home from './pages/home';
import RentalDaNang from './pages/rentalDaNang';
import RentalNhaTrang from './pages/rentalNhaTrang';
import Contact from './pages/contact';
import DashBoard from './pages/dashboard';

const routes = createBrowserRouter([
    { path: '/', element: <MainLayouts><Home /></MainLayouts> },
    { path: '/rental-danang', element: <MainLayouts><RentalDaNang /></MainLayouts> },
    { path: '/rental-nhatrang', element: <MainLayouts><RentalNhaTrang /></MainLayouts> },
    { path: '/contact', element: <MainLayouts><Contact /></MainLayouts> },
    { path: '/dashBoard', element: <DashBoard /> },
]);

const MainRouter = () => {
    return <RouterProvider router={routes} />;
};

export default MainRouter;
