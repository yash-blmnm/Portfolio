import React, {useState} from "react";
import Footer from "./Footer";
import NavBar from "./NavBar";
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';
import ArticleIcon from '@mui/icons-material/Article';
import CloseIcon from '@mui/icons-material/Close';
import ReplayIcon from '@mui/icons-material/Replay';
import WavingHandIcon from '@mui/icons-material/WavingHand';
import {AboutIn, ProfessionalIn, PersonalIn} from "./InputContent";
import { AboutOut, ProfessionalOut, PersonalOut } from "./OutputContent";
import image from '../images/multitasking.jpg'

const Content = () => {
    const [tab, setTab] = useState('about');
    const [showMail, setshowMail] = useState(false);

    const tabIcons = {
        "about" : {
            name: "AboutME.md",
            icon : <InfoOutlinedIcon sx={{ fontSize: 14 }} color="primary" />,
            url : 'aboutme',
            input : <AboutIn />,
            output: <AboutOut />
        },
        "profExp" : {
            name: "Professional Experience",
            icon : <InsertDriveFileIcon sx={{ fontSize: 14 }} />,
            url : 'experience',
            input : <ProfessionalIn />,
            output: <ProfessionalOut />
        },
        // "personal" : {
        //     name: "Personal Projects",
        //     icon : <ArticleIcon sx={{ fontSize: 14 }} />,
        //     url : 'personal',
        //     input : <PersonalIn />,
        //     output: <PersonalOut />
        // }
    }

    return (
        <div className="flex flex-row w-full">
            <NavBar />
            <div className="flex flex-row grow h-auto fixed top-[48px] bottom-[22px] left-[58px] text-white  text-sm">
                <div className="border-[#242424] border-r h-full w-[16%]">
                    {Object.keys(tabIcons).map(value => {
                        return (<div className="px-4 min-h-[45px] flex items-center flex-row flex-nowrap border-[#242424] border-b hover:bg-[#242424] cursor-pointer"
                        onClick={() => {setshowMail(false); setTab(value)}}>
                            {tabIcons[value].icon}
                            <span className="pl-2 text-ellipsis whitespace-nowrap overflow-hidden">{tabIcons[value].name}</span>
                        </div>)
                    })}
                </div>
                <div className="border-[#242424] border-r h-full w-[40%]">
                {
                    showMail ?
                    <div className="p-2 bg-[#242424] h-full">
                        <section className="p-2">
                            <div className="text-lg mb-4">
                                <span className="mr-2">HI</span>
                                <WavingHandIcon sx={{ fontSize: 20, color: '#ffff45' }} color="yellow" />
                            </div>
                            <div className="flex flex-col gap-4">
                                <div>&emsp;{`As a detail-oriented software developer, I have gained valuable experience in building web pages, creating interactive UI components, and seamlessly integrating 3rd-party APIs.`}</div>
                                <div>&emsp;{`I excel in both independent and collaborative programming, leveraging my expertise in understanding backend interactions to troubleshoot effectively.`}</div>
                                <div>&emsp;{`I take pride in my resourcefulness and my ability to deliver exceptional results.`}</div>
                                <div>{`To know more or to collaborate please drop me a message through LinkedIn, Twitter or `}<a href={'mailto:yasaswini.balasubramaniam@gmail.com'}>email</a></div>
                            </div>
                        </section> 
                    </div>
                    : <>
                    <div className="min-h-[45px] border-[#242424] border-b">
                        <div className="flex">
                            <div className="border-b border-b-[#6cc7f6] border-r border-r-[#242424] pl-2 h-[45px] w-auto flex flex-row items-center text-xs bg-[#191919]">
                                {tabIcons[tab].icon}
                                <span className="px-2 italic grow">{tabIcons[tab].name}</span>
                                <span className="px-2 cursor-pointer" ><CloseIcon sx={{ fontSize: 12 }} onClick={() => setshowMail(true)}/></span>
                            </div>
                        </div>
                    </div>
                    <div>
                    <div className="font-mono py-2 pl-2 pr-3">
                        {tabIcons[tab].input}
                    </div>
                    </div>
                    </>
                }
                </div>
                <div className="flex flex-1 h-full bg-white text-[#000] font-sans min-w-[40%]">
                    <div className="w-full">
                        {showMail ? 
                        <img src={image} alt="Multitaking"/>
                        :
                        <>
                            <div className="bg-[#191919] flex flex-col text-slate-100 px-2">
                                <div className="flex">
                                    <span className="p-2 text-xs">Browser</span>
                                </div>
                                <div className="flex flex-row align-middle mb-2 gap-2">
                                    <span className="p-1"><ReplayIcon sx={{ fontSize: 16, color: '#999999' }} /></span>
                                    <div className="self-center bg-[#242424] text-slate-400 text-xs px-2 py-1 grow">{`https://yasaswini.profile.app/${tabIcons[tab].url}`}</div>
                                </div>
                            </div>
                            <div className="py-2 px-4 overflow-x-scroll h-[calc(100%-90px)]">{tabIcons[tab].output}</div>
                        </>}
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )

}

export default Content;