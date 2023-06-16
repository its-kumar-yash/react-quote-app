import React, { useEffect, useState } from "react";
// import { library } from '@fortawesome/fontawesome-svg-core'
// import { fas } from '@fortawesome/free-solid-svg-icons'
// import { faTwitter, faFontAwesome } from '@fortawesome/free-brands-svg-icons'
// import { faSearch } from "@fortawesome/free-solid-svg-icons";
// library.add(fas, faTwitter, faFontAwesome)

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


  return (
    <div className="card">
      <div className="card-header">Insporational Quotes</div>
      <div className="card-body text-center">
        <p>Today's Quote</p>
        <h5>By Author</h5>
        <div className="flex">
          <div className="child1">
            <a>
              <i className="fab fa-twitter"></i>
            </a>
          </div>
          <div className="child2">
            <a>
            {/* <FontAwesomeIcon icon="fa-solid fa-twitter" /> */}
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
