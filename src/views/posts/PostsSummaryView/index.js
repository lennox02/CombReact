import React, {useState} from 'react';
import {
  Container,
  Grid,
  makeStyles
} from '@material-ui/core';
import Page from 'src/components/Page';
import Sales from './Sales';
import Posts from './Posts';
import Post from './Post';
import Filters from './Filters';
import Followers from './Followers';
import PageCard from "../../pages/PagesSummaryView/Page";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    minHeight: '100%',
    paddingBottom: theme.spacing(3),
    paddingTop: theme.spacing(3)
  }
}));

const dateCalc = (days) => {
  let d = new Date();
  return d.setDate(d.getDate() - days);
};

const PostsSummary = () => {

  const classes = useStyles();

  const postPageState = {
    platform: 'all',
    reaction: 'all',
    gender: 'all',
    age: 'all',
    time: 'month'
  };

  const [postState, setPostState] = useState(postPageState);

  const callbackFunction = (stateKey, stateVal) => {
    setPostState({...postState, [stateKey]: stateVal})
  };

  const dates = [
    dateCalc(1),
    dateCalc(5),
    dateCalc(8),
    dateCalc(12),
    dateCalc(15),
    dateCalc(19),
    dateCalc(22),
    dateCalc(26)
  ];

  const apiPosts = [];
  const [apiPostsState, setApiPostsState] = useState(apiPosts);

  const pgFetched = false;
  const [pgFetchedState, setPgFetchedState] = useState(pgFetched);

  console.log(pgFetchedState);

  if(pgFetchedState === false) {
    fetch(
      'https://api.combanalytics.com/public/facebookPosts',
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
            console.log(obj);

            localStorage.setItem('post_cloud_' + obj.site_post_id, JSON.stringify(words));

            items.push(<Post
              key={i}
              id={obj.site_post_id}
              icon={obj.site}
              image={obj.img_url}
              date={obj.site_created_at}
              message={obj.message}
              words={words}
              state={postState}
            />);

          }
          setApiPostsState(items);
        } else {
          console.log("fail");
        }
        setPgFetchedState(true);
      });
  }

  return (
    <Page
      className={classes.root}
      title="Posts"
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
            <Filters stateFilter={callbackFunction} />
          </Grid>
          <Grid
            container
            lg={6}
            md={12}
            xl={6}
            xs={12}
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
              <Posts />
            </Grid>
            {apiPostsState}
          </Grid>
          <Grid
            item
            lg={6}
            md={12}
            xl={6}
            xs={12}
          >
            <Sales state={postState} />
            <br />
            <Followers state={postState} />
          </Grid>
        </Grid>
      </Container>
    </Page>
  );
};

export default PostsSummary;
