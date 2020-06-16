import React from "react";

import { Header, Navigation, PageHolder, Footer } from "layouts";

import PageInfo from "components/PageInfo";

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
