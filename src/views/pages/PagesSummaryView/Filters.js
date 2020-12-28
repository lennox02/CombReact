import React, {useState} from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import {
  Card,
  colors,
  makeStyles, TextField, Grid
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
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


const platform = [
  {
    value: 'all',
    label: 'All'
  },
  {
    value: 'facebook',
    label: 'Facebook'
  },
  {
    value: 'instagram',
    label: 'Instagram'
  }
];

const reaction = [
  {
    value: 'all',
    label: 'All'
  },
  {
    value: 'like',
    label: 'Like'
  },
  {
    value: 'love',
    label: 'Love'
  },
  {
    value: 'care',
    label: 'Care'
  },
  {
    value: 'laugh',
    label: 'Laugh'
  },
  {
    value: 'wow',
    label: 'Wow'
  },
  {
    value: 'sad',
    label: 'Sad'
  },
  {
    value: 'angry',
    label: 'Angry'
  }
];

const gender = [
  {
    value: 'all',
    label: 'All'
  },
  {
    value: 'male',
    label: 'Male'
  },
  {
    value: 'female',
    label: 'Female'
  }
];

const age = [
  {
    value: '0',
    label: 'All'
  },
  {
    value: '18',
    label: '18-29'
  },
  {
    value: '30',
    label: '30-39'
  },
  {
    value: '40',
    label: '40-59'
  },
  {
    value: '60',
    label: '60+'
  }
];

const time = [
  {
    value: '0',
    label: 'All Time'
  },
  {
    value: 'year',
    label: 'Last Year'
  },
  {
    value: 'month',
    label: 'Last 30 days'
  },
  {
    value: 'week',
    label: 'Last 7 days'
  }
];



const PageFilters = ({ className, pageStateFilter, ...rest }) => {
  const classes = useStyles();

  const [values, setValues] = useState({
    platform: 'all',
    time: 'month'
  });

  const handleChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value
    });
    console.log(event.target.value);
    pageStateFilter(event.target.name, event.target.value);
  };

  return (
    <Card
      className={clsx(classes.root, className)}
      style={{padding: "12px", backgroundColor: "#F4F6F8", border: "none", boxShadow: "none"}}
      {...rest}
    >

      <form
        autoComplete="off"
        noValidate
        className={clsx(classes.root, className)}
        {...rest}
      >
        <Grid container alignItems="center" spacing={3}>
          <Grid item>
            <TextField
              fullWidth
              label="PLATFORMS"
              name="platform"
              onChange={handleChange}
              required
              select
              SelectProps={{ native: true }}
              value={values.platform}
              variant="outlined"
            >
              {platform.map((option) => (
                <option
                  key={option.value}
                  value={option.value}
                >
                  {option.label}
                </option>
              ))}
            </TextField>
          </Grid>
          <Grid item>
            <TextField
              fullWidth
              label="REACTIONS"
              name="reaction"
              onChange={handleChange}
              required
              select
              SelectProps={{ native: true }}
              value={values.reactions}
              variant="outlined"
            >
              {reaction.map((option) => (
                <option
                  key={option.value}
                  value={option.value}
                >
                  {option.label}
                </option>
              ))}
            </TextField>
          </Grid>
          <Grid item>
            <TextField
              fullWidth
              label="GENDER"
              name="gender"
              onChange={handleChange}
              required
              select
              SelectProps={{ native: true }}
              value={values.gender}
              variant="outlined"
            >
              {gender.map((option) => (
                <option
                  key={option.value}
                  value={option.value}
                >
                  {option.label}
                </option>
              ))}
            </TextField>
          </Grid>
          <Grid item>
            <TextField
              fullWidth
              label="AGE"
              name="age"
              onChange={handleChange}
              required
              select
              SelectProps={{ native: true }}
              value={values.ages}
              variant="outlined"
            >
              {age.map((option) => (
                <option
                  key={option.value}
                  value={option.value}
                >
                  {option.label}
                </option>
              ))}
            </TextField>
          </Grid>
          <Grid item>
            <TextField
              fullWidth
              label="TIME PERIOD"
              name="time"
              onChange={handleChange}
              required
              select
              SelectProps={{ native: true }}
              value={values.time}
              variant="outlined"
            >
              {time.map((option) => (
                <option
                  key={option.value}
                  value={option.value}
                >
                  {option.label}
                </option>
              ))}
            </TextField>
          </Grid>
        </Grid>
      </form>
    </Card>
  );
};

PageFilters.propTypes = {
  className: PropTypes.string
};

export default PageFilters;
