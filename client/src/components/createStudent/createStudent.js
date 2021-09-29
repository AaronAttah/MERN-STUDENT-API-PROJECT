import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import axios from "axios";

const useStyles = makeStyles((theme) => ({
    root: {
        "& > *": {
            margin: theme.spacing(1),
            width: "25ch",
        },
    },
}));

export default function CreateStudent() {
    const classes = useStyles();

    const [student, SetStudent] = useState({
        name: "",
        registerationNumber: " ",
        grade: "",
        section: "",
    });

    const createStudent = (e) => {
        e.preventDefault();

        axios.post('http://localhost:5000/student', student)
        window.location.href = window.location.href;

        console.log(
            student.name,
            student.registerationNumber,
            student.grade,
            student.section
        );
    };

    return (
        <div>
            <h2>Create Student</h2>
            <form className={classes.root} noValidate autoComplete="off">
                <TextField
                    value={student.name}
                    onChange={(e) =>
                        SetStudent({ ...student, name: e.target.value })
                    }
                    id="outlined-basic"
                    label="Name"
                    variant="outlined"
                />
                <TextField
                    value={student.registerationNumber}
                    onChange={(e) =>
                        SetStudent({
                            ...student,
                            registerationNumber: e.target.value,
                        })
                    }
                    id="outlined-basic"
                    label="Registeration No."
                    variant="outlined"
                />
                <TextField
                    value={student.grade}
                    onChange={(e) =>
                        SetStudent({ ...student, grade: e.target.value })
                    }
                    id="outlined-basic"
                    label="Grade"
                    variant="outlined"
                />
                <TextField
                    value={student.section}
                    onChange={(e) =>
                        SetStudent({ ...student, section: e.target.value })
                    }
                    id="outlined-basic"
                    label="Section"
                    variant="outlined"
                />
                <Button
                    type="submit"
                    variant="contained"
                    size="large"
                    color="primary"
                    onClick={createStudent}
                >
                    Create
                </Button>
            </form>
        </div>
    );
}
