import { useMemo } from "react";
import { Navigate, useParams } from "react-router-dom"
import { getCategoryByName } from "../helpers/getCategoryByName";

export const CategoryPage = () => {

  const {name} = useParams();
  
  // Se supone que esto permite no renderizar otra vez si se vuelve a recargar la página con el mismo id
  const category = useMemo(() => getCategoryByName(name), [name]);

  if (!category) {
    return <Navigate to="/" />
  }

  return (
    <div>CategoryPage {name}</div>
  )
}
