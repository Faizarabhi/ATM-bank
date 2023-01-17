import { Navigate, Outlet } from 'react-router-dom';
import { token } from '../Config/Token';
const PrivateRoutes = () => {
    return token ? <Outlet /> : <Navigate to="/login" />;
};
export default PrivateRoutes;
