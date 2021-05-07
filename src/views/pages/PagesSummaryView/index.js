import React, {useState} from 'react';
import {
  Container,
  Grid,
  makeStyles
} from '@material-ui/core';
import Page from 'src/components/Page';
import Engagement from 'src/views/posts/PostsSummaryView/Engagement';
import Pages from './Pages';
import PageCard from './Page';
import PageFilters from 'src/views/posts/PostsSummaryView/Filters';
import Followers from 'src/views/posts/PostsSummaryView/Followers';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    minHeight: '100%',
    paddingBottom: theme.spacing(3),
    paddingTop: theme.spacing(3)
  }
}));

const PagesSummary = () => {

  const classes = useStyles();

  const pagesState = {
    platform: 'all',
    reaction: 'all',
    gender: 'all',
    age: 'all',
    time: 'month'
  };

  const followers = {};
  const [followersState, setfollowersState] = useState(followers);

  const getFollowers = (platform) => {
    let tempfollowers = [];
    let tempDates = [];
    let min = 0;
    let baseUrl = 'http://localhost/CombLaravel';
    if(process.env.NODE_ENV === 'production'){
      baseUrl = 'https://api.combanalytics.com';
    }
    fetch(
      baseUrl + '/public/followerCounts',
      {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Authorization': 'Bearer ' + localStorage.getItem('token'),
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          "userId": localStorage.getItem('user_id'),
          "site": platform
        })
      }
    )
      .then(res => res.json())
      .then(json => {
        if (json.data) {
          console.log(json.data);
          for(let i = 0; i < json.data.length; i++){
            tempfollowers.push(parseInt(json.data[i].follower_count));
            tempDates.push(json.data[i].date);
          }
          min = Math.min(...tempfollowers);
        } else {
          console.log("fail");
        }
        setfollowersState({'followers': tempfollowers, 'dates': tempDates, 'min': min});
      });
  }

  const [pageState, setPageState] = useState(pagesState);
  const pageCallbackFunction = (pageStateKey, pageStateVal) => {
    setPageState({...pageState, [pageStateKey]: pageStateVal})
    if(pageStateKey === 'platform' && pageStateVal !== 'all'){
      getFollowers(pageStateVal);
    }
  };

  const apiPages = [];
  const [apiPagesState, setApiPagesState] = useState(apiPages);

  const pgFetched = false;
  const [pgFetchedState, setPgFetchedState] = useState(pgFetched);

  console.log(pgFetchedState);

  if(pgFetchedState === false) {
    let baseUrl = 'http://localhost/CombLaravel';
    if(process.env.NODE_ENV === 'production'){
      baseUrl = 'https://api.combanalytics.com';
    }
    fetch(
      baseUrl + '/public/facebookPages',
      {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Authorization': 'Bearer ' + localStorage.getItem('token'),
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({"userId": localStorage.getItem('user_id')})
      }
    )
    .then(res => res.json())
    .then(json => {
      if (json) {
        let items = [];
        for (let i = 0; i < json.length; i++) {
          let obj = json[i];
          let words = [];
          let word_count_json = JSON.parse(obj.word_count_json);

          if(word_count_json !== null) {
            for (let x in word_count_json) {
              words.push({text: x, value: word_count_json[x]});
            }
          }

          localStorage.setItem('page_cloud_' + obj.site_post_id, JSON.stringify(words));

          items.push(<PageCard
            name={obj.name}
            icon={obj.site}
            image={obj.img_url}
            words={words}
            state={pageState}
          />);
        }
        setApiPagesState(items);
      } else {
        console.log("fail");
      }
      setPgFetchedState(true);
    });
  }

  return (
    <Page
      className={classes.root}
      title="Pages"
    >
      <Container maxWidth={false}>
        <Grid
          container
          spacing={3}
          alignItems="flex-start"
        >
          <Grid
            item
            lg={12}
            md={12}
            xl={12}
            xs={12}
          >
            <PageFilters stateFilter={pageCallbackFunction} />
          </Grid>
          <Grid
            container
            xl={6}
            style={{padding: '12px'}}
            padding={12}
            spacing={3}
            direction="row"
            justify="flex-start"
            alignItems="flex-start"
          >
            <Grid
              item
              lg={12}
              md={12}
              xl={12}
              xs={12}
            >
              <Pages />
            </Grid>
            {apiPagesState}
          </Grid>
          <Grid
            item
            lg={6}
            md={12}
            xl={6}
            xs={12}
          >
            <Engagement state={pageState} />
            <br />
            <Followers state={pageState} followers={followersState} />
          </Grid>
        </Grid>
      </Container>
    </Page>
  );
};

export default PagesSummary;
