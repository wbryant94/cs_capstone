import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import InfoIcon from '@mui/icons-material/Info';


export default function Navbar() {

  const [showInfo, setShowInfo] = React.useState(false);
  return (
    <Box
      sx={{
        flexGrow: 1,
        width: 300,
        top: 25,
        position: "static",
      }}
    >
      <AppBar>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={(e)=>{alert('ToDo: Add an about me')}}
          >
            <MenuIcon />
          </IconButton>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="info"
            sx={{ mr: 4 }}
            onClick={(e)=>{alert('ToDo: Add an about me')}}
          >
            <InfoIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Global Studies Resource Visualization Tool
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
