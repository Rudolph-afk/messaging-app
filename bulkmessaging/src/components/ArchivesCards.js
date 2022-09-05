// import React from 'react';
import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

function ArchivesCards() {
    return (
        <div>
            <Card sx={{ maxWidth: 345 }}>
                <CardHeader
                    avatar={
                        <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                            R {/* TODO: Make dynamic */}
                        </Avatar>
                    }
                    action={
                        <IconButton aria-label="settings">
                            <MoreVertIcon />
                        </IconButton>
                    }
                    title="Shrimp and Chorizo Paella" // TODO: Sent to {Group Name || ${count} contacts}
                    subheader="September 14, 2016" // TODO: Automated date
                />
                <CardContent>
                    <Typography
                        variant="body2"
                        color="text.secondary"></Typography>
                </CardContent>
                <CardActions>
                    <Button size="small">Resend</Button>
                    <Button size="small">Edit and Send</Button>
                </CardActions>
            </Card>
        </div>
    );
}

export default ArchivesCards;

// Use this layout

<List>
    {messages.map(({ primary, secondary, person }, index) => (
        <ListItem button key={index + person}>
            <ListItemAvatar>
                <Avatar alt="Profile Picture" src={person} />
            </ListItemAvatar>
            <ListItemText primary={primary} secondary={secondary} />
        </ListItem>
    ))}
</List>;
