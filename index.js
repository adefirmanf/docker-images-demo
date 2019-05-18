const app = require('express')();
const bodyParser = require('body-parser');

app.use(bodyParser.json());

app.get('/', (req, res, next) => {
  res.json('Hello world');
});

app.post('/todo', (req, res, next) => {
  console.log(req.body);
});

app.listen(3000, () => {
  console.log(`Port is listening on 3000`);
});
