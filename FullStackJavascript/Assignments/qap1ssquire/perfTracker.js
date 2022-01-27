// A simple program to log and graph the performance metrics of a computer system.

// import statements at start of file
const http = require("http");
const fs = require("fs");
const os = require("os");
const moment = require("moment");
 const plotly = require("plotly")("stephenSquire", "vQW8uiBxc8QnWNfiSI2y");

// assigning some key variables about the system
let totalMemory = (os.totalmem()/1024/1024/1024).toFixed(2);
let freeMemory = (os.freemem()/1024/1024/1024).toFixed(2);
let platform = os.platform();
let osVersion = os.release();
let cpuModel = os.cpus()[0].model;
let cpuSpeed = os.cpus()[0].speed;
let cpuCores = os.cpus().length;
let cpuUsage = os.loadavg()[0];
let cpuUsageAll = os.loadavg(); // use this array to sum up and find the average, use an arrow function to do this
let cpuUsageAvg = cpuUsageAll.reduce((a, b) => a + b, 0) / cpuUsageAll.length;



console.log(`Total Memory: ${totalMemory}`);
console.log(`Free Memory: ${freeMemory}. this is a questionable result`);
console.log(`Platform: ${platform}`);
console.log(`OS Version: ${osVersion}`);
console.log(`CPU Model: ${cpuModel}`);
console.log(`CPU Speed: ${cpuSpeed}`);
console.log(`CPU Cores: ${cpuCores}`);
console.log(`CPU Usage: ${cpuUsage}`);
console.log(`CPU Usage All: ${cpuUsageAll}`);
console.log(`CPU Usage Average: ${cpuUsageAvg}`);

// create arrays for free memory and cpu usage and cpu usage all, adding to the array every 5 seconds
let freeMemoryArray = [];
let cpuUsageArray = [];
let cpuUsageAllArray = [];
let timeArray = [];
timeArray[0] = 0;

// an interval function to add to the arrays every 5 seconds
const interval = setInterval(() => {
    freeMemoryArray.push(freeMemory);
    cpuUsageArray.push(cpuUsage);
    cpuUsageAllArray.push(cpuUsageAll);
    timeArray.push(timeArray[timeArray.length - 1] + 5);
    graph(freeMemoryArray, cpuUsageArray, cpuUsageAllArray, timeArray);
    
    }, 5000);

// create a function to create a graph using the plotly library for free memory and cpu usage and cpu usage all
const graph = (freeMemoryArray, cpuUsageArray, cpuUsageAllArray, timeArray) => {
    let graphData = [
        {
            x: timeArray,
            y: freeMemoryArray,
            type: "scatter",
            name: "Free Memory"
        },
        {
            x: timeArray,
            y: cpuUsageArray,
            type: "scatter",
            name: "CPU Usage"
        },
        {
            x: timeArray,
            y: cpuUsageAllArray,
            type: "scatter",
            name: "CPU Usage All"
        }
    ];
    let graphLayout = {
        title: "Performance Metrics",
        xaxis: {
            title: "Time"
        },
        yaxis: {
            title: "Memory (GB)"
        }
    };
    
    message = plotly.plot(graphData, graphLayout, (err, msg) => {
        if (err) return console.log(err);
        console.log(msg);
    });
    
};
// create a function to serve the html address returned by the graph function
// eventually if i return to this aside






  





