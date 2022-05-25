import * as React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './app.scss';

import { MetricsBoard } from './components/MetricsBoard/MetricsBoard';

const MetricsForm = React.lazy(() => import('metricsForm/MetricsForm'))

export default ():JSX.Element => {

  return(
   <div><MetricsForm /></div>
  )
}