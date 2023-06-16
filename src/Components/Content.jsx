import React from "react";
import Footer from "./Footer";
import NavBar from "./NavBar";
import OutputContent from "./OutputContent";

const Content = () => {
    return (
        <div className="flex flex-col">
            <NavBar />
            <div className="flex flex-row h-auto w-full fixed top-[48px] bottom-[22px] left-[58px] text-white ">
                <div className="border-[#242424] border-r h-full w-[20%]">
                    <div>
                        <div>
                            <span className="">Professional Experience</span>
                        </div>
                    </div>
                    <div>
                        
                    </div>
                    <div>
                        
                    </div>
                </div>
                <div className="border-[#242424] border-r h-full w-[39%]">

                </div>
                <OutputContent />
            </div>
            <Footer />
        </div>
    )

}

export default Content;