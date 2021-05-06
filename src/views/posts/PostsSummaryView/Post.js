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
import { Link } from 'react-router-dom';

const options = {
  rotations: 0,
  fontSizes: [14, 48]
};


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

const Post = ({ className, id, icon, image, likes, reactions, message, words, date, time, state, ...rest }) => {

  const classes = useStyles();

  const d = new Date(date);
  const dateString = (d.getMonth() + 1) + "/" + d.getDate() + "/" + (d.getFullYear() % 100);

  const minuteDiff = (d1, d2) => {
    let diff = (d2.getTime() - d1.getTime()) / 1000;
    diff /= 60;
    return Math.abs(Math.round(diff));
  }

  const showCard = () => {
    // let currentD = new Date();
    // let diff = minuteDiff(d, currentD);
    // if(
    //   (state.time === 'week' && diff > 10080) ||
    //   (state.time === 'month' && diff > 43200) ||
    //   (state.time === 'year' && diff > 525600) ||
    //   (state.platform === "facebook" && icon === "Instagram") ||
    //   (state.platform === "instagram" && icon === "Facebook")
    // ){
    //   return false;
    // }
    return true;
  }

  const modNum = () => {
    let mod = 1;
    let currentD = new Date();
    let diff = minuteDiff(d, currentD);
    if(diff > 525600){
      mod = mod * 0.05;
    } else if(diff > 43200){
      mod = mod * 0.15;
    } else if(diff > 10080){
      mod = mod * 0.25;
    }

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

    return mod;
  }

  const showEmote = (emote) => {
    if(state.reaction !== emote && state.reaction !== 'all'){
      return false
    }
    return true;
  }

  const url = "/app/page?id=" + id;

  const card = (
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
      <Link to={url} style={{width: "100%", alignSelf: "center"}}>
      <CardContent>
        <Grid container spacing={3} alignItems="center">
          <Grid item>{icon === "Instagram" && <InstagramIcon style={{color: "#e4405f"}} />}{icon !== "Instagram" && <FacebookIcon style={{color: "#3b5998"}} />}</Grid>
          <Grid item>
            <Typography variant="h6">{dateString}</Typography>
            <Typography variant="h6">1:45 PM</Typography>
          </Grid>
        </Grid>
      </CardContent>

        <div style={{height: "200px", width: "100%", overflow: "hidden", display: "flex", backgroundColor: "black"}}>
            <img alt={message} style={{width: "100%", alignSelf: "center"}} src={image} />
        </div>

      <CardContent>

        <Typography variant="subtitle2">
          {message}
        </Typography>

        <br />

        {icon === "Instagram" &&
        <Grid container direction="row" justify="center" spacing={3} style={{paddingBottom: "12px", textAlign:"center"}}>
          <Grid item lg={5} sm={5} xl={5} xs={5} ></Grid>
          <Grid item lg={2} sm={2} xl={2} xs={2} ><div style={{fontSize:"20px", paddingBottom: "2px"}}>{likes}</div><img alt={"love"} src={'/static/images/facebook/icons/love.png'} /></Grid>
          <Grid item lg={5} sm={5} xl={5} xs={5} ></Grid>
        </Grid>
        }
        {icon !== "Instagram" &&
          <Grid container direction="row" justify="center" spacing={3} style={{paddingBottom: "12px", textAlign:"center"}}>
            <Grid item lg={5} sm={5} xl={5} xs={5} ></Grid>
            <Grid item lg={2} sm={2} xl={2} xs={2} ><div style={{fontSize:"20px", paddingBottom: "2px"}}>{likes}({reactions})</div><img alt={"like"} src={'/static/images/facebook/icons/like.png'} /></Grid>
            <Grid item lg={5} sm={5} xl={5} xs={5} ></Grid>
          </Grid>
        }

        <hr style={{color: "grey", backgroundColor: "grey"}} />

        {icon === "Instagram" &&
        <ReactWordcloud words={words} options={options} style={{height: "150px"}}/>
        }
        {icon !== "Instagram" &&
        <ReactWordcloud words={words} options={options} style={{height: "150px"}}/>
        }

      </CardContent>
      </Link>
    </Card>
    </Grid>
  );

  return showCard() ? card : null;
};

Post.propTypes = {
  className: PropTypes.string
};

export default Post;
