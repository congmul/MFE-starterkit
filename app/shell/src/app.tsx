import * as React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';
import "./app.scss";

import RemoteWrapper from './components/RemoteWrapper/RemoteWrapper';
import Wrapper from "./components/Wrapper/Wrapper";
const LoginService = RemoteWrapper(React.lazy(() => import('loginService/LoginService')));
const Dashboard = RemoteWrapper(React.lazy(() => import('dashboard/Dashboard')))

const App = ():JSX.Element => (
  <BrowserRouter>
      <Routes>
          <Route path="/" element={<LoginService />} />
          <Route element={<Wrapper />}>
              <Route path="/home" element={<h1>Home page</h1>} />
              <Route path="/dashboard" element={<Dashboard />} /> 
          </Route>
      </Routes>
  </BrowserRouter>
);

export default App;