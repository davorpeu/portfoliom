import { RouteObject, useRoutes } from 'react-router-dom';
import { publicRoutes } from './public';

export const AppRoutes = () => {
    const routes: RouteObject[] = [...publicRoutes];

    const element = useRoutes(routes);

    return <>{element}</>;
};