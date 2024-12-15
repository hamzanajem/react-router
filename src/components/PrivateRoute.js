import { Navigate } from "react-router-dom";

export const PrivateRoute = ({ Componet }) => {
    const isauthenticated = true;
    return isauthenticated ? Componet : <Navigate to='/' />
}