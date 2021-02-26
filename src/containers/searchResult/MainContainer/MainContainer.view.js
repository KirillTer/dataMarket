import React from 'react';
import { Link as RouterLink } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import Link from '@material-ui/core/Link';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
}));


const HeaderView = () => {
  const classes = useStyles();

  return(
    <Link component={RouterLink} to="/main">
      <div className={classes.root}>
      </div>
    </Link>
  )
}

export default HeaderView