const mongoose = require('mongoose');

const Cadastro = new mongoose.Schema({
    nome: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    telefone: {
        type: Number,
        required: true
    }
},
{
    timestamps: true,
});

mongoose.model("marla", Cadastro);