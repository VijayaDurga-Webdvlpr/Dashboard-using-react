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
    { x: 9, y: 62 },
    { x: 10, y: 58 },
    { x: 11, y: 54 },
    { x: 12, y:  52},
    { x: 13, y: 67 },
    { x: 14, y: 72 },
    { x: 15, y: 74 },
    { x: 16, y: 77 },
    { x: 17, y: 84 },
    { x: 18, y: 100 },
    { x: 19, y: 184 },
    { x: 20, y: 140 },
    { x: 21, y: 170 },
    { x: 22, y: 183 },
    { x: 23, y: 234 },
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
