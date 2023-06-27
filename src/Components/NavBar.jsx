import React from "react";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

const NavBar = () => {
  return (
    <nav className="fixed flex flex-col top-[48px] left-0 bottom-[22px] h-full p-2 border-[#242424] border-r text-sm">
      <span className="mb-4 p-2 hover:bg-[#242424]">
          <a target="_blank" className="relative" href="https://github.com/yash-blmnm" rel="noreferrer">
            <GitHubIcon sx={{ color: '#fff' }} fontSize="small" />
          </a>
      </span>
      <span className="mb-4 p-2 hover:bg-[#242424]">
        <a target="_blank"className="relative" href="https://www.linkedin.com/in/yasaswini-balasubramaniam/" rel="noreferrer">
          <LinkedInIcon sx={{ color: '#fff' }} fontSize="small" />
        </a>
      </span>
    </nav>
  );
};

export default NavBar;
