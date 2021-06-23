/* App.js */
import React from 'react';
import {Bar} from 'react-chartjs-2';

const BarChart = (props) => {

  // const graphData = {
  //   labels: ['January', 'February', 'March',
  //           'April', 'May'],
  //   datasets: [
  //     {
  //       label: 'HTML',
  //       backgroundColor: 'rgba(75,192,192,1)',
  //       borderColor: 'rgba(0,0,0,1)',
  //       borderWidth: 2,
  //       data: [65, 59, 80, 81, 56]
  //     }, 
  //     {
  //       label: 'CSS',
  //       backgroundColor: 'rgba(75,192,192,1)',
  //       borderColor: 'rgba(0,0,0,1)',
  //       borderWidth: 2,
  //       data: [65, 59, 80, 81, 56]
  //     }, 
  //     {
  //       label: 'JavaScript',
  //       backgroundColor: 'rgba(75,192,192,1)',
  //       borderColor: 'rgba(0,0,0,1)',
  //       borderWidth: 2,
  //       data: [65, 59, 80, 81, 56]
  //     }
  //   ]
  // }

  const graphData = {

    labels: ['Category'],
    datasets: [
      {
        stack: 'HTML',
        label: 'HTML Correct',
        backgroundColor: 'rgba(255, 43, 0, 1)',
        borderColor: 'rgba(0,0,0,1)',
        borderWidth: 2,
        data: [props.html-props.iHtml]
      }, 
      {
        stack: 'HTML',
        label: 'HTML Incorrect',
        backgroundColor: 'rgba(255, 43, 0, 0.5)',
        borderColor: 'rgba(0,0,0,1)',
        borderWidth: 2,
        data: [props.iHtml]
      }, 
      {
        stack: 'CSS',
        label: 'CSS Correct',
        backgroundColor: 'rgba(0, 99, 255, 1)',
        borderColor: 'rgba(0,0,0,1)',
        borderWidth: 2,
        data: [props.css-props.iCss]
      }, 
      {
        stack: 'CSS',
        label: 'CSS Incorrect',
        backgroundColor: 'rgba(0, 99, 255, 0.5)',
        borderColor: 'rgba(0,0,0,1)',
        borderWidth: 2,
        data: [props.iCss]
      }, 
      {
        stack: 'JavaScript',
        label: 'JavaScript Correct',
        backgroundColor: 'rgba(0, 255, 66, 1)',
        borderColor: 'rgba(0,0,0,1)',
        borderWidth: 2,
        data: [props.js-props.iJs]

      },
      {
        stack: 'JavaScript',
        label: 'JavaScript Incorrect',
        backgroundColor: 'rgba(0, 255, 66, 0.5)',
        borderColor: 'rgba(0,0,0,1)',
        borderWidth: 2,
        data: [props.iJs]
      }
    ]
  }


  return (
    <div>
      <Bar
        data={graphData}
        options={{
          title:{
            display:true,
            text:'Total Questions',
            fontSize:20
          },
          legend:{
            display:true,
            position:'right'
          }
        }}
      />
    </div>
  );

}

export default BarChart
