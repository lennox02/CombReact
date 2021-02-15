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
    text: 'day',
    value: 16,
  },
  {
    text: 'first',
    value: 9,
  },
  {
    text: 'emmy',
    value: 9,
  },
  {
    text: 'preschool',
    value: 7,
  },
  {
    text: 'great',
    value: 7,
  },
  {
    text: 'school',
    value: 6,
  },
  {
    text: 'adorable',
    value: 6,
  },
  {
    text: 'hope',
    value: 5,
  },
  {
    text: 'good',
    value: 5,
  },
  {
    text: 'fun',
    value: 5,
  },
  {
    text: 'cute',
    value: 5,
  },
  {
    text: 'sweet',
    value: 4,
  },
  {
    text: 'luck',
    value: 4,
  },
  {
    text: 'precious',
    value: 4,
  },
  {
    text: 'exciting',
    value: 3,
  },
  {
    text: 'bless',
    value: 3,
  },
  {
    text: 'best',
    value: 3,
  },
  {
    text: 'all',
    value: 3,
  },
  {
    text: 'absolutely',
    value: 3,
  },
  {
    text: 'wonderful',
    value: 2,
  },
  {
    text: 'teacher',
    value: 2,
  },
  {
    text: 'old',
    value: 2,
  },
  {
    text: 'heart',
    value: 2,
  },
  {
    text: 'happy',
    value: 2,
  },
  {
    text: 'growing',
    value: 2,
  },
  {
    text: 'fast',
    value: 2,
  },
];

