import React from "react";
import About from "./components/about";
import Certifications from "./components/Certifications";
import Footer from "./components/footer";
import Header from "./components/header";
import Solutions from "./components/solutions";
import Solutions2 from "./components/solutions2";
import Solutionsdrop from "./components/Solutionsdrop";
import Solutionscontainer from "./components/utils/solutionscontainer";

function Humans() {
  return (
    <div style={{        background:'url("https://img.freepik.com/free-vector/elegant-white-background-with-shiny-lines_1017-17580.jpg?w=2000")'
  }}>
      <Header />
      <Solutions2></Solutions2>
      {/* <Solutionscontainer/> */}
      <Solutionsdrop />

      {/* <Certifications/> */}
      {/* <About/> */}

      <Footer />
    </div>
  );
}

export default Humans;
