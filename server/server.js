import express from 'express';
import cors from 'cors';
import fetch from 'node-fetch';

const app = express();
const port = 3000;
app.use(cors());

app.get('/:author', async (req, res) =>{
  const author = req.params.author;
  const rawBooksData = await fetch(`https://gutendex.com/books?search=${author}`);
  const books = await rawBooksData.json();
  res.send(books);
});

app.get('/quote/random', async (req, res) =>{
  const quote = await fetch('https://api.quotable.io/random');
  const quoteData = await quote.json();
  res.send(quoteData);
})

app.listen(port, () => {
  console.log(`Gutsearch app listening at http://localhost:${port}`);
})
