import React from 'react';
import { Link as RouterLink } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import Link from '@material-ui/core/Link';

import MainImage from '../../../assets/Main.png';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    height: '30rem',
    width: '100%',
    backgroundImage: `url(${MainImage})`,
    backgroundSize: 'contain'
  },
}));


const HeaderView = () => {
  const classes = useStyles();

  return(
    <Link component={RouterLink} to="/first">
          <div className={classes.root}></div>
    </Link>
  )
}

export default HeaderView