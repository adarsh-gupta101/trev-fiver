import React from "react";
import Solutionscontainer from "./utils/solutionscontainer";

function Solutionsdrop() {
  return (
    <div className=' md:bg-whie md:shadow-2xl p-2 w-full  md:w-4/5  m-auto mt-4 mb-4  z-4 rounded-xl'>
      <p className=' mx-12 md:mx-24 my-12 font-bold text-4xl text-center'>SOFTWARE DEVELOPMENT</p>

      <Solutionscontainer  drop={2}/>
    </div>
  );
}

export default Solutionsdrop;
