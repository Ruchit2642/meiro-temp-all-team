
// This component is for the creating line charts



import React from 'react';
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, LineSeries, DateTime, Legend, Tooltip } from '@syncfusion/ej2-react-charts';

import { lineCustomSeries, LinePrimaryXAxis, LinePrimaryYAxis } from '../../data/dummy'; //importing data from dummy.tsx
import { useStateContext } from '../../contexts/ContextProvider';

const LineChart = () => {
  const { currentMode } = useStateContext();
  const primaryXAxis = {...LinePrimaryXAxis};
  const primaryYAxis = {...LinePrimaryYAxis};

  return (
    <ChartComponent
      id="line-chart"
      height="420px" //each line is having a height of 420 pixels
      primaryXAxis ={primaryXAxis } //  x-axis 
      primaryYAxis={primaryYAxis}   // y-axis
      chartArea={{ border: { width: 0 } }} 
      tooltip={{ enable: true }} //enabling user to learn about the icon by hovering the mouse over them
      background={currentMode === 'Dark' ? '#33373E' : '#fff'} //Current theme is dark with grayish blue background
      legendSettings={{ background: 'white' }} //If the theme is light-->white background
    >
      <Inject services={[LineSeries, DateTime, Legend, Tooltip]} />
      <SeriesCollectionDirective>
        {/* eslint-disable-next-line react/jsx-props-no-spreading */}
        {lineCustomSeries.map((item, index) => <SeriesDirective key={index} {...item} />)}
      </SeriesCollectionDirective>
    </ChartComponent>
  );
};

export default LineChart;






