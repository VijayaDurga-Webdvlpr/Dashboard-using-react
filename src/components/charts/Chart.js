import "../../../node_modules/react-vis/dist/style.css";
import React, { Component ,useEffect,useState} from 'react'
import {Col,Row,Container} from 'react-bootstrap';
import * as  d3 from 'd3-dsv';
import WidgetChart from "../charts/WidgetChart";
import ReactFC from "react-fusioncharts";
import FusionCharts from "fusioncharts";
import Column2D from "fusioncharts/fusioncharts.charts";
import FusionTheme from "fusioncharts/themes/fusioncharts.theme.fusion";


import {
  XYPlot,
  LineSeries,
  XAxis,
  YAxis,
  VerticalGridLines,
  HorizontalGridLines,
} from "react-vis";

const fetchText = async (url) =>{
  const response = await fetch(url);
  return await response.text();
};
const csvUrl ='https://gist.githubusercontent.com/VijayaDurga-Webdvlpr/e380b83248528cc3197b269ce39ec98c/raw/testdata.csv';


fetchText(csvUrl).then(text => {
  const data = d3.tsvParse(text);
  console.log(data.length + ' rows');
  
  console.log(data.columns + ' col');

});


const Chart = () => {
  const data = [
    { x: 9, y: 30 },
    { x: 10, y: 30 },
    { x: 11, y: 26 },
    { x: 12, y: 24 },
    { x: 13, y: 27 },
    { x: 14, y: 46 },
    { x: 15, y: 34 },
    { x: 16, y: 45 },
    { x: 17, y: 54 },
    { x: 18, y: 53 },
    { x: 19, y: 87 },
    { x: 20, y: 80 },
    { x: 21, y: 73 },
    { x: 22, y: 79 },
    { x: 23, y: 97 },
    
    
  ];
  return (
    
    
    <div style={{ marginTop: "15px" }}>
      <XYPlot height={300} width={300}>
        <VerticalGridLines />
        <HorizontalGridLines />
        <XAxis />
        <YAxis />
        <LineSeries data={data} color="red" />
        <LineSeries data={data} color="purple" />
        <LineSeries data={data} color="yellow" />
      </XYPlot>
    </div>
    
  );
};


export default Chart;
