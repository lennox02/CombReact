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
