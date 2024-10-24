import { useEffect, useState } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';

import Loader from './common/Loader';
import DefaultLayout from './layout/DefaultLayout';
import "./index.css";
import Navbar from "./components/Navbar"
import MarketingPage from "./components/MarketingPage/MarketingPage.tsx"
import SignInSide from "./components/Signin/SignInSide.tsx"
import SignUp from "./components/Signup/SignUp"
import SignOut from "./components/SignOut/SignOut"
import { BrowserRouter as Router, Routes, Route, Navigate  } from "react-router-dom";
import PrivateRoute from './PrivateRoute';


function App() {
  const [loading, setLoading] = useState<boolean>(true);
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);

  return loading ? (
    <Loader />
  ) : (
       <>
         <Navbar></Navbar>
         <Routes>
          <Route path="/" element={<MarketingPage />} />
          <Route path="/dashboard" element={<PrivateRoute><DefaultLayout /></PrivateRoute> }/>
          <Route path="/signin" element={<SignInSide />} />
          <Route path="/signout" element={<SignOut />} />
          <Route path="/register" element={<SignUp />} />
          {/* Define other routes that you need*/}
          {/* Catch-all route to redirect to home */}
          <Route path="*" element={<Navigate to="/" />} />

       </Routes>


     </>


  );
}

export default App;
