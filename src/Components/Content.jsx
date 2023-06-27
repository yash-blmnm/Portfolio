import React, {useState} from "react";
import Footer from "./Footer";
import NavBar from "./NavBar";
// import OutputContent from "./OutputContent";
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';
import ArticleIcon from '@mui/icons-material/Article';
import CloseIcon from '@mui/icons-material/Close';
import {AboutIn, ProfessionalIn, PersonalIn} from "./InputContent";
import { AboutOut, ProfessionalOut, PersonalOut } from "./OutputContent";

const Content = () => {
    const [tab, setTab] = useState('about');
    const [showMail, setshowMail] = useState(false);

    const tabIcons = {
        "about" : {
            name: "AboutME.md",
            icon : <InfoOutlinedIcon sx={{ fontSize: 14 }} color="primary" />,
            input : <AboutIn />,
            output: <AboutOut />
        },
        "profExp" : {
            name: "Professional Experience",
            icon : <InsertDriveFileIcon sx={{ fontSize: 14 }} />,
            input : <ProfessionalIn />,
            output: <ProfessionalOut />
        },
        "personal" : {
            name: "Personal Projects",
            icon : <ArticleIcon sx={{ fontSize: 14 }} />,
            input : <PersonalIn />,
            output: <PersonalOut />
        }
    }

    return (
        <div className="flex flex-col">
            <NavBar />
            <div className="flex flex-row h-auto w-[100% - 36px] fixed top-[48px] bottom-[22px] left-[58px] text-white  text-sm">
                <div className="border-[#242424] border-r h-full w-[20%]">
                    {Object.keys(tabIcons).map(value => {
                        return (<div className="px-4 min-h-[45px] flex items-center flex-row flex-nowrap border-[#242424] border-b hover:bg-[#242424] cursor-pointer"
                        onClick={() => {setshowMail(false); setTab(value)}}>
                            {tabIcons[value].icon}
                            <span className="pl-2">{tabIcons[value].name}</span>
                        </div>)
                    })}
                </div>
                <div className="border-[#242424] border-r h-full w-[39%]">
                    <div className="min-h-[45px] border-[#242424] border-b">
                        {showMail ? 
                        <></> 
                        : 
                        <div className="flex">
                            <div className="border-b border-b-[#6cc7f6] border-r border-r-[#242424] pl-2 h-[45px] w-auto flex flex-row items-center text-xs bg-[#191919]">
                                {tabIcons[tab].icon}
                                <span className="px-2 italic grow">{tabIcons[tab].name}</span>
                                <span className="px-2 cursor-pointer" ><CloseIcon sx={{ fontSize: 12 }} onClick={() => setshowMail(true)}/></span>
                            </div>
                        </div>}
                    </div>
                    <div>
                        <div className="font-mono py-2 pl-2 pr-3">
                            {showMail ? 
                            <></> 
                            :
                            <>{tabIcons[tab].input}</>
                            }
                        </div>
                    </div>
                </div>
                <div className="py-2 px-4 flex-1 h-full bg-white text-[#000] font-sans">
                    {tabIcons[tab].output}
                </div>
            </div>
            <Footer />
        </div>
    )

}

export default Content;