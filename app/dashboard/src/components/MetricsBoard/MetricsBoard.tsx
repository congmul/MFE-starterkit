import * as React from 'react';

import './metricsBoard.scss';

import Barchart from '../Barchart/Barchart';
import Linechart from '../Linechart/Linechart';
import Piechart from '../Piechart/Piechart';
import Radarchart from '../Radarchart/Radarchart';

export function MetricsBoard():JSX.Element {
  return <div className="chart-wrapper">
    <div className="chart">
      <Barchart />
    </div>
    <div className="chart">
      <Linechart />
    </div>
    <div className="chart">
      <Piechart />
    </div>
    <div className="chart">
      <Radarchart />
    </div>
  </div>;
}
