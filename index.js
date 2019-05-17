const app = require('express')();

app.get('/', (req, res, next) => {
  res.json('Hello world');
});

app.listen(3000, () => {
  console.log(`Port is listening on 3000`);
});
