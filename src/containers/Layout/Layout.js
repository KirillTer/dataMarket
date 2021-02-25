import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import Header from "./Header/Header.connect";
import SubHeader from "./SubHeader/SubHeader.connect";

import MainView from "../main-page/Main.connect";
import FirstPageView from "../firstPage/FirstPage.connect";
import SearchResultView from "../searchResult/SearchResult.connect";

const useStyles = makeStyles(theme => ({
  root: {
    height: '100%',
  },
  headerBlock: {
    display: 'flex',
    flexDirection: 'column',
    height: '10rem'
  },
  main: {
    backgroundColor: '#EEEEEE'
  },
}));

const Layout = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.headerBlock}>
        <Header />
        <SubHeader />
      </div>
      <div className={classes.main}>
        <Switch>
          <Route exact path="/" render={() => (
              <Redirect to="/main"/>
          )}/>
          <Route exact path="/main" component={MainView} />
          <Route exact path="/first" component={FirstPageView} />
          <Route exact path="/search" component={SearchResultView} />
        </Switch>
      </div>
    </div>
  );
};

export default Layout;
