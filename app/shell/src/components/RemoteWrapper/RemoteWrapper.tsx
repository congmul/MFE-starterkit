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
        return <div style={{"textAlign":"center"}}>{this.props.error || "Loading Error"}</div>;
      }
  
      return (
            <React.Suspense fallback={<div style={{"textAlign":"center"}}>{this.props.delayed || <div className="spinner-border text-primary" role="status"></div>}</div>}>
                {this.props.children}
            </React.Suspense>    
          ); 
    }
}

export default <P extends object>(Component: React.ComponentType<P>) => ({ error, delayed, ...props}:any):JSX.Element => (
  <ErrorBoundary error={error} delayed={delayed}>
    <Component {...props as P} />
  </ErrorBoundary>
)