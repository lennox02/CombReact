import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import ReactWordcloud from "react-wordcloud";
import {
  Card,
  CardContent,
  Grid,
  Typography,
  colors,
  makeStyles
} from '@material-ui/core';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';

const options = {
  rotations: 0,
  fontSizes: [14, 48]
};

const words = [
  {
    text: 'vaccum',
    value: 14,
  },
  {
    text: 'dyson',
    value: 14,
  },
  {
    text: 'no',
    value: 10,
  },
  {
    text: 'back',
    value: 10,
  },
  {
    text: 'service',
    value: 9,
  },
  {
    text: 'customer',
    value: 9,
  },
  {
    text: 'email',
    value: 7,
  },
  {
    text: 'bought',
    value: 7,
  },
  {
    text: 'year',
    value: 6,
  },
  {
    text: 'still',
    value: 6,
  },
  {
    text: 'send',
    value: 6,
  },
  {
    text: 'replacement',
    value: 5,
  },
  {
    text: 'one',
    value: 5,
  },
  {
    text: 'money',
    value: 5,
  },
  {
    text: 'filter',
    value: 5,
  },
  {
    text: 'few',
    value: 5,
  },
  {
    text: 'even',
    value: 5,
  },
  {
    text: 'charge',
    value: 5,
  },
  {
    text: 'again',
    value: 5,
  },
  {
    text: 'weeks',
    value: 4,
  },
  {
    text: 'times',
    value: 4,
  },
  {
    text: 'stopped',
    value: 4,
  },
  {
    text: 'times',
    value: 4,
  },
  {
    text: 'several',
    value: 4,
  },
  {
    text: 'sale',
    value: 4,
  },
  {
    text: 'said',
    value: 4,
  },
];

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100%'
  },
  avatar: {
    backgroundColor: colors.red[600],
    height: 56,
    width: 56
  },
  differenceIcon: {
    color: colors.red[900]
  },
  differenceValue: {
    color: colors.red[900],
    marginRight: theme.spacing(1)
  }
}));

const Page = ({ className, icon, image, state, ...rest }) => {
  const classes = useStyles();



  const pageCard = (
    <Grid
      item
      lg={6}
      md={6}
      xl={6}
      xs={6}
    >
    <Card
      className={clsx(classes.root, className)}
      {...rest}
    >
      <a href="/app/page" style={{width: "100%", alignSelf: "center"}}>
      <CardContent>
        <Grid container spacing={3} alignItems="center">
          <Grid item>{icon === "Instagram" && <InstagramIcon style={{color: "#e4405f"}} />}{icon !== "Instagram" && <FacebookIcon style={{color: "#3b5998"}} />}</Grid>
        </Grid>
      </CardContent>

        <div style={{height: "200px", width: "100%", overflow: "hidden", display: "flex"}}>
            <img alt={"Page1"} style={{width: "100%", alignSelf: "center"}} src={image} />
        </div>

      <CardContent>

        <Typography variant="subtitle2">
          Dyson - Empowering the Home
        </Typography>

        <br />

        {icon === "Instagram" &&
        <Grid container direction="row" justify="center" spacing={3} style={{paddingBottom: "12px"}}>
          <Grid item lg={5} sm={5} xl={5} xs={5} ></Grid>
          <Grid item lg={2} sm={2} xl={2} xs={2} ><div>38.2k</div><img alt={"love"} src={'/static/images/facebook/icons/love.png'} /></Grid>
          <Grid item lg={5} sm={5} xl={5} xs={5} ></Grid>
        </Grid>
        }
        {icon !== "Instagram" &&
          <Grid container direction="row" justify="center" spacing={3} style={{paddingBottom: "12px"}}>
            <Grid item lg={5} sm={5} xl={5} xs={5} ></Grid>
            <Grid item lg={2} sm={2} xl={2} xs={2} ><div>50.1k</div><img alt={"like"} src={'/static/images/facebook/icons/like.png'} /></Grid>
            <Grid item lg={5} sm={5} xl={5} xs={5} ></Grid>
          </Grid>
        }

        <hr style={{color: "grey", backgroundColor: "grey"}} />

        <ReactWordcloud words={words} options={options} style={{height: "150px"}}/>

      </CardContent>
      </a>
    </Card>
    </Grid>
  );

  let showPageCard = true;

  if(state.platform === "instagram" && icon === "Facebook"){
    showPageCard = false;
  }
  if(state.platform === "facebook" && icon === "Instagram"){
    showPageCard = false;
  }

  return showPageCard ? pageCard : null;
};

Page.propTypes = {
  className: PropTypes.string
};

export default Page;
