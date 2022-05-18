import * as React from 'react';
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";

import Wrapper from "./components/Wrapper/Wrapper";
const LoginService = React.lazy(() => import('loginService/LoginService'));

const App = ():JSX.Element => (
  <BrowserRouter>
      <Routes>
          <Route path="/" element={<LoginService />} />
          <Route element={ <React.Suspense fallback={<div className="spinner-border text-primary" role="status"></div>}> <Wrapper /> </React.Suspense>}>
            <Route path="/home" element={<h1>Home page</h1>} />
            <Route path="/dashboard" element={<h1>Home page 2</h1>} /> 
          </Route>
      </Routes>
  </BrowserRouter>
);

export default App;