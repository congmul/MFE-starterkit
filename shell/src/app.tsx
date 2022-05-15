import * as React from 'react';

// const RemoteButton = React.lazy(() => import('app2/Button'));

const App = () => (
  <div>
    <h1>SHELL</h1>
    <React.Suspense fallback="Loading Button">
      {/* <RemoteButton /> */}
    </React.Suspense>
  </div>
);

export default App;