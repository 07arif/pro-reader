import { createBrowserRouter } from "react-router-dom";
import About from "./About";
import Books from "./Books";
import ErrorPage from "./ErrorPage";
import Home from "./Home";
import Main from "./Main";
import BookDetails from "./BookDetails"

export const router = createBrowserRouter([
    {
      path:'/',
      element:<Main></Main>,
      errorElement:<ErrorPage></ErrorPage>,
      children:[
        {
          index: true,
          element:<Home></Home>
        },
        {
          path:'/home',
          element:<Home></Home>
        },
        {
          path:'/books',
          element:<Books></Books>,
          loader:()=>{
            return fetch('https://api.itbook.store/1.0/new')
          },
        },
        {
          path:'/about',
          element:<About></About>
        },
        {
            path:'book/:id',
            element:<BookDetails></BookDetails>,
            loader:({params})=>{
                return fetch(`https://api.itbook.store/1.0/books/${params.id}`)
            }
        }
        
      ]
    }
  ])