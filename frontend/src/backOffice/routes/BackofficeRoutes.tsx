import { Navigate, Route, Routes } from "react-router-dom";

import { useFlordLisSelector } from "../../hooks/useFlordLis";
import { AuthState } from "../../redux/slices/authSlice";
import { FlordLisState } from "../../redux/slices/flordLisSlice";
import { BackofficePage } from "../pages/BackofficePage";
import { ProductsAdminPage } from "../pages/ProductsAdmin/ProductsAdminPage";
import { OrdersAdminPage } from "../pages/OrdersAdmin/OrdersAdminPage";
import { CustomersAdminPage } from "../pages/CustomersAdmin/CustomersAdminPage";

export const BackofficeRoutes = () => {

    const { status } = useFlordLisSelector<AuthState>((state) => state.auth);
    const { CRUD, Read } = useFlordLisSelector<FlordLisState>((state) => state.flordLis);

    return (
        <Routes>
            {
                (status === "authenticated" && (CRUD || Read))
                    ?
                    <Route>
                        <Route path='/customers/*' element={<CustomersAdminPage />} />
                        <Route path='/products/*' element={<ProductsAdminPage />} />
                        <Route path='/orders/*' element={<OrdersAdminPage />} />
                        <Route path='/' element={<BackofficePage />} />
                    </Route>
                    :
                    <Route path='/' element={<Navigate to="/auth/login" />} />
            }
        </Routes>
    )
}
