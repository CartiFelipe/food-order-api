import 'dotenv/config';
import express from 'express';
import app from './app';

app.get('/', (_, res) => {
  res.send('OK');
});

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
