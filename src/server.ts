import express from 'express';

const app = express();

app.get('/', (_, res) => {
  res.send('OK');
});

app.listen(process.env.port ?? 3001, () => {
  console.log('Server is running');
});
