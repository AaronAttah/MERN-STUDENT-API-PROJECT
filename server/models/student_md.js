import  mongoose  from "mongoose";

const studentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    registerationNumber: {
        type: String,
        required: true,
    },
    grade: {
        type: String,
        default: 0,
    },
    section:{
        type: String,
        default: 'A'
    },
    subjects:[String]
});

const student = mongoose.model("students", studentSchema);

export default student