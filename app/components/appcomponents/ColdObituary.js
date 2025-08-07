import React from 'react'

const ColdObituary = () => {
    return (
        <div className='relative max-w-[1920px] h-[1206px] tablet:h-[1991px] mobile:h-[2160px] w-full overflow-hidden flex mx-auto justify-center items-center'>

            {/*Main contianer*/}
            <div className='flex max-w-[1280px] w-full h-[1043px] tablet:h-[1751px] tablet:max-w-[607px] mobile:h-[2053px] mobile:max-w-[331px] items-center flex-col'>

                {/*Header contianer*/}
                <div className='flex w-[618px] h-[102px] tablet:w-[600px] mobile:w-[296px] mobile:h-[165px] flex-col items-center'>
                    <div className='text-[40px] mobile:text-[28px] text-[#3C3E41] font-variation-customOpt40 mobile:font-variation-customOpt28 text-center mt-[-2px]'>Celovita rešitev v koraku s časom</div>
                    <div className='text-[24px] mobile:text-[20px] text-[#3C3E41] font-variation-customOpt24 mobile:font-variation-customOpt20wght400 mobile:font-bold font-bold text-center mt-[5px] mobile:mt-[26px]'>Ne gre samo za hladno osmrtnico</div>
                </div>

                {/*box 2 contianer*/}
                <p className='flex w-[687px] tablet:w-[600px] h-[81px] tablet:h-[108px] mobile:w-[331px] mobile:h-[189px] text-[18px] text-[#3C3E41] font-variation-customOpt18 text-center mt-[38px] tablet:mt-8 mobile:mt-[46px] leading-[27px] desktop:px-4 mobile:px-3'>Naše osmrtnice izražajo toplino, kakršno so sevali pokojni do svojih bližnjih.
                    In izražajo toplino žalujočih, ki s svojimi sporočili, slikami obujajo spomine na čarobne trenutke, ki so jih delili s pokojnimi in ne pustijo, da gredo prehitro v pozabo.</p>

                {/*box 3 contianer*/}
                <div className='flex w-[1080px] h-[551px] tablet:w-[607px] tablet:h-[608px] mobile:w-[303.79px] mobile:h-[393.85px] flex-row mt-[71px] tablet:mt-[81px] mobile:mt-[58px] items-center'>

                     {/*Image contianer */}
                     <div className='relative tablet:mx-auto'>
                        <div className='h-full w-full absolute z-30' />
                        <img src='/mario_spominska.png' alt='Tablet Image' className='w-[385px] h-[560px] tablet:w-[469px] tablet:h-[608px] mobile:w-[303.79px] mobile:h-[393.85px] rounded-md tablet:mx-auto mobile:mx-auto'></img>
                    </div>

                    {/*Text contianer*/}
                    <div className='hidden w-[577px] h-[532px] ml-[78.5px] flex-col desktop:flex'>

                        {/*text1 contianer for desktop*/}
                        <div className='flex w-[492px] h-[52px]'>
                            <div style={{
                                width: '43px',
                                textShadow: "0px 4px 4px #00000030",
                                marginTop: '2px',
                                marginLeft: '12px',
                                color: '#D4A29C',
                                fontSize: '32px',
                                fontVariationSettings: '"slnt" -10, "wght" 500, "opsz" 32',
                            }}>01.</div>
                            <div className=' h-[27px] mt-2 ml-3 text-[16px] text-[#3C3E41]'>Vse informacije o pokojniku/ci in pogrebu</div>
                        </div>

                        {/*text2 contianer*/}
                        <div className='flex w-[504px] h-[52px] mt-2'>
                            <div style={{
                                width: '43px',
                                textShadow: "0px 4px 4px #00000030",
                                marginTop: '2px',
                                marginLeft: '12px',
                                color: '#D4A29C',
                                fontSize: '32px',
                                fontVariationSettings: '"slnt" -10, "wght" 500, "opsz" 32',
                            }}>02.</div>
                            <div className=' h-[27px] mt-2 ml-3 text-[16px] text-[#3C3E41]'>Vpis v žalno knjigo</div>
                        </div>

                        {/*text3 contianer*/}
                        <div className='flex w-[504px] h-[52px] mt-2'>
                            <div
                                style={{
                                    width: '43px',
                                    textShadow: "0px 4px 4px #00000030",
                                    marginTop: '2px',
                                    marginLeft: '12px',
                                    color: '#E8B298',
                                    fontSize: '32px',
                                    fontVariationSettings: '"slnt" -10, "wght" 500, "opsz" 32',
                                }}
                            >03.</div>
                            <div className=' h-[27px] mt-2 ml-3 text-[16px] text-[#3C3E41]'>Izrekanje sožalja</div>
                        </div>

                        {/*text4 contianer*/}
                        <div className='flex w-[504px] h-[52px] mt-2'>
                            <div
                                style={{
                                    width: '43px',
                                    textShadow: "0px 4px 4px #00000030",
                                    marginTop: '2px',
                                    marginLeft: '12px',
                                    color: '#EDCC8B',
                                    fontSize: '32px',
                                    fontVariationSettings: '"slnt" -10, "wght" 500, "opsz" 32',
                                }}
                            >04.</div>
                            <div className=' h-[27px] mt-2 ml-3 text-[16px] text-[#3C3E41]'>Prižig svečke v spomin</div>
                        </div>

                        {/*text5 contianer*/}
                        <div className='flex w-[574px] h-[52px] mt-2'>
                            <div
                                style={{
                                    width: '43px',
                                    textShadow: "0px 4px 4px #00000030",
                                    marginTop: '5px',
                                    marginLeft: '12px',
                                    color: '#FAE1A4',
                                    fontSize: '32px',
                                    fontVariationSettings: '"slnt" -10, "wght" 500, "opsz" 32',
                                }}


                            >05.</div>
                            <div className=' h-[44px] mt-2 ml-3 text-[16px] text-[#3C3E41]'>Že pripravljena Obvestila o času pogreba za pošiljanje preko mobilnega telefona. Enako pripravljene tudi Zahvala in Izreki sožalja.</div>
                        </div>

                        {/*text6 contianer*/}
                        <div className='flex w-[615px] h-[52px] mt-2'>
                            <div

                                style={{
                                    width: '43px',
                                    textShadow: "0px 4px 4px #00000030",
                                    marginTop: '5px',
                                    marginLeft: '12px',
                                    color: '#BDE1B3',
                                    fontSize: '32px',
                                    fontVariationSettings: '"slnt" -10, "wght" 500, "opsz" 32',
                                }}


                            >06.</div>
                            <div className=' h-[44px] mt-2 ml-3 text-[16px] text-[#3C3E41]'>Direktno kontaktiranje bližnjih cvetličarn preko strani na način, kot ste ga vajeni </div>
                        </div>

                        {/*text7 contianer*/}
                        <div className='flex w-[576px] h-[52px] mt-2'>
                            <div

                                style={{
                                    width: '43px',
                                    textShadow: "0px 4px 4px #00000030",
                                    marginTop: '5px',
                                    marginLeft: '12px',
                                    color: '#9FC7B9',
                                    fontSize: '32px',
                                    fontVariationSettings: '"slnt" -10, "wght" 500, "opsz" 32',
                                }}



                            >07.</div>
                            <div className=' h-[44px] mt-2 ml-3 text-[16px] text-[#3C3E41] leading-[22px]'>Opomniki, ki vas avtomatsko obveščajo pred obletnicami vseh, pri katerih ste se vpisali v Žalno knjigo ali izrekli sožalje</div>
                        </div>

                        {/*text8 contianer*/}
                        <div className='flex w-[576px] h-[52px] mt-2'>
                            <div

                                style={{
                                    width: '43px',
                                    textShadow: "0px 4px 4px #00000030",
                                    marginTop: '2px',
                                    marginLeft: '12px',
                                    color: '#B0E1E3',
                                    fontSize: '32px',
                                    fontVariationSettings: '"slnt" -10, "wght" 500, "opsz" 32',
                                }}


                            >08.</div>
                            <div className=' h-[27px] mt-2 ml-3 text-[16px] text-[#3C3E41]'>Obveščanje o osmrtnicah v domačem kraju</div>
                        </div>

                        {/*text9 contianer*/}
                        <div className='flex w-[576px] h-[52px] mt-2'>
                            <div
                                style={{
                                    width: '43px',
                                    textShadow: "0px 4px 4px #00000030",
                                    marginTop: '5px',
                                    marginLeft: '12px',
                                    color: '#8DD6E2',
                                    fontSize: '32px',
                                    fontVariationSettings: '"slnt" -10, "wght" 500, "opsz" 32',
                                }}

                            >09.</div>
                            <div className='h-[44px] mt-2 ml-3 text-[16px] text-[#3C3E41]'>Podrobni podatki in statistike pri spominskih straneh, kjer uporabnik sodeluje; npr vpisom v žalno knjigo, sožaljem, itd.</div>
                        </div>

                    </div>


                </div>

                {/*Text contianer for tablet & mobile*/}
                <div className='flex w-[577px] h-[532px] mobile:w-[293px] mobile:h-[859px] mt-[79px] mobile:mt-[65px] flex-col desktop:hidden '>

                    {/*text1 contianer*/}
                    <div className='flex w-[492px] h-[52px] mobile:w-[293px] mobile:h-[70px]'>
                        <div
                            className=' shadow-text-shadow'

                            style={{    
                                width: '43px',
                                textShadow: "0px 4px 4px #00000030",
                                marginTop: '2px',
                                marginLeft: '12px',
                                color: '#A26360',
                                fontSize: '32px',
                                fontVariationSettings: '"slnt" -10, "wght" 500, "opsz" 32',
                            }}


                        >01.</div>
                        <div className=' h-[27px] mobile:h-[54px] mt-[5px] leading-[27px] ml-4 text-[16px] font-variation-customOpt16 text-[#3C3E41] font-variation-customOpt16'>Vse informacije o pokojniku/ci in pogrebu</div>
                    </div>

                    {/*text2 contianer*/}
                    <div className='flex w-[504px] h-[52px] mobile:w-[293px] mobile:h-[43px] mt-2'>
                        <div
                            
                            style={{
                                width: '43px',
                                textShadow: "0px 4px 4px #00000030",
                                marginTop: '2px',
                                marginLeft: '12px',
                                color: '#D4A29C',
                                fontSize: '32px',
                                fontVariationSettings: '"slnt" -10, "wght" 500, "opsz" 32',
                            }}


                        >02.</div>
                        <div className=' h-[27px] mt-2 ml-[15px] text-[16px] font-variation-customOpt16 text-[#3C3E41]'>Vpis v žalno knjigo</div>
                    </div>

                    {/*text3 contianer*/}
                    <div className='flex w-[504px] h-[52px] mobile:w-[293px] mobile:h-[43px] mt-2'>
                        <div
                            style={{
                                width: '43px',
                                textShadow: "0px 4px 4px #00000030",
                                marginTop: '2px',
                                marginLeft: '12px',
                                color: '#E8B298',
                                fontSize: '32px',
                                fontVariationSettings: '"slnt" -10, "wght" 500, "opsz" 32',
                            }}



                        >03.</div>
                        <div className=' h-[27px] mt-2 ml-[15px] text-[16px] font-variation-customOpt16 text-[#3C3E41]'>Izrekanje sožalja</div>
                    </div>

                    {/*text4 contianer*/}
                    <div className='flex w-[504px] h-[52px] mobile:w-[293px] mobile:h-[43px] mt-2'>
                        <div

                            style={{
                                width: '43px',
                                textShadow: "0px 4px 4px #00000030",
                                marginTop: '2px',
                                marginLeft: '12px',
                                color: '#EDCC8B',
                                fontSize: '32px',
                                fontVariationSettings: '"slnt" -10, "wght" 500, "opsz" 32',
                            }}


                        >04.</div>
                        <div className=' h-[27px] mt-[7px] ml-4 text-[16px] font-variation-customOpt16 text-[#3C3E41]'>Prižig svečke v spomin</div>
                    </div>

                    {/*text5 contianer*/}
                    <div className='flex w-[574px] h-[52px] mobile:w-[293px] mobile:h-[126px] mt-2'>
                        <div
                            className=''
                            style={{
                                width: '43px',
                                textShadow: "0px 4px 4px #00000030",
                                marginTop: '-2px',
                                marginLeft: '12px',
                                color: '#FAE1A4',
                                fontSize: '32px',
                                fontVariationSettings: '"slnt" -10, "wght" 500, "opsz" 32',
                            }}


                        >05.</div>
                        <div className=' h-[44px] mobile:h-[110px] mt-1 ml-[14px] px-1 text-[16px] font-variation-customOpt16 text-[#3C3E41] leading-[22px]'>Že pripravljena Obvestila o času pogreba za pošiljanje preko mobilnega telefona. Enako pripravljene tudi Zahvala in Izreki sožalja.</div>
                    </div>

                    {/*text6 contianer*/}
                    <div className='flex w-[615px] h-[52px] mobile:w-[293px] mobile:h-[148px] mt-2'>
                        <div
                            style={{
                                width: '43px',
                                textShadow: "0px 4px 4px #00000030",
                                marginLeft: '12px',
                                color: '#BDE1B3',
                                fontSize: '32px',
                                fontVariationSettings: '"slnt" -10, "wght" 500, "opsz" 32',
                            }}



                        >06.</div>
                        <div className=' h-[44px] mobile:h-[132px] mt-[5px] ml-[17px] text-[16px] text-[#3C3E41] font-variation-customOpt16 leading-[22px]'>Direktno kontaktiranje bližnjih cvetličarn preko strani na način, kot ste ga vajeni - z osebnim dogovarjanjem in naročilom, ne samo spletnim nakupom</div>
                    </div>

                    {/*text7 contianer*/}
                    <div className='flex w-[576px] h-[52px] mobile:w-[293px] mobile:h-[126px] mt-2'>
                        <div



                            style={{
                                width: '43px',
                                textShadow: "0px 4px 4px #00000030",
                                marginLeft: '12px',
                                color: '#9FC7B9',
                                fontSize: '32px',
                                fontVariationSettings: '"slnt" -10, "wght" 500, "opsz" 32',
                            }}


                        >07.</div>
                        <div className=' h-[44px] mobile:h-[110px] mt-[5px] ml-4 text-[16px] text-[#3C3E41] leading-[22px]'>Opomniki, ki vas avtomatsko obveščajo pred obletnicami vseh, pri katerih ste se vpisali v Žalno knjigo ali izrekli sožalje</div>
                    </div>

                    {/*text8 contianer*/}
                    <div className='flex w-[576px] h-[52px] mobile:w-[293px] mobile:h-[70px] mt-2'>
                        <div


                            style={{
                                width: '43px',
                                textShadow: "0px 4px 4px #00000030",
                                marginTop: '2px',
                                marginLeft: '12px',
                                color: '#B0E1E3',
                                fontSize: '32px',
                                fontVariationSettings: '"slnt" -10, "wght" 500, "opsz" 32',
                            }}


                        >08.</div>
                        <div className=' h-[27px] mobile:h-[54px] mt-[5px] ml-4 text-[16px] leading-[27px] text-[#3C3E41]'>Obveščanje o osmrtnicah v domačem kraju</div>
                    </div>

                    {/*text9 contianer*/}
                    <div className='flex w-[576px] h-[52px] mobile:w-[293px] mobile:h-[126px] mt-2'>
                        <div

                            style={{
                                width: '43px',
                                textShadow: "0px 4px 4px #00000030",
                                marginTop: '2px',
                                marginLeft: '12px',
                                color: '#8DD6E2',
                                fontSize: '32px',
                                fontVariationSettings: '"slnt" -10, "wght" 500, "opsz" 32',
                            }}

                        >09.</div>
                        <div className='h-[44px] mobile:h-[110px] mt-[5px] ml-4 text-[16px] text-[#3C3E41] leading-[22px]'>Podrobni podatki in statistike pri spominskih straneh, kjer uporabnik sodeluje; npr vpisom v žalno knjigo, sožaljem, itd.</div>
                    </div>

                </div>

                {/*box 4 contianer*/}
                <div className='flex w-[1091px] h-[164px] tablet:w-[607px] tablet:h-[137px] mobile:w-[293px] mobile:h-[239px] mt-8 tablet:mt-[67px] mobile:mt-[40px] flex-col items-center justify-end'>
                    <div className='text-[24px] text-[#1E2125] font-variation-customOpt24 font-bold text-center mobile:leading-[48px]'>Vse navedeno je BREZPLAČNO!</div>
                    <div className='text-[18px] w-[812px] tablet:w-[607px] mobile:w-[295px] mobile:h-[135px] mt-2 text-[#1E2125] font-variation-customOpt18 text-center leading-[27px]'>Tudi izdelava same strani osmrtnice je popolnoma brezplačna pri vašem lokalnem pogrebnem podjetju.
                        Zato sodelujte, navdahnite strani najdražjih s svojo toplino.</div>
                </div>

            </div>


        </div>
    )
}

export default ColdObituary;