import express from 'express';
import cors from 'cors';
import fetch from 'node-fetch';

const app = express();
const port = process.env.PORT || 3000;
app.use(cors());

app.get('/:author', async (req, res) =>{
  const author = req.params.author;
  console.log(author);
  const rawBooksData = await fetch(`https://gutendex.com/books?search=${author}`);
  const books = await rawBooksData.json();
  res.send(books);
});

app.listen(port, () => {
  console.log(`Gutsearch app listening at http://localhost:${port}`);
})
