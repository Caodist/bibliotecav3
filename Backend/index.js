const express = require('express');
const morgan = require('morgan');
const multer = require('multer');
const path = require('path');

//inicializacion 
const app = express();

//seteo de puerto
app.set('port',3000);

//middleware
app.use(morgan('dev'));
const storage = multer.diskStorage({
//para crear los path donde van a ir los archivos 
destination: path.join(__dirname,'public/uploads'),
filename(req ,file ,cb){
    cb(null,new Date().getTime() + path.extname(file.originalname));
}
})
app.use(multer({storage})).single('pdf');
app.use(express.urlencoded({extended: false}));
app.use(express.json());

//routes
// app.use(require('./routes/scores'));



///static files
//app.use(express.static(path.join(__dirname,'public')));

//start server
app.listen(app.get('port'), () => {
console.log('server on port', app.get('port'));
})