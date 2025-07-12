import { useBreakpoint } from "../../hooks/useBreakpoint";

const SlideOne = () => {
  const breakpoint = useBreakpoint();

  
  if (breakpoint === "desktop") {
    return (
      <>
        <div className="bg-[#E0E9F3] text-[#22281C] w-full h-[891px]">
          <div className="flex justify-center pt-10">
            <div className="mt-[18px] image-container w-1/2 flex justify-end">
              <img
                className="h-[761.1px]"
                src="/mobile-cards/iPad Landscape.png"
                alt="iPad Landscape"
              />
            </div>
            <div className="text-container w-1/2 pl-[35px] pt-[179px]">
              <h2 className="text-[40px] font-normal">Žalna stran</h2>
              <p className="text-[#414141] text-[16px] mt-[16px] leading-6">
                Stran, kjer izvemo vse o pogrebu, se vpišemo v Žalno knjigo,{" "}
                <br />
                izrečemo sožalje in prižgemo virtualno svečko.{" "}
              </p>
              <p className="text-[20px] font-medium mt-[16px]">
                Vse navedeno je BREZPLAČNO.
              </p>

              <button className="shadow-custom-light-dark bg-gradient-to-br from-[#E3E8EC] to-[#FFFFFF] px-[25px] py-[12px] rounded-[8px] mt-[81px] w-[175px]">
                Več o žalni strani
              </button>
            </div>
          </div>
        </div>
      </>
    );
  }

  // Laptop Breakpoint
  if (breakpoint === "laptop") {
    return (
      <>
        <div className="bg-[#F5F0E8] text-[#22281C] w-[1280px] h-[891px]">
          <div className="flex justify-center my-[80px]">
            <div className="mt-[18px] image-container w-1/2 flex justify-end">
              <img
                className="h-[761.1px]"
                src="/mobile-cards/iPad Landscape.png"
                alt="iPad Landscape"
              />
            </div>
            <div className="text-container w-1/2 pl-[35px] pt-[179px]">
              <h2 className="text-[40px] font-normal">Žalna stran</h2>
              <p className="text-[#414141] text-[16px] mt-[16px] leading-6">
                Stran, kjer izvemo vse o pogrebu, se vpišemo v Žalno knjigo,{" "}
                <br />
                izrečemo sožalje in prižgemo virtualno svečko.{" "}
              </p>
              <p className="text-[20px] font-medium mt-[16px]">
                Vse navedeno je BREZPLAČNO.
              </p>

              <button class="shadow-custom-light-dark bg-gradient-to-br from-[#E3E8EC] to-[#FFFFFF] px-[25px] py-[12px] rounded-[8px] mt-[81px] max-w-[175px]">
                Več o žalni strani
              </button>
            </div>
          </div>
        </div>
      </>
    );
  }

  // === Tablet Layout ===
  if (breakpoint === "tablet") {
    return (
      <div className="bg-[#E0E9F3] text-[#22281C] h-full">
        <div className="p-[64px] text-center">
          <div className="text-center text-container mx-auto pl-[35px] w-[464px]">
            <h2 className="text-[40px]">Žalna stran</h2>
            <p className="text-[#414141] text-[16px] mt-[16px] leading-6">
              Stran, kjer izvemo vse o pogrebu, se vpišemo v Žalno knjigo,{" "}
              <br />
              izrečemo sožalje in prižgemo virtualno svečko.{" "}
            </p>
            <p className="text-[20px] font-medium mt-[39px]">
              Vse navedeno je BREZPLAČNO.
            </p>
          </div>
          <div className="image-container flex justify-center mt-[35px]">
            <img
              className="h-[761.1px]"
              src="/mobile-cards/iPad Landscape.png"
              alt="iPad Landscape"
            />
          </div>
          <button class="px-[25px] rounded-[8px] py-[12px] shadow-custom-light-dark bg-gradient-to-br from-[#E3E8EC] to-[#FFFFFF]">
            Več o žalni strani
          </button>
        </div>
      </div>
    );
  }

  // === Mobile Layout ===
  if (breakpoint === "mobile") {
    return (
      <div className="bg-[#E0E9F3] text-[#22281C] h-full">
        <div className="py-[69px] text-center">
          <div className="text-center text-container mx-auto w-[321px]">
            <h2 className="text-[28px]">Žalna stran</h2>
            <p className="text-[#414141] text-[16px] mt-[16px] leading-6">
              Stran, kjer izvemo vse o pogrebu, se vpišemo v Žalno knjigo,{" "}
              izrečemo sožalje in prižgemo virtualno svečko.{" "}
            </p>
            <p className="text-[20px] font-medium mt-[39px]">
              Vse navedeno je BREZPLAČNO.
            </p>
          </div>
          <div className="image-container flex justify-center">
            <img src="/mobile-cards/iPad Landscape.png" alt="iPad Landscape" className=" h-[613px]  object-fill" />
          </div>
          <button class="px-[25px] rounded-[8px] py-[12px] shadow-custom-light-dark bg-gradient-to-br from-[#E3E8EC] to-[#FFFFFF]">
            Več o žalni strani
          </button>
        </div>
      </div>
    );
  }
};

export default SlideOne;
