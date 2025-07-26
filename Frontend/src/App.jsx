import {createBrowserRouter,RouterProvider} from "react-router-dom"
import Home from "./pages/Home"
import Login from "./pages/Login"
import Myparcels from "./pages/Myparcels" 
import Parcels from "./pages/Parcels"
import Parcel from "./pages/Parcel"


function App() {

  const router = createBrowserRouter([
    {
    path:"/",
    element:<Home/>
    },
    {
     path:"/login",
    element:<Login/>
    },
    {
    path:"/myparcels",
    element:<Myparcels/>
    },
    {
    path:"/allparcels",
    element:<Parcels/>
    },
    {
    path:"/parcel/:id",
    element:<Parcel/>
    },
  ])

  return <>   
  <RouterProvider router={router}/>
  </>;
}

export default App
