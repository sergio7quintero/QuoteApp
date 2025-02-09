import { useState, useEffect } from "react";
import "../App.css";

const Quotes = () => {
  const [quote, setQuote] = useState("");
  const [error, setError] = useState(null);

  const fetchQuote = async () => {
    try {
      setError(null);
      const response = await fetch("https://api.api-ninjas.com/v1/quotes", {
        headers: { "X-Api-Key": "6Lgyi9BxpcKQXC9SiSsocg==A7MNOhzwUcjPmuUN" },
      });

      if (!response.ok) {
        throw new Error("Failed to fetch quote");
      }

      const data = await response.json();
      setQuote(data[0].quote);
    } catch (err) {
      setError(err.message);
    }
  };

  useEffect(() => {
    fetchQuote();
  }, []);

  return (
    <div className="quote-container">
      <h2>Random Quote</h2>
      {error ? (
        <p className="error">{error}</p>
      ) : (
        <p className="quote">{quote}</p>
      )}
      <button className="quote-button" onClick={fetchQuote}>
        New Quote💜
      </button>
    </div>
  );
};

export default Quotes;
