const express = require("express");
const rolModel = require("../models/rolModel");
const app = express();

// List rols
app.get("/roles", async(request, response) => {
    const roles = await rolModel.find({});
    try {
        response.send(roles);
    } catch (error) {
        response.status(500).send(error);
    }
});

// Create rol
app.post("/rol", async(request, response) => {
    const rol = new rolModel(request.body);
    try {
        await rol.save();
        response.send(rol);
    } catch (error) {
        response.status(500).send(error);
    }
});
module.exports = app;