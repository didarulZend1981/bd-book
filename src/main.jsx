import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './pages/Home.jsx';
import ListedBooks from './pages/ListedBooks.jsx';
import PagesToRead from './pages/PagesToRead.jsx';
import MainLayout from './components/layouts/MainLayout.jsx';
import Book from './pages/Book.jsx';
import Read from './components/Read.jsx';
import Wishlist from './components/Wishlist.jsx';
import NotFound from './pages/NotFound.jsx';
import Faq from './pages/Faq.jsx';
import About from './pages/About.jsx';
const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <NotFound></NotFound>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () =>fetch('../books.json')
        
        
      },

      {
        path: "/ListedBooks",
        element: <ListedBooks></ListedBooks>,
        loader: () =>fetch('../books.json'),
        children: [
          
          {
            index:true,
            element:<Read></Read>,
            loader: () =>fetch('../books.json'),
            
          }
          ,{
            path:"Wishlist",
            
            element:<Wishlist></Wishlist>,
            loader: () =>fetch('../books.json'),
          }

        ]
        
      },

      {
        path: "/PagesToRead",
        element: <PagesToRead></PagesToRead>,
        loader: () =>fetch('../books.json'),
      },
      {
        path: "/Faq",
        element: <Faq></Faq>,
       
      },
      {
        path: "/About",
        element: <About></About>,
       
      },
      {
        path:'/Book/:id',
        element:<Book></Book>,
        loader: () =>fetch('../books.json'),
      }
    ],
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
)
