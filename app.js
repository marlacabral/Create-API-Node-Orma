const express = require('express');
const mongoose = require('mongoose');
const cors = require ('cors');

require("./models/Cadastro");
const Cadastro = mongoose.model("marla");

const app = express();

app.use(express.json());

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    app.use(cors());
    next();
});

mongoose.connect('mongodb+srv://devmarlacabral:hr88mefXSM2yfSx@competition.3nn1n.mongodb.net/test', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('Conexão com MongoDB realizada com sucesso!');
}).catch((erro) => {
    console.log('Erro: Conexão com MongoDB não foi realizada com sucesso!')
});

app.get('/', (req, res) => {
   
    Cadastro.find({}).then((cadastro) => {
        return res.json(cadastro)
    }).catch((err) => {
        return res.status(400).json({
            error: true,
            message: "Nenhum cadastro encontrado!"
        })
    })
});

app.get("/cadastro/:id", (req, res) => {
    Cadastro.findOne({_id: req.params.id}).then((cadastro) => {
        return res.json(cadastro);
    }).catch((err) => {
        return res.status(400).json({
            error: true,
            message: "Nenhum cadastro encontrado!"
        })
    })
})


app.post('/cadastro', (req, res) => {
    const cadastro = Cadastro.create(req.body, (err) => {
        if(err) return res.status(400).json({
            error: true,
            message: "Error: Cadastro não efetuado."
        })

        return res.status(200).json({
            error: false,
            message: "Cadastro efetuado com sucesso."
        })
    })
});

app.put("/cadastro/:id", (req, res) => {
    const cadastro = Cadastro.updateOne({ _id: req.params.id}, req.body, (err) =>{
        if(err) return res.status(400).json({
            error: true,
            message: "Error: Cadastro não foi editado com sucesso!"
        });

        return res.json({
            error: false,
            message: "Cadastro editado com sucesso!"
        });
    });
});

app.delete("/cadastro/:id", (req, res) => {
    const cadastro = Cadastro.deleteOne({_id: req.params.id}, (err) => {
        if(err) return res.status(400).json({
            error: true,
            message: "Error: Cadastro não foi deletado com sucesso."
        });

        return res.json({
            error: false,
            message: "Cadastro foi deletado com sucesso!"
        })
    })
})

app.listen(8080, () => {
    console.log("Servidor rodando na porta 8080: http://localhost:8080/");
});