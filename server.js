const express = require("express");
const mongoose = require("mongoose");
const rolRoutes = require("./routes/rolRoutes.js");
const usuarioRoutes = require("./routes/usuarioRoutes.js");

const app = express();
app.use(express.json());
mongoose.connect(
    "mongodb+srv://she_codes_26:T3csup3347@dawacluster1.mvuku.mongodb.net/mySecondDatabase?retryWrites=true&w=majority", async(err) => {
        if (err) throw err;
        console.log("connected to db")
    }
);
app.use(rolRoutes);
app.use(usuarioRoutes);
app.listen(5000, () => {
    console.log("Server is running on port 5000");
});