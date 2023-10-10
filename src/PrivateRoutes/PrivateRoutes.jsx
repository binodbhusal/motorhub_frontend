import { useSelector } from "react-redux";
import { Outlet, Navigate } from "react-router-dom";

const PrivateRoutes = () => {
    const user = useSelector(store => store.user)
    return (
        user.logedIn ? <Outlet /> : <Navigate to="/login" />
    )
}

export default PrivateRoutes