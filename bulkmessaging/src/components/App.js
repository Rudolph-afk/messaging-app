// import React, { useState, useEffect } from "react";
import * as React from "react";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import UploadFileIcon from "@mui/icons-material/UploadFile";
import SendAndArchiveTwoToneIcon from "@mui/icons-material/SendAndArchiveTwoTone";
// import SendAndArchiveIcon from "@mui/icons-material/SendAndArchive";
import SaveAltIcon from "@mui/icons-material/SaveAlt";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { readCSV, readExcel } from "danfojs";
import SideNav from "./SideNav";
import ManualAddContact from "./ManualAddContact";
// import ContactsTable from "./ContactsTable";
import CustomAppBar from "./CustomAppBar";
import Paper from "@mui/material/Paper";
// import DataTable from "./DataTable";
// import VirtualizedTable from "./VirtualizedTable";
// import LoadingButton from "@mui/lab/LoadingButton";

// const { useState, useEffect } = React;

function App() {
    let [file, setFile] = React.useState("");
    let [dataFrame, setDataFrame] = React.useState([]);
    let [columns, setDataColumns] = React.useState([]);

    const onChange = (event) => {
        setFile((file = event.target.files[0]));
    };

    // TODO: Move file reading and use as independent component
    function getFileData(df) {
        const dataAsJson = df.toJSON();
        dataAsJson.map((data, index) => {
            data["id"] = index;
            return { ...data };
        });
        const columnsRaw = ["id", ...df.columns];
        const columnsInfo = columnsRaw.map((col) => ({
            width: col === "id" ? 70 : 160,
            headerName: col === "id" ? "" : col, //.toUpperCase(),
            field: col, // === "id" ? "" : col, //.replaceAll(" ", "_").toLowerCase(),
        }));
        setDataFrame([...dataAsJson]);
        setDataColumns([...columnsInfo]);
    }

    async function readFile(file) {
        if (file.name.endsWith(".csv")) {
            const df = await readCSV(file); //.then((df) => getFileData(df)); // With promises
            getFileData(df);
            // dataFrame ? setLoading(false) : setLoading(true);
            // console.log(columns);
        } else {
            const df = await readExcel(file);
            getFileData(df);
        }
    }

    function getContent() {
        if (file) {
            readFile(file);
        }
        // return <ContactsTable data={dataFrame} columnsInfo={columns} />;
    }

    React.useEffect(() => {
        getContent();
    }, [file]);

    React.useEffect(() => {
        if (file && columns.length > 0) {
            console.log(dataFrame);
            console.log(columns);
        }
    }, [columns]);

    return (
        <>
            <CustomAppBar /> {/**Navigation bar */}
            <Container maxWidth={false} disableGutters={true}>
                <Stack sx={{ width: "100%" }} direction="row">
                    <SideNav /> {/* TODO: Make responsive Drawer*/}
                    <Box sx={{ width: "100%" }}>
                        <Stack direction="column">
                            <TextField
                                autoFocus
                                required
                                helperText="Your message may not exceed 160 characters" // Add ref count to count characters
                                sx={{ mt: 1 }}
                                rows={6} // TODO: Resize based on screen size
                                fullWidth
                                multiline
                                variant="filled"
                                placeholder="Type your message here"
                            />
                            <Box // TODO: Make responsive, resize based on screen size
                                sx={{
                                    display: "flex",
                                    justifyContent: "space-between",
                                }}>
                                <Button
                                    sx={{ my: 1 }}
                                    endIcon={<SaveAltIcon />}
                                    variant="contained"
                                    color="primary">
                                    <Typography>Save as template</Typography>
                                </Button>
                                <Button
                                    sx={{ my: 1 }}
                                    endIcon={<SendAndArchiveTwoToneIcon />}
                                    variant="contained"
                                    color="primary">
                                    <Typography>Send</Typography>
                                </Button>
                            </Box>
                            <Stack>
                                <Box
                                    sx={{
                                        alignSelf: "center",
                                        justifyContent: "center",
                                        width: "100%",
                                        height: "100%",
                                    }}>
                                    <Button
                                        // onClick={handleClick}
                                        endIcon={<UploadFileIcon />}
                                        // loading={loading}
                                        // loadingPosition="end"
                                        variant="contained">
                                        <label>
                                            <span>
                                                <Typography>
                                                    {file
                                                        ? "Change File"
                                                        : "Upload Contacts File"}
                                                </Typography>
                                            </span>
                                            <input
                                                type="file"
                                                accept=".xls,.xlsx,.csv"
                                                onChange={(event) =>
                                                    onChange(event)
                                                }
                                                hidden
                                            />
                                        </label>
                                    </Button>
                                    <Paper
                                        elevation={3}
                                        sx={{
                                            mt: 2,
                                            height: 450, //"100%", // TODO: Make dynamic based on screen size
                                            width: "100%",
                                        }}>
                                        {file &&
                                        columns.length > 0 &&
                                        dataFrame.length > 0 ? (
                                            // <ContactsTable
                                            //     data={[...dataFrame]}
                                            //     columnsInfo={[...columns]}
                                            // />

                                            <DataGrid
                                                rows={dataFrame}
                                                columns={columns}
                                                autoPageSize
                                                disableColumnMenu
                                                components={{
                                                    Toolbar: GridToolbar,
                                                }}
                                                // pageSize={5}
                                                // rowsPerPageOptions={[5]}
                                                checkboxSelection
                                                // autoHeight
                                            />
                                        ) : (
                                            // <DataTable />
                                            <ManualAddContact /> // TODO: fix list issue
                                        )}
                                    </Paper>
                                </Box>
                            </Stack>
                        </Stack>
                    </Box>
                </Stack>
            </Container>
        </>
    );
}

export default App;
