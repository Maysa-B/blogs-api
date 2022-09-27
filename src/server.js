require('dotenv').config();
const app = require('./app');
const controllers = require('./controllers');
const postRout = require('./routes/postRouter');
const userRout = require('./routes/userRouter');
const categoryRout = require('./routes/categoryRouter');

// não remova a variável `API_PORT` ou o `listen`
const port = process.env.API_PORT || 3000;

// não remova esse endpoint
app.get('/', (_request, response) => {
  response.send();
});

app.use('/user', userRout);
app.use('/categories', categoryRout);
app.use('/post', postRout);

app.post('/login', controllers.login);

app.listen(port, () => console.log('ouvindo porta', port));
