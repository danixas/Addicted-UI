import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TablePagination from "@material-ui/core/TablePagination";
import TableRow from "@material-ui/core/TableRow";
import TableSortLabel from "@material-ui/core/TableSortLabel";
import Paper from "@material-ui/core/Paper";
import { IoMdThumbsUp, IoMdThumbsDown } from "react-icons/io";
import "./styles.scss";

function createData(title, date, author, _for, against) {
    return { title, date, author, _for, against };
}

const rows = [
    createData("Vacius neateis į paskaitą", "21 Apr, 19:00", "Admin", 1.35, 3.05),
    createData("Lorem ipsum dolor sit amet", "2 May, 11:00", "Admin", 51, 4.9),
    createData("consectetur adipiscing elit", "3 May, 14:20", "Admin", 24, 6.0),
    createData("sed do eiusmod tempor incididunt ut", "4 May, 19:35", "Admin", 24, 4.0),
    createData("labore et dolore magna aliqua.", "6 May, 8:00", "Admin", 49, 3.9),
    createData("Ut enim ad minim veniam, quis", "8 May, 14:00", "Admin", 87, 6.5),
    createData("nostrud exercitation ullamco", "10 May, 14:00", "Admin", 37, 4.3),
    createData("laboris nisi ut aliquip ex ea", "11 May, 19:00", "Admin", 94, 0.0),
    createData("commodo consequat. Duis aute", "12 May, 22:00", "Admin", 65, 7.0),
    createData("irure dolor in reprehenderit", "21 May, 23:00", "Admin", 98, 0.0),
    createData("in voluptate velit esse cillum", "22 May, 11:00", "Admin", 81, 2.0),
    createData("dolore eu fugiat nulla pariatur.", "24 May, 7:00", "Admin", 9, 37.0),
    createData("Excepteur sint occaecat cupidatat", "27 May, 13:00", "Admin", 63, 4.0),
];

function descendingComparator(a, b, orderBy) {
    if (b[orderBy] < a[orderBy]) {
        return -1;
    }
    if (b[orderBy] > a[orderBy]) {
        return 1;
    }
    return 0;
}

function getComparator(order, orderBy) {
    return order === "desc"
        ? (a, b) => descendingComparator(a, b, orderBy)
        : (a, b) => -descendingComparator(a, b, orderBy);
}

function stableSort(array, comparator) {
    const stabilizedThis = array.map((el, index) => [el, index]);
    stabilizedThis.sort((a, b) => {
        const order = comparator(a[0], b[0]);
        if (order !== 0) return order;
        return a[1] - b[1];
    });
    return stabilizedThis.map((el) => el[0]);
}

const headCells = [
    {
        id: "title",
        numeric: false,
        disablePadding: true,
        label: "Bet title",
    },
    { id: "date", numeric: false, disablePadding: false, label: "Date" },
    { id: "author", numeric: false, disablePadding: false, label: "Created by" },
    { id: "_for", numeric: true, disablePadding: false, label: <IoMdThumbsUp size={16} /> },
    { id: "against", numeric: true, disablePadding: false, label: <IoMdThumbsDown size={16} /> },
];

function EnhancedTableHead(props) {
    const { classes, order, orderBy, onRequestSort } = props;
    const createSortHandler = (property) => (event) => {
        onRequestSort(event, property);
    };

    return (
        <TableHead>
            <TableRow>
                <TableCell padding="checkbox"></TableCell>
                {headCells.map((headCell) => (
                    <TableCell
                        key={headCell.id}
                        align={headCell.numeric ? "right" : "left"}
                        padding={headCell.disablePadding ? "none" : "default"}
                        sortDirection={orderBy === headCell.id ? order : false}
                    >
                        <TableSortLabel
                            active={orderBy === headCell.id}
                            direction={orderBy === headCell.id ? order : "asc"}
                            onClick={createSortHandler(headCell.id)}
                        >
                            {headCell.label}
                            {orderBy === headCell.id ? (
                                <span className={classes.visuallyHidden}>
                                    {order === "desc" ? "sorted descending" : "sorted ascending"}
                                </span>
                            ) : null}
                        </TableSortLabel>
                    </TableCell>
                ))}
            </TableRow>
        </TableHead>
    );
}

EnhancedTableHead.propTypes = {
    classes: PropTypes.object.isRequired,
    onRequestSort: PropTypes.func.isRequired,
    order: PropTypes.oneOf(["asc", "desc"]).isRequired,
    orderBy: PropTypes.string.isRequired,
    rowCount: PropTypes.number.isRequired,
};

const useStyles = makeStyles((theme) => ({
    visuallyHidden: {
        border: 0,
        clip: "rect(0 0 0 0)",
        height: 1,
        margin: -1,
        overflow: "hidden",
        padding: 0,
        position: "absolute",
        top: 20,
        width: 1,
    },
}));

export default function BetsTable({onClick}) {
    const classes = useStyles();
    const [order, setOrder] = React.useState("asc");
    const [orderBy, setOrderBy] = React.useState("title");
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(5);

    const handleRequestSort = (event, property) => {
        const isAsc = orderBy === property && order === "asc";
        setOrder(isAsc ? "desc" : "asc");
        setOrderBy(property);
    };

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    const emptyRows = rowsPerPage - Math.min(rowsPerPage, rows.length - page * rowsPerPage);

    return (
        <div className={classes.root}>
            <Paper className={`${classes.paper} bets__table`}>
                <TableContainer>
                    <Table
                        className={classes.table}
                        aria-labelledby="tableTitle"
                        size={"medium"}
                        aria-label="enhanced table"
                    >
                        <EnhancedTableHead
                            classes={classes}
                            order={order}
                            orderBy={orderBy}
                            onRequestSort={handleRequestSort}
                            rowCount={rows.length}
                        />
                        <TableBody>
                            {stableSort(rows, getComparator(order, orderBy))
                                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                .map((row, index) => {
                                    const labelId = `enhanced-table-checkbox-${index}`;

                                    return (
                                        <TableRow
                                            hover
                                            role="checkbox"
                                            tabIndex={-1}
                                            key={row.title}
                                            onClick={() => onClick()}
                                        >
                                            <TableCell padding="checkbox"></TableCell>
                                            <TableCell
                                                component="th"
                                                id={labelId}
                                                scope="row"
                                                padding="none"
                                            >
                                                {row.title}
                                            </TableCell>
                                            <TableCell>{row.date}</TableCell>
                                            <TableCell>{row.author}</TableCell>
                                            <TableCell align="right">{row._for}</TableCell>
                                            <TableCell align="right">{row.against}</TableCell>
                                        </TableRow>
                                    );
                                })}
                            {emptyRows > 0 && (
                                <TableRow style={{ height: 53 * emptyRows }}>
                                    <TableCell colSpan={6} />
                                </TableRow>
                            )}
                        </TableBody>
                    </Table>
                </TableContainer>
                <TablePagination
                    rowsPerPageOptions={[5, 10, 25]}
                    component="div"
                    count={rows.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onChangePage={handleChangePage}
                    onChangeRowsPerPage={handleChangeRowsPerPage}
                />
            </Paper>
        </div>
    );
}
