import React from "react";

const MemorialWithAdmin = () => {

    return (
        <div className="relative bg-[#D4E6F9] desktop:min-h-[485px] tablet:min-h-[600px] mobile:min-h-[500px] py-[30px] mobile:py-[20px] tablet:py-[25px]">
            <div className="relative max-w-[1200px] w-full flex mx-auto justify-center items-center">
                <div className="relative desktop:max-w-[1400px] desktop:px-[30px] tablet:px-[20px] mobile:px-[15px] desktop:w-full tablet:w-full mx-auto flex flex-col items-center">

                    <div className="relative w-full flex desktop:flex-row flex-col desktop:items-start items-center gap-[30px] mobile:gap-[20px] tablet:gap-[25px]">

                        <div className="text-left desktop:w-[600px] tablet:w-full mobile:w-full desktop:flex-shrink-0 tablet:mx-auto mobile:mx-auto desktop:mt-[98.84px] 
                    tablet:mt-[40px] mobile:mt-[20px] flex flex-col mobile:items-center tablet:items-center desktop:px-0 tablet:px-[20px] mobile:px-[15px]">
                            <h1 className="text-[#3C3E41] text-[40px] desktop:whitespace-nowrap mobile:text-[28px] tablet:text-[32px] mobile:text-center tablet:text-center leading-[48px] mobile:leading-[34px] tablet:leading-[38px] mobile:font-variation-customOpt28 font-variation-customOpt40">
                                Spominska stran s <span className="text-[#0A85C2] font-semibold">Skrbnikom</span>
                            </h1>

                            <p className="text-[24px] mobile:text-[20px] tablet:text-[22px] mobile:text-center tablet:text-center mobile:leading-[28px] tablet:leading-[30px] leading-[48px] mobile:mt-[12px] tablet:mt-[15px] mt-[5px] font-bold mobile:font-variation-customOpt24
                         font-variation-customOpt24 text-[#3C3E41]">
                                Nadgradnja v pravo spominsko stran
                            </p>

                            <p className="mt-[16px] mobile:mt-[12px] tablet:mt-[15px] text-[#3C3E41] tablet:text-center mobile:text-center text-[18px] mobile:text-[16px] tablet:text-[17px] leading-[27px] mobile:leading-[24px] tablet:leading-[25px] font-variation-customOpt18">
                                Skrbnik (običajno nekdo, ki je bil pokojnemu blizu) omogoči številne dodatne
                                možnosti personalizacije spominske strani in jo naredi stran bolj osebno, bolj toplo, bolj življenjsko.
                            </p>

                            <p className="mt-[28px] mobile:mt-[16px] tablet:mt-[20px] text-[#3C3E41] tablet:text-center mobile:text-center text-[18px] mobile:text-[16px] tablet:text-[17px] leading-[27px] mobile:leading-[24px] tablet:leading-[25px] font-variation-customOpt18 mb-[20px] mobile:mb-[15px] tablet:mb-[18px]">
                                Hkrati skrbnik omogoči tudi več brezplačnih možnosti družini, prijateljem in
                                nasploh vsem obiskovalcem na strani, ker sam kontrolira, kaj bo objavljeno in kaj ne.
                            </p>
                        </div>

                        <div className="desktop:flex-1 desktop:flex desktop:justify-center desktop:items-start desktop:mt-[70px] tablet:w-full mobile:w-full flex justify-center">
                            <img src="spominska_laptop.png" alt="memory_mac" className="desktop:max-w-[900px] desktop:w-full desktop:h-auto tablet:max-w-[500px] tablet:w-full tablet:h-auto mobile:max-w-[280px] mobile:w-full mobile:h-auto object-contain" />
                        </div>
                    </div>

                </div>
            </div>
            <div className="h-[30px] mobile:h-[20px] tablet:h-[25px] bg-transparent w-full" />
        </div>
    );

}

export default MemorialWithAdmin;