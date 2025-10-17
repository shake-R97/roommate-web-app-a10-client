import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Mainlayout from './component/Mainlayout.jsx';
import Home from './component/pages/Home.jsx';
import Error from './component/pages/Error.jsx';
import './index.css';
import SignUp from './component/authentication/SignUp.jsx';
import SignIn from './component/authentication/SignIn.jsx';
import AuthProvider from './context/AuthProvider.jsx';
import PrivateRouteProvider from './component/private-pages/PrivateRouteProvider.jsx';
import FindRoommate from './component/private-pages/FindRoommate.jsx';
import MyListing from './component/private-pages/MyListing.jsx';



const router = createBrowserRouter([
  {
    path: '/',
    Component: Mainlayout,
    children: [
      {
        index: true,
        Component: Home,
      },
      // authentication routes
      {
        path: '/signup',
        Component: SignUp,
      },
      {
        path: '/signin',
        Component: SignIn
      },
      // protected routes
      {
        path: '/findroommate',
        element: <PrivateRouteProvider>
              <FindRoommate></FindRoommate>
        </PrivateRouteProvider>
      },
      {
        path: '/mylistings',
        element:<PrivateRouteProvider>
              <MyListing></MyListing>
        </PrivateRouteProvider>
      }

    ],
  },
  {
    path: '/*',
    Component: Error,
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>,
)
