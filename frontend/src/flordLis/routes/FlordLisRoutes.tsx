import { Navigate, Route, Routes } from "react-router-dom"
import { HomePage } from "../pages/home/HomePage"
import { EventsPage } from "../pages/EventsPage"
import { AdvicesPage } from "../pages/AdvicesPage"
import { AllProductsPage } from "../pages/shop/AllProducts/AllProductsPage"
import { ProductPage } from "../pages/shop/Product/ProductPage"
import { CartPage } from "../pages/cart/CartPage"
import { NavBar } from "../components/Navbar/Navbar"
import { CategoryPage } from "../pages/CategoryPage"
import { ProfileInformationPage } from "../pages/Profile/ProfileInformationPage"
import { useFlordLisSelector } from "../../hooks/useFlordLis"
import { AuthState } from "../../redux/slices/authSlice"
import { EcoFlordLisPage } from "../pages/shop/EcoflordLis/EcoFlordLisPage"
import { FlordlisHomePage } from "../pages/shop/FlordLisHome/FlordlisHomePage"
import { InvoicePage } from "../pages/Profile/Invoice/InvoicePage"
import { PersonalProduct } from "../pages/PersonalProduct/PersonalProduct"

export const FlordLisRoutes = () => {

  const { status } = useFlordLisSelector<AuthState>((state) => state.auth);

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
              </Route>
              :
              null
          }
          
          <Route path="/*" element={<Navigate to="/" />} />
        </Routes >
    </>
  )
}
