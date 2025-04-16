import React from "react";
import Image from "next/image";

const SayingsOfCondolenceField = ({name, key, onPress}) => {
    return (
        
        <div onClick={onPress} key={key} className="rounded-[6px] py-[11px] px-[21px] bg-[#F2F8FF66] cursor-pointer shadow-custom-dark-to-white w-full">
            <div className="flex flex-row justify-between items-center">
                <div className="w-full mr-[10px] text-[15px] leading-[18px] font-variation-customOpt14 italic">
                {name}
                </div>

                <div className="w-[22px] h-[22px]">
                    <Image
                    src={"/ico_add_condolence.png"}
                    alt=""
                    width={22}
                    height={22}
                    />
                </div>
                    
            </div>


        </div>
    );
}

export default SayingsOfCondolenceField;