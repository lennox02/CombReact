import React, {useState} from 'react';
import {
  Container,
  Grid,
  makeStyles
} from '@material-ui/core';
import Page from 'src/components/Page';
import Sales from 'src/views/posts/PostsSummaryView/Sales';
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

  const [pageState, setPageState] = useState(pagesState);

  const pageCallbackFunction = (pageStateKey, pageStateVal) => {
    setPageState({...pageState, [pageStateKey]: pageStateVal})
  };

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
            <PageCard
              icon={"Facebook"}
              image={"/static/images/facebook/page/jade_facebook_banner.jpg"}
              state={pageState}
            />
            <PageCard
              icon={"Instagram"}
              image={"/static/images/avatars/jade_roper_avatar.jpg"}
              state={pageState}
            />
          </Grid>
          <Grid
            item
            lg={6}
            md={12}
            xl={6}
            xs={12}
          >
            <Sales state={pageState} />
            <br />
            <Followers state={pageState} />
          </Grid>
        </Grid>
      </Container>
    </Page>
  );
};

export default PagesSummary;
