import React, { useState } from 'react';
import {
  Card, CardHeader,
  Container, Divider,
  Grid,
  makeStyles
} from '@material-ui/core';
import Page from 'src/components/Page';
import Results from './Results';
import data from './data';
import Filters from "../../posts/PostsSummaryView/Filters";
import ReactWordcloud from "react-wordcloud";

const options = {
  rotations: 0,
  fontSizes: [24,84]
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
    backgroundColor: theme.palette.background.dark,
    minHeight: '100%',
    paddingBottom: theme.spacing(3),
    paddingTop: theme.spacing(3)
  }
}));

const CustomerListView = () => {
  const classes = useStyles();
  const [customers] = useState(data);

  const pageDetailState = {
    platform: 'all',
    reaction: 'all',
    gender: 'all',
    age: 'all',
    time: 'month'
  };

  const [pageState, setPageState] = useState(pageDetailState);


  const callbackFunction = (key, val) => {
    setPageState({...pageState, [key]: val})
  }

  return (
    <Page
      className={classes.root}
      title="Posts"
    >
      <Container maxWidth={false}>
        <Grid container spacing={3}>
          <Grid
            item
            lg={12}
            md={12}
            xl={12}
            xs={12}
          >
            <Filters stateFilter={callbackFunction} />
          </Grid>
          <Grid
            item
            lg={6}
            md={12}
            xl={6}
            xs={12}
          >
            <Card>
              <CardHeader
                title="WORDCLOUD"
              />
              <Divider />
              <ReactWordcloud words={words} options={options} />
            </Card>
          </Grid>
          <Grid
            item
            lg={6}
            md={12}
            xl={6}
            xs={12}
          >
            <Card>
              <CardHeader
                title="COMMENTS"
              />
              <Divider />
              <Results customers={customers} />
            </Card>
          </Grid>
        </Grid>
      </Container>
    </Page>
  );
};

export default CustomerListView;
