import * as React from "react";
import {mount} from "angularMfe/AngularMfe";

const AngularMfe = () => {
    React.useEffect(() => {
    mount();  
  }, []);   
  return <div className="left-sidebar-module"><angular-mfe></angular-mfe></div>;
};

export default AngularMfe;