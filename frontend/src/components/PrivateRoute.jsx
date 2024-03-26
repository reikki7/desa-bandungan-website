import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({ children, isAuthenticated }) => {
    const location = useLocation();

    if (!isAuthenticated) {
        // Check if the requested path starts with '/admin'
        const isAdminRoute = location.pathname.startsWith('/admin');

        // Redirect to the appropriate login page based on the requested route
        const loginPath = isAdminRoute ? '/admin/login' : '/login';

        return <Navigate to={loginPath} state={{ from: location }} replace />;
    }

    // Render the protected route component
    return children;
};

export default PrivateRoute;