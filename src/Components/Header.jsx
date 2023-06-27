import React from "react";
import Avatar from '@mui/material/Avatar';
import Yasaswini from '../images/Yasaswini.jpeg'

const Header = () => {
    return <div className="fixed flex flex-row w-full border border-[#242424] h-[48px] px-2 text-[#ffffffbf] items-center justify-between">
        <div>Portfolio</div>
        <div className="flex flex-row items-center space-x-2 justify-self-end">
             <span>Yasaswini Balasubramaniam</span>
            <Avatar alt="Yasaswini" src={Yasaswini} sx={{ width: 24, height: 24 }} />
        </div>
    </div>
}

export default Header;