import React, { useState } from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Divider,
  Grid,
  TextField,
  makeStyles
} from '@material-ui/core';
import {NotificationContainer, NotificationManager} from 'react-notifications';

const states = [
  {
    value: 'alabama',
    label: 'Alabama'
  },
  {
    value: 'new-york',
    label: 'New York'
  },
  {
    value: 'california',
    label: 'California'
  }
];

const useStyles = makeStyles(() => ({
  root: {}
}));

const ProfileDetails = ({ className, ...rest }) => {
  const classes = useStyles();
  const [values, setValues] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: ''
  });

  const profileFetched = false;
  const [profileFetchedState, setProfileFetchedState] = useState(profileFetched);

  if(profileFetchedState === false) {
    fetch(
      'http://localhost/CombLaravel/public/user',
      {
        method: 'GET',
        headers: {
          'Accept': 'application/json',
          'Authorization': 'Bearer ' + localStorage.getItem('token'),
          'Content-Type': 'application/json'
        }
      }
    )
      .then(res => res.json())
      .then(json => {
        let names = json.name.split(" ");
        let obj = {
          firstName: names[0],
          lastName: names[1],
          email: json.email,
          phone: json.phone
        }
        setValues(obj);
        setProfileFetchedState(true);
      });
  }

  const handleChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value
    });
  };


  const submitProfile = () => {
    fetch(
      'http://localhost/CombLaravel/public/user',
      {
        method: 'PUT',
        headers: {
          'Accept': 'application/json',
          'Authorization': 'Bearer ' + localStorage.getItem('token'),
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          "name": values.firstName + " " + values.lastName,
          "email": values.email,
          "phone": values.phone
        })
      }
    )
      .then(res => res.json())
      .then(json => {
        if(json) {
          let names = json.name.split(" ");
          let obj = {
            firstName: names[0],
            lastName: names[1],
            email: json.email,
            phone: json.phone
          }
          setValues(obj);
          NotificationManager.success('', 'Updated!', 1000);
        } else {
          NotificationManager.error('', 'Error!');
        }
      });
  };

  return (
    <form
      autoComplete="off"
      noValidate
      className={clsx(classes.root, className)}
      {...rest}
    >
      <Card>
        <CardHeader
          subheader="The information can be edited"
          title="Profile"
        />
        <Divider />
        <CardContent>
          <Grid
            container
            spacing={3}
          >
            <Grid
              item
              md={6}
              xs={12}
            >
              <TextField
                fullWidth
                helperText="Please specify the first name"
                label="First name"
                name="firstName"
                onChange={handleChange}
                required
                value={values.firstName}
                variant="outlined"
              />
            </Grid>
            <Grid
              item
              md={6}
              xs={12}
            >
              <TextField
                fullWidth
                label="Last name"
                name="lastName"
                onChange={handleChange}
                required
                value={values.lastName}
                variant="outlined"
              />
            </Grid>
            <Grid
              item
              md={6}
              xs={12}
            >
              <TextField
                fullWidth
                label="Email Address"
                name="email"
                onChange={handleChange}
                required
                value={values.email}
                variant="outlined"
              />
            </Grid>
            <Grid
              item
              md={6}
              xs={12}
            >
              <TextField
                fullWidth
                label="Phone Number"
                name="phone"
                onChange={handleChange}
                type="number"
                value={values.phone}
                variant="outlined"
              />
            </Grid>
            <Grid
              item
              md={6}
              xs={12}
            >
            </Grid>
            <Grid
              item
              md={6}
              xs={12}
            >
            </Grid>
          </Grid>
        </CardContent>
        <Divider />
        <Box
          display="flex"
          justifyContent="flex-end"
          p={2}
        >
          <Button
            color="primary"
            variant="contained"
            onClick={submitProfile}
          >
            Save details
          </Button>
        </Box>
      </Card>
      <NotificationContainer/>
    </form>
  );
};

ProfileDetails.propTypes = {
  className: PropTypes.string
};

export default ProfileDetails;
