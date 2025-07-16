import Image from "next/image";
import Link from "next/link";
import React from "react";


const DirectoryEntry = () => {


    const containerArray1 = [
        {
            id: 1,
            title: "Vpis v imenik lokalnih cvetličarn",
            discription: "Vpis v imenik BREZ kontaktnih podatkov in povezav. Uvrstitev v imeniku na spodnja mesta."
        },
    ]
    const containerArray2 = [
        {
            id: 1,
            title: "Vpis v imenik lokalnih cvetličarn",
            discription: "Vpis z vsemi kontaktnimi podatkimi in povezavami do socialnih omrežij."
        },
        {
            id: 2,
            title: "Lastna spletna stran",
            discription: "Brezplačna izdelava, poddomena in gostovanje. Samostojno dodajanje vsebine."
        },
        {
            id: 3,
            title: "Ponudba na straneh osmrtnic",
            discription: "Ponudba cvetličarne se objavlja na straneh osmrtnic v lokalnem okolju, skupaj s povezavo do lastne spletne strani."
        },
        {
            id: 4,
            title: "Kontakt z uporabniki",
            discription: "Neposredni kontakt s strankami za naročila in vprašanja."
        },
    ]
    const containerArray3 = [
        {
            id: 1,
            title: "In brez rizika tudi kasneje",
            discription: "Odpoved naročniškega razmerja je možna kadarkoli, brez navedbe razloga. V primeru letne naročnine vam povrnemo plačilo za nekoriščene mesece nazaj brez vprašanj. Tako zelo smo prepričani v dolgoročno sodelovanje in koristi, ki jih nudi naša spletna storitev. "
        },
        {
            id: 2,
            title: "Brezplačna darila za vaše stranke",
            discription: "Digitalne kartice za pošiljanje naprej, prilagojene mobilnemu telefonu (Obveščanje o pogrebu, Sožalje, Zahvala). Enomesečnega Skrbnika. Mi teh produktov ne nudimo na naših straneh.   "
        },
        {
            id: 3,
            title: "Več strank",
            discription: "Tudi zaradi teh brezplačnih daril bo več strank prišlo v vašo trgovino, kot pa v cvetličarno, ki ni v našem sistemu. Če koristi siceršnjega oglaševanja povsem odmislimo.   "
        },
        {
            id: 4,
            title: "Vse kar zajema prejšnji stolpec - Mesečno",
            discription: "Vključno z brezplačno izdelavo spletne strani."
        },
    ]

    const extraObj = {
        id: 0,
        title: "2 meseca BREZPLAČNO",
        discription: "v primeru letnega plačila"
    }
    const extraObj2 = {
        id: 0,
        title: "Potrebna je samo registracija",
        discription: "Registriraj se tukaj."
    }
    return (
        <div className="flex justify-center bg-[#ECF0F3]">
            <div className="flex flex-col py-[65px] desktop:py-[105px] tablet:py-[75px] ">
                <div className="flex self-center items-center h-[48px]">
                    <div className="mobile:text-[28px] text-[40px] text-[#1E2125] font-variation-customOpt40 font-normal ">
                        Vpis v imenik
                    </div>
                </div>
                <div className="flex flex-col desktop:flex-row mt-[40px] desktop:w-[1090px] tablet:w-[650px] w-[333px] desktop:justify-between" >
                    <div className="flex flex-col tablet:w-[650px] desktop:w-[717px] ">
                        <div className="flex w-full mobile:flex-col flex-row tablet:justify-between ">
                            <div className="flex tablet:w-[310px] desktop:w-[333px]   bg-[#FFFFFF] flex-col ">
                                <div className="w-full h-1 bg-[#0A85C2]" />
                                <div className="flex flex-col w-full desktop:h-[506px] py-[10px]  items-center">
                                    <div className="flex flex-col w-[299px] ">
                                        <div className="flex self-center desktop:h-[33px] ">
                                            <div className="text-[14px] text-[#3090D5] font-normal " >
                                                SAMO VPIS
                                            </div>
                                        </div>
                                        <div className="flex self-center mt-[15px]">
                                            <div style={{                                              
                                                textShadow: "0px 4px 4px #00000025"
                                                }} className="text-[24px] text-[#2D3D48] font-normal " >
                                                BREZPLAČNO
                                            </div>
                                        </div>
                                        <div className="flex flex-col mt-[10px] ">
                                            {containerArray1?.map((item, index) => (
                                                <ContainerView item={item} index={index} key={index} />
                                            ))}
                                        </div>
                                        <div className="hidden mobile:flex flex-col pb-5">
                                            <div className="h-[1px] w-full bg-[#767F84] my-3 " />
                                            <ContainerView item={extraObj2} index={extraObj2?.id} key={extraObj2?.id} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="desktop:w-[37px] tablet:w-[0px] h-[28px]" />
                            <div className="flex tablet:w-[310px] desktop:w-[333px]    bg-[#FFFFFF] flex-col ">
                                <div className="w-full h-1 bg-[#0A85C2]" />
                                <div className="flex flex-col w-full desktop:h-[506px] py-[10px]  items-center">
                                    <div className="flex flex-col w-[299px] ">
                                        <div className="flex self-center desktop:h-[33px] ">
                                            <div className="text-[14px] text-[#3090D5] font-normal " >
                                                STANDARDNA PROMOCIJA
                                            </div>
                                        </div>
                                        <div className="flex self-center mt-[15px] gap-[5px] relative">
                                            <div 
                                             style={{                                              
                                                textShadow: "0px 4px 4px #00000025"
                                                }}
                                            className="text-[24px] text-[#2D3D48] font-normal" >
                                                od 10€ naprej
                                            </div>
                                            <div className="self-center absolute top-[-5px] left-[calc(100%+5px)]">
                                                <div className="text-[13px] text-[#767F84] font-thin w-[50px]" >
                                                    + DDV
                                                </div>
                                            </div>
                                        </div>
                                        
                                        <div className="flex flex-col mt-[10px] ">
                                            {containerArray2?.map((item, index) => (
                                                <ContainerView item={item} index={index} key={index} />
                                            ))}
                                        </div>
                                        <div className="h-[1px] w-full bg-[#767F84] my-3 " />
                                        <ContainerView item={extraObj} index={extraObj?.id} key={extraObj?.id} />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="hidden desktop:flex flex-row w-[100%] mt-[35px] pl-4 pr-5 ">
                            <Image
                                src={'/kako_naprej_icon.png'}
                                width={100}
                                height={100}
                                className="w-4 h-4 mt-[3px]"
                            />
                            <div className="flex flex-col ml-3 " >
                                <div className="text-[#3C3E41] text-[13px] font-medium " >
                                    Kako naprej?
                                </div>
                                <p className="text-[#3C3E41] text-[10px] font-normal " >
                                    Po 30 dneh vam bomo poslali ponudbo za sklenitev mesečne ali letne naročnine.<br/> V primeru, da vam sodelovanje ne
                                    prinaša koristi, enostavno počakajte do konca junija, ko bo vaša stran umaknjena in enako dostop do uporabniškega
                                    računa. Morebitna reaktivacija, tj obnovitev vaše spletne strani bo mogoča še do konca julija, v kolikor si
                                    premislite, kasneje pa gre v izbris.<br/> Pri letni pogodbi sta zadnja dva meseca pogodbenega leta brezplačna. 
                                    V primeru prekinitve letne pogodbe se tako obračunajo koriščeni meseci po ceni mesečnega najema, vnaprej plačan
                                    preostanek pa se vrne naročniku brez vprašanj. S tem zagotovimo naročniku prijazno pogodbo, brez rizika zaradi
                                    dolgoročnosti.
                                </p>

                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col tablet:w-[650px] w-[333px] desktop:mt-0 tablet:mt-6 mobile:mt-[28px] ">
                        <div className="flex w-full mobile:flex-col  flex-row tablet:justify-between ">
                            <div className="flex tablet:w-[310px] w-[333px]  bg-[#FFFFFF] flex-col ">
                                <div className="w-full h-[8px] bg-[#EB1D1D]" />
                                <div className="flex flex-col w-full mobile:h-[579px] h-[670px] py-[10px]  items-center">
                                    <div className="flex flex-col w-[299px] ">
                                        <div className="flex self-center desktop:h-[33px] ">
                                            <div className="text-[14px] text-[#3090D5] font-normal " >
                                                OTVORITVENA PROMOCIJA
                                            </div>
                                        </div>
                                        <div className="flex w-[128px] h-[58px] items-center self-center ">
                                            <div style={{                                              
                                                textShadow: "0px 4px 4px #00000025"
                                                }} className="text-[24px] text-[#2D3D48] font-normal leading-[26.88px] text-center" >
                                                BREZ RIZIKA 50 DNI
                                            </div>
                                        </div>
                                        <div className="flex  self-center items-center justify-center mt-[10px] ">
                                            <p className="text-[14px] text-[#3090D5] font-normal leading-[17.92px] text-center drop-shadow-xl ">
                                                BREZPLAČNO TESTIRANJE <br /> BREZ OBVEZNOSTI
                                            </p>
                                        </div>
                                        <div className="flex flex-col mt-[30px] ">
                                            {containerArray3?.map((item, index) => (
                                                <ContainerView item={item} index={index} key={index} />
                                            ))}
                                        </div>
                                        <div className="mobile:mt-5 mt-6 self-center ">
                                            <p className="text-[14px] text-[#3090D5] font-normal " >
                                                BREZ RIZIKA DEJANSKO POMENI BREZ RIZIKA
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="flex desktop:hidden w-[333px] mobile:mt-[28px] mobile:self-center tablet:w-[310px] flex-col ">
                                <div className="flex w-[299px] self-center flex-col tablet:flex-row tablet:pr-5 tablet:pt-1 ">
                                    <Image
                                        src={'/kako_naprej_icon.png'}
                                        width={100}
                                        height={100}
                                        className="w-5 h-5 mt-[3px]"
                                    />
                                    <div className="flex flex-col tablet:ml-3 mobile:mt-3 " >
                                        <div className="text-[#3C3E41] text-[13px] font-medium " >
                                            Kako naprej?
                                        </div>
                                        <p className="text-[#3C3E41] text-[10px] font-normal " >
                                            V prvih dneh junija vam bomo poslali ponudbo za sklenitev mesečne ali letne naročnine. 
                                            <br /><br /> V primeru, da vam sodelovanje ne prinaša koristi, enostavno počakajte dva tedna, ko bo okrog 20 junija vaša stran umaknjena in enako dostop do uporabniškega računa. Morebitna reaktivacija, tj obnovitev vaše spletne strani bo mogoča še do konca julija, v kolikor si premislite, kasneje pa gre v izbris. 
                                            <br /><br />Pri letni pogodbi sta zadnja dva meseca pogodbenega leta brezplačna. V primeru prekinitve letne pogodbe se tako obračunajo koriščeni meseci po ceni mesečnega najema, vnaprej plačan preostanek pa se vrne naročniku brez vprašanj. S tem zagotovimo naročniku prijazno pogodbo, brez rizika zaradi dolgoročnosti.  
                                        </p>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                <div className="flex flex-col items-center mobile:mt-[40px] mt-[78px] ">
                    <div className="flex mobile:h-[32px] h-[48px] items-center mobile:w-[300px] ">
                        <div className="text-[24px] text-[#1E2125] mobile:text-[20px] mobile:w-full text-center font-variation-customOpt24 font-bold leading-[32px] ">
                            Primer strani za cvetličarne
                        </div>
                    </div>
                    <div className="flex mobile:w-[99px] w-[99px] h-[48px] rounded-lg mt-2 items-center justify-center bg-[#BCD7F4] shadow-custom-light-dark ">
                            <Link href={"/c-primer"}>
                             <div className="text-[16px] text-[#000000] font-variation-customOpt16 font-normal " >
                                Vzorec
                            </div>
                          </Link>

                    </div>
                </div>
            </div>
        </div>
    )
}
const ContainerView = ({ item, index, key }) => {
    return (
        <div className={`flex flex-row ${index == 0 ? "mt-0" : "mt-[14px]"}`}>
            <Image
                key={key}
                src={'/check_circle_icon.png'}
                width={100}
                height={100}
                className="w-[14px] h-[14px] mt-[3px]"
            />
            <div className="flex flex-col ml-3 " >
                <div className="text-[#3C3E41] text-[14px] font-variation-customOpt16 font-medium " >
                    {item?.title}
                </div>
                <p className="text-[#3C3E41] text-[11px] font-variation-customOpt11wdth90XTRA16 font-normal leading-[16px] " >
                    {item?.discription}
                </p>

            </div>
        </div>
    )
}

export default DirectoryEntry