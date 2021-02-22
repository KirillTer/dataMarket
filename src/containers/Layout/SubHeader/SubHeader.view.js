import React from 'react';
import { Link as RouterLink } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import Link from '@material-ui/core/Link';

// import SubHeaderImage from '../../../assets/SubHeader.png';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    height: '6rem',
    backgroundColor: '#FFFFFF',
    // backgroundImage: `url(${SubHeaderImage})`,
    // backgroundSize: 'contain'
  },
  topLine: {
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
    height: '2rem',
    width: '100%'
  },
  bottomLine: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '4rem',
  },
  topItem: {
    margin: '1rem',
    color: '#616161'
  },
  bottomItem: {
    margin: '1rem 2rem',
    color: '#4D4D4D',
    fontSize: '1.2rem',
    fontWeight: 'bold',
    textTransform: 'uppercase'
  }
}));


const SubHeaderView = () => {
  const classes = useStyles();

  return(
    <div className={classes.root}>
      <div className={classes.topLine}>
        <div><Link component={RouterLink} to="/main" className={classes.topItem}>
          My Requests
        </Link></div>
        <div><Link component={RouterLink} to="/main" className={classes.topItem}>
          Approvals
        </Link></div>
        <div><Link component={RouterLink} to="/main" className={classes.topItem}>
          Resources
        </Link></div>
        <div><Link component={RouterLink} to="/main" className={classes.topItem}>
          FAQs
        </Link></div>
      </div>
      <div className={classes.bottomLine}>
        <div><Link component={RouterLink} to="/main" className={classes.bottomItem}>
          Domains
        </Link></div>
        <div><Link component={RouterLink} to="/main" className={classes.bottomItem}>
          Brands
        </Link></div>
        <div><Link component={RouterLink} to="/main" className={classes.bottomItem}>
          Regions
        </Link></div>
        <div><Link component={RouterLink} to="/main" className={classes.bottomItem}>
          Programs
        </Link></div>
      </div>
    </div>
  )
}

export default SubHeaderView