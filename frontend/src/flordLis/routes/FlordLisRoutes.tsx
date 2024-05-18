import { Navigate, Route, Routes } from "react-router-dom"
import { HomePage } from "../pages/home/HomePage"
import { EventsPage } from "../pages/EventsPage"
import { AdvicesPage } from "../pages/AdvicesPage"
import { AllProductsPage } from "../pages/shop/AllProductsPage"
import { ProductPage } from "../pages/shop/Product/ProductPage"
import { CartPage } from "../pages/cart/CartPage"
import { NavBar } from "../components/Navbar/Navbar"
import { CategoryPage } from "../pages/CategoryPage"
import { ProfileInformationPage } from "../pages/Profile/ProfileInformationPage"
import { useFlordLisSelector } from "../../hooks/useFlordLis"
import { AuthState } from "../../redux/slices/authSlice"
import { EcoFlordLisPage } from "../pages/shop/EcoFlordLisPage"
import { FlordlisHomePage } from "../pages/shop/FlordlisHomePage"
import { InvoicePage } from "../pages/Profile/Invoice/InvoicePage"
import { PersonalProduct } from "../pages/PersonalProduct/PersonalProduct"
import { FlordLisState } from "../../redux/slices/flordLisSlice"
import { BackofficeRoutes } from "../../backOffice/routes/BackofficeRoutes"

export const FlordLisRoutes = () => {

  const { status } = useFlordLisSelector<AuthState>((state) => state.auth);
  const { CRUD, Read} = useFlordLisSelector<FlordLisState>((state) => state.flordLis);

  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        {/* <Route path="/events" element={<EventsPage />} />
          <Route path="/advices" element={<AdvicesPage />} /> */}
        <Route path="/shop" element={<AllProductsPage />} />
        <Route path="/shop/ecoflordlis" element={<EcoFlordLisPage />} />
        <Route path="/shop/flordlishome" element={<FlordlisHomePage />} />
        <Route path="/shop/categories/:name" element={<CategoryPage />} />
        <Route path="/shop/:id" element={<ProductPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/request-personal-design" element={<PersonalProduct />} />

        {
          (status === "authenticated")
            ?
            <Route>
              <Route path="/profile/information" element={<ProfileInformationPage />} />
              <Route path="/profile/orders/invoice/:id" element={<InvoicePage />} />
              {
                (CRUD || Read)
                  ?
                  <Route path="/backoffice/*" element={<BackofficeRoutes />} />
                  :
                  null
              }
            </Route>
            :
            <Route path='/' element={<Navigate to="/auth/login" />} />
        }

        <Route path="/*" element={<Navigate to="/" />} />
      </Routes >
    </>
  )
}
