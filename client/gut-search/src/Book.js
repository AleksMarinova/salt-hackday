import React from 'react';

const Book = ({bookInfo}) => {
  return (
    <div className="book-card">
       <h3 className="book-card-title">{bookInfo.title}</h3>
       <h4 className="book-card-author">{bookInfo.authors[0].name}</h4>
      <a className="book-card-download" href={bookInfo.formats["application/epub+zip"]}>Download</a>
    </div>
  )
}

export default Book;
