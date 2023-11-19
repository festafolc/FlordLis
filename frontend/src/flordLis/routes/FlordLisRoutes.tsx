import { Navigate, Route, Routes } from "react-router-dom"
import { HomePage } from "../pages/HomePage"
import { EventsPage } from "../pages/EventsPage"
import { AdvicesPage } from "../pages/AdvicesPage"
import { ShopPage } from "../pages/shop/ShopPage"
import { ProductPage } from "../pages/ProductPage"
import { CartPage } from "../pages/CartPage"
import { NavBar } from "../components/Navbar"
import { CategoryPage } from "../pages/CategoryPage"
import { ProfileInformationPage } from "../pages/Profile/ProfileInformationPage"
import { ProfileOrdersPage } from "../pages/Profile/ProfileOrdersPage"
import { ProfileWishListPage } from "../pages/Profile/ProfileWishListPage"
import { useFlordLisSelector } from "../../hooks/useFlordLis"
import { AuthState } from "../../redux/slices/authSlice"
import { EcoFlordlisPage } from "../pages/shop/EcoFlordlisPage"
import { FlordlisHome } from "../pages/shop/FlordlisHome"

export const FlordLisRoutes = () => {

  const { status } = useFlordLisSelector<AuthState>((state) => state.auth);

  return (
    <>
      <NavBar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/events" element={<EventsPage />} />
        <Route path="/advices" element={<AdvicesPage />} />
        <Route path="/shop" element={<ShopPage />} />
        <Route path="/shop/ecoflordlis" element={<EcoFlordlisPage />} />
        <Route path="/shop/flordlishome" element={<FlordlisHome />} />
        <Route path="/shop/categories/:name" element={<CategoryPage />} />
        <Route path="/shop/categories/product/:id" element={<ProductPage />} />
        <Route path="/cart" element={<CartPage />} />

        {
          (status === "authenticated")
            ?
            <Route>
              <Route path="/profile/information" element={<ProfileInformationPage />} />
              <Route path="/profile/orders" element={<ProfileOrdersPage />} />
              <Route path="/profile/wishlist" element={<ProfileWishListPage />} />
            </Route>
            :
            null
        }
        <Route path="/*" element={<Navigate to="/" />} />
      </Routes >
    </>
  )
}
