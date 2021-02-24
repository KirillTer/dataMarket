import React from 'react';
// import { useHistory } from "react-router-dom";
import { history } from "../../../store/configureStore";
import { makeStyles } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';
import Autocomplete from '@material-ui/lab/Autocomplete';
import TextField from '@material-ui/core/TextField';

import SearchImage from '../../../assets/Search.png';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    height: '34rem',
    backgroundImage: `url(${SearchImage})`,
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat'
  },
  search: {
    height: '4rem',
    width: '43rem',
    top: '15.6rem',
    left: '30rem',
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: 'white',
    marginLeft: 0,
    display: 'flex',
  },
  textField: {
    height: '4rem',
  },
}));

const top100Films = [
  { title: 'The Shawshank Redemption', year: 1994 },
  { title: 'The Godfather', year: 1972 },
  { title: 'The Godfather: Part II', year: 1974 },
  { title: 'The Dark Knight', year: 2008 },
]

const SearchPanelView = () => {
  const classes = useStyles();

  const handleChange = () => {
    history.push('/first')
  }

  return(
    <div className={classes.root}>
        <Autocomplete
        className={classes.search}
        options={top100Films.map((option) => option.title)}
        renderInput={(params) => (
          <TextField className={classes.textField} {...params} label="Search Marketplace…" />
        )}
        onChange={handleChange}
      />
    </div>
  )
}

export default SearchPanelView
