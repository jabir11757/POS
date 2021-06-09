import React from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import {AppBar,Toolbar,List,Typography} from '@material-ui/core';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ContactsIcon from '@material-ui/icons/Contacts';
import HomeIcon from '@material-ui/icons/Home';
import CardGiftcardIcon from '@material-ui/icons/CardGiftcard';
import { Button, Grid } from '@material-ui/core';
import AccountCircle from '@material-ui/icons/AccountCircle';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import ShoppingCartSharpIcon from '@material-ui/icons/ShoppingCartSharp';
import DriveEtaSharpIcon from '@material-ui/icons/DriveEtaSharp';
import ShopTwoSharpIcon from '@material-ui/icons/ShopTwoSharp';
import CancelSharpIcon from '@material-ui/icons/CancelSharp';
import PaymentSharpIcon from '@material-ui/icons/PaymentSharp';
import ReportSharpIcon from '@material-ui/icons/ReportSharp';
import NotificationsSharpIcon from '@material-ui/icons/NotificationsSharp';
import SettingsApplicationsSharpIcon from '@material-ui/icons/SettingsApplicationsSharp';


const drawerWidth = 290;



const Nav = ()=>{



          const useStyles = makeStyles((theme) => ({
            root: {
              flexGrow: 1,
            },
            title: {
              flexGrow: 1,
            },
            appBar: {
              transition: theme.transitions.create(['margin', 'width'], {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.leavingScreen,
              }),
            },
            appBarShift: {
              width: `calc(100% - ${drawerWidth}px)`,
              marginLeft: drawerWidth,
              transition: theme.transitions.create(['margin', 'width'], {
                easing: theme.transitions.easing.easeOut,
                duration: theme.transitions.duration.enteringScreen,
              }),
            },
          
            menuButton: {
              marginRight: theme.spacing(2),
            },
            hide: {
              display: 'none',
            },
            drawer: {
              width: drawerWidth,
              flexShrink: 0,
            },
            drawerPaper: {
              width: drawerWidth,
            },
            drawerHeader: {
              display: 'flex',
              alignItems: 'center',
              padding: theme.spacing(0, 1),
              // necessary for content to be below app bar
              ...theme.mixins.toolbar,
              justifyContent: 'flex-end',
            },
          }));

          const classes = useStyles();
          const theme = useTheme();
          const [open, setOpen] = React.useState(false);

          const handleDrawerOpen = () => {
            setOpen(true);
          };

          const handleDrawerClose = () => {
            setOpen(false);
          };

              return (
                <div className={classes.root}>
                  <CssBaseline />
                  <AppBar
                    position="fixed"
                    className={clsx(classes.appBar, {
                      [classes.appBarShift]: open,
                    })}
                  >
                    <Toolbar>
                      <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        onClick={handleDrawerOpen}
                        edge="start"
                        className={clsx(classes.menuButton, open && classes.hide)}
                      >
                        <MenuIcon />
                      </IconButton>
                      <Typography className={classes.menuButton} variant="h6" noWrap>
                       Daily Shopping
                      </Typography>


                      <Grid  container
                            direction="row"
                            justify="flex-end"
                            alignItems="center"
                            style={{
                              width:"83%"
                            }}>
                      <Button  style={{color:"white" }}>Calculator</Button>
                      <Button style={{color:"white"}}>POS</Button>
                      <Button style={{color:"white"}}>Today's Profit</Button>
                      <Button style={{color:"white"}}>Notification</Button>
                      <IconButton
                                edge="end"
                                aria-label="account of current user"
                                color="inherit"
                              >
                                <AccountCircle />
                      </IconButton>
                     </Grid>
                 </Toolbar>
                </AppBar>
                
                  <Drawer
                    className={classes.drawer}
                    variant="persistent"
                    anchor="left"
                    open={open}
                    classes={{
                      paper: classes.drawerPaper,
                    }}
                  >
                    <div className={classes.drawerHeader}>
                      <IconButton onClick={handleDrawerClose}>
                        {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
                      </IconButton>
                    </div>
                    <Divider />
                    <List>
                   
                        <ListItem >
                          <ListItemIcon> <HomeIcon /></ListItemIcon>
                          <ListItemText primary="Home"/>
                         </ListItem>
                         <ListItem>
                           <ListItemIcon><SupervisorAccountIcon/></ListItemIcon>
                           <ListItemText primary="User Management"/>
                         </ListItem>
                         <ListItem>
                           <ListItemIcon><ContactsIcon/></ListItemIcon>
                           <ListItemText primary="Contacts"/>
                         </ListItem>
                         <ListItem>
                           <ListItemIcon><CardGiftcardIcon/></ListItemIcon>
                           <ListItemText primary="Products"/>
                         </ListItem>
                         <ListItem>
                           <ListItemIcon><ShoppingCartSharpIcon/></ListItemIcon>
                           <ListItemText primary="Sell"/>
                         </ListItem>
                         <ListItem>
                           <ListItemIcon><DriveEtaSharpIcon/></ListItemIcon>
                           <ListItemText primary="Stock Transfers"/>
                         </ListItem>
                         <ListItem>
                           <ListItemIcon><ShopTwoSharpIcon/></ListItemIcon>
                           <ListItemText primary="Stock Adjustment"/>
                         </ListItem>
                         <ListItem>
                           <ListItemIcon><CancelSharpIcon/></ListItemIcon>
                           <ListItemText primary="Expenses"/>
                         </ListItem>
                         <ListItem>
                           <ListItemIcon><PaymentSharpIcon/></ListItemIcon>
                           <ListItemText primary="Payment Account"/>
                         </ListItem>
                         <ListItem>
                           <ListItemIcon><ReportSharpIcon/></ListItemIcon>
                           <ListItemText primary="Reports"/>
                         </ListItem>
                         <ListItem>
                           <ListItemIcon><NotificationsSharpIcon/></ListItemIcon>
                           <ListItemText primary="Notification Templates"/>
                         </ListItem>
                         <ListItem>
                           <ListItemIcon><SettingsApplicationsSharpIcon/></ListItemIcon>
                           <ListItemText primary="Settings"/>
                         </ListItem>
                        
                    </List>
                    <Divider />
                  </Drawer>
                
                </div>
              );
            }
export default Nav;
