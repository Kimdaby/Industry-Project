import { BottomNavigation, BottomNavigationAction, Paper } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import FileDownloadIcon from "@mui/icons-material/FileDownload";
import SearchIcon from "@mui/icons-material/Search";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { useState } from "react";

const Footer = () => {
//   const [value, setValue] = useState(0);
    const [value, setValue] = useState(0);


  return (
    <Paper
      sx={{
        position: "fixed",
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: "black",
        zIndex: 10,
      }}
      elevation={3}
    >
      <BottomNavigation
        value={value}
        onChange={(event, newValue) => setValue(newValue)}
        sx={{
          backgroundColor: "black",
          "& .Mui-selected": {
            color: "white",
          },
          "& .MuiBottomNavigationAction-root": {
            color: "gray",
            minWidth: "auto",
            flex: 1,
            padding: "6px 0",
          },
        }}
      >
        <BottomNavigationAction icon={<HomeIcon />} />
        <BottomNavigationAction icon={<BookmarkBorderIcon />} />
        <BottomNavigationAction icon={<AccountCircleIcon />} />
        <BottomNavigationAction icon={<FileDownloadIcon />} />
        <BottomNavigationAction icon={<SearchIcon />} />
      </BottomNavigation>
    </Paper>
  );
};

export default Footer;