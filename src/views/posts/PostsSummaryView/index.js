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
            <Post
              icon={"Facebook"}
              image={"/static/images/facebook/post/post_1.jpg"}
              date={dates[0]}
              state={postState}
            />
            <Post
              icon={"Instagram"}
              image={"/static/images/facebook/post/post_2.jpg"}
              date={dates[1]}
              state={postState}
            />
            <Post
              icon={"Facebook"}
              image={"/static/images/facebook/post/post_3.jpg"}
              date={dates[2]}
              state={postState}
            />
            <Post
              icon={"Instagram"}
              image={"/static/images/facebook/post/post_4.jpg"}
              date={dates[3]}
              state={postState}
            />
            <Post
              icon={"Facebook"}
              image={"/static/images/facebook/post/post_5.jpg"}
              date={dates[4]}
              state={postState}
            />
            <Post
              icon={"Instagram"}
              image={"/static/images/facebook/post/post_6.png"}
              date={dates[5]}
              state={postState}
            />
            <Post
              icon={"Facebook"}
              image={"/static/images/facebook/post/post_7.jpg"}
              date={dates[6]}
              state={postState}
            />
            <Post
              icon={"Instagram"}
              image={"/static/images/facebook/post/post_8.jpg"}
              date={dates[7]}
              state={postState}
            />
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
