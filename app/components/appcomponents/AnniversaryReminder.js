import React from "react";


const AnniversaryReminder = () => {
    return (
        <div className="w-full mobile:bg-[#D4E6F9] bg-[#ecf0f3] mobile:pt-[3px] mobile:pb-[21px]">
            <div className="max-w-[1920px] desktop:h-[384.99px] tablet:py-[75px] mobile:h-[591px] w-full mx-auto flex justify-center items-center">
                <div className="max-w-[935px] w-full desktop:w-auto tablet:w-[639px] tablet:h-auto mobile:h-[564px] h-[228.83px] flex flex-row mobile:flex-col items-center">

                    <div className="desktop:h-[201px] mobile:mt-[35px] w-[639px] mobile:w-[295px] desktop:mr-[26px] tablet:mr-[26px] flex flex-col">
                        <div className="text-[#3090D5] text-[14px]">
                            KORISTNO
                        </div>

                        <div className="text-[40px] mobile:mt-[4px] mobile:text-[28px] mobile:font-variation-customOpt28 
                    mobile:leading-[32.81px] mt-[-4px] text-[#1E2125] font-variation-customOpt40">
                            Opomnik za obletnice
                        </div>

                        <div className="text-[#686868] mt-[3px] mobile:mt-[23px] text-[16px] font-variation-customOpt16 leading-[20.8px]">
                            <p className="block mobile:hidden">Spominske strani na katerih sodelujete (oddate sožalje, se vpišete v Žalno knjigo, itd.)
                                se vam shranijo v vaš uporabniški račun. Poleg ostalega,
                                so tam tudi informacije o prihajajočih obletnicah - in obvestila o le-teh boste pravočasno prejemali tudi na spletno pošto. </p>

                            <p className="hidden mobile:block">Spominske strani na katerih sodelujete (oddate sožalje, se vpišete v Žalno knjigo, itd.) 
                                se vam shranijo v vaš uporabniški račun (glej primer spodaj). </p>

                            <p className="hidden mobile:block mobile:mt-[3px]">Poleg ostalega, so tam tudi informacije o prihajajočih obletnicah - 
                                in obvestila o le-teh boste pravočasno prejemali tudi po spletni pošti.</p>

                        </div>

                        <p className="text-[#686868] text-[16px] mt-[21px] leading-[20.8px] font-variation-customOpt16">
                            Nikoli več ne boste zamudili obletnice.
                        </p>
                    </div>

                    <img src="/opomnik_obletnic.avif" alt="anniversary_reminder_img" className="h-[270px] mobile:w-[258.27px] object-contain w-[228.83px]" />

                </div>

            </div>
        </div>
    );
}

export default AnniversaryReminder