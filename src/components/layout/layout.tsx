import { Outlet } from "react-router-dom";
import Sidebar from "./sidebar/sidebar";
import { Box } from "@mui/material";

const Layout = () => {
  return (
    <Box display="flex" gap="67px">
      <Sidebar />
      <Box paddingTop="44px">
        <Outlet />
      </Box>
    </Box>
  );
};

export default Layout;
