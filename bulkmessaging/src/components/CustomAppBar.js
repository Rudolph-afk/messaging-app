import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
// import { ThemeProvider, createTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";

function CustomAppBar() {
    // <Navbar as={Box} sx={{ height: 50 }} bg="primary" variant="dark">
    //     <Navbar.Brand href="#home" className="p-4">
    //         <Typography variant="h4-3" sx={{ fontWeight: "bold" }}>
    //             MTOKSE GROUP
    //         </Typography>
    //     </Navbar.Brand>
    //     <Nav className="justify-content-end  flex-grow-1">
    //         <Nav.Link href="#home">
    //             <Typography variant="p-3">Home</Typography>
    //         </Nav.Link>
    //         <Nav.Link href="#features">
    //             <Typography variant="p-3">Features</Typography>
    //         </Nav.Link>
    //         <Nav.Link href="#pricing">
    //             <Typography variant="p-3">Pricing</Typography>
    //         </Nav.Link>
    //         <Nav.Link href="#profile">
    //             <Typography variant="p-3">Profile</Typography>
    //         </Nav.Link>
    //     </Nav>
    // </Navbar>;
    return (
        <Box sx={{ height: "100%", width: "100%" }}>
            <AppBar position="static">
                <Toolbar
                    sx={{ flexGrow: 1, justifyContent: "space-between" }}
                    component="div">
                    <Typography
                        variant="h4"
                        sx={{ fontWeight: "bold", flexGrow: 1 }}>
                        Mtokse Group
                    </Typography>
                    <Stack direction="row" spacing={2}>
                        <Button color="inherit">
                            <Typography variant="p-3">Features</Typography>
                        </Button>
                        <Button color="inherit">
                            <Typography variant="p-3">Pricing</Typography>
                        </Button>
                        <Button
                            color="inherit"
                            startIcon={<PersonOutlineIcon />}>
                            {/* {Add login, logout and settings button} */}
                            <Typography variant="p-3">Profile</Typography>
                        </Button>
                    </Stack>
                </Toolbar>
            </AppBar>
        </Box>
    );
}

export default CustomAppBar;
