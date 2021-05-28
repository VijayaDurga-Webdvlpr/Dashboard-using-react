import "../../../node_modules/react-vis/dist/style.css";
import React, { Component ,useEffect,useState} from 'react'
import {Col,Row,Container} from 'react-bootstrap';
import * as  d3 from 'd3-dsv';
import WidgetChart from "../charts/WidgetChart";
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
    { x: 9, y: 48 },
    { x: 10, y: 47 },
    { x: 11, y: 42 },
    { x: 12, y: 40 },
    { x: 13, y: 48 },
    { x: 14, y: 62 },
    { x: 15, y: 51 },
    { x: 16, y: 70 },
    { x: 17, y: 84 },
    { x: 18, y: 92 },
    { x: 19, y: 131 },
    { x: 20, y: 129 },
    { x: 21, y: 155 },
    { x: 22, y: 172 },
    { x: 23, y: 211 },
  ];
  return (
    <>
    <WidgetChart/>
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
    </>
  );
};


export default Chart;
