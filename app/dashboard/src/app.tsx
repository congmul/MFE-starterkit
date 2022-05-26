import * as React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './app.scss';

import { MetricsBoard } from './components/MetricsBoard/MetricsBoard';

const MetricsForm = React.lazy(() => import('metricsForm/MetricsForm'))

export default ():JSX.Element => {

  return(<>
    <div className="form-wrapper">
      <div className="form">
        <MetricsForm />
      </div>
      <div className="form">
        <h1>Angular Form</h1>
      </div>
    </div>
    <div>
      <MetricsBoard />
    </div>
  </>)
}