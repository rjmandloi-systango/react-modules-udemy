import React, { useEffect } from "react";
import { Link, Route, useParams, useRouteMatch } from "react-router-dom";
import HighlightedQuote from "../quotes/HighlightedQuote";
import Comments from "../comments/Comments";
import useHttp from "../hooks/use-http";
import { getSingleQuote } from "../lib/api";
import LoadingSpinner from "../UI/LoadingSpinner";

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
export default function QuotesDetail() {
  const {
    sendRequest,
    status,
    data: loadedQuote,
    error,
  } = useHttp(getSingleQuote, true);
  const match = useRouteMatch();
  // console.log(match);
  const { quoteId } = useParams();
  // const selectedQuote = DUMMY_QUOTES.find((quote) => quote.id === quoteId);
  // console.log(selectedQuote);

  useEffect(() => {
    sendRequest(quoteId);
  }, [sendRequest, quoteId]);

  if (!loadedQuote) {
    return <h1>No quote found</h1>;
  }
  if (status === "pending") {
    return (
      <div className="centered">
        <LoadingSpinner />
      </div>
    );
  }
  if (error) {
    return <p className="centered">{error}</p>;
  }
  return (
    <div>
      <HighlightedQuote
        text={loadedQuote.text}
        author={loadedQuote.author}
      ></HighlightedQuote>
      <Route path={match.path} exact>
        <div className="centered">
          <Link className="btn--flat" to={`${match.url}/comments`}>
            Load comments
          </Link>
        </div>
      </Route>

      <Route path={`${match.path}/comments`} exact>
        <Comments></Comments>
      </Route>
    </div>
  );
}
