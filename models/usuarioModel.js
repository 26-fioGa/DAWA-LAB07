const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const UserSchema = new Schema({
    nombre: {
        type: String,
        required: true,
    },
    correo: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    img: {
        type: String,
    },
    estado: {
        type: Boolean,
    },
    google: {
        type: Boolean,
        default: false,
    },
    // FK
    id_rol: {
        type: Schema.Types.ObjectId,
        required: true,
    }
});
const Usuario = mongoose.model("Usuario", UserSchema);
module.exports = Usuario;