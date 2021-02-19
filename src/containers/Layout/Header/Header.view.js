import React from 'react';
import { Link as RouterLink } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    height: '4rem',
    backgroundColor: 'grey'
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  white: {
    color: 'white',
  },
}));


const HeaderView = () => {
  const classes = useStyles();

  return(
    <div className={classes.root}>
      <Toolbar>
        <Typography variant="h6" noWrap className={classes.title}>
          <Link component={RouterLink} to="/main" className={classes.white}>
            Header
          </Link>
        </Typography>
      </Toolbar>
    </div>
  )
}

export default HeaderView