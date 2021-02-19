import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
// import ProtectedRouter from "../../components/ProtectedRoute";
import Header from "./Header/Header.connect";
import SubHeader from "./SubHeader/SubHeader.connect";
import NavigationPanel from "./NavigationPanel/NavigationPanel.connect";

import MainView from "../main-page/Main.connect";
import ItemDescription from "../item-description/ItemDescription.connect";

const useStyles = makeStyles(theme => ({
  root: {
    height: '100rem',
  },
  headerBlock: {
    display: 'flex',
    flexDirection: 'column',
    height: '12rem'
  },
  main: {
    padding: '2rem',
    height: '100%',
    backgroundColor: 'lightgrey'
  },
}));

const Layout = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.headerBlock}>
        <Header />
        <SubHeader />
        <NavigationPanel />
      </div>
      <div className={classes.main}>
        <Switch>
          <Route exact path="/" render={() => (
              <Redirect to="/main"/>
          )}/>
          <Route exact path="/main" component={MainView} />
          <Route path="/main/item" component={ItemDescription} />
        </Switch>
      </div>
    </div>
  );
};

export default Layout;
