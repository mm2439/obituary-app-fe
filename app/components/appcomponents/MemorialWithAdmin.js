import React from "react";

const MemorialWithAdmin = () => {

    return (
        <div className="relative bg-[#D4E6F9] desktop:h-[485px] tablet:h-[800px]">
        <div className="relative max-w-[1920px] w-full flex mx-auto justify-center items-center">
            <div className="relative desktop:max-w-[1184px] desktop:px-[20px] desktop:w-full tablet:w-full mx-auto tablet:h-[850px] mobile:h-[850px] h-[539.34px] flex flex-col items-center ">

                <div className="relative h-[485px] tablet:h-[799px] mobile:h-[757px] w-full flex desktop:flex-row flex-col">

                    <div className="text-left w-[496.42px] mobile:w-[293px] desktop:h-[307px] tablet:h-[307px] desktop:pl-[30px] tablet:mx-auto mobile:mx-auto desktop:mt-[98.84px] 
                    tablet:mt-[67px] mobile:mt-[50px] flex flex-col mobile:items-center tablet:items-center">
                        <h1 className="text-[#3C3E41] text-[40px] desktop:whitespace-nowrap mobile:text-[28px] mobile:text-center leading-[48px] mobile:font-variation-customOpt28 font-variation-customOpt40">
                        Spominska stran s <span className="text-[#0A85C2] font-semibold">Skrbnikom</span>
                        </h1>

                        <p className="text-[24px] mobile:text-[20px] mobile:px-3 mobile:text-center mobile:leading-[32px] leading-[48px] mobile:mt-[16px] mt-[5px] font-bold mobile:font-variation-customOpt24
                         font-variation-customOpt24 text-[#3C3E41]">
                        Nadgradnja v pravo spominsko stran
                        </p>

                        <p className="mt-[16px] text-[#3C3E41] tablet:text-center mobile:text-center mobile:px-[20px] text-[18px] leading-[27px] font-variation-customOpt18">
                        Skrbnik (običajno nekdo, ki je bil pokojnemu blizu) omogoči številne dodatne
                         možnosti personalizacije spominske strani in jo naredi stran bolj osebno, bolj toplo, bolj življenjsko. 
                        </p>

                        {/* <img src="img_way_to_post_mac.png" alt="memory_mac" className="hidden mx-auto mt-[42px] mobile:flex w-[341px] h-[213px]" /> */}

                        <p className="mt-[28px] text-[#3C3E41] tablet:text-center mobile:text-center mobile:mt-[42px] px-[2px] text-[18px] leading-[27px] font-variation-customOpt18">
                        Hkrati skrbnik omogoči tudi več brezplačnih možnosti družini, prijateljem in 
                        nasploh vsem obiskovalcem na strani, ker sam kontrolira, kaj bo objavljeno in kaj ne.      
                        </p>
                    </div>

                    <img src="spominska_laptop.png" alt="memory_mac" className=" desktop:ml-[1/2] h-[459.49px] desktop:object-contain w-[670.81px] 
                    desktop:mt-[96.84px] tablet:mx-auto tablet:mt-[64px] tablet:w-[659px] tablet:h-[411px] mobile:mt-[42px] mobile:mx-auto mobile:w-[320px] mobile:h-[213px]" />
                </div>
                
            </div>
        </div>
        <div className="h-[54.34px] mobile:hidden tablet:h-[50px] tablet:mt-[-52px] mt-[-55px] bg-transparent w-full"/>
    </div>
    );

}

export default MemorialWithAdmin;