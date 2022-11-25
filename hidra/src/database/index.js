const mongoose = require('mongoose');

//iniciar conexão com o banco de dados
mongoose.connect('mongodb://db:27017/hydra',{
    useNewUrlParser: true,
    useUnifiedTopology: true,
});