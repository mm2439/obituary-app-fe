import { useBreakpoint } from "../../hooks/useBreakpoint"

const IphoneView = () => {

    const breakpoint = useBreakpoint();
   if (breakpoint === "desktop") {
    return (
<div
  className="bg-[url('/gradient_ozadje.avif')] bg-cover relative overflow-hidden text-[#22281C] min-w-[1281px] h-[739px] backdrop-blur-[212.9px] border border-solid" style={{ borderColor: '#36556C33' }}>
  {/* Large Top Center Circle */}
  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[850px] h-[850px] bg-[#F4C46A26] opacity-30 rounded-full z-10"></div>

  {/* Small Circle Below */}
  <div className="absolute top-[450px] left-3/4 transform -translate-x-1/2 w-[500px] h-[500px] bg-[#F5D3A00F] rounded-full z-10"></div>

  <div className="flex justify-center">
    <div className="image-container mr-[90px] mt-[143px] w-[560px]">
      <h2 className="text-[40px] mt-[16px]">Obveščanje o pogrebu</h2>
      <p className="text-[#414141] text-[16px] mt-[32px]">
        V težkih trenutkih je včasih lažje poslati ali deliti po socialnih omrežjih, kot obveščati vsakega posebej.
      </p>
      <p className="text-[#414141] text-[16px] mt-[16px]">
        Digitalna obvestila o pogrebu za pošiljanje naprej preko mobilnega telefona lahko brezplačno prevzamete v vaši lokalni cvetličarni (ki jo najdete na naših straneh) in s pošiljanjem naprej lahko začnete takoj. Obvestila so tudi lep in trajni spomin.
      </p>
      <p className="text-[#414141] text-[16px] mt-[32px]">
        Enako vam cvetličarne podarjajo tudi digitalne kartice Sožalje, Zahvala in tudi mesečnega Skrbnika, nekatere pa tudi možnost vpisa osmrtnice. Op. Na naši strani mi teh kartic in mesečnega Skrbnika ne ponujamo.
      </p>
      <div className="inner-div mt-[32px]">
        <h3 className="text-[#22281C] text-[20px] font-medium">
          BREZPLAČNO v vaši cvetličarni.
        </h3>
      </div>
    </div>
    <div className="text-container mt-[98px] z-50">
    <img
      src="/mobile-new.png"
      alt="iPad Landscape"
          width={250} 
      height={500} 
    />
    </div>
  </div>
</div>

    );
  }

  // Laptop View
  if (breakpoint === "laptop") {
    return (
<div
  className="bg-[url('/gradient_ozadje.avif')] bg-cover relative overflow-hidden text-[#22281C] min-w-[1280px] h-[739px] backdrop-blur-[212.9px]">
  {/* Large Top Center Circle */}
  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[850px] h-[850px] bg-[#F4C46A26] opacity-30 rounded-full z-10"></div>

  {/* Small Circle Below */}
  <div className="absolute top-[450px] left-3/4 transform -translate-x-1/2 w-[500px] h-[500px] bg-[#F5D3A00F] rounded-full z-10"></div>

  <div className="flex justify-center">
    <div className="image-container mr-[90px] mt-[143px] w-[560px]">
      <h2 className="text-[40px] mt-[16px]">Obveščanje o pogrebu</h2>
      <p className="text-[#414141] text-[16px] mt-[32px]">
        V težkih trenutkih je včasih lažje poslati ali deliti po socialnih omrežjih, kot obveščati vsakega posebej.
      </p>
      <p className="text-[#414141] text-[16px] mt-[16px]">
        Digitalna obvestila o pogrebu za pošiljanje naprej preko mobilnega telefona lahko brezplačno prevzamete v vaši lokalni cvetličarni (ki jo najdete na naših straneh) in s pošiljanjem naprej lahko začnete takoj. Obvestila so tudi lep in trajni spomin.
      </p>
      <p className="text-[#414141] text-[16px] mt-[32px]">
        Enako vam cvetličarne podarjajo tudi digitalne kartice Sožalje, Zahvala in tudi mesečnega Skrbnika, nekatere pa tudi možnost vpisa osmrtnice. Op. Na naši strani mi teh kartic in mesečnega Skrbnika ne ponujamo.
      </p>
      <div className="inner-div mt-[32px]">
        <h3 className="text-[#22281C] text-[20px] font-medium">
          BREZPLAČNO v vaši cvetličarni.
        </h3>
      </div>
    </div>
    <div className="text-container mt-[98px] z-50">
                        <img
    src="/mobile-new.png"
    alt="iPad Landscape"
        width={250} 
    height={500} 
    />
    </div>
  </div>
</div>

    );
  }

  // === Tablet Layout ===
  if (breakpoint === "tablet") {
    return (
       <div className="bg-[url('/gradient_ozadje.avif')] bg-cover text-[#22281C] h-auto">
        <div className="py-[79px]">
            <div className="image-container w-[560px] text-center mx-auto">
                <h2 className="text-[40px] mb-[-32px] p-0 leading-[100%]">Obveščanje o pogrebu</h2>
                <p className="text-[#3C3E41] text-[16px] mt-[49px]">V težkih trenutkih je včasih lažje poslati ali deliti po socialnih omrežjih,   kot obveščati vsakega posebej. </p>
                <p className="text-[#3C3E41] text-[16px] mt-[30px]">Digitalna obvestila o pogrebu za pošiljanje naprej preko mobilnega telefona lahko brezplačno prevzamete v vaši lokalni cvetličarni (ki jo najdete na naših straneh) in s pošiljanjem naprej lahko začnete takoj. Obvestila so tudi lep in trajni spomin. </p>
               <p className="text-[#3C3E41] text-[16px] mt-[16px]">Enako vam cvetličarne podarjajo tudi digitalne kartice Sožalje, Zahvala in tudi mesečnega Skrbnika, nekatere pa tudi možnost vpisa osmrtnice.
Op. Na naši strani mi teh kartic in mesečnega Skrbnika ne ponujamo. </p>
            </div>
            <div className="text-container mt-[36px] flex justify-center">
                        <img
                          src="/mobile-new.png"
                          alt="iPad Landscape"
                              width={250} 
                          height={500} 
                          />
            </div>
              <div className="inner-div mt-[45px] text-center">
                 <h3 className="text-[#22281C] text-[20px] font-medium">BREZPLAČNO v vaši cvetličarni.</h3>
               </div> 
        </div>
      </div>
    );
  }
   if (breakpoint === "mobile") {
  return (
       <div className="bg-[url('/gradient_ozadje.avif')] bg-cover text-[#22281C] h-auto">
        <div className="py-[54px]">
            <div className="image-container w-[325px] text-center mx-auto">
                <h2 className="text-[28px] p-0 leading-[100%]">Obveščanje o pogrebu</h2>
                <p className="text-[#3C3E41] text-[16px] mt-[25px]">V težkih trenutkih je včasih lažje poslati ali deliti po socialnih omrežjih,   kot obveščati vsakega posebej. </p>
                <p className="text-[#3C3E41] text-[16px] mt-[30px]">Digitalna obvestila o pogrebu, sožalja, zahvale lahko brezplačno prevzamete v vaši lokalni cvetličarni (ki jo najdete na naših straneh) in s pošiljanjem naprej lahko začnete takoj.  </p>
               <p className="text-[#3C3E41] text-[16px] mt-[16px]">Op. Na naši strani mi teh kartic ne ponujamo. </p>
            </div>
            <div className="text-container mt-[36px] flex justify-center">
                        <img
    src="/mobile-new.png"
    alt="iPad Landscape"
        width={250} 
    height={500} 
    />
            </div>
              <div className="inner-div mt-[45px] text-center">
                 <h3 className="text-[#22281C] text-[20px] font-medium">BREZPLAČNO v vaši cvetličarni.</h3>
               </div> 
        </div>
      </div>
  );

}
};

export default IphoneView;
