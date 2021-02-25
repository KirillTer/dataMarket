import React from 'react';
// import { Link as RouterLink } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
// import Tabs from '@material-ui/core/Tabs';
// import Tab from '@material-ui/core/Tab';

import ExtendedNavigationImage from '../../../assets/ExtendedNavigation.png';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    height: '10rem',
    margin: '0 0 0 5rem',
    backgroundImage: `url(${ExtendedNavigationImage})`,
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat'
  },
}));


const NavigationPanelView = (props) => {
  const classes = useStyles();
  // const [value, setValue] = React.useState(0);

  // const handleChange = (event, newValue) => {
  //   setValue(newValue);
  // };

  return(
    <div className={classes.root}>
      {/* <Tabs
        value={value}
        indicatorColor="primary"
        textColor="primary"
        onChange={handleChange}
      >
        {props.tabs && props.tabs.map(item => <Tab label={item}  className={classes.label}/>)}
      </Tabs> */}
    </div>
  )
}

export default NavigationPanelView