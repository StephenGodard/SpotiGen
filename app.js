import createError from'http-errors';
import express  from 'express';
import path from 'path';
import spotifyController from './controllers/spotifyControllers.js';


const port=3000;

let app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');


app.use(express.static(path.join(__dirname, '/public')));

app.get('/', (req, res) => {
  res.render('index');
});

app.get('/authorize',spotifyController.authorize);
app.get('/callback',spotifyController.callback);
app.get('/get-tracks',spotifyController.getTracks);


app.listen(port, () =>{
  console.log(`Application en écoute à http://localhost:${port}`);
});
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});


module.exports = app;
