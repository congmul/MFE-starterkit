import * as React from 'react';

// const RemoteButton = React.lazy(() => import('app2/Button'));

const App = () => (
  <div>
    <h1>Typescript</h1>
    <h2>Remote 1 App</h2>
    <React.Suspense fallback="Loading Button">
      {/* <RemoteButton /> */}
    </React.Suspense>
  </div>
);

export default App;