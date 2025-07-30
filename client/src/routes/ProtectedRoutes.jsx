import { Navigate } from "react-router-dom";

 const ProtectedRoutes =()=>{
    const token = localStorage.getItem('token');
    const expiry = Number(localStorage.getItem('auth_expiry'));
     
    const isSessionValid = token && Date.now() < expiry;

    if(!isSessionValid){
        localStorage.clear();
        return <Navigate to='/login' replace></Navigate>
    }

}
export default ProtectedRoutes;