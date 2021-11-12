import React, {useState, useEffect} from 'react';

const Quote = () => {
  const [quote, setQuote] = useState('');

  const getQuote = async () => {
    const response = await fetch('http://localhost:3000/quote/random');
    const data = await response.json();
    setQuote(data);
  }

  useEffect(() => {
    try{
      getQuote();
    }catch(err){
      console.log(err);
    }
  }, []);

  return (
    <div className="quote"> 
      <h4>{quote.content}</h4>
      <p>{quote.author}</p>
    </div>
  )
};

export default Quote;