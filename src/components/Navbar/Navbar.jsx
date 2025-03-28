import { AppBar, Toolbar, Typography, Box, IconButton } from "@mui/material";
import NotificationsIcon from "@mui/icons-material/Notifications";

const HBOHeader = () => {
  return (
    <Box sx={{ position: "sticky", top: 0, zIndex: 1100 }}>
      <AppBar
        position="static"
        sx={{
          backgroundColor: "black",
          boxShadow: 3,
        }}
      >
        <Toolbar sx={{ justifyContent: "space-between" }}>
          <Typography variant="h5" sx={{ fontWeight: "bold" }}>
            <span style={{ color: "#8b5cf6" }}> MAX</span>
          </Typography>

          <Box sx={{ display: "flex", alignItems: "center" }}>
            <IconButton color="inherit">
              <NotificationsIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default HBOHeader;
