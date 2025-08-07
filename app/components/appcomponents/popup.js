'use client'
import React, { useState } from "react";
import Image from "next/image";
import imgClose from "@/public/ico_close1.png";
import imgBell from "@/public/ico_notification_bell1.png";
import { relative } from "path";
import useScrollbarWidth from "@/app/hooks/useScrollbarWidth";

const List = ({ item, key }) => {
    return (
        <ul>
            <li key={key}>
                <div className="flex flex-col  w-full  mt-[14px] mb-[10px] h-[78px] justify-center items-center px-1">
                    <div className="text-[12px] text-[#3C3E41] leading-[16px] font-variation-customOpt12">
                        <span className="text-[#0A85C2] font-bold"> {item.name} </span>
                        je dodal fotko na spominsko stran
                        <span className="text-[#0A85C2] font-bold"> {item.relative}</span>
                        . Potrebna je tvoja potrditev pred objavo.
                    </div>
                    <div className="w-full flex flex-row justify-end text-[#6D778E] text-[10px] font-variation-customOpt12 leading-[16px]">
                        <div>
                            {item.datetime}
                        </div>
                    </div>
                    <div className="w-[167px] h-[1px] mt-[10px] bg-[#00000033]" />
                </div>
            </li>
            
        </ul>
    );
};
const PopUp = ({ setIsModalVisible }) => {
    const scrollbarWidth = useScrollbarWidth();

    const [isActive, setIsActive] = useState(true)
    const items = [
        {
            name: "Mike M",
            relative: "Angela Graff",
            text1: "je dodal fotko na spominsko stran",
            text2: "Potrebna je tvoja potrditev pred objavo",
            datetime: "12.09.2024  13:44"
        },
        {
            name: "Prof. Baltasar",
            relative: "Steffi Becker",
            text1: "je bil potrjen ko soskrbnik na spominski ",
            text2: "strani",
            datetime: "12.09.2024  13:44"
        },
        {
            name: "Houdini",
            relative: "Steffi Becker",
            text1: "je dodal Posvetilo na spominsko stran",
            text2: "Potrebna je tvoja potrditev pred objavo",
            datetime: "12.09.2024  13:44"
        },

        {
            name: "Admin",
            relative: "",
            text1: "je dodal Posvetilo na spominsko stran",
            text2: "Potrebna je tvoja potrditev pred objavo",
            datetime: "12.09.2024  13:44"
        },
        {
            name: "Mike M",
            relative: "Angela Graff",
            text1: "je dodal fotko na spominsko stran",
            text2: "Potrebna je tvoja potrditev pred objavo",
            datetime: "12.09.2024  13:44"
        },
        {
            name: "Prof. Baltasar",
            relative: "Steffi Becker",
            text1: "je bil potrjen ko soskrbnik na spominski ",
            text2: "strani",
            datetime: "12.09.2024  13:44"
        },
        {
            name: "Houdini",
            relative: "Steffi Becker",
            text1: "je dodal Posvetilo na spominsko stran",
            text2: "Potrebna je tvoja potrditev pred objavo",
            datetime: "12.09.2024  13:44"
        },

        {
            name: "Admin",
            relative: "",
            text1: "je dodal Posvetilo na spominsko stran",
            text2: "Potrebna je tvoja potrditev pred objavo",
            datetime: "12.09.2024  13:44"
        },



    ];


    return (
        <div className="fixed z-50 w-full bg-[#00000030] h-screen  mt-[45px] ">
            <div className="relative mx-auto max-w-[1280px] w-full h-full mt-[5px]">

                <div className=" w-[338px] ml-[5%] z-50 bg-[#FFFFFF] rounded-3xl  flex flex-col items-center fixed shadow-custom-light-dark ">
                    <div className="w-full h-[65px]  items-center flex flex-row justify-between shadow-popup-shadow rounded-t-3xl  ">

                        <div className="w-[160px] ml-[28px] h-[28px] flex flex-row items-center justify-between ">

                            <Image
                                src={imgBell}
                                alt="Notification bell"
                                width={28}
                                height={28}
                            />

                            <div className="text-[24px] ml-4 font-bold underline font-variation-customOpt24 text-[#0A85C2]">
                                POMEMBNE
                            </div>

                        </div>

                        <button onClick={() => {
                            setIsModalVisible(false)
                        }} className="w-[18px] h-[18px] mr-[26px] ">
                            <Image
                                src={imgClose}
                                alt="Close"
                                width={18}
                                height={18}
                            />
                        </button>

                    </div>

                    <div

                        style={{
                            paddingLeft: `${scrollbarWidth}px`,
                        }}


                        className="mx-auto mt-[28.16px] w-full  max-h-[80vh]  h-full overflow-scroll">
                        <div className="w-full h-[25px]  flex flex-row px-[2px]  justify-between items-center">
                            <div onClick={() => { setIsActive(true) }} className="text-[12px] font-semibold  leading-[16px] font-variation-customOpt12 flex flex-col items-center">
                                <div className={isActive ? "text-[#3C3E41]" : "text-[#6D778E]"}>
                                    Neprebrano <span className="text-[#0A85C2]">(4)</span>
                                </div>
                                <div className="w-[96px] h-[2px] mt-[2px] bg-[#0A85C2]" />
                            </div>

                            <div onClick={() => { setIsActive(false) }} className="text-[12px] font-semibold leading-[16px] font-variation-customOpt12 flex flex-col items-center">
                                <div className={isActive ? "text-[#6D778E]" : "text-[#3C3E41]"}>
                                    Označi vse kot prebrane
                                </div>
                                <div className="w-[148px] h-[2px] mt-[2px] bg-[#0A85C2]" />
                            </div>
                        </div>
                        <div className="mt-[14px] mx-auto flex flex-col items-center">
                            {items.map((item, index) => (
                                <List item={item} key={index} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default PopUp;