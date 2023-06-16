import React from "react";
import { GitHub, LinkedIn } from "@material-ui/icons";

const NavBar = () => {
  return (
    <nav className="fixed flex flex-col top-[48px] left-0 bottom-[22px] h-full p-2 border-[#242424] border-r ">
      <span className="mb-3">
        <a className="p-2 hover:bg-[#242424] relative" href="https://github.com/yash-blmnm">
          <GitHub sx={{ color: '#fff' }} fontSize="small" />
        </a>
      </span>
      <span className="mb-3">
        <button className="p-2 hover:bg-[#242424] relative" href="https://www.linkedin.com/in/yasaswini-balasubramaniam/">
          <LinkedIn sx={{ color: '#fff' }} fontSize="small" />
        </button>
      </span>
    </nav>
  );
};

export default NavBar;
