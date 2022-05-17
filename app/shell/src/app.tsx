import * as React from 'react';

const LoginService = React.lazy(() => import('loginService/LoginService'));

const App = () => (
  <div>
    <React.Suspense fallback={<div className="spinner-border text-primary" role="status"></div>}>
      <LoginService />
    </React.Suspense>
  </div>
);

export default App;