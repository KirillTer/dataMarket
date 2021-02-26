import React from 'react';
import { Link as RouterLink } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import { withStyles } from '@material-ui/core/styles';
import Link from '@material-ui/core/Link';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import SendIcon from '@material-ui/icons/Send';

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
  },
  paper: {
    marginRight: theme.spacing(2),
  },
}));

const StyledMenu = withStyles({
  paper: {
    border: '1px solid #d3d4d5',
  },
})((props) => (
  <Menu
    elevation={0}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'center',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'center',
    }}
    {...props}
  />
));

const StyledMenuItem = withStyles((theme) => ({
  root: {
    '&:focus': {
      backgroundColor: theme.palette.primary.main,
      '& .MuiListItemIcon-root, & .MuiListItemText-primary': {
        color: theme.palette.common.white,
      },
    },
  },
}))(MenuItem);

const SubHeaderView = () => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

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
        <Button aria-controls="simple-menu" className={classes.bottomItem} onClick={handleClick}>
          Domains
        </Button>
        <Button aria-controls="simple-menu" className={classes.bottomItem} onClick={handleClick}>
          Brands
        </Button>
        <Button aria-controls="simple-menu" className={classes.bottomItem} onClick={handleClick}>
          Regions
        </Button>
        <Button aria-controls="simple-menu" className={classes.bottomItem} onClick={handleClick}>
          Programs
        </Button>
        <StyledMenu
          id="customized-menu"
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          <StyledMenuItem>
            <ListItemText primary="Sent mail" />
          </StyledMenuItem>
          <StyledMenuItem>
            <ListItemText primary="Drafts" />
          </StyledMenuItem>
          <StyledMenuItem>
            <ListItemText primary="Inbox" />
          </StyledMenuItem>
        </StyledMenu>
        {/* <div><Link component={RouterLink} to="/main" className={classes.bottomItem}>
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
        </Link></div> */}
      </div>
    </div>
  )
}

export default SubHeaderView