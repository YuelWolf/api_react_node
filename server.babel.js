import express from 'express';

const app = express();
app.use('/assets',express.static(__dirname + '/assets'))/*traer los estilos, scripts y media*/
app.use('/', express.static('public'));

app.listen(process.env.PORT || 3000);
