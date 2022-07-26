import { Redirect, Route } from "react-router-dom";
import { Switch } from "react-router-dom";
import AllQuotes from "../src/components/pages/AllQuotes";
import NewQuote from "../src/components/pages/NewQuote";
import QuotesDetail from "../src/components/pages/QuotesDetail";
import Layout from "./components/layout/Layout";
import NotFound from "./components/pages/NotFound";

function App() {
  return (
    <Layout>
      <Switch>
        <Route path="/" exact>
          <Redirect to="/quotes"></Redirect>
        </Route>
        <Route path="/quotes" exact>
          <AllQuotes></AllQuotes>
        </Route>
        <Route path="/quotes/:quoteId">
          <QuotesDetail></QuotesDetail>
        </Route>
        <Route path="/new-quote">
          <NewQuote></NewQuote>
        </Route>
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
