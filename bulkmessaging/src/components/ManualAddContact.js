import React, { useState, useEffect } from "react";
import AccountCircle from "@mui/icons-material/AccountCircle";
import Fab from "@mui/material/Fab";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";
import InputLabel from "@mui/material/InputLabel";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";

function ManualAddContact() {
    let [contacts, setContacts] = useState([]);

    const addContactField = (index) => (
        <Box key={index} spacing={2} sx={{ p: 2, width: 20, height: 6 }}>
            <AccountCircle sx={{ fontSize: 45 }} />
            <TextField
                sx={{ fontSize: 45 }}
                size="small"
                id="input-with-sx"
                variant="filled"
                onChange={(event) => handleContactInput(event)}
            />
            <Fab
                size="small"
                sx={{ color: "action.active", mr: 1, my: 0.5 }}
                disabled={index < 1}
                onClick={(event) => handleRemoveClick(index, event)}>
                <RemoveCircleIcon />
            </Fab>
            <Fab
                size="small"
                sx={{ color: "action.active", mr: 1, my: 0.5 }}
                onClick={(event) => handleAddClick(event)}>
                <AddCircleIcon />
            </Fab>
        </Box>
    );

    let [contactsField, setContactsField] = useState([addContactField]);

    const handleAddClick = (event) => {
        setContactsField((contactsField = [...contactsField, addContactField]));
    };

    const handleRemoveClick = (index, event) => {
        let contactsArray = [...contactsField];
        contactsArray.splice(index, 1);
        setContactsField(contactsArray);
    };

    const handleContactInput = (event) => {
        const contact = event.target.value;
        setContacts([...contacts, contact]);
    };

    // useEffect(() => {
    //     console.log(contacts);
    // }, [contactsField]);

    return (
        <>
            <InputLabel htmlFor="input-with-icon-adornment" sx={{ p: 2 }}>
                <Typography variant="h6">
                    Enter Recipient(s) Contact Number
                </Typography>
            </InputLabel>
            <Grid
                container
                rowSpacing={1}
                columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                {contactsField.map((element, index) => (
                    <Grid item key={index} xs={12} md={6} lg={3}>
                        {element(index)}
                    </Grid>
                ))}
            </Grid>
        </>
    );
}

export default ManualAddContact;
