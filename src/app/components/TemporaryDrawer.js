"use client";

import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import HomeIcon from "@mui/icons-material/Home";
import DashboardIcon from "@mui/icons-material/Dashboard";
import SettingsIcon from "@mui/icons-material/Settings";
import PeopleIcon from "@mui/icons-material/People";
import AnalyticsIcon from "@mui/icons-material/Analytics";
import AddIcon from "@mui/icons-material/Add";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import NotificationsIcon from "@mui/icons-material/Notifications";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import LogoutIcon from "@mui/icons-material/Logout";
import "./TemporaryDrawer.css";

const drawerWidth = 240;

export default function PersistentDrawer() {
  return (
    <Box sx={{ display: "flex" }}>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <Box sx={{ padding: 2, display: "flex", alignItems: "center" }}>
          <Avatar src="/dummy-profile.png" alt="User" />
          <Box sx={{ marginLeft: 2 }}>
            <p>Joe Gardner</p>
          </Box>
          <IconButton sx={{ marginLeft: "auto" }}>
            <LogoutIcon />
          </IconButton>
        </Box>
        <Box sx={{ padding: 2, display: "flex", alignItems: "center" }}>
          <IconButton>
            <NotificationsIcon />
          </IconButton>
          <IconButton>
            <Brightness4Icon />
          </IconButton>
        </Box>
        <List>
          {[
            { text: "Home", icon: <HomeIcon /> },
            { text: "Boards", icon: <DashboardIcon /> },
            { text: "Settings", icon: <SettingsIcon /> },
            { text: "Teams", icon: <PeopleIcon /> },
            { text: "Analytics", icon: <AnalyticsIcon /> },
          ].map((item, index) => (
            <ListItem key={item.text} disablePadding>
              <ListItemButton>
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText primary={item.text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Box sx={{ padding: 2 }}>
          <Button variant="contained" color="primary" startIcon={<AddIcon />} fullWidth>
            Create new task
          </Button>
        </Box>
        <Divider />
        <Box sx={{ padding: 2, display: "flex", alignItems: "center" }}>
          <AddIcon />
          <Box sx={{ marginLeft: 2 }}>
            <p>Download the app</p>
            <p>Get the full experience</p>
          </Box>
        </Box>
      </Drawer>
    </Box>
  );
}
