import React, { useEffect } from "react";
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

import MainContainer from './MainContainer/MainContainer.connect'
import SidePanel from './SidePanel/SidePanel.connect'
// import CardItem from '../../components/CardItem'

const useStyles = makeStyles({
  mainStyle: {
    display: 'flex',
  },
});

const MainView = ({ loadMain, mainData }) => {
  const classes = useStyles();

  useEffect(() => {
    loadMain()
  }, [loadMain])

  return (
    <Container maxWidth="xl" className={classes.mainStyle}>
      {/* {mainData && mainData.map(item => {
        return <div>Main</div>
      })} */}
      <MainContainer />
      <SidePanel />
    </Container>
  );
};

export default MainView;
