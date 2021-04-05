import React, {useState} from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import moment from 'moment';
import {
  Avatar,
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Divider,
  Typography,
  makeStyles, Container
} from '@material-ui/core';
import FacebookLogin from "react-facebook-login";
import {useNavigate} from "react-router-dom";

const user = {
  avatar: localStorage.getItem('user_img'),
  city: 'Los Angeles',
  country: 'USA',
  jobTitle: 'Model',
  name: localStorage.getItem('user_name'),
  timezone: 'GTM-7'
};

const useStyles = makeStyles(() => ({
  root: {},
  avatar: {
    height: 100,
    width: 100
  }
}));

const Profile = ({ className, ...rest }) => {
  const classes = useStyles();
  const navigate = useNavigate();

  const profileFetched = false;
  const [profileFetchedState, setProfileFetchedState] = useState(profileFetched);


  const responseFacebook = (response) => {
    fetch(
      'https://api.combanalytics.com/public/facebook',
      {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Authorization': 'Bearer ' + localStorage.getItem('token'),
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({fbToken: response.accessToken, id: response.id, userId: localStorage.getItem('user_id')})
      }
    ).then(navigate('/app/posts', { replace: true }));
    console.log(response);
    console.log({fbToken: response.accessToken, id: response.id, user_id: localStorage.getItem('user_id')});
  }

  return (
    <Card
      className={clsx(classes.root, className)}
      {...rest}
    >
      <CardContent>
        <Box
          alignItems="center"
          display="flex"
          flexDirection="column"
        >
          <Avatar
            className={classes.avatar}
            src={user.avatar}
          />
          <Typography
            color="textPrimary"
            gutterBottom
            variant="h3"
          >
            {user.name}
          </Typography>
          <Typography
            color="textSecondary"
            variant="body1"
          >
            {`${user.city} ${user.country}`}
          </Typography>
          <Typography
            className={classes.dateText}
            color="textSecondary"
            variant="body1"
          >
            {`${moment().format('hh:mm A')} ${user.timezone}`}
          </Typography>
        </Box>
      </CardContent>
      <Divider />
      <CardActions>
        <Button
          color="primary"
          fullWidth
          variant="text"
        >
          Upload picture
        </Button>
      </CardActions>
      <Divider />
      <FacebookLogin
        appId="704761290204404"
        autoLoad={false}
        fields="name,email,picture"
        textButton="Connect Facebook"
        scope="public_profile,email,pages_read_user_content,pages_show_list,pages_read_engagement,instagram_basic"
        callback={responseFacebook}
      />
    </Card>
  );
};

Profile.propTypes = {
  className: PropTypes.string
};

export default Profile;
