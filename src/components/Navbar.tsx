import { Box, Button, Divider } from "@mui/material";
import { Link } from "react-router-dom";
import MyAppBar from "./MyAppBar";

function Navbar() {
  return (
    <div>
      <MyAppBar />

      <nav>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            alignSelf: "flex-start",
            justifyContent: "space-evenly",
          }}
        >
          <Button variant="contained" color="info">
            <Link to="/">Resort list</Link>
          </Button>
          <Button variant="contained" color="info">
            <Link to="/task">Task</Link>
          </Button>
          <Button variant="contained" color="info">
            <Link to="/fav"> Fav</Link>
          </Button>
        </Box>
        <Divider></Divider>
      </nav>
    </div>
  );
}
export default Navbar;
