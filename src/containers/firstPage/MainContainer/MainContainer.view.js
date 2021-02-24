import React from 'react';
import { Link as RouterLink } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import Link from '@material-ui/core/Link';

import FirstPage from '../../../assets/FirstPage.png';
import FirstPagePart from '../../../assets/FirstPagePart.png';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    backgroundImage: `url(${FirstPage})`,
    backgroundSize: 'contain'
  },
  part: {
    margin: '50rem 0 0 0',
    backgroundImage: `url(${FirstPagePart})`,
    backgroundSize: 'contain'
  },
}));


const HeaderView = () => {
  const classes = useStyles();

  return(
    <Link component={RouterLink} to="/main">
      <div className={classes.root}>
      <div className={classes.part}></div>
      </div>
    </Link>
  )
}

export default HeaderView