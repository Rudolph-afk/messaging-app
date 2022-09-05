import React, { useMemo } from "react";
import {
    useSortBy,
    useTable,
    useRowSelect,
    useGlobalFilter,
} from "react-table";
import { FaCaretUp, FaCaretDown } from "react-icons/fa";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Checkbox from "./Checkbox";
import Filter from "./Filter";
// import { icons } from "react-icons";

function ContactsTable({ ...props }) {
    // Memoization of data -- Performance
    const columns = useMemo(() => [...props.columnsInfo], []);

    const data = useMemo(() => [...props.data], []);

    // Create table instance
    const tableInstance = useTable(
        { columns, data }, // ES6 Shorthand for {column:column, data:data}
        useSortBy,
        useRowSelect,
        (hooks) => {
            hooks.visibleColumns.push((columns) => {
                return [
                    {
                        id: "selection",
                        Header: ({ getToggleAllRowsSelectedProps }) => (
                            <Checkbox {...getToggleAllRowsSelectedProps()} />
                        ),
                        Cell: ({ row }) => (
                            <Checkbox {...row.getToggleRowSelectedProps()} />
                        ),
                    },
                    ...columns,
                    useGlobalFilter,
                ];
            });
        }
    );

    const {
        getTableProps, // <Object> : Destructured in <table> as props
        getTableBodyProps, // <Object> : Destructured in <tbody> as props
        headerGroups, // <Object> : Destructured in <thead> to produce header information
        rows, // <Object>: Destructured in <tbody>
        prepareRows, // used on each row from *rows*
        allColumns,
        getToggleHideAllColumnsProps,
        selectedFlatRows,
        state,
        setGlobalFilter,
    } = tableInstance;

    // Global column filter
    const { globalFilter } = state;

    return (
        <Stack>
            <div style={{ display: "flex", justifyContent: "flex-start" }}>
                <div>
                    <Checkbox {...getToggleHideAllColumnsProps()} />{" "}
                    <Typography>Toggle All</Typography>
                </div>
                {allColumns.map((col, index) => (
                    <div key={index}>
                        <label>
                            <input
                                type="checkbox"
                                {...col.getToggleHiddenProps()}
                            />
                            <Typography>{col.Header}</Typography>
                        </label>
                    </div>
                ))}
            </div>
            <Filter filter={globalFilter} setFilter={setGlobalFilter} />
            <table {...getTableProps()}>
                <thead>
                    {headerGroups.map((headerGroup) => (
                        <tr {...headerGroup.getHeaderGroupProps()}>
                            {headerGroup.headers.map((column, index) => (
                                <th
                                    key={index}
                                    {...column.getHeaderProps(
                                        column.getSortByToggleProps()
                                    )}>
                                    <Typography>
                                        {column.render("Header")}
                                    </Typography>
                                    <span>
                                        {column.isSorted ? (
                                            column.isSortedDesc ? (
                                                <FaCaretDown />
                                            ) : (
                                                <FaCaretUp />
                                            )
                                        ) : (
                                            ""
                                        )}
                                    </span>
                                </th>
                            ))}
                        </tr>
                    ))}
                </thead>
                <tbody {...getTableBodyProps()}>
                    {rows.map((row) => {
                        prepareRows(row);
                        return (
                            <tr {...row.getRowProps()}>
                                {row.cells.map((cell, index) => {
                                    return (
                                        <td
                                            key={index}
                                            {...cell.getCellProps()}>
                                            <Typography>
                                                {cell.render("Cell")}
                                            </Typography>
                                        </td>
                                    );
                                })}
                            </tr>
                        );
                    })}
                </tbody>
            </table>

            <pre>
                <code>
                    {JSON.stringify(
                        {
                            selectedFlatRows: selectedFlatRows.map(
                                (row) => row.original
                            ),
                        },
                        null,
                        2
                    )}
                </code>
            </pre>
        </Stack>
    );
}

export default ContactsTable;
