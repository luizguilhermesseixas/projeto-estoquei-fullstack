import app from './app';

const PORT = 3001;

const server = app.listen(PORT, () => console.log(
  `Server is running on PORT: ${PORT}`,
));

app.get('/', (req, res) => {
  return res.send({message: 'Hello World!'});
});

export default server;
