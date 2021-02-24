import React from 'react';
import { Link as RouterLink } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import Link from '@material-ui/core/Link';

import LogoImage from '../../../assets/Logo.png';
import BasketImage from '../../../assets/Basket.png';
import BellImage from '../../../assets/Bell.png';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    height: '4rem',
    backgroundColor: '#373737',
  },
  logo: {
    height: '4rem',
    width: '100%',
    backgroundImage: `url(${LogoImage})`,
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat'
  },
  basket: {
    height: '4rem',
    width: '5rem',
    backgroundImage: `url(${BasketImage})`,
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat'
  },
  bell: {
    height: '4rem',
    width: '5rem',
    backgroundImage: `url(${BellImage})`,
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat'
  },
  title: {
    height: '4rem',
    width: '20rem',
    padding: 'auto 0',
    color: 'white',
    fontSize: '2rem',
    textAlign: 'center',
    verticalAlign: 'baseline'
  }
}));


const HeaderView = () => {
  const classes = useStyles();

  return(
    <div className={classes.root}>
      <Link component={RouterLink} to="/main" className={classes.logo}>
        &#8203;
      </Link>
      <Link component={RouterLink} to="/main" className={classes.bell}>
        &#8203;
      </Link>
      <Link component={RouterLink} to="/main" className={classes.basket}>
        &#8203;
      </Link>
      <div className={classes.title}><span>Data Marketplace</span></div>
    </div>
  )
}

export default HeaderView