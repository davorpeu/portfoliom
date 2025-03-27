import { Navigate, RouteObject } from 'react-router-dom';
import { HomePage } from '@/features/home/pages/HomePage';

export const publicRoutes: RouteObject[] = [
    {
        path: '/',
        element: <HomePage />,
    },
    {
        path: '/projects',
        element: <div>Projects Page - Coming Soon</div>,
    },
    {
        path: '/about',
        element: <div>About Page - Coming Soon</div>,
    },
    {
        path: '/blog',
        element: <div>Blog Page - Coming Soon</div>,
    },
    {
        path: '/contact',
        element: <div>Contact Page - Coming Soon</div>,
    },
    {
        path: '*',
        element: <Navigate to="/" />,
    },
];