import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { Bar } from 'react-chartjs-2';
import {
  Box,
  Card,
  CardContent,
  CardHeader,
  Divider,
  useTheme,
  makeStyles,
  colors
} from '@material-ui/core';

const useStyles = makeStyles(() => ({
  root: {}
}));

const Sales = ({ className, state, ...rest }) => {
  const classes = useStyles();
  const theme = useTheme();

  const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

  const getCalcDate = (days) => {
    let d = new Date();

    d.setDate(d.getDate() - days)

    return d.getDate() + " " + monthNames[d.getMonth()];
  }

  let views = [];
  let comments = [];
  let dates = [];

  const modNum = () => {
    let mod = 1;
    if(state.gender !== "all"){
      mod = mod * 0.5;
    }

    if(state.age === "18"){
      mod = mod * 0.20;
    } else if(state.age === "30"){
      mod = mod * 0.35;
    } else if(state.age === "40"){
      mod = mod * 0.40;
    } else if(state.age === "60"){
      mod = mod * 0.05;
    }

    if(state.reaction === "like"){
      mod = mod * 0.2;
    } else if(state.reaction === "love"){
      mod = mod * 0.05;
    } else if(state.reaction === "care"){
      mod = mod * 0.01;
    } else if(state.reaction === "laugh"){
      mod = mod * 0.02;
    } else if(state.reaction === "wow"){
      mod = mod * 0.005;
    } else if(state.reaction === "sad"){
      mod = mod * 0.03;
    } else if(state.reaction === "angry"){
      mod = mod * 0.15;
    }

    return mod;
  }

  let mod = modNum();
  let ig = 1;
  let fb = 1;
  if(state.platform === 'facebook'){
    ig = 0.1;
  } else if(state.platform === 'instagram'){
    fb = 0.1;
  }

  views = [
    12640 * mod,
    180140 * mod * fb,
    10810 * mod,
    10990 * mod,
    548330 * mod * ig,
    32080 * mod,
    19780 * mod,
    12640 * mod,
    190133 * mod * fb,
    10810 * mod,
    10990 * mod,
    508330 * mod * ig,
    32080 * mod,
    19780 * mod,
    12640 * mod,
    189995 * mod * fb,
    10810 * mod,
    10990 * mod,
    568330 * mod * ig,
    32080 * mod,
    19780 * mod,
    12640 * mod,
    171140 * mod * fb,
    10810 * mod,
    10990 * mod,
    558330 * mod * ig,
    32080 * mod,
    19780 * mod,
    12640 * mod,
    284548 * mod * fb
  ];
  comments = [
    1010 * mod,
    31340 * mod * fb,
    640 * mod,
    890 * mod,
    51119 * mod * ig,
    4080 * mod,
    1900 * mod,
    1010 * mod,
    31340 * mod * fb,
    640 * mod,
    890 * mod,
    50123 * mod * ig,
    4080 * mod,
    1900 * mod,
    1010 * mod,
    31340 * mod * fb,
    640 * mod,
    890 * mod,
    51230 * mod * ig,
    4080 * mod,
    1900 * mod,
    1010 * mod,
    31340 * mod * fb,
    640 * mod,
    890 * mod,
    53218 * mod * ig,
    4080 * mod,
    1900 * mod,
    1010 * mod,
    45340 * mod * fb
  ];
  dates = [];
  for (let i = 30; i >= 1; i--) {
    dates.push(getCalcDate(i))
  }

  if(state.time === "week"){
    views.splice(0, 23);
    comments.splice(0, 23);
    dates.splice(0, 23);
  }

  // round graph values
  for(let i=0;i<views.length;i++){
    views[i] = Math.round(views[i]);
    comments[i] = Math.round(comments[i]);
  }


  const data = {
    datasets: [
      {
        backgroundColor: colors.blue[500],
        data: views,
        label: 'Views'
      },
      {
        backgroundColor: colors.indigo[400],
        data: comments,
        label: 'Comments'
      }
    ],
    options: {
      scales: {
        yAxes: [{
          id: 'A',
          type: 'linear',
          position: 'left',
        }, {
          id: 'B',
          type: 'linear',
          position: 'right',
          ticks: {
            max: 1,
            min: 0
          }
        }]
      }
    },
    labels: dates
  };

  const options = {
    animation: false,
    cornerRadius: 20,
    layout: { padding: 0 },
    legend: { display: false },
    maintainAspectRatio: false,
    responsive: true,
    scales: {
      xAxes: [
        {
          barThickness: 12,
          maxBarThickness: 10,
          barPercentage: 0.5,
          categoryPercentage: 0.5,
          ticks: {
            fontColor: theme.palette.text.secondary
          },
          gridLines: {
            display: false,
            drawBorder: false
          }
        }
      ],
      yAxes: [
        {
          ticks: {
            fontColor: theme.palette.text.secondary,
            beginAtZero: true,
            min: 0
          },
          gridLines: {
            borderDash: [2],
            borderDashOffset: [2],
            color: theme.palette.divider,
            drawBorder: false,
            zeroLineBorderDash: [2],
            zeroLineBorderDashOffset: [2],
            zeroLineColor: theme.palette.divider
          }
        }
      ]
    },
    tooltips: {
      backgroundColor: theme.palette.background.default,
      bodyFontColor: theme.palette.text.secondary,
      borderColor: theme.palette.divider,
      borderWidth: 1,
      enabled: true,
      footerFontColor: theme.palette.text.secondary,
      intersect: false,
      mode: 'index',
      titleFontColor: theme.palette.text.primary
    }
  };

  return (
    <Card
      className={clsx(classes.root, className)}
      {...rest}
    >
      <CardHeader
        title="ENGAGEMENT TRENDS"
      />
      <Divider />
      <CardContent>
        <Box
          height={400}
          position="relative"
        >
          <Bar
            data={data}
            options={options}
          />
        </Box>
      </CardContent>
      <Divider />
      <Box
        display="flex"
        justifyContent="flex-end"
        p={2}
      >
      </Box>
    </Card>
  );
};

Sales.propTypes = {
  className: PropTypes.string
};

export default Sales;
