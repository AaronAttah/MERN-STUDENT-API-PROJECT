// const express = require("express");
import express from 'express'
const userModel = require("./models");

const app = express.Router()
const router = express.Router()

app.post("/add_user", async (request, response) => {
    const user = new userModel(request.body);
    console.log(user);

    try {
        await user.save();
        response.send(user);
    } catch (error) {
        response.status(500).send(error);
    }
});

router.get("/users", async (request, response) => {
    response.send("hey")
    const users = await userModel.find({});

    try {
        response.send(users);
    } catch (error) {
        response.status(500).send(error);
    }
});

export default app;
