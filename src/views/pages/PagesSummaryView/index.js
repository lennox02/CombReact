import React from 'react';
import {
  Container,
  Grid,
  makeStyles
} from '@material-ui/core';
import Page from 'src/components/Page';
import Sales from './Sales';
import Pages from './Pages';
import Post from './Post';
import Filters from './Filters';

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

  const state = {showing: true}

  let d = new Date();

  const dates = [
    d.setDate(d.getDate() - 1),
    d.setDate(d.getDate() - 5),
    d.setDate(d.getDate() - 8),
    d.setDate(d.getDate() - 12),
    d.setDate(d.getDate() - 15),
    d.setDate(d.getDate() - 19),
    d.setDate(d.getDate() - 22),
    d.setDate(d.getDate() - 26)
  ]

  return (
    <Page
      className={classes.root}
      title="Pages"
    >
      <Container maxWidth={false}>
        <Grid
          container
          spacing={3}
        >
          <Grid
            item
            lg={12}
            md={12}
            xl={12}
            xs={12}
          >
            <Filters />
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
              <Pages />
            </Grid>
            {
              state.showing ?
                <Grid
                  item
                  lg={6}
                  md={6}
                  xl={6}
                  xs={6}
                >
                  <Post icon={"Facebook"} image={"/static/images/facebook/post/post_1.jpg"} date={"12/14/20"}/>
                </Grid>
                : null
            }
            <Grid
              item
              lg={6}
              md={6}
              xl={6}
              xs={6}
            >
              <Post icon={"Instagram"} image={"/static/images/facebook/post/post_2.jpg"} date={"12/10/20"} />
            </Grid>
            <Grid
              item
              lg={6}
              md={6}
              xl={6}
              xs={6}
            >
              <Post icon={"Facebook"} image={"/static/images/facebook/post/post_3.jpg"} date={"12/07/20"} />
            </Grid>
            <Grid
              item
              lg={6}
              md={6}
              xl={6}
              xs={6}
            >
              <Post icon={"Instagram"} image={"/static/images/facebook/post/post_4.jpg"} date={"12/03/20"} />
            </Grid>
            <Grid
              item
              lg={6}
              md={6}
              xl={6}
              xs={6}
            >
              <Post icon={"Facebook"} image={"/static/images/facebook/post/post_5.jpg"} date={"11/30/20"} />
            </Grid>
            <Grid
              item
              lg={6}
              md={6}
              xl={6}
              xs={6}
            >
              <Post icon={"Instagram"} image={"/static/images/facebook/post/post_6.png"} date={"11/26/20"} />
            </Grid>
            <Grid
              item
              lg={6}
              md={6}
              xl={6}
              xs={6}
            >
              <Post icon={"Facebook"} image={"/static/images/facebook/post/post_7.jpg"} date={"11/23/20"} />
            </Grid>
            <Grid
              item
              lg={6}
              md={6}
              xl={6}
              xs={6}
            >
              <Post icon={"Instagram"} image={"/static/images/facebook/post/post_8.jpg"} date={"11/19/20"} />
            </Grid>
          </Grid>
          <Grid
            item
            lg={6}
            md={12}
            xl={6}
            xs={12}
          >
            <Sales />
          </Grid>
        </Grid>
      </Container>
    </Page>
  );
};

export default PagesSummary;
