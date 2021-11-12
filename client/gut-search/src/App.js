import React, {useState, useEffect} from 'react';
import './App.css';
import Header from './Header';
// import Footer from './Footer';
import SearchForm from './SearchForm';
import BooksContainer from './BooksContainer';

function App() {
 const [query, setSearchQuery] = useState('');
 const [apiData, setApiData] = useState('');
 

 const getSearchQuery = (data) => {
   setSearchQuery(data);
 }

 useEffect(() => {
   if(query === '') return;
    const getData = async () => {
      try{
        const rawApiData = await (fetch(`http://localhost:3000/${query}`));
        const data = await rawApiData.json();
        setApiData(data);
      }catch(e){
        console.log(e.message);
      }
   }
   getData();
 },[query])



  return (
    <div className="App">
      <Header />
      <SearchForm sendSearchQuery={getSearchQuery} />
      <BooksContainer apiData={apiData} query={query} />
    </div>
  );
}

export default App;
