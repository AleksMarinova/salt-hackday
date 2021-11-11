import React, { useState } from 'react';

const SeactForm = ({ sendSearchQuery }) => {
  const [search, setSearch] = useState('');


  const handleClick = () => {
    sendSearchQuery(search);
    setSearch('');
  }

  return (
    <div className="search-box">
      <input type="text" name="search" value={search} onChange={e=>setSearch(e.target.value)} placeholder="Search for an author..."></input>
      <button onClick={() => handleClick()}>Search</button>
    </div>
  )
}

export default SeactForm;