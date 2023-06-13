import React, { useRef } from 'react';
import { Bar, getElementAtEvent ,Line  } from 'react-chartjs-2';
import 'chartjs-plugin-annotation';
import zoomPlugin from 'chartjs-plugin-zoom';
import {CategoryScale  , BarElement , LinearScale  , Legend} from 'chart.js'; 
import Chart from 'chart.js/auto';
function Test() {
    Chart.register(CategoryScale);
    Chart.register(zoomPlugin);
  const labels = ['a', 'c', 'b', 'd', 'e', 'f', 'g'];
  const data = {
    labels: labels,
    datasets: [
      {
        label: 'My First Dataset',
        data: [65, 59, 80, 81, 56, 55, 40],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(255, 159, 64, 0.2)',
          'rgba(255, 205, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(201, 203, 207, 0.2)',
        ],
        borderColor: [
          'rgb(255, 99, 132)',
          'rgb(255, 159, 64)',
          'rgb(255, 205, 86)',
          'rgb(75, 192, 192)',
          'rgb(54, 162, 235)',
          'rgb(153, 102, 255)',
          'rgb(201, 203, 207)',
        ],
        borderWidth: 1,
      },
    ],
  };

  const chartref = useRef();
  const  onClick = (event)=>{

    if (getElementAtEvent(chartref.current , event).length > 0) {
        console.log(getElementAtEvent(chartref.current , event)[0])
         const  datasetIndexNum  =  getElementAtEvent(chartref.current , event)[0].datasetIndex
         const datapoint  =  getElementAtEvent(chartref.current , event)[0].index

         console.log(data.labels[datapoint]);
         console.log(data.datasets[datasetIndexNum].data[datapoint])
  
    }
  }


 
  return (
    <div className="chart">
        <div> 
      <Bar
        width={100}
        height={10}
           ref={chartref}
        data={data}
        onClick={onClick}
        options={{
          plugins: {
            annotation: {}, // Enable the chartjs-plugin-annotation plugin
          },
          scales: {
            x: {
              type: 'category', // Use "category" scale for x-axis
            },
          },
          title: {
            display: true,
            text: 'Largest Cities in Massachusetts',
            fontSize: 25,
          },
          legend: {
            display: true,
            position: true,
            labels: {
              fontColor: '#000',
            },
          },
          plugins: {
            zoom: {
              zoom: {
                animation: {
                    duration: 1000,
                    easing: 'easeOutCubic'
                  },
                wheel: {
                  enabled: true,
                },
                pinch: {
                  enabled: true
                },
                mode: 'xy',
              }
            }
          }
        }}
      />
      </div>
      <Line
       width={100}
       height={10}
           ref={chartref}
        data={data}
        onClick={onClick}
        options={{
          plugins: {
            annotation: {}, // Enable the chartjs-plugin-annotation plugin
          },
          scales: {
            x: {
              type: 'category', // Use "category" scale for x-axis
            },
          },
          title: {
            display: true,
            text: 'Largest Cities in Massachusetts',
            fontSize: 25,
          },
          legend: {
            display: true,
            position: true,
            labels: {
              fontColor: '#000',
            },
          },
          plugins: {
            zoom: {
              zoom: {
                animation: {
                    duration: 1000,
                    easing: 'easeOutCubic'
                  },
                wheel: {
                  enabled: true,
                },
                pinch: {
                  enabled: true
                },
                mode: 'xy',
              }
            }
          }
        }}
      />
    </div>
  );
}

export default Test;
