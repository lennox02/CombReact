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
    200230,
    202250,
    202480,
    202700,
    203000,
    203110,
    203240,
    203200,
    206010,
    206800,
    207200,
    207520,
    207680,
    207750,
    207760,
    210210,
    211500,
    212480,
    212990,
    213230,
    213280,
    213200,
    217180,
    218380,
    219120,
    219450,
    219560,
    219310,
    219430,
    244109
  ];
  igFollowers = [
    1204800,
    1208000,
    1211500,
    1213700,
    1250300,
    1258400,
    1263200,
    1266100,
    1268200,
    1269900,
    1271200,
    1305500,
    1320900,
    1327300,
    1331200,
    1345000,
    1352000,
    1356100,
    1409200,
    1424700,
    1432100,
    1435500,
    1438800,
    1439500,
    1440100,
    1472100,
    1480300,
    1490900,
    1496800,
    1507000
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
