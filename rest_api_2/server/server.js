const express = require('express');
const app = express();
const rote = require('./route/postsRoute');

app.use('/', rote);

app.listen(3000, ()=>{
    console.log('Servidor ouvindo na porta 3000...')
});