const words2 = [
  {
    text: 'beautiful',
    value: 7,
  },
  {
    text: 'hair',
    value: 6,
  },
  {
    text: 'emmy',
    value: 6,
  },
  {
    text: 'cute',
    value: 5,
  },
  {
    text: 'love',
    value: 5,
  },
  {
    text: 'precious',
    value: 4,
  },
  {
    text: 'mullet',
    value: 3,
  },
  {
    text: 'reed',
    value: 3,
  },
  {
    text: 'think',
    value: 3,
  },
  {
    text: 'thing',
    value: 3,
  },
  {
    text: 'omg',
    value: 3,
  },
  {
    text: 'kiddos',
    value: 3,
  },
  {
    text: 'lucky',
    value: 2,
  },
  {
    text: 'week',
    value: 2,
  },
  {
    text: 'exciting',
    value: 2,
  },
  {
    text: 'most',
    value: 2,
  },
  {
    text: 'more',
    value: 2,
  },
  {
    text: 'cutest',
    value: 2,
  },
  {
    text: 'seen',
    value: 2,
  },
  {
    text: 'young',
    value: 2,
  },
  {
    text: 'sweethearts',
    value: 2,
  },
  {
    text: 'unique',
    value: 2,
  },
  {
    text: 'thank',
    value: 2,
  },
  {
    text: 'happy',
    value: 2,
  },
  {
    text: 'strong',
    value: 2,
  },
  {
    text: 'growing',
    value: 2,
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

const Post = ({ className, icon, image, date, time, state, ...rest }) => {

  const classes = useStyles();

  const d = new Date(date);
  const dateString = d.getMonth() + "/" + d.getDate() + "/" + (d.getFullYear() % 100);

  const minuteDiff = (d1, d2) => {
    let diff = (d2.getTime() - d1.getTime()) / 1000;
    diff /= 60;
    return Math.abs(Math.round(diff));
  }

  const showCard = () => {
    let currentD = new Date();
    let diff = minuteDiff(d, currentD);
    if(
      (state.time === 'week' && diff > 10080) ||
      (state.time === 'month' && diff > 43200) ||
      (state.time === 'year' && diff > 525600) ||
      (state.platform === "facebook" && icon === "Instagram") ||
      (state.platform === "instagram" && icon === "Facebook")
    ){
      return false;
    }
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
      <a href="/app/page" style={{width: "100%", alignSelf: "center"}}>
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
            <img alt={"post1"} style={{width: "100%", alignSelf: "center"}} src={image} />
        </div>

      <CardContent>

        <Typography variant="subtitle2">
        {icon === "Instagram" &&
          "Can’t believe I get to keep them. 😍😍😍"
        }
        {icon !== "Instagram" &&
          "Our baby is growing up and doing big things!!! Off to..."
        }
        </Typography>

        <br />

        {icon === "Instagram" &&
        <Grid container direction="row" justify="center" spacing={3} style={{paddingBottom: "12px"}}>
          <Grid item lg={5} sm={5} xl={5} xs={5} ></Grid>
          <Grid item lg={2} sm={2} xl={2} xs={2} ><div>{Math.round(540.2 * modNum() * 10) / 10}k</div><img alt={"love"} src={'/static/images/facebook/icons/love.png'} /></Grid>
          <Grid item lg={5} sm={5} xl={5} xs={5} ></Grid>
        </Grid>
        }
        {icon !== "Instagram" &&
          <Grid container direction="row" justify="center" spacing={3} style={{paddingBottom: "12px"}}>
            <Grid item lg={1} sm={1} xl={1} xs={1} style={{paddingLeft: "22px", paddingRight: "22px"}}>{showEmote('like') && <div><div>{Math.round(41.4 * modNum() * 10) / 10}k</div><img alt={"like"} src={'/static/images/facebook/icons/like.png'} /></div>}</Grid>
            <Grid item lg={1} sm={1} xl={1} xs={1} style={{paddingLeft: "22px", paddingRight: "22px"}}>{showEmote('love') && <div><div>{Math.round(11.3 * modNum() * 10) / 10}k</div><img alt={"love"} src={'/static/images/facebook/icons/love.png'} /></div>}</Grid>
            <Grid item lg={1} sm={1} xl={1} xs={1} style={{paddingLeft: "22px", paddingRight: "22px"}}>{showEmote('care') && <div><div>{Math.round(2.1 * modNum() * 10) / 10}k</div><img alt={"care"} src={'/static/images/facebook/icons/care.png'} /></div>}</Grid>
            <Grid item lg={1} sm={1} xl={1} xs={1} style={{paddingLeft: "22px", paddingRight: "22px"}}>{showEmote('laugh') && <div><div>{Math.round(4.5 * modNum() * 10) / 10}k</div><img alt={"haha"} src={'/static/images/facebook/icons/happy.png'} /></div>}</Grid>
            <Grid item lg={1} sm={1} xl={1} xs={1} style={{paddingLeft: "22px", paddingRight: "22px"}}>{showEmote('wow') && <div><div>{Math.round(904 * modNum())}</div><img alt={"wow"} src={'/static/images/facebook/icons/wow.png'} /></div>}</Grid>
            <Grid item lg={1} sm={1} xl={1} xs={1} style={{paddingLeft: "22px", paddingRight: "22px"}}>{showEmote('sad') && <div><div>{Math.round(7.2 * modNum() * 10) / 10}k</div><img alt={"sad"} src={'/static/images/facebook/icons/sad.png'} /></div>}</Grid>
            <Grid item lg={1} sm={1} xl={1} xs={1} style={{paddingLeft: "22px", paddingRight: "22px"}}>{showEmote('angry') && <div><div>{Math.round(33.5 * modNum() * 10) / 10}k</div><img alt={"mad"} src={'/static/images/facebook/icons/anger.png'} /></div>}</Grid>
            <Grid item lg={1} sm={1} xl={1} xs={1}></Grid>
          </Grid>
        }

        <hr style={{color: "grey", backgroundColor: "grey"}} />

        {icon === "Instagram" &&
        <ReactWordcloud words={words2} options={options} style={{height: "150px"}}/>
        }
        {icon !== "Instagram" &&
        <ReactWordcloud words={words} options={options} style={{height: "150px"}}/>
        }

      </CardContent>
      </a>
    </Card>
    </Grid>
  );

  return showCard() ? card : null;
};

Post.propTypes = {
  className: PropTypes.string
};

export default Post;
