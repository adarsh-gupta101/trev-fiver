import React from "react";

import Footer from "./components/footer";
import Header from "./components/header";
import Solutions2 from "./components/solutions";
import Solutionsdrop from "./components/Solutionsdrop";

function ITS() {
  return (
    <div style={{        background:'url("https://img.freepik.com/free-vector/elegant-white-background-with-shiny-lines_1017-17580.jpg?w=2000")'
  }}>
      <Header />
      <Solutions2></Solutions2>
      {/* <Solutionscontainer/> */}
      <Solutionsdrop/>

      {/* <Certifications/> */}
      {/* <About/> */}

      <Footer />
    </div>
  );
}

export default ITS;
