import React from "react";
import { jelly } from "ldrs";

function Loader() {
  jelly.register();
  return <l-jelly size="40" speed="0.9" color="black"></l-jelly>;
}

export default Loader;
