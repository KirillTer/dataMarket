import React from 'react';
// import { Link as RouterLink } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    height: '2rem',
    margin: '4rem 0 0 5rem'
  },
}));


const NavigationPanelView = (props) => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return(
    <div className={classes.root}>
      <Tabs
        value={value}
        indicatorColor="primary"
        textColor="primary"
        onChange={handleChange}
      >
        {props.tabs && props.tabs.map(item => <Tab label={item} key={item} className={classes.label}/>)}
      </Tabs>
    </div>
  )
}

export default NavigationPanelView