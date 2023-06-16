import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const QuoteCard = () => {
  const [quotes, setQuotes] = useState([]);
  const [randomQuote, setRandomQuote] = useState("");

  return (
    <div className="card">
      <div className="card-header">Insporational Quotes</div>
      <div className="card-body text-center">
        <p>Today's Quote</p>
        <h5>By Author</h5>
        <div className="flex">
          <div className="child1">
            <a>
              <FontAwesomeIcon icon={["fab", "apple"]} />
              <i className="fab fa-twitter"></i>
            </a>
          </div>
          <div className="child2">
            <a>
              <FontAwesomeIcon icon={["fab", "facebook-f"]} />
              <FontAwesomeIcon icon={["fab", "twitter"]} />
            </a>
          </div>
          <div className="child3">
            <button>New Quote</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuoteCard;
