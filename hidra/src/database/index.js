const mongoose = require('mongoose');

//iniciar conexão com o banco de dados
mongoose.connect('mongodb://db_user:27017/hidra',{
    useNewUrlParser: true,
    useUnifiedTopology: true,
});