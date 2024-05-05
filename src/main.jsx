import React from 'react'
import ReactDOM from 'react-dom/client'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import './index.css';
import {FormationAttack} from "./pages/Formation-attack.jsx";
import {Register} from "./pages/Register.jsx";
import createStore from "react-auth-kit/createStore";
import AuthProvider from "react-auth-kit";
import RequireAuth from "@auth-kit/react-router/RequireAuth";
import ChooseType from "./pages/ChooseType.jsx";
import Signinpage from "./pages/Signinpage.jsx";
import AttackLV1 from "./pages/AttackLV1.jsx";
import AttackLV2 from "./pages/AttackLV2.jsx";
import AttackLV3 from "./pages/AttackLV3.jsx";
import DefenseLV1 from "./pages/DefenseLV1.jsx";
import DefenseLV2 from "./pages/DefenseLV2.jsx";
import {FormationDefense} from "./pages/Formation-defense.jsx";
import {FormationSupport} from "./pages/Formation-support.jsx";
import SupportLV1 from "./pages/SupportLV1.jsx";
import SupportLV2 from "./pages/SupportLV2.jsx";
import SupportLV3 from "./pages/SupportLV3.jsx";
import Accueil from "./pages/Accueil.jsx";
import Certificat from "./pages/Certificat.jsx";


const store = createStore({
  authName: "_auth",
  authType: "cookie",
  cookieDomain: window.location.hostname,
  cookieSecure: false
})


const router = createBrowserRouter([
  {
    path:"/",
    element:<Accueil/>
  },

  {
    path:"/signin",
    element:<Signinpage/>
  },
  {
    path:'/register',
    element:<Register/>
  },
  {
    path:'/formation/attaque',
    element: <RequireAuth fallbackPath={'/signin'}><FormationAttack/></RequireAuth>
  },

  {
    path:'/formation/defense',
    element: <RequireAuth fallbackPath={'/signin'}><FormationDefense/></RequireAuth>
  },

  {
    path:'/formation/support',
    element: <RequireAuth fallbackPath={'/signin'}><FormationSupport/></RequireAuth>
  },

  {
    path:"/choosetype",
    element:<RequireAuth fallbackPath={'/signin'}><ChooseType/></RequireAuth>
  },

    // ATTACK LEVELS
  {
    path:'/attack-lv1',
    element:<RequireAuth fallbackPath={'/signin'}><AttackLV1/></RequireAuth>
  },
  {
    path:'/attack-lv2',
    element:<RequireAuth fallbackPath={'/signin'}><AttackLV2/></RequireAuth>
  },
  {
    path:'/attack-lv3',
    element:<RequireAuth fallbackPath={'/signin'}><AttackLV3/></RequireAuth>
  },


  // DEFENSE LEVEL
  {
    path:'/defense-lv1',
    element:<RequireAuth fallbackPath={'/signin'}><DefenseLV1/></RequireAuth>
  },
  {
    path:'/defense-lv2',
    element:<RequireAuth fallbackPath={'/signin'}><DefenseLV2/></RequireAuth>
  },
    // SUPPORT LEVEL

  {
    path:'/support-lv1',
    element:<RequireAuth fallbackPath={'/signin'}><SupportLV1/></RequireAuth>
  },
  {
    path:'/support-lv2',
    element:<RequireAuth fallbackPath={'/signin'}><SupportLV2/></RequireAuth>
  },
  {
    path:'/support-lv3',
    element:<RequireAuth fallbackPath={'/signin'}><SupportLV3/></RequireAuth>
  },

  {
    path:'/certificat',
    element:<RequireAuth fallbackPath={'/signin'}><Certificat/></RequireAuth>
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider store={store}>
      <RouterProvider router={router}/>
    </AuthProvider>
  </React.StrictMode>,
)
