import { useBreakpoint } from "../../hooks/useBreakpoint"

const IphoneView = () => {

    const breakpoint = useBreakpoint();
   if (breakpoint === "desktop") {
    return (
  <div className="text-[#22281C] h-[739px] bg-[linear-gradient(180deg,rgba(182,236,236,0.09)_0%,rgba(190,244,244,0)_100%)]">
        <div className="flex justify-center">
            <div className="image-container mr-[90px] mt-[143px] w-[560px]">
                <h2 className="text-[40px] mt-[16px]">Obveščanje o pogrebu</h2>
                <p className="text-[#414141] text-[16px] mt-[32px]">V težkih trenutkih je včasih lažje poslati ali deliti po socialnih omrežjih,   kot obveščati vsakega posebej. </p>
                <p className="text-[#414141] text-[16px] mt-[16px]">Digitalna obvestila o pogrebu za pošiljanje naprej preko mobilnega telefona lahko brezplačno prevzamete v vaši lokalni cvetličarni (ki jo najdete na naših straneh) in s pošiljanjem naprej lahko začnete takoj. Obvestila so tudi lep in trajni spomin. </p>
               <p className="text-[#414141] text-[16px] mt-[32px]">Enako vam cvetličarne podarjajo tudi digitalne kartice Sožalje, Zahvala in tudi mesečnega Skrbnika, nekatere pa tudi možnost vpisa osmrtnice.
                            Op. Na naši strani mi teh kartic in mesečnega Skrbnika ne ponujamo. </p>
               <div className="inner-div mt-[32px]">
                 <h3 className="text-[#22281C] text-[20px] font-medium">BREZPLAČNO v vaši cvetličarni.</h3>
               </div> 
            </div>
            <div className="text-container mt-[98px]">
                <img src="/mobile-cards/iphone.png" alt="iPad Landscape" />
            </div>
        </div>
      </div>
    );
  }

  // === Tablet Layout ===
  if (breakpoint === "tablet") {
    return (
       <div className="text-[#22281C] h-auto" style={{
        background: 'linear-gradient(180deg, rgba(182, 236, 236, 0.09) 0%, rgba(190, 244, 244, 0) 100%)',
      }}>
        <div className="py-[79px]">
            <div className="image-container w-[560px] text-center mx-auto">
                <h2 className="text-[40px] mt-[16px]">Obveščanje o pogrebu</h2>
                <p className="text-[#414141] text-[16px] mt-[30px]">V težkih trenutkih je včasih lažje poslati ali deliti po socialnih omrežjih,   kot obveščati vsakega posebej. </p>
                <p className="text-[#414141] text-[16px] mt-[30px]">Digitalna obvestila o pogrebu za pošiljanje naprej preko mobilnega telefona lahko brezplačno prevzamete v vaši lokalni cvetličarni (ki jo najdete na naših straneh) in s pošiljanjem naprej lahko začnete takoj. Obvestila so tudi lep in trajni spomin. </p>
               <p className="text-[#414141] text-[16px] mt-[16px]">Enako vam cvetličarne podarjajo tudi digitalne kartice Sožalje, Zahvala in tudi mesečnega Skrbnika, nekatere pa tudi možnost vpisa osmrtnice.
Op. Na naši strani mi teh kartic in mesečnega Skrbnika ne ponujamo. </p>
            </div>
            <div className="text-container mt-[20px] flex justify-center">
                <img src="/mobile-cards/iphone.png" alt="iPad Landscape" />
            </div>
              <div className="inner-div mt-[40px] text-center">
                 <h3 className="text-[#22281C] text-[20px] font-medium">BREZPLAČNO v vaši cvetličarni.</h3>
               </div> 
        </div>
      </div>
    );
  }

  // === Mobile Layout ===
  return (
       <div className="text-[#22281C] h-auto" style={{
        background: 'linear-gradient(180deg, rgba(182, 236, 236, 0.09) 0%, rgba(190, 244, 244, 0) 100%)',
      }}>
        <div className="py-[79px]">
            <div className="image-container w-[560px] text-center mx-auto">
                <h2 className="text-[40px] mt-[16px]">Obveščanje o pogrebu</h2>
                <p className="text-[#414141] text-[16px] mt-[30px]">V težkih trenutkih je včasih lažje poslati ali deliti po socialnih omrežjih,   kot obveščati vsakega posebej. </p>
                <p className="text-[#414141] text-[16px] mt-[30px]">Digitalna obvestila o pogrebu za pošiljanje naprej preko mobilnega telefona lahko brezplačno prevzamete v vaši lokalni cvetličarni (ki jo najdete na naših straneh) in s pošiljanjem naprej lahko začnete takoj. Obvestila so tudi lep in trajni spomin. </p>
               <p className="text-[#414141] text-[16px] mt-[16px]">Enako vam cvetličarne podarjajo tudi digitalne kartice Sožalje, Zahvala in tudi mesečnega Skrbnika, nekatere pa tudi možnost vpisa osmrtnice.
Op. Na naši strani mi teh kartic in mesečnega Skrbnika ne ponujamo. </p>
            </div>
            <div className="text-container mt-[20px] flex justify-center">
                <img src="/mobile-cards/iphone.png" alt="iPad Landscape" />
            </div>
              <div className="inner-div mt-[40px] text-center">
                 <h3 className="text-[#22281C] text-[20px] font-medium">BREZPLAČNO v vaši cvetličarni.</h3>
               </div> 
        </div>
      </div>
  );
};

export default IphoneView;
