import React, { useEffect } from "react";
import QuoteForm from "../quotes/QuoteForm";
import { useHistory } from "react-router-dom";
import useHttp from "../hooks/use-http";
import { addQuote } from "../lib/api";

export default function NewQuote() {
  const { sendRequest, status } = useHttp(addQuote);
  const history = useHistory();

  useEffect(() => {
    if (status === "completed") {
      history.push("/quotes");
    }
  }, [status, history]);

  const addQuoteHandler = (quoteData) => {
    sendRequest(quoteData);
    // console.log(quoteData);
    history.push("/quotes");
  };

  return (
    <QuoteForm
      isLoading={status === "pending"}
      onAddQuote={addQuoteHandler}
    ></QuoteForm>
  );
}
