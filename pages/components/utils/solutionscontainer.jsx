import React, { useState } from "react";
import { Fade as Hamburger } from "hamburger-react";
import Sol1Json from "./solutionutils.json";
import S012Json from "./sol2.json"

import Induvidualsolution from "./Induvidualsolution";

function Solutionscontainer({drop}) {
 
const solution=drop==2?S012Json:Sol1Json;
  return (

  

    <div className=' py-6 md:mx-24 bg-white shadow-sm '>
      { solution.map((item, index) => {
        return (

          <Induvidualsolution key={index} item={item}/>

        )})}
    </div>
  
  );
}

export default Solutionscontainer;
