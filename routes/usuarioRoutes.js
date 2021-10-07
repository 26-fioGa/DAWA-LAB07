const express = require("express");
const userModel = require("../models/usuarioModel");
const rolModel = require("../models/rolModel");
const app = express();

// List users
app.get("/users", async(request, response) => {
    const users = await userModel.find({});
    //const rols = await rolModel.find();
    try {
        //response.send(users, rols);
        response.send(users);
    } catch (error) {
        response.status(500).send(error);
    }
});

// Create user
app.post("/user", async(request, response) => {
    const user = new userModel(request.body);
    try {
        await user.save();
        response.send(user);
    } catch (error) {
        response.status(500).send(error);
    }
});

// Update user
app.put("/user/:id", async(request, response) => {
    const user = new userModel(request.body);
    try {
        await userModel.findByIdAndUpdate(request.params.id, request.body);
        await userModel.save();
        response.send(user);
    } catch (error) {
        response.status(500).send(error);
    }
});


// Delete user
app.delete("/user/:id", async(request, response) => {
    try {
        const user = await userModel.findByIdAndDelete(request.params.id);
        if (!user) response.status(404).send("No item found");
        response.status(200).send();
    } catch (error) {
        response.status(500).send(error);
    }
});

module.exports = app;