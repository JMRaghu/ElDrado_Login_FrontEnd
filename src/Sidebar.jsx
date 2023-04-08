import React from 'react';
import { makeStyles } from '@mui/styles';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import Divider from '@mui/material/Divider';
import HomeIcon from '@mui/icons-material/Home';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';

const useStyles = makeStyles((theme) => ({
    drawer: {
      width: '240px',
      flexShrink: 0,
      [theme.breakpoints.down('md')]: {
        display: 'none',
      },
    },
    drawerPaper: {
      width: '240px',
    },
    nested: {
      paddingLeft: theme.spacing(4),
    },
    toolbar: theme.mixins.toolbar, // define toolbar class using theme mixin
  }));
  

const Sidebar = ({ open, onClose, user }) => {
  const classes = useStyles();
  const [openSubMenu1, setOpenSubMenu1] = React.useState(false);
  const [openSubMenu2, setOpenSubMenu2] = React.useState(false);

  const handleSubMenu1Click = () => {
    setOpenSubMenu1(!openSubMenu1);
  };

  const handleSubMenu2Click = () => {
    setOpenSubMenu2(!openSubMenu2);
  };

  const menuItems = [
    {
      text: 'Home',
      icon: <HomeIcon />,
      link: '/',
      isProtected: false,
    },
    {
      text: 'Dashboard',
      icon: <DashboardIcon />,
      link: '/admin/dashboard',
      isProtected: true,
      allowedRoles: "Administrator"
    },
    {
      text: 'Menu Item 1',
      icon: <DashboardIcon />,
      link: '/menu-item-1',
      isProtected: true,
      allowedRoles: "Administrator",
      subMenuItems: [
        {
          text: 'Submenu Item 1',
          link: '/menu-item-1/submenu-1',
          isProtected: true,
          allowedRoles: "Administrator",
        },
        {
          text: 'Submenu Item 2',
          link: '/menu-item-1/submenu-2',
          isProtected: true,
          allowedRoles: "Administrator",
        },
      ],
    },
    {
      text: 'Menu Item 2',
      icon: <DashboardIcon />,
      link: '/menu-item-2',
      isProtected: true,
      allowedRoles: 'Report Viewer',
      subMenuItems: [
        {
          text: 'Submenu Item 1',
          link: '/menu-item-2/submenu-1',
          isProtected: true,
          allowedRoles: 'Report Viewer',
        },
        {
          text: 'Submenu Item 2',
          link: '/menu-item-2/submenu-2',
          isProtected: true,
          allowedRoles: 'Manager',
        },
      ],
    },
  ];

  return (
    <Drawer
      className={classes.drawer}
      variant="persistent"
      anchor="left"
      open={open}
      classes={{
        paper: classes.drawerPaper,
      }}
    >
      <div className={classes.toolbar} />
      <List>
        {menuItems.map((item) => (
          <div key={item.text}>
            {item.subMenuItems ? (
             
             <div>
             <ListItem button onClick={item === menuItems[2] ? handleSubMenu1Click : handleSubMenu2Click}>
               <ListItemIcon>{item.icon}</ListItemIcon>
               <ListItemText primary={item.text} />
               {item === menuItems[2] ? (
                 openSubMenu1 ? <ExpandLess /> : <ExpandMore />
               ) : (
                 openSubMenu2 ? <ExpandLess /> : <ExpandMore />
               )}
             </ListItem>
             <Collapse in={item === menuItems[2] ? openSubMenu1 : openSubMenu2} timeout="auto" unmountOnExit>
               <List component="div" disablePadding>
                 {item.subMenuItems.map((subItem) => (
                   <ListItem button className={classes.nested} key={subItem.text}>
                     <ListItemText primary={subItem.text} />
                   </ListItem>
                 ))}
               </List>
             </Collapse>
           </div>
         ) : (
           <ListItem button key={item.text}>
             <ListItemIcon>{item.icon}</ListItemIcon>
             <ListItemText primary={item.text} />
           </ListItem>
         )}
         {item !== menuItems[menuItems.length - 1] && <Divider />}
       </div>
       ))}
     </List>
   </Drawer>
);
};

export default Sidebar;   