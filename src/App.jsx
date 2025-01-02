/*eslint-disable*/ 
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { HashRouter, RouterProvider } from "react-router-dom";
import Layout from "./Component/Layout/Layout";
import Home from "./Component/Home/Home";
import About from "./Component/About/About";
import Contact from "./Component/Contact/Contact";
import Portfolio from "./Component/Portfolio/Portfolio";
import Notfound from "./Component/Notfound/Notfound";

let routers = HashRouter([
  {path:"" , element:<Layout/> , children:
    [
      {index:true , element:<Home/>},
      {path:"about" , element:<About/>},
      {path:"contact", element:<Contact/>},
      {path:"portfolio" , element:<Portfolio/>},
      {path:"*" , element:<Notfound/>},
    ]
  }]
);

function App() {
  return <RouterProvider router={routers}></RouterProvider>
}

export default App;
