import { Route, Routes } from "react-router-dom"
import { AuthRoutes } from "../flordLis/routes/AuthRoutes"
import { FlordLisRoutes } from "../flordLis/routes/FlordLisRoutes"

const AppRouter = () => {

  return (
    <Routes>
        <Route path="/auth/*" element={ <AuthRoutes />} />

        <Route path="/*" element={ <FlordLisRoutes />} />
    </Routes>
  )
}

export default AppRouter