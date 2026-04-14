import React, { type JSX } from "react";

import Navigation from "../navigation/Navigation";
const Header = () => {
  return <header className="w-full  p-[var(--padding-small)]">
    <Navigation/>
  </header>;
};

export default Header;
