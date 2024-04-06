import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Header";
import Home from "./Home";
import Portfolios from "./Portfolios";
import Pricing from "./Pricing";
import Contacts from "./Contacts";
import OurApp from "./OurApp";
import Dev from "./Dev";
import Hire from "./Hire";
import PageNotFound from "./PageNotFound";
import Work from "./Work";


const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Header />}>
            <Route index element={<Home />} />
            <Route path="/iotappdevelopment" element={<Dev />} />
            <Route path="/portfolio" element={<Portfolios />} />
            <Route path="/ourapp" element={<OurApp />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/contact" element={<Contacts />} />
            <Route path='/howwework' element={<Work/>}/>
          </Route>
          <Route path="/hire" element={<Hire />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
