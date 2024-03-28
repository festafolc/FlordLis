import { Navigate, Route, Routes } from "react-router-dom"
import { BackofficePage } from "../pages/BackofficePage"
import { useFlordLisSelector } from "../../hooks/useFlordLis";
import { AuthState } from "../../redux/slices/authSlice";
import { FlordLisState } from "../../redux/slices/flordLisSlice";

export const BackofficeRoutes = () => {

    const { status } = useFlordLisSelector<AuthState>((state) => state.auth);
    // const { CRUD, Read } = useFlordLisSelector<FlordLisState>((state) => state.flordlis);
    console.log(status);
    return (
        <Routes>
            {
                (status === "authenticated")
                    ?
                    <Route path='/' element={ <BackofficePage /> } />
                    :
                    <Route path='/' element={ <Navigate to="/auth/login" /> }/>
            }
        </Routes>
    )
}
