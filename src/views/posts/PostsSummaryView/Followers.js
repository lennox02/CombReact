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

const Followers = ({ className, state, ...rest }) => {
  const classes = useStyles();
  const theme = useTheme();

  const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

  const getCalcDate = (days) => {
    let d = new Date();

    d.setDate(d.getDate() - days)

    return d.getDate() + " " + monthNames[d.getMonth()];
  }

  let fbFollowers = [];
  let igFollowers = [];
  let dates = [];

  fbFollowers = [
    25023,
    25225,
    25248,
    25270,
    25300,
    25311,
    25324,
    25320,
    25601,
    25680,
    25720,
    25752,
    25768,
    25775,
    25776,
    26021,
    26150,
    26248,
    26299,
    26323,
    26328,
    26320,
    26718,
    26838,
    26912,
    26945,
    26956,
    26931,
    26943,
    27405
  ];
  igFollowers = [
    22048,
    22080,
    22115,
    22137,
    22503,
    22584,
    22632,
    22661,
    22682,
    22699,
    22712,
    23055,
    23209,
    23273,
    23312,
    23450,
    23520,
    23561,
    24092,
    24247,
    24321,
    24355,
    24388,
    24395,
    24401,
    24721,
    24803,
    24909,
    24968,
    25070
  ];

  for (let i = 30; i >= 1; i--) {
    dates.push(getCalcDate(i))
  }

  if(state.time === "week"){
    fbFollowers.splice(0, 23);
    igFollowers.splice(0, 23);
    dates.splice(0, 23);
  }

  let followers = fbFollowers;

  if(state.platform === "instagram"){
    followers = igFollowers;
  }


  const data = {
    datasets: [
      {
        backgroundColor: colors.blue[500],
        data: followers,
        label: 'Followers'
      }
    ],
    options: {
      scales: {
        yAxes: [{
          id: 'A',
          type: 'linear',
          position: 'left',
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
            min: 20000
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

  const showFollowers = () => {
    if(state.platform !== 'all'){
      return true;
    }
    return false;
  }

  const followerCard = (
    <Card
      className={clsx(classes.root, className)}
      {...rest}
    >
      <CardHeader
        title="FOLLOWER TRENDS"
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

  return showFollowers() ? followerCard : null;
};

Followers.propTypes = {
  className: PropTypes.string
};

export default Followers;
