import "./App.css";
import QuoteCard from "./components/QuoteCard";

function App() {
  return (
    <div
      className="app"
      style={{ backgroundColor: "#dcdcdc", minHeight: "100vh" }}
    >
      <div className="container pt-5 main-container">
        <div className="jumbotron" id="quote-box">
          <QuoteCard />
          <div className="text-center pt-5">
            <b>By Yash</b>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
