import React, { useEffect, useState } from "react";
import "./QuoteCard.css";

const QuoteCard = () => {
  const [quotes, setQuotes] = useState([]);
  const [randomQuote, setRandomQuote] = useState("");

  useEffect(() => {
    async function fetchData() {
      const response = await fetch("https://type.fit/api/quotes");
      const data = await response.json();
      // console.log(data);
      setQuotes(data);
      let randIdx = Math.floor(Math.random() * data.length);
      setRandomQuote(data[randIdx]);
      // console.log(data[randIdx]);
    }
    fetchData();
  }, []);

  const getNewQuoteHandler = () => {
    let randIdx = Math.floor(Math.random() * quotes.length);
    setRandomQuote(quotes[randIdx]);
  };

  return (
    <div className="card">
      <div className="card-header">Inspirational Quotes</div>
      <div className="card-body text-center">
        {randomQuote ? (
          <>
            <p id="text" className="card-text">
              &quot;{randomQuote.text}&quot;
            </p>
            <h5 id="author" className="card-title mb-4">
              ~{randomQuote.author || "Anonymous"}
            </h5>
          </>
        ) : (
          <h2>Loading...</h2>
        )}
        <div className="flex">
          <div className="child1">
            <a
              href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(
                randomQuote ? randomQuote.text : ""
              )}`}
              className="btn btn-primary btn-block"
              target="_blank"
              id="tweet-quote"
            >
              <b>Share on Twitter</b>
            </a>
          </div>
          <div className="child2">
            <a
              href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
                window.location.href
              )}`}
              className="btn btn-primary btn-block"
              target="_blank"
              rel="noopener noreferrer"
              id="facebook-quote"
            >
              <b>Share on Facebook</b>
            </a>
          </div>
          <div className="child3">
            <button
              id="new-quote"
              onClick={getNewQuoteHandler}
              className="btn btn-success btn-block"
            >
              New Quote
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuoteCard;
