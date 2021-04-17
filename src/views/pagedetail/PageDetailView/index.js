import React, { useState } from 'react';
import { Link, useLocation, BrowserRouter as Router } from "react-router-dom";
import queryString from 'query-string'
import {
  Card, CardHeader,
  Container, Divider,
  Grid,
  makeStyles
} from '@material-ui/core';
import Page from 'src/components/Page';
import Results from './Results';
import Filters from "../../posts/PostsSummaryView/Filters";
import ReactWordcloud from "react-wordcloud";

const options = {
  rotations: 0,
  fontSizes: [24,84]
};

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    minHeight: '100%',
    paddingBottom: theme.spacing(3),
    paddingTop: theme.spacing(3)
  }
}));

let fetched = false;

const CustomerListView = () => {
  const classes = useStyles();
  const data = [];
  const [customers, setCustomers] = useState(data);
  const [word, setWord] = useState(data);
  const postId = queryString.parse(useLocation().search).id;
  const words = JSON.parse(localStorage.getItem('post_cloud_' + postId));

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

  if(fetched === false) {
    fetch(
      'http://localhost/CombLaravel/public/facebookPostComments',
      {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Authorization': 'Bearer ' + localStorage.getItem('token'),
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({"postId": postId})
      }
    )
      .then(res => res.json())
      .then(json => {
        if (json) {
          console.log(localStorage.getItem('token'));
          console.log(json);
          setCustomers(json);
          fetched = true;
        } else {
          console.log("fail");
        }
      });
  }

  const search = (word) => {
    fetch(
      'http://localhost/CombLaravel/public/facebookPostComments',
      {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Authorization': 'Bearer ' + localStorage.getItem('token'),
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({"postId": postId, "word": word})
      }
    )
      .then(res => res.json())
      .then(json => {
        if (json) {
          console.log(localStorage.getItem('token'));
          console.log(json);
          setCustomers(json);
          setWord(word);
        } else {
          console.log("fail");
        }
      });
  }

  const callback = {
    onWordClick: word => search(word.text)
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
              <ReactWordcloud callbacks={callback} words={words} options={options} />
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
              <Results customers={customers} word={word} />
            </Card>
          </Grid>
        </Grid>
      </Container>
    </Page>
  );
};

export default CustomerListView;
