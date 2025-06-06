import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import { IconButton, Stack } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";

export const moviesMenuList = [
  { id: 0, url: "/movie/popular", title: "Popular" },
  { id: 1, url: "/movie/now-playing", title: "Now Playing" },
  { id: 2, url: "/movie/upcoming", title: "Upcoming" },
  { id: 3, url: "/movie/top-rated", title: "Top Rated" },
];

export default function MobileSidebar() {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen: any) => () => {
    setOpen(newOpen);
  };

  const DrawerList = (
    <Box sx={{ width: 220 }} role="presentation" onClick={toggleDrawer(false)}>
      <List>
        <ListItem disablePadding>
          <ListItemButton component="a" href="/">
            <Stack direction={"row"} alignItems={"center"} spacing={0.5}>
              <HomeIcon />
              <ListItemText
                primary={"TMDB"}
                primaryTypographyProps={{ fontWeight: "bold" }}
              />
            </Stack>
          </ListItemButton>
        </ListItem>
      </List>
      <List>
        {moviesMenuList.map((text, index) => (
          <ListItem key={index} disablePadding>
            <ListItemButton>
              <ListItemText primary={text.title} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <div className="md:hidden">
      <IconButton
        sx={{
          fontSize: "1.8rem",
          color: "#ffffff",
        }}
        onClick={toggleDrawer(true)} // Moved the onClick handler here
      >
        <MenuIcon fontSize="inherit" />
      </IconButton>
      <Drawer open={open} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
    </div>
  );
}
