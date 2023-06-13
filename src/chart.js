import React from 'react';
import { Bar, Line, Pie } from 'react-chartjs-2';

function Chart(props) {
  return (
    <div className="chart">
      <Bar
       getElementAtEvent={(elements, event) => {
        if (event.type === 'click' && elements.length) {
          var data =
            props.chartData.datasets[elements[0]._datasetIndex].data;
          console.log(elements[0]);
        }
      }}
        data={props.chartData}
        options={{
          title: {
            display: props.displayTitle,
            text: 'Largest Cities in Massachusetts',
            fontSize: 25,
          },
          legend: {
            display: props.displayLegend,
            position: props.legendPosition,
            labels: {
              fontColor: '#000',
            },
          },
        }}
      />
      <Line
        data={props.chartData}
        options={{
          title: {
            display: props.displayTitle,
            text: 'Largest Cities in Massachusetts',
            fontSize: 25,
          },
          legend: {
            display: props.displayLegend,
            position: props.legendPosition,
            labels: {
              fontColor: '#000',
            },
          },
        }}
      />
      <Pie
        data={props.chartData}
        options={{
          title: {
            display: props.displayTitle,
            text: 'Largest Cities in Massachusetts',
            fontSize: 25,
          },
          legend: {
            display: props.displayLegend,
            position: props.legendPosition,
            labels: {
              fontColor: '#000',
            },
          },
        }}
      />
    </div>
  );
}

Chart.defaultProps = {
  displayTitle: true,
  displayLegend: false,
  legendPosition: 'bottom',
};

export default Chart;
