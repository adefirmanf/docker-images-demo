const app = require('express')();
const redis = require('redis');

// app.use(bodyParser.json());
const redisClient = redis.createClient({
  host: 'redis-server',
  port: 6379
});

redisClient.set('visit', 0);

app.get('/', (req, res, next) => {
  res.json('Hello world');
});

app.get('/visit', async (req, res, next) => {
  redisClient.get('visit', (err, count) => {
    redisClient.set('visit', parseInt(count) + 1);
    res.json(`Total visitor : ${count}`);
  });
});

app.listen(3000, () => {
  console.log(`Port is listening on 3000`);
});
