import React from "react";
import Footer from "./components/footer";
import Header from "./components/header";
import Projects from "./components/utils/projects";

function Portfolio() {
  return (
    <div
      style={{
        background:
          'url("https://img.freepik.com/free-vector/elegant-white-background-with-shiny-lines_1017-17580.jpg?w=2000")',
      }}>
      <Header />

      <p className='text-center font-bold text-6xl p-4 md:m-12'>
        OUR PORTFOLIO
      </p>

      <p className='text-center text-xl '>
        We have provided IT Services to many customers from SMEs to Blue Chip
        companies. Check out our portfolio to know where all we have made
        difference!
      </p>

      <Projects />
      <Footer />
    </div>
  );
}

export default Portfolio;
