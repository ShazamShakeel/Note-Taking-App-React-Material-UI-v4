import React from "react";
import {
  AppBar,
  Avatar,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  makeStyles,
  Toolbar,
  Typography,
} from "@material-ui/core";
import Drawer from "@material-ui/core/Drawer";
import { AddCircleOutlineOutlined, Height, SubjectOutlined } from "@material-ui/icons";
import { useHistory, useLocation } from "react-router";
import format from "date-fns/format";
const drawerWidth = 240;
const useStyles = makeStyles((theme)=>{
 return{
    page: {
      background: "#f9f9f9",
      width: "100%",
      padding: theme.spacing(2),
    },
    root: {
      display: "flex",
    },
    drawer: {
      width: drawerWidth,
    },
    drawerPaper: {
      width: drawerWidth,
    },
    marginTB: {
      marginTop: theme.spacing(2),
      marginBottom: theme.spacing(2),
    },
    active: {
      background: '#f9f9f9'
    },
    title: {
      textAlign: 'center',
      padding: theme.spacing(3)
    
    },
    appBar: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
      color: 'black',
      backgroundColor: 'white'
    },
    toolBar: theme.mixins.toolbar,
    wellcomeTitle: {
      flexGrow: 1
    },
    avatar: {
      marginLeft: theme.spacing(4),
    },
  }
});

export default function Layout({ children }) {
  const classes = useStyles();
  const history = useHistory();
  const location = useLocation();
  const menuItems = [
    {
      text: "Create Note",
      path: "/create",
      icon: <AddCircleOutlineOutlined color="primary" />,
    },
    {
      text: "My Notes",
      path: "/",
      icon: <SubjectOutlined color="primary" />,
    },
  ];
  return (
    <div className={classes.root}>

      <AppBar
      position="fixed"
      elevation={0}
      className={classes.appBar}
      >
        <Toolbar>
          <Typography className={classes.wellcomeTitle}>
            Hi there, Today is {format(new Date(), 'do MMMM Y')} !
          </Typography>
          <Typography>
            Masoom
          </Typography>
          <Avatar src="/shazam.jpg" className={classes.avatar}/>
        </Toolbar>
      </AppBar>

      <Drawer
        variant="permanent"
        anchor="left"
        className={classes.drawer}
        classes={{ paper: classes.drawerPaper }}
      >
        <div>
          <Typography variant="h5" className={classes.title}>
            Masoom's Notes
          </Typography>
        </div>
        <List>
          {menuItems.map((item) => (
            <ListItem
              key={item.text}
              button
              onClick={() => history.push(item.path)}
              className={`${classes.marginTB} ${location.pathname === item.path ? classes.active : null}`}
            >
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText>{item.text}</ListItemText>
            </ListItem>
          ))}
        </List>
      </Drawer>

      {/* main content */}
      <div className={classes.page}>
        <div className={classes.toolBar}></div>
        {children}
        </div>
    </div>
  );
}
