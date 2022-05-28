# MFE-starterkit
- The purpose of this project provides a Starter Kit of Micro Frontends using Module Federation.

## Module Federation
- Module Federation is a feature built into Webpack 5 that makes it easy to share code between applications.
- Module Federation is one way to achieve runtime dependecies which means MFEs are independently deployed to production and are consumed at runtime by the Shell.

## Terminologies
- shell (host): a Webpack build that is initialized first during a page load. It will consume MFEs.
- remote: another Webpack build. it will be consumed by a shell
- bi-directional-shell: It will consume MFEs and also be consumed by a shell.

## Error Handling
 - a MFE error shouldn't break the whole app. To solve this problem we can use "error boundary" in React.
 - To create an "error boundary", add it on Shell(or Host) application's app.tsx file.

### Usage
 ```js
 import * as React from 'react';

class ErrorBoundary extends React.Component {
    state:{ hasError: Boolean}
    props: any
    constructor(props: any) {
      super(props);
      this.state = { hasError: false };
    }
  
    static getDerivedStateFromError(error: any) {
      // Update state so the next render will show the fallback UI.
      return { hasError: true };
    }
  
    componentDidCatch(error: any, errorInfo: any) {
      // You can also log the error to an error reporting service
      // logErrorToMyService(error, errorInfo);
    }
  
    render() {
      if (this.state.hasError) {
        // You can render any custom fallback UI
        return this.props.error || <div>Loading Error</div>;
      }
  
      return (
            <React.Suspense fallback={this.props.delayed || <></>}>
                {this.props.children}
            </React.Suspense>    
          ); 
    }
}

// RemoteWrapper
export default (Component: any) => ({ error, delayed, ...props}:any):JSX.Element => (
  <ErrorBoundary error={error} delayed={delayed}>
    <Component {...props} />
  </ErrorBoundary>
)
 ```
 ```js
    import RemoteWrapper from '../RemoteWrapper/RemoteWrapper';

    const UserAvatar = RemoteWrapper(React.lazy(() => import('userManagement/UserAvatar')));

    <UserAvatar error={"Error"} delayed={"Loading..."} />  // We can pass props. {err, delayed, props that the Component need}
 ```

 ## Angular Remote MFE on React Shell MFE
 
 ### Command
 ```js
  ng new [ANGULAR-MFE-NAME]
  ng add @angular-architects/module-federation  // in [ANGULAR-MFE-NAME] folder
 ```

 ### Basic Environment
 1. Add scritType in webpack.config.js
 ```js
 output: {
    uniqueName: "angularMfe",
    publicPath: "auto",
    scriptType : "text/javascript"
  },
 ```

 2. Create loadApp.ts in src folder
 ```js
  import "zone.js";
  import { enableProdMode } from '@angular/core';
  import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

  import { AppModule } from './app/app.module';
  import { environment } from './environments/environment';

  if (environment.production) {
    enableProdMode();
  }

  const mount = ()=>{
    platformBrowserDynamic().bootstrapModule(AppModule)
      .catch(err => console.error(err));
  }

  export{mount}
```
3. Add loadApp.ts in tsconfig.app.json
```js
"files": [
    "src/main.ts",
    "src/polyfills.ts",
    "src/loadApp.ts"
  ],
```
4. in exposes
```js
exposes: {
          './AngularMfe':'./src/loadApp.ts',
        }, 
```