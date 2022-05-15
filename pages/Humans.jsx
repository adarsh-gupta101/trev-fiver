import React from "react";
import FloatingWhatsApp from "react-floating-whatsapp";
// import About from "./components/about";
// import Certifications from "./components/Certifications";
import Footer from "./components/footer";
import Header from "./components/header";
// import Solutions from "./components/solutions";
import Solutions2 from "./components/solutions2";
import Solutionsdrop from "./components/solutiondrop2";
// import Solutionscontainer from "./components/utils/solutionscontainer";

function Humans() {
  return (
    <div style={{        background:'url("https://img.freepik.com/free-vector/elegant-white-background-with-shiny-lines_1017-17580.jpg?w=2000")'
  }}>
      <Header />
      <Solutions2></Solutions2>
      <FloatingWhatsApp
        style={{ ZIndex: 10 }}
        phoneNumber={+263732774218}
        accountName='TrendOnlineDigital'
        avatar='/assets/img/logo trend.png'
      />
      {/* <Solutionscontainer/> */}
      <Solutionsdrop />

      {/* <Certifications/> */}
      {/* <About/> */}

      <Footer />
    </div>
  );
}

export default Humans;
