import React, { useState } from "react";
// import "../src/app.css";
import "/Users/julissaortiz/bootcamp/updatedPortfolio/src/utils/App.css";
import Header from "/Users/julissaortiz/bootcamp/updatedPortfolio/src/components/Header.js";
import Footer from "/Users/julissaortiz/bootcamp/updatedPortfolio/src/components/Footer";

import About from "/Users/julissaortiz/bootcamp/updatedPortfolio/src/components/About.js";
import Portfolio from "/Users/julissaortiz/bootcamp/updatedPortfolio/src/components/Portfolio.js";
import Resume from "/Users/julissaortiz/bootcamp/updatedPortfolio/src/components/Resume.js";
import Contact from "/Users/julissaortiz/bootcamp/updatedPortfolio/src/components/Contact.js";

function App() {
  const [page, setPage] = useState("about");

  const handlePage = (name) => {
    setPage(name);
  };

  const renderPage = () => {
    switch (page) {
      case "about":
        return <About />;
      case "portfolio":
        return <Portfolio />;
      case "resume":
        return <Resume />;
      case "contact":
        return <Contact />;
      default:
        return <About />;
    }
  };

  return (
    <div className="font-rem flex flex-col min-h-screen">
      <div className="header-app">
        <Header handlePage={handlePage} page={page} />
      </div>
      <div className="content flex-grow bg-black text-white">
        {renderPage()}
      </div>
      <div className="footer-app">
        <Footer />
      </div>
    </div>
  );
}

export default App;
