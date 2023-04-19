// import React from "react";
// import DashboardTwoToneIcon from "@mui/icons-material/DashboardTwoTone";
// import LanguageTwoToneIcon from "@mui/icons-material/LanguageTwoTone";
// import HistoryTwoToneIcon from "@mui/icons-material/HistoryTwoTone";
// import EditIcon from "@mui/icons-material/Edit";
// import EventNoteIcon from "@mui/icons-material/EventNote";
// function MiniDrawer() {
//   return (
//     <div>
//       <div class="min-h-screen bg-gray-100 ">
//         <div class="sidebar h-screen  min-h-screen w-[3.35rem] overflow-hidden border-r hover:w-56 hover: bg-gradient-to-r from-sky-600 to-cyan-400 hover:shadow-lg transition-all duration-1000 ease-in-out">
//           <div class="flex h-screen flex-col justify-between pt-2 pb-6">
//             <div>
//               <div class="w-max p-2.5">
//                 <img
//                   src="https://tailus.io/images/logo.svg"
//                   class="w-32"
//                   alt=""
//                 />
//               </div>
//               <ul class="mt-6 space-y-2 tracking-wide">
//                 <li class="min-w-max">
//                   <a
//                     href="/"
//                     aria-label="Dashboard"
//                     class="relative flex items-center space-x-4 px-4 py-3   text-white hover:rounded-l-full hover:bg-[#ffffff]  hover:text-sky-600 "
//                   >
//                     <svg class="-ml-1 h-6 w-6" viewBox="0 0 24 24" fill="none">
//                       <DashboardTwoToneIcon />
//                     </svg>
//                     <span class="-mr-1 ">Dashboard</span>
//                   </a>
//                 </li>
//                 <li class="min-w-max">
//                   <a
//                     href="/Upcoming"
//                     aria-label="UpcomingEvents"
//                     class="relative flex items-center space-x-4 px-4 py-3   text-white hover:rounded-l-full hover:bg-[#ffffff]  hover:text-sky-600 "
//                   >
//                     <svg class="-ml-1 h-6 w-6" viewBox="0 0 24 24" fill="none">
//                       <EventNoteIcon />
//                     </svg>
//                     <span class="-mr-1 ">Upcoming Events</span>
//                   </a>
//                 </li>

//                 <li class="min-w-max">
//                   <a
//                     href="#"
//                     aria-label="History"
//                     class="relative flex items-center space-x-4 px-4 py-3   text-white hover:rounded-l-full hover:bg-[#ffffff]  hover:text-sky-600 "
//                   >
//                     <svg class="-ml-1 h-6 w-6" viewBox="0 0 24 24" fill="none">
//                       <HistoryTwoToneIcon />
//                     </svg>
//                     <span class="-mr-1 ">History</span>
//                   </a>
//                 </li>
//                 <li class="min-w-max">
//                   <a
//                     href="/EditProfile"
//                     aria-label="History"
//                     class="relative flex items-center space-x-4 px-4 py-3   text-white hover:rounded-l-full hover:bg-[#ffffff]  hover:text-sky-600 "
//                   >
//                     <svg class="-ml-1 h-6 w-6" viewBox="0 0 24 24" fill="none">
//                       <EditIcon />
//                     </svg>
//                     <span class="-mr-1 ">Edit Profile</span>
//                   </a>
//                 </li>
//               </ul>
//             </div>
//             <div class="w-max -mb-3">
//               <a
//                 href="#"
//                 class="group flex items-center space-x-4 rounded-md px-4 py-3 text-white hover:rounded-l-full "
//               >
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   class="h-5 w-5"
//                   viewBox="0 0 20 20"
//                   fill="currentColor"
//                 >
//                   <LanguageTwoToneIcon />{" "}
//                 </svg>
//                 <span>Go to Website</span>
//               </a>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default MiniDrawer;

import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";

import List from "@mui/material/List";
import CssBaseline from "@mui/material/CssBaseline";

import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";

import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import { Link } from "react-router-dom";
import {
  DashboardTwoTone,
  LanguageTwoTone,
  PermIdentityTwoTone,
  UpcomingTwoTone,
} from "@mui/icons-material";

const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

// const AppBar = styled(MuiAppBar, {
//   shouldForwardProp: (prop) => prop !== "open",
// })(({ theme, open }) => ({
//   zIndex: theme.zIndex.drawer + 1,
//   transition: theme.transitions.create(["width", "margin"], {
//     easing: theme.transitions.easing.sharp,
//     duration: theme.transitions.duration.leavingScreen,
//   }),
//   ...(open && {
//     marginLeft: drawerWidth,
//     width: `calc(100% - ${drawerWidth}px)`,
//     transition: theme.transitions.create(["width", "margin"], {
//       easing: theme.transitions.easing.sharp,
//       duration: theme.transitions.duration.enteringScreen,
//     }),
//   }),
// }));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",

  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

export default function MiniDrawer() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(true);

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      {/* <AppBar position="fixed" open={open}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{
              marginRight: 5,
              ...(open && { display: "none" }),
            }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Mini variant drawer
          </Typography>
        </Toolbar>
      </AppBar> */}
      <Drawer variant="permanent" open={open}>
        <DrawerHeader>
          <IconButton onClick={() => setOpen(!open)}>
            {theme.direction === "rtl" ? (
              <ChevronRightIcon />
            ) : (
              <ChevronLeftIcon />
            )}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <Link to={"/dash"}>
          <List>
            <ListItem disablePadding sx={{ display: "block" }}>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? "initial" : "center",
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : "auto",
                    justifyContent: "center",
                  }}
                >
                  <DashboardTwoTone />
                </ListItemIcon>
                <ListItemText
                  primary={"Dashboard"}
                  sx={{ opacity: open ? 1 : 0 }}
                />
              </ListItemButton>
            </ListItem>
          </List>
        </Link>

        <Link to={"/Upcoming"}>
          <List>
            <ListItem disablePadding sx={{ display: "block" }}>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? "initial" : "center",
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : "auto",
                    justifyContent: "center",
                  }}
                >
                  <UpcomingTwoTone />
                </ListItemIcon>
                <ListItemText
                  primary={"Upcoming Events"}
                  sx={{ opacity: open ? 1 : 0 }}
                />
              </ListItemButton>
            </ListItem>
          </List>
        </Link>

        <Link to={"/EditProfile"}>
          <List>
            <ListItem disablePadding sx={{ display: "block" }}>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? "initial" : "center",
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : "auto",
                    justifyContent: "center",
                  }}
                >
                  <PermIdentityTwoTone />
                </ListItemIcon>
                <ListItemText
                  primary={"Edit Profile"}
                  sx={{ opacity: open ? 1 : 0 }}
                />
              </ListItemButton>
            </ListItem>
          </List>
        </Link>
        <Divider className="pt-5" />
        <Link to={"/"}>
          <List>
            <ListItem disablePadding sx={{ display: "block" }}>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? "initial" : "center",
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : "auto",
                    justifyContent: "center",
                  }}
                >
                  <LanguageTwoTone />
                </ListItemIcon>
                <ListItemText
                  primary={"Go to Website"}
                  sx={{ opacity: open ? 1 : 0 }}
                />
              </ListItemButton>
            </ListItem>
          </List>
        </Link>
      </Drawer>
      
    </Box>
    
  );
}
