import React from "react";

import Header from "../../layouts/Header";
import Navigation from "../../layouts/Navigation";
import PageHolder from "../../layouts/PageHolder";
import Footer from "../../layouts/Footer";

import PageInfo from "../PageInfo";

function App() {
  return (
    <>
      <Header />
      <Navigation />
      <React.Suspense fallback={<PageInfo>Loading content...</PageInfo>}>
        <PageHolder />
      </React.Suspense>
      <Footer />
    </>
  );
}

export default App;
