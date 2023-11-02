import { Route, Routes } from "react-router-dom"
import { AuthRoutes } from "../flordLis/routes/AuthRoutes"
import { FlordLisRoutes } from "../flordLis/routes/FlordLisRoutes"
import { useFlordLisDispatch, useFlordLisSelector } from "../hooks/useFlordLis";
import { checkAuthTokenThunk } from "../redux/thunks/authThunks";
import { useEffect } from "react";

const AppRouter = () => {

  const { status } = useFlordLisSelector((state) => state.auth);

  const dispatch = useFlordLisDispatch();

  useEffect(() => {
    
    dispatch(checkAuthTokenThunk());
  }, []);

  if (status === 'checking') {

    return (
      <h1>Loading...</h1>
    )
  }

  return (
    <Routes>
        <Route path="/auth/*" element={ <AuthRoutes />} />

        <Route path="/*" element={ <FlordLisRoutes />} />
    </Routes>
  )
}

export default AppRouter