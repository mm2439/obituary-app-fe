import { useBreakpoint } from "../../hooks/useBreakpoint";

const SlideOne = () => {
  const breakpoint = useBreakpoint();
  if (breakpoint === "desktop") {
    return (
      <>
        <div className="bg-[#f1f6fd] text-[#22281C] w-full h-[891px]">
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

              <button className="shadow-custom-light-dark bg-gradient-to-br from-[#E3E8EC] to-[#FFFFFF] px-[25px] py-[12px] rounded-[8px] mt-[81px] max-w-[169px]">
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
        <div className="absolute box-border h-[1204px] w-full left-0 right-0 top-0 bg-[#E0E9F3] border-t border-b border-solid border-[#C6CFD5]">
          <div className="absolute flex flex-col justify-center items-center p-0 gap-[39px] w-[467px] h-[173px] left-1/2 top-[64px] -translate-x-1/2">
            <div className="flex flex-col justify-center items-center p-0 gap-[0px] w-[467px] h-[173px] relative">
              <h2 className="absolute w-[427.86px] h-[47px] left-[19.57px] top-0 font-['Roboto_Flex'] font-normal text-[40px] leading-[47px] text-center text-[#22281C]">
                Žalna stran
              </h2>
              <p className="absolute w-[428px] h-[48px] left-[19.5px] top-[63px] font-['Roboto_Flex'] font-normal text-[16px] leading-[24px] text-center text-[#414141]">
                Stran, kjer izvemo vse o pogrebu, se vpišete v Žalno knjigo,
                izrečete sožalja in prižgete virtualno svečko.
              </p>
              <div className="absolute flex flex-col justify-center items-center p-0 gap-[8px] w-[467px] h-[23px] left-0 top-[150px]">
                <p className="w-[278px] h-[23px] font-['Roboto_Flex'] font-medium text-[20px] leading-[23px] text-center text-[#22281C]">
                  Vse navedeno je BREZPLAČNO.
                </p>
              </div>
            </div>
          </div>
          <div className="mt-[250px] w-[500px] h-[604px] mx-auto">
            <img
              className="object-cover rounded-[22px]"
              src="/mobile-cards/iPad Landscape.png"
              alt="iPad Landscape"
            />
          </div>
          <div
            className="absolute left-1/2 top-[1000px] -translate-x-1/2 w-[169px] h-[43px] flex flex-col items-start p-[12px_25px] gap-[8px] bg-gradient-to-br from-[#E3E8EC] to-[#FFFFFF] shadow-[5px_5px_10px_rgba(194,194,194,0.5),_-5px_-5px_10px_#FFFFFF] rounded-[8px]"
            style={{ marginLeft: "-0.5px" }}
          >
            <button className="flex flex-row justify-center items-center w-[119px] h-[19px] gap-[8px]">
              <span className="w-[119px] h-[19px] font-['Roboto_Flex'] font-normal text-[16px] leading-[19px] text-[#1E2125]">
                Več o žalni strani
              </span>
            </button>
          </div>
        </div>
      </>
    );
  }

  // === Tablet Layout ===
  if (breakpoint === "tablet") {
    return (
      <div className="absolute box-border h-[930px] w-full left-0 right-0 top-0 bg-[#E0E9F3] border-t border-b border-solid border-[#C6CFD5]">
        <div className="absolute flex flex-col justify-center items-center p-0 gap-[39px] w-[303px] h-[183px] left-1/2 top-[69px] -translate-x-1/2">
          <div className="flex flex-col justify-center items-center p-0 gap-[16px] w-[95%] h-[121px]">
            <h2 className="w-[201px] h-[33px] font-['Roboto_Flex'] font-normal text-[28px] leading-[33px] text-center text-[#22281C]">
              Žalna stran
            </h2>
            <p className="w-[321px] h-[72px] font-['Roboto_Flex'] font-normal text-[16px] leading-[24px] text-center text-[#414141]">
              Stran, kjer izvemo vse o pogrebu, se vpišemo v Žalno knjigo,
              izrečemo sožalje in prižgemo virtualno svečko v spomin.
            </p>
          </div>
          <div className="flex flex-col justify-center items-center p-0 gap-[8px] w-[303px] h-[23px]">
            <p className="w-[278px] h-[23px] font-['Roboto_Flex'] font-medium text-[20px] leading-[23px] text-center text-[#22281C]">
              Vse navedeno je BREZPLAČNO.
            </p>
          </div>
        </div>
        <div className="absolute left-[32px] top-[309px] w-[297.67px] h-[473.8px]">
          <img
            className="w-full h-full object-cover"
            src="/mobile-cards/iPad Landscape.png"
            alt="iPad Landscape"
          />
        </div>
        <div
          className="absolute left-1/2 top-[829px] -translate-x-1/2 w-[169px] h-[43px] flex flex-col items-start p-[12px_25px] gap-[8px] bg-gradient-to-br from-[#E3E8EC] to-[#FFFFFF] shadow-[5px_5px_10px_rgba(194,194,194,0.5),_-5px_-5px_10px_#FFFFFF] rounded-[8px]"
          style={{ marginLeft: "79.5px" }}
        >
          <button className="flex flex-row justify-center items-center w-[119px] h-[19px] gap-[8px]">
            <span className="w-[119px] h-[19px] font-['Roboto_Flex'] font-normal text-[16px] leading-[19px] text-[#414141]">
              Več o žalni strani
            </span>
          </button>
        </div>
      </div>
    );
  }

  // === Mobile Layout ===
  if (breakpoint === "mobile") {
    return (
      <div className="bg-[#f1f6fd] text-[#22281C] h-auto">
        <div className="py-[69px] text-center">
          <div className="text-center text-container mx-auto w-[303px]">
            <h2 className="text-[28px]">Žalna stran</h2>
            <p className="text-[#414141] text-[16px] mt-[16px] leading-6">
              Stran, kjer izvemo vse o pogrebu, se vpišemo v Žalno knjigo,{" "}
              <br />
              izrečemo sožalje in prižgemo virtualno svečko.{" "}
            </p>
            <p className="text-[20px] font-medium mt-[39px]">
              Vse navedeno je BREZPLAČNO.
            </p>
          </div>
          <div className="image-container flex justify-center">
            <img src="/mobile-cards/iPad Landscape.png" alt="iPad Landscape" />
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
