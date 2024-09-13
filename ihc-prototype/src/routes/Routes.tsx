
import { createBrowserRouter } from "react-router-dom";
import { ProductsBag } from "@/page/ProductsBag";
import { ProductsFeed } from "@/page/ProductsFeed";
import { RegisterProducts } from "@/page/RegisterProducts";
import { User } from "@/page/User";
import Login from "@/page/Login";
import Register from "@/page/Register";
import { App } from "@/App";


export const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      children: [
        {
          path: "",
          element: <ProductsFeed />,
        },
        {
          path: "product-bag",
          element: <ProductsBag/>,
        },
        {
          path: "register-product",
          element: <RegisterProducts/>,
        },
        {
          path: "user",
          element: <User/>,
        },
       
      ],
     
    }, {
      path: "/login",
      element: <Login />,
    }
    , {
      path: "/register",
      element: <Register />,
    }
  ]);