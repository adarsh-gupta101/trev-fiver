import React from "react";
import FloatingWhatsApp from "react-floating-whatsapp";

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
      <FloatingWhatsApp
        style={{ ZIndex: 10 }}
        phoneNumber={+263732774218}
        accountName='TrendOnlineDigital'
        avatar='/assets/img/logo trend.png'
      />

      {/* <Certifications/> */}
      {/* <About/> */}

      <Footer />
    </div>
  );
}

export default ITS;
