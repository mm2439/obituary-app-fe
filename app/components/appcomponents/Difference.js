import React from "react";
import ResizableDiv from "./ResizableDiv";

const Difference = () => {
    return (
        <div className="w-full ">
            <div className="max-w-[1920px] w-full mx-auto flex flex-col items-center py-[115px]  pb-[200px] tablet:py-[105px] tablet:pb-[160px] mobile:py-[95px] mobile:pb-[100px]">
                <div className="mx-auto text-[40px] mobile:text-[24px] text-[#3C3E41] flex justify-center  leading-[48px] font-variation-customOpt40">
                    Razlika
                </div>

                <div className="w-full flex max-w-[688px] px-[20px] justify-between flex-row text-[#0A85C2] text-[32px] mobile:text-[24px]  tablet:text-[32px] leading-[48px] 
                font-variation-customOpt32 font-bold gap-[10px] mt-[37px] mobile:mt-[0px]">
                    <div>
                        BREZ skrbnika
                    </div>

                    <div>
                        S skrbnikom
                    </div>
                </div>

                <div className=" w-[400px] h-[500px] mobile:w-[296px] mobile:h-[460px] mx-auto mt-[47px] shadow">
                    <div className=" rounded-t w-full py-4 bg-white  text-[#3C3E41] text-[28px] mobile:text-[20px] flex justify-center align-center
          font-Semibold">
                        Horizontal Preview
                    </div>
                    <ResizableDiv />

                </div>
            </div>
        </div>
    );
}

export default Difference