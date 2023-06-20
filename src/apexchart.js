import React, { useState, useEffect } from 'react';
import Chart from 'react-apexcharts';
import useFetch from './Hook/UseFetch';

const Apexchart = () => {
 
    const {Data} = useFetch("http://tanger.geodaki.com:3000/rpc/data?idsdevice=109218&dtb=13/06/2023%2008:00:00&dtf=13/06/2023%2023:50:00")

  useEffect(() => {
   
if(Data){ 
      
    const categories = Data.map((item) => item.date);
    const accData =  Data.map((item) => item.acc);


    setChartOptions((prevOptions) => ({
      ...prevOptions,
      xaxis: {
        ...prevOptions.xaxis,
        categories: categories,
      },
    }));

    setChartSeries((prevSeries) => [
      {
        ...prevSeries[0],
        data: accData,
      },
    ]);
}

 
  }, [Data]);

  const handleDataPointSelection = (event, chartContext, config) => {


    console.log(Data)

    if(Data){
        const { dataPointIndex } = config;
   
        const selectedData = Data[dataPointIndex];
    
    
        console.log('Latitude:', selectedData.lat);
        console.log('Longitude:', selectedData.lon);
    }
   
  };
  const [chartOptions, setChartOptions] = useState({
    dataLabels: {
        enabled: false
      },
    chart: {
      height: 350,
      type: 'bar',
      events: {
        dataPointSelection: handleDataPointSelection, 
      },
      animations: {
        enabled: false,
        }
    },
    plotOptions: {
      bar: {
        borderRadius: 10,
        columnWidth: '50%',
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
        width: 2,
        curve: 'straight'},
    grid: {
      row: {
        colors: ['#fff', '#f2f2f2'],
      },
    },
    xaxis: {
      categories: [],
      tickPlacement: 'on',
    },
    yaxis: {
      title: {
        text: 'Acc',
      },
    },
    fill: {
      gradient: {
        shadeIntensity: 0.25,
      },
    },
  });

  const [chartSeries, setChartSeries] = useState([
    {
      name: 'Acc',
      data: [],
    },
  ]);
  return (
    <div id="chart">
      <Chart options={chartOptions} series={chartSeries} type="bar" height={350} />
    
    </div>
  );
};

export default Apexchart;
