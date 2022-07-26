import React, { useEffect } from "react";
import QuoteList from "../quotes/QuoteList";
import useHttp from "../hooks/use-http";
import { getAllQuotes } from "../lib/api";
import LoadingSpinner from "../UI/LoadingSpinner";
import NoQuotesFound from "../quotes/NoQuotesFound";

// const DUMMY_QUOTES = [
//   {
//     id: "1",
//     text: "on",
//     author: "Max",
//   },
//   {
//     id: "2",
//     text: "Jai shree ram",
//     author: "Roy",
//   },
// ];

export default function AllQuotes() {
  const {
    sendRequest,
    status,
    data: loadedQuotes,
    error,
  } = useHttp(getAllQuotes, true);
  useEffect(() => {
    sendRequest();
  }, [sendRequest]);

  // console.log(loadedQuotes);

  if (status === "pending") {
    return (
      <div className="centered">
        <LoadingSpinner />
      </div>
    );
  }
  if (error) {
    return <p className="centered focused">{error}</p>;
  }
  if (status === "completed" && (!loadedQuotes || loadedQuotes.length === 0)) {
    return <NoQuotesFound></NoQuotesFound>;
  }

  return <QuoteList quotes={loadedQuotes}></QuoteList>;
}
