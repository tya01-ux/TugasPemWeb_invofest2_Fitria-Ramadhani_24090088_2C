import { Navigate, Outlet } from "react-router-dom";
import { useAuthStore } from "../store/useAuthStore";

export default function ProtectedRoute (){
    const isAuthenticated = useAuthStore((state) => state.isAuthenticated);

    // Jika isAuthented false ,maka redict ke Halaman login
    if(!isAuthenticated){
        return <Navigate to="/login" replace/>;
    }

    return<Outlet/>
}