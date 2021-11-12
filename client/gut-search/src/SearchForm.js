import React, { useState } from 'react';

const SeactForm = ({ sendSearchQuery }) => {
  const [search, setSearch] = useState('');


  const handleClick = () => {
    sendSearchQuery(search);
    setSearch('');
  }

  const luckyAuthors = ['dickens', 'tolstoy', 'wilde', 'austen', 'twain', 'shakespeare', 'joyce', 'dostoyevsky', 'christie', 'hugo', 'hemingway', 'doyle', 'lewis', 'stevenson', 'andersen', 'woolf', 'grimm']
  
  const returnRandomAuthor = (arr) => {
  const range = arr.length - 1;
  const randomIndex = Math.floor(Math.random() * range);
  return luckyAuthors[randomIndex];
}

  const handleRandomClick = () => {
    const author = returnRandomAuthor(luckyAuthors);
    sendSearchQuery(author);
  }

  return (
    <div className="search-box">
      <input type="text" name="search" value={search} onChange={e=>setSearch(e.target.value)} placeholder="Search for an author..."></input>
      <div className="search-box-buttons-container">
      <button onClick={() => handleRandomClick()}>Surprise</button>
      <button onClick={() => handleClick()}>Search</button> 
      </div>
    </div>
  )
}

export default SeactForm;