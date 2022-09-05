import React from "react";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import Typography from "@mui/material/Typography";

// import { MenuItem } from "@mui/material";
// import { padding } from "@mui/system";

function DropDownList(props) {
    const [open, setOpen] = React.useState(false);

    const handleClick = () => {
        setOpen(!open);
    };

    return (
        <>
            <List>
                <ListItemButton onClick={handleClick}>
                    <ListItemIcon>{props.mainIcon}</ListItemIcon>
                    <ListItemText
                        sx={{ pr: 4 }}
                        primary={<Typography>{props.mainName}</Typography>}
                    />
                    {open ? <ExpandLess /> : <ExpandMore />}
                </ListItemButton>
                <Collapse in={open} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                        {props.items.map((item) => (
                            <ListItemButton key={item.name}>
                                <ListItemIcon sx={{ pl: 2 }}>
                                    {item.icon}
                                </ListItemIcon>
                                <ListItemText
                                    primary={
                                        <Typography>{item.name}</Typography>
                                    }
                                />
                            </ListItemButton>
                        ))}
                    </List>
                </Collapse>
            </List>
        </>
    );
}

export default DropDownList;
