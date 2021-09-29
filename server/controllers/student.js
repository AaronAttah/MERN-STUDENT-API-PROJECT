import StudentData from "../models/student_md.js";

export const getStudents = async (req, res) => {
    try {
        const allStudents = await StudentData.find();
        res.status(200).json(allStudents);
        // console.log(allStudents);
    } catch (error) {
        res.status(404).json({ message: "Cannot find student" });
    }
};

//
export const createStudent = async (req, res) => {
    const student = req.body;
    // console.log(student);
    const newStudent = new StudentData(student);
    res.status(202).send(student);

    try {
        await newStudent.save();
        res.status(201).send(newStudent);
    } catch (error) {
        res.status(404).json({ message: "Oops Error! student not saved " });
    }
};

//
export const deleteStudent = async (req, res) => {
    const id = req.params.id;

    try {
        await StudentData.findByIdAndRemove(id).exec();
        res.send("Successfully Deleted!");
    } catch (error) {
        res.status(400).send(
            "Oops Something went wrong! student not yet deleted.. "
        );
    }
};

//
export const getTest = (req, res) => {
    res.send("Router1111 is working as a test run....");
};
