// import Pusher from "pusher-js";
import express from "express";
// import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import studentRoutes from "./routes/student.js";
import calmCheck from './routes/calm.js'

// app config
const app = express();
const port = process.env.PORT || 5000;


app.use(express.json({ limit: "20mb", exended: true }));
app.use(express.urlencoded({ limit: "20mb", exended: true }));

app.use(cors());

// Db config/ connection
const connection_Url =
    "mongodb+srv://Aaron:password123_4@cluster0.txttb.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
mongoose.connect(connection_Url, {
    // useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

// mongoose connection/ pusher connection
const db = mongoose.connection;
db.once("open", () => {
    console.log("DB connected Successfully")
});

//ROutes ROutes ROutes
app.use("/student", studentRoutes);
app.use('/calm', calmCheck)

//liseten
app.listen(port, () => {
    console.log(`listening on port ${port}`);
    
});

