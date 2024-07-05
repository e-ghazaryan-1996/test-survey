import { Box, Button, Typography } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import sideMenu from "@/router/sideMenu";
import { Link, useLocation } from "react-router-dom";

const Sidebar = () => {
  const { pathname } = useLocation();
  console.log({ pathname });
  return (
    <Box display="flex" pt="40px" flexDirection="column">
      <Button
        sx={{
          width: "48px",
          height: "48px",
          padding: "0px",
          minWidth: "unset",
          marginLeft: "16px",
          borderRadius: "50%",
        }}
      >
        <MenuIcon color="secondary" />
      </Button>
      <Box width="100px" display="flex" flexDirection="column" gap="12px">
        {sideMenu.map((item) => {
          const MUIcon = item.icon;
          const isActive = pathname === item.path;
          return (
            <div key={item.title}>
              <Link to={item.path}>
                <Box
                  display="flex"
                  flexDirection="column"
                  alignItems="center"
                  sx={{
                    gap: "6px",
                    paddingleft: "5px",
                  }}
                >
                  <Box
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                    sx={{
                      backgroundColor: isActive ? "secondary.light" : "",
                      width: "56px",
                      height: "32px",
                      borderRadius: "100px",
                    }}
                  >
                    <MUIcon
                      fontSize="small"
                      sx={{
                        color: isActive ? "primary.light" : "secondary.main",
                      }}
                    />
                  </Box>
                  <Typography
                    component="span"
                    variant="subtitle1"
                    sx={{
                      color: isActive ? "primary.light" : "secondary.main",
                    }}
                  >
                    {item.title}
                  </Typography>
                </Box>
              </Link>
            </div>
          );
        })}
      </Box>
    </Box>
  );
};

export default Sidebar;
