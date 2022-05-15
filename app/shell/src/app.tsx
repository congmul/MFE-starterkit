import * as React from 'react';

const LoginService = React.lazy(() => import('loginService/LoginService'));

const App = () => (
  <div>
    <h1>SHELL</h1>
    <React.Suspense fallback="Loading...">
      <LoginService />
    </React.Suspense>
  </div>
);

export default App;