import express from 'express';
import fetch from 'node-fetch';

const app = express();
const port = process.env.PORT || 3000;
const Key = 'Krcsjakg007FbyNUYk687vwHvdqiH6KwDtyN3VFD';

app.listen(port, () => {
  console.log(`Nasa app listening at http://localhost:${port}`);
})