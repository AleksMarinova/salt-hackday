import React from 'react';
import Book from './Book';
import Quote from './Quote';

const BooksContainer = ({apiData, query}) => {

const returnFromComponent = (apiData, query) => {
  if(!apiData) {
    return (
      <Quote />
    )
  } 
  if(apiData.count === 0) {
    return (
      <h2 className="prompt-container">Sorry, no results for {query}</h2> 
    )
  }
  
  return (

    <section className="books-container">
      {
        apiData.results.map(book => <Book key={Math.random()} bookInfo={book} />)
      }
    </section>
  )
}

 return (
   <section className="booksContainer">
     {returnFromComponent(apiData, query)}
   </section>
 )
  }

export default BooksContainer;
