export default function EverythingIsFree() {
  return (
    <div className="bg-gradient-to-bl from-[#f9f0e7] via-[#f5f2ec] to-[#f2f3ee]"
    style={{
      borderWidth: '1px 0px 1px 0px',
      borderStyle: 'solid',
      borderColor: '#C7C7C780',
    }}>
      <div className="max-w-[730px] tablet:max-w-[600px] mobile:max-w-[341px] mx-auto py-[111px]">
        <h2 className="text-center text-[40px] leading-[48px] font-[400] text-[#3C3E41] mobile:text-[28px] mobile:leading-[20px]">VSE je brezplačno!</h2>
        <p className="text-center text-[#3C3E41] text-[24px] font-[700] leading-[48px] mobile:text-[20px] mobile:leading-[20px]  mobile:font-[600] mobile:mt-[20px]">In brez odvečnih korakov </p>
        <div className='flex w-full mt-[79px] tablet:mt-[50px] mobile:mt-[65px] flex-col gap-[48px] mobile:gap-[20px]'>
          {/*text1 contianer*/}
          <div className='flex w-full'>
              <div
                className=' shadow-text-shadow'
                style={{    
                    width: '48px',
                    textShadow: "0px 4px 4px #00000030",
                    marginTop: '2px',
                    marginLeft: '12px',
                    color: '#A26360',
                    fontSize: '32px',
                    fontVariationSettings: '"slnt" -10, "wght" 500, "opsz" 32',
                }}
              >01.</div>
              <div className="ml-4">
                <div className='leading-[27px] text-[18px] mobile:text-[16px] font-variation-customOpt16 text-[#3C3E41] font-variation-customOpt16'>Pogrebno podjetje vam brezplačno izdela in objavi <span className='text-[#530CC6] font-medium'>osmrtnico.</span></div>
                <div className="text-[#6D778E] text-[14px] font-[400] leading-[27px]">(ko urejate dokumente za pokop)</div>
              </div>
          </div>

          {/*text2 contianer*/}
          <div className='flex w-full'>
              <div
                  
                  style={{
                      width: '48px',
                      textShadow: "0px 4px 4px #00000030",
                      marginTop: '2px',
                      marginLeft: '12px',
                      color: '#D4A29C',
                      fontSize: '32px',
                      fontVariationSettings: '"slnt" -10, "wght" 500, "opsz" 32',
                  }}


              >02.</div>
              <div className="space-y-[0] ml-4">
                <div className=' mt-[5px] leading-[27px] text-[18px] mobile:text-[16px] font-variation-customOpt16 text-[#3C3E41] font-variation-customOpt16'>Istočasno vam izdela brezplačno <span className='text-[#530CC6] font-medium'>žalno spominsko stran</span>.</div>
                <div className="text-[#6D778E] text-[14px] font-[400] leading-[27px]">(ko urejate dokumente za pokop) </div>
              </div>
          </div>

          {/*text3 contianer*/}
          <div className='flex w-full'>
              <div
                style={{
                  width: '48px',
                  textShadow: "0px 4px 4px #00000030",
                  marginTop: '2px',
                  marginLeft: '12px',
                  color: '#E8B298',
                  fontSize: '32px',
                  fontVariationSettings: '"slnt" -10, "wght" 500, "opsz" 48',
                }}
              >03.</div>
              <div className="space-y-[0] ml-4">
                <div className=' mt-[5px] leading-[27px] text-[18px] mobile:text-[16px] font-variation-customOpt16 text-[#3C3E41] font-variation-customOpt16'>Vaša lokalna cvetličarna vam brezplačno podari <span className='text-[#530CC6] font-medium'>status Skrbnika</span> spominske strani.</div>
                <div className="text-[#6D778E] text-[14px] font-[400] leading-[27px]">(ko se dogovarjate za cvetlično ureditev vežice; status Skrbnika je za cel prvi mesec) </div>
              </div>
          </div>

          {/*text4 contianer*/}
          <div className='flex w-full'>
              <div

                  style={{
                      width: '48px',
                      textShadow: "0px 4px 4px #00000030",
                      marginTop: '2px',
                      marginLeft: '12px',
                      color: '#EDCC8B',
                      fontSize: '32px',
                      fontVariationSettings: '"slnt" -10, "wght" 500, "opsz" 32',
                  }}


              >04.</div>
              <div className="space-y-[0] ml-4">
                <div className=' mt-[5px] leading-[27px] text-[18px] mobile:text-[16px] font-variation-customOpt16 text-[#3C3E41] font-variation-customOpt16'>Vaša lokalna cvetličarna vam brezplačno podari <span className='text-[#530CC6]'>mobi kartice</span> za pošiljanje naprej</div>
                <div className="text-[#6D778E] text-[14px] font-[400] leading-[27px]">(ko se dogovarjate za cvetlično ureditev vežice) </div>
              </div>
          </div>

          {/*text5 contianer*/}
          <div className='flex w-full'>
              <div
                  className=''
                  style={{
                      width: '48px',
                      textShadow: "0px 4px 4px #00000030",
                      marginTop: '-2px',
                      marginLeft: '12px',
                      color: '#FAE1A4',
                      fontSize: '32px',
                      fontVariationSettings: '"slnt" -10, "wght" 500, "opsz" 32',
                  }}


              >05.</div>
              <div className="space-y-[0] ml-4">
                <div className=' mt-[5px] leading-[27px] text-[18px] mobile:text-[16px] font-variation-customOpt16 text-[#3C3E41] font-variation-customOpt16'>Pogrebno podjetje vam brezplačno... (kmalu)</div>
                <div className="text-[#6D778E] text-[14px] font-[400] leading-[27px]">(kmalu) </div>
              </div>
          </div>
        </div>
        <p className="text-center text-[#3C3E41] text-[24px] font-[700] leading-[32px] mt-[55px] tablet:mx-[60px]">Ekskluzivno samo pri naših partnerjih. Poiščite jih! </p>
      </div>
    </div>
  );
}