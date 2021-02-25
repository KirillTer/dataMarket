import React, { useEffect } from "react";
import { makeStyles } from '@material-ui/core/styles';

import MainContainer from './MainContainer/MainContainer.connect'
import NavigationPanel from "./NavigationPanel/NavigationPanel.connect";

const useStyles = makeStyles({
  mainStyle: {
    display: 'flex',
    flexDirection: 'column',
  },
});

const MainView = ({ loadMain, mainData }) => {
  const classes = useStyles();

  useEffect(() => {
    loadMain()
  }, [loadMain])

  return (
    <div className={classes.mainStyle}>
      <NavigationPanel tabs={['Featured', 'Recently Published']}/>
      <MainContainer />
    </div>
  );
};

export default MainView;
