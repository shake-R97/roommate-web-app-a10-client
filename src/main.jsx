import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Mainlayout from './component/Mainlayout.jsx';
import Home from './component/pages/Home.jsx';
import Error from './component/pages/Error.jsx';



const router = createBrowserRouter([
    {
      path: '/',
      Component: Mainlayout,
      children: [
        {index : true,
         Component: Home,
        }
      ],
    },
    {
      path: '/*',
      Component : Error,
    }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider router={router} />,
  </StrictMode>,
)
