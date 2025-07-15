import React from "react";

const WayToPost = () => {
    return (
        <div className="relative bg-[#D4E6F9] desktop:h-[485px] tablet:h-[805px]">
            <div className="relative max-w-[1920px]  w-full flex mx-auto justify-center items-center">
                <div className="relative  desktop:max-w-[1184px] desktop:px-[20px] desktop:w-full tablet:w-full mx-auto tablet:h-[850px] mobile:h-[757px] h-[539.34px] flex flex-col items-center ">

                    <div className="relative  tablet:h-[799px] mobile:h-[757px] w-full flex desktop:flex-row flex-col">

                        <div className="w-[496.42px] mobile:w-[347px] desktop:h-[307px] tablet:h-[307px] tablet:mx-auto mobile:mx-auto desktop:my-[95px]
                        tablet:mt-[75px] mobile:mt-[50px] flex flex-col mobile:items-center tablet:items-center">
                            <h1 className="text-[#3C3E41] text-[40px] mobile:text-[28px] leading-[48px] mobile:font-variation-customOpt28 font-variation-customOpt40">
                                Osmrtnice
                            </h1>

                            <p className="text-[24px] mobile:text-[20px] mobile:leading-[36px] leading-[48px] mobile:mt-[16px] mt-[5px] font-bold mobile:font-variation-customOpt20
                             font-variation-customOpt24 text-[#3C3E41]">
                            Toplejši način objavljanja osmrtnic
                            </p>

                            <p className="mt-[42px] text-[#3C3E41] tablet:text-center mobile:text-center mobile:mt-[42px] mobile:px-[20px] text-[18px] leading-[27px] font-variation-customOpt18">
                            Spomnimo se, kako so strani z osmrtnicami vedno tako zelo puste, 
                            hladne, kako izžarevajo popolnoma drugače, 
                            kot so naši najdražji, ki jih imamo v spominu. Ni treba, da je tako. 
                            </p>

                            <img src="spominska_laptop.avif" alt="memory_mac" className="hidden mx-auto mt-[42px] mobile:flex w-[341px] h-[213px]" />

                            <p className="mt-[28px] text-[#3C3E41] tablet:text-center mobile:text-center mobile:mt-[42px] px-[2px] text-[18px] leading-[27px] font-variation-customOpt18">
                            Sodoben, celovit, predvsem pa toplejši 
                            način objavljanja osmrtnic prilagojen času in potrebam žalujočih.   
                            </p>
                        </div>

                        <img src="spominska_laptop.avif" alt="memory_mac" className=" mobile:hidden desktop:ml-[1/2] h-[459.49px] w-[636.81px] 
                        desktop:mt-[103.84px] desktop:object-contain tablet:mx-auto tablet:mt-[64px] tablet:w-[659px] tablet:h-[411px]" />
                    </div>         
                </div>
            </div>
            <div className="h-[54.34px] mobile:hidden tablet:h-[75px] tablet:mt-[-52px] mt-[-55px] w-full"/>
        </div>
    );
}

export default WayToPost