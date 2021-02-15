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

        {icon === "Instagram" &&
        <Typography variant="subtitle2">
          Jade Roper Tolbert
          Motherhood | Creating my own path | Emmy & Brooks & Reed | 💍 @tanner.tolbert | 🎙 @mommiestellall | 📩 paul@cegtalent.com
        </Typography>
        }
        {icon !== "Instagram" &&
        <Typography variant="subtitle2">
          @jadeelizabethroper
          Official FB page of Jade Elizabeth Roper
        </Typography>
        }


        <br />

        {icon === "Instagram" &&
        <Grid container direction="row" justify="center" spacing={3} style={{paddingBottom: "12px"}}>
          <Grid item lg={5} sm={5} xl={5} xs={5} ></Grid>
          <Grid item lg={2} sm={2} xl={2} xs={2} ><div>1.5m</div><img alt={"love"} src={'/static/images/facebook/icons/love.png'} /></Grid>
          <Grid item lg={5} sm={5} xl={5} xs={5} ></Grid>
        </Grid>
        }
        {icon !== "Instagram" &&
          <Grid container direction="row" justify="center" spacing={3} style={{paddingBottom: "12px"}}>
            <Grid item lg={5} sm={5} xl={5} xs={5} ></Grid>
            <Grid item lg={2} sm={2} xl={2} xs={2} ><div>244.1k</div><img alt={"like"} src={'/static/images/facebook/icons/like.png'} /></Grid>
            <Grid item lg={5} sm={5} xl={5} xs={5} ></Grid>
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
