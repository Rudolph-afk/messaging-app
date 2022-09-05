import React, { useState } from "react";
import List from "@mui/material/List";
import MenuList from "@mui/material/MenuList";
import MessageIcon from "@mui/icons-material/Message";
import GroupsIcon from "@mui/icons-material/Groups";
import CollectionsBookmarkIcon from "@mui/icons-material/CollectionsBookmark";
import SendToMobileIcon from "@mui/icons-material/SendToMobile";
import ScheduleSendIcon from "@mui/icons-material/ScheduleSend";
import CancelScheduleSendIcon from "@mui/icons-material/CancelScheduleSend";
import OutboxIcon from "@mui/icons-material/Outbox";
import GroupIcon from "@mui/icons-material/Group";
import DateRangeIcon from "@mui/icons-material/DateRange";
import TextSnippetIcon from "@mui/icons-material/TextSnippet";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import DropDownList from "./DropDownList";
import Box from "@mui/material/Box";

export default function SideNav() {
    const messagingItems = [
        { name: "Send", icon: <SendToMobileIcon /> },
        { name: "Scheduled", icon: <ScheduleSendIcon /> }, // TODO: Same UI as send but: prevent editing + change buttons
        // { name: "Drafts", icon: <CancelScheduleSendIcon /> },
        { name: "Outbox", icon: <OutboxIcon /> },
        { name: "Templates", icon: <TextSnippetIcon /> },
    ];
    // TODO: Add number of contacts next to group and allow single contact addition
    // Future TODO: Contacts filtering based on new contacts file... make use of df.isin([])
    const groupsItems = [
        { name: "Grade 4", icon: <GroupIcon /> },
        { name: "Grade 7", icon: <GroupIcon /> },
        { name: "Ungrouped", icon: <GroupIcon /> },
    ];
    // TODO: Rename to history
    const archivesItems = [
        { name: "2019", icon: <DateRangeIcon /> },
        { name: "2020", icon: <DateRangeIcon /> },
    ];
    return (
        <List p={2}>
            <List>
                {
                    <DropDownList
                        mainName="Messaging"
                        mainIcon={<MessageIcon />}
                        items={messagingItems}
                    />
                }
                {
                    <DropDownList
                        mainName="Groups"
                        mainIcon={<GroupsIcon />}
                        items={groupsItems}
                    />
                }
                {
                    <DropDownList
                        mainName="Archives"
                        mainIcon={<CollectionsBookmarkIcon />}
                        items={archivesItems}
                    />
                }
            </List>
        </List>
    );
}
