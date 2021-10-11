import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import axios from "axios";

const useStyles = makeStyles({
    table: {
        Width: 650,
    },
});

// function createData(name, calories, fat, carbs, protein) {
//     return { name, calories, fat, carbs, protein };
// }

// const rows = [
//     createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
//     createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
//     createData("Eclair", 262, 16.0, 24, 6.0),
//     createData("Cupcake", 305, 3.7, 67, 4.3),
//     createData("Gingerbread", 356, 16.0, 49, 3.9),
// ];

export default function ShowStudent() {
    const classes = useStyles();

    const [studentsList, setStudentsList] = useState([]);

    const deleteStudent = (id) => {
        axios.delete(`http://localhost:5000/student/${id}`).then(() => {
            window.location.reload(false);
        });
    };

    useEffect(() => {
        axios.get("http://localhost:5000/student").then((allStudents) => {
            console.log(allStudents);
            setStudentsList(allStudents.data);
        });
    }, []);

    return (
        <div>
            <h2>All Students</h2>
            <TableContainer component={Paper}>
                <Table className={classes.table} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Name</TableCell>
                            <TableCell align="right">Reg No.</TableCell>
                            <TableCell align="right">Grade</TableCell>
                            <TableCell align="right">Section</TableCell>
                            <TableCell align="right">Action</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {studentsList.map((student, key) => (
                            <TableRow key={key}>
                                <TableCell component="th" scope="row">
                                    {student.name}
                                </TableCell>
                                <TableCell align="right">
                                    {student.registerationNumber}
                                </TableCell>
                                <TableCell align="right">
                                    {student.grade}
                                </TableCell>
                                <TableCell align="right">
                                    {student.section}
                                </TableCell>
                                <TableCell align="right">
                                    <IconButton
                                        onClick={() =>
                                            deleteStudent(student._id)
                                        }
                                        aria-label="delete"
                                        className={classes.margin}
                                    >
                                        <DeleteIcon fontSize="small" />
                                    </IconButton>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
}
