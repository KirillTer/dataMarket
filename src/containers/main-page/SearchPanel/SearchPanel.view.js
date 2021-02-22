import React from 'react';
import { Link as RouterLink } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';

import SearchImage from '../../../assets/Search.png';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    height: '34rem',
    backgroundImage: `url(${SearchImage})`,
    backgroundSize: 'contain'
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  }
}));


const SearchPanelView = () => {
  const classes = useStyles();

  return(
    <div className={classes.root}>
      <Toolbar>
        <Typography variant="h6" noWrap className={classes.title}>
          <Link component={RouterLink} to="/main">
            {/* Search Panel */}
          </Link>
        </Typography>
      </Toolbar>
    </div>
  )
}

export default SearchPanelView