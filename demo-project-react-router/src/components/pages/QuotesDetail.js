import React from "react";
import { Link, Route, useParams, useRouteMatch } from "react-router-dom";
import HighlightedQuote from "../quotes/HighlightedQuote";
import Comments from "../comments/Comments";

const DUMMY_QUOTES = [
  {
    id: "1",
    text: "on",
    author: "Max",
  },
  {
    id: "2",
    text: "Jai shree ram",
    author: "Roy",
  },
];
export default function QuotesDetail() {
  const match = useRouteMatch();
  console.log(match);
  const quote = useParams();
  const quoteId = quote.quoteId;
  const selectedQuote = DUMMY_QUOTES.find((quote) => quote.id === quoteId);
  console.log(selectedQuote);
  if (!selectedQuote) {
    return <h1>No quote found</h1>;
  }
  return (
    <div>
      <HighlightedQuote
        text={selectedQuote.text}
        author={selectedQuote.author}
      ></HighlightedQuote>
      <Route path={`/quotes/${quoteId}`} exact>
        <div className="centered">
          <Link className="btn--flat" to={`/quotes/${quoteId}/comments`}>
            Load comments
          </Link>
        </div>
      </Route>

      <Route path={`/quotes/${quoteId}/comments`} exact>
        <Comments></Comments>
      </Route>
    </div>
  );
}
