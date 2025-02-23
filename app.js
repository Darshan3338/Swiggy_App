import React, {lazy, Suspense, useEffect, useState} from "react"
import ReactDOM from "react-dom/client"
import HeaderCompo from "./src/Components/HeaderCompo"
import BodyCompo from "./src/Components/BodyCompo"
import { createBrowserRouter,Outlet,RouterProvider } from "react-router-dom"
// import About from "./src/Components/About"
import Contact from "./src/Components/Contact"
import Error from "./src/Error"
import RestroMenu from "./src/Components/RestroMenu"
import UserContext from "./src/Components/utils/UserContext"
import { Provider } from "react-redux" // it will make bridge to react
import appStore from "./src/Components/utils/appStore"
import CartCompo from "./src/Components/CartCompo"

const Grocerry = lazy(()=>import("./src/Components/Grocery"))
const About = lazy(()=>import("./src/Components/About"))
const App=()=>{
  const [userInfo,setuserInfo] = useState()

  //authentication
  useEffect(()=>{
      const data={
        name:"Darshan"
      }
      setuserInfo(data.name)
  },[])
    return(
      <Provider store={appStore}>
      <UserContext.Provider value={{loginUser:userInfo, setuserInfo}}>
        <div className="app">
        <UserContext.Provider value={{loginUser:" "}}>
            <HeaderCompo/>
            </UserContext.Provider>
            <Outlet/>
        </div>
        </UserContext.Provider>
        </Provider>
    )
}

const AppRouter = createBrowserRouter(
    [
      {
        path: "/",
        element: <App />,
        children: [
          {
            path: "/",
            element: <BodyCompo />,
          },
          {
            path: "/about",
            element: <Suspense fallback={<h1>Loading...</h1>}> <About/> </Suspense>,
          },
          {
            path: "/contact",
            element: <Contact />,
          },
          {
            path: "/Restro/:resId",
            element:<Suspense fallback={<h1>Loading...</h1>}> <RestroMenu /> </Suspense>,
          },
          {
            path: "/grocery",
            element: <Grocerry/>,
          },
          {
            path: "/cart",
            element: <CartCompo/>,
          },
       
        ],
        errorElement: <Error />,
      },
    ], 
    {
      future: {
        v7_startTransition: true, // ✅ Fix for upcoming React.startTransition changes
        v7_relativeSplatPath: true, // ✅ Fix for new relative route behavior
      },
    }
  );
  
  const root = ReactDOM.createRoot(document.getElementById("root"));
  root.render(<RouterProvider future={{
    v7_startTransition: true,
  }} router={AppRouter} />);