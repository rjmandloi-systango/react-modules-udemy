import React from "react";
import QuoteList from "../quotes/QuoteList";
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

export default function AllQuotes() {
  return <QuoteList quotes={DUMMY_QUOTES}></QuoteList>;
}
