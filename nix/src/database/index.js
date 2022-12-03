const mongoose = require('mongoose');

//iniciar conexão com o banco de dados
mongoose.connect('mongodb://db_purchase:27017/nix',{
    useNewUrlParser: true,
    useUnifiedTopology: true,
});