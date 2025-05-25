import { useBreakpoint } from "../../hooks/useBreakpoint"

const SlideOne = () => {

    const breakpoint = useBreakpoint();
   if (breakpoint === "desktop") {
    return (
    <>
      <div className="bg-[#EEF7FF] text-[#22281C] min-w-[1280px] min-h-[891px]">
        <div className="flex justify-center my-[80px]">
            <div className="mt-[18px] image-container w-1/2 flex justify-end">
                <img src="/mobile-cards/iPad Landscape.png" alt="iPad Landscape" />
            </div>
            <div className="text-container w-1/2 pl-[35px] pt-[179px]">
                <h2 className="text-[40px] font-normal">Žalna stran</h2>
                <p className="text-[#414141] text-[16px] mt-[16px] leading-6">Stran, kjer izvemo vse o pogrebu, se vpišemo v Žalno knjigo, 
                    izrečemo sožalje in prižgemo virtualno svečko.  </p>
                <p className="text-[20px] font-medium mt-[16px]">Vse navedeno je BREZPLAČNO.</p>
                
                <button class="px-[25px] py-[12px] mt-[81px] max-w-[169px]" style={{
                  background: "linear-gradient(113.63deg, #E3E8EC 0%, #FFFFFF 100%)",
                  boxShadow: "-5px -5px 10px 0px #FFFFFF, 5px 5px 10px 0px #C2C2C280",
                }}>
                Več o žalni strani
              </button>
            </div>
        </div>
      </div>
    </>
  );
};


  // === Tablet Layout ===
  if (breakpoint === "tablet") {
    return (
       <div className="bg-[#EEF7FF] text-[#22281C] h-auto">
        <div className="p-[70px] text-center ">
           
            <div className="text-center text-container w-auto pl-[35px] pt-[180px]">
                <h2 className="text-[40px] mt-[16px]">Žalna stran</h2>
                <p className="text-[#414141] text-[16px] mt-[16px]">Stran, kjer izvemo vse o pogrebu, se vpišemo v Žalno knjigo, 
                    izrečemo sožalje in prižgemo virtualno svečko.  </p>
                <p className="text-[20px] font-medium mt-[16px]">Vse navedeno je BREZPLAČNO.</p>
          
            </div>
             <div className="image-container flex justify-center">
                <img className="" src="/mobile-cards/iPad Landscape.png" alt="iPad Landscape" />
            </div>
            <button class="px-[25px] py-[12px]" style={{
                  background: "linear-gradient(113.63deg, #E3E8EC 0%, #FFFFFF 100%)",
                  boxShadow: "-5px -5px 10px 0px #FFFFFF, 5px 5px 10px 0px #C2C2C280",
                }}
              >
                Več o žalni strani
              </button>
        </div>
      </div>
    );
  }

  // === Mobile Layout ===
  return (
     <div className="bg-[#EEF7FF] text-[#22281C] h-auto">
        <div className="py-[70px] text-center ">
           
            <div className="text-center text-container w-auto pl-[35px] pt-[180px]">
                <h2 className="text-[40px] mt-[16px]">Žalna stran</h2>
                <p className="text-[#414141] text-[16px] mt-[16px]">Stran, kjer izvemo vse o pogrebu, se vpišemo v Žalno knjigo, 
                    izrečemo sožalje in prižgemo virtualno svečko.  </p>
                <p className="text-[20px] font-medium mt-[16px]">Vse navedeno je BREZPLAČNO.</p>
          
            </div>
             <div className="image-container flex justify-center">
                <img className="" src="/mobile-cards/iPad Landscape.png" alt="iPad Landscape" />
            </div>
            <button class="px-[25px] py-[12px]" style={{
                  background: "linear-gradient(113.63deg, #E3E8EC 0%, #FFFFFF 100%)",
                  boxShadow: "-5px -5px 10px 0px #FFFFFF, 5px 5px 10px 0px #C2C2C280",
                }}
              >
                Več o žalni strani
              </button>
        </div>
      </div>
  );
};


export default SlideOne;
