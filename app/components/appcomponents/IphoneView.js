import { useBreakpoint } from "../../hooks/useBreakpoint";
import Image from "next/image";

const IphoneView = () => {
  const breakpoint = useBreakpoint();
  if (breakpoint === "desktop") {
    return (
      <div
        className="bg-[url('/gradient_ozadje.avif')] bg-cover relative overflow-hidden text-[#22281C] min-w-[1281px] h-[739px] backdrop-blur-[212.9px] border border-solid"
        style={{ borderColor: "#36556C33" }}
      >
        {/* Large Top Center Circle */}
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[850px] h-[850px] bg-[#F4C46A26] opacity-30 rounded-full z-10"></div>

        {/* Small Circle Below */}
        <div className="absolute top-[450px] left-3/4 transform -translate-x-1/2 w-[500px] h-[500px] bg-[#F5D3A00F] rounded-full z-10"></div>

        <div className="flex justify-center">
          <div className="image-container mr-[90px] mt-[143px] w-[560px]">
            <h2 className="text-[40px] mt-[16px]">Obveščanje o pogrebu</h2>
            <p className="text-[#414141] text-[16px] mt-[32px]">
              V težkih trenutkih je včasih lažje poslati ali deliti po socialnih
              omrežjih, kot obveščati vsakega posebej.
            </p>
            <p className="text-[#414141] text-[16px] mt-[16px]">
              Digitalna obvestila o pogrebu za pošiljanje naprej preko mobilnega
              telefona lahko brezplačno prevzamete v vaši lokalni cvetličarni
              (ki jo najdete na naših straneh) in s pošiljanjem naprej lahko
              začnete takoj. Obvestila so tudi lep in trajni spomin.
            </p>
            <p className="text-[#414141] text-[16px] mt-[32px]">
              Enako vam cvetličarne podarjajo tudi digitalne kartice Sožalje,
              Zahvala in tudi mesečnega Skrbnika, nekatere pa tudi možnost vpisa
              osmrtnice. Op. Na naši strani mi teh kartic in mesečnega Skrbnika
              ne ponujamo.
            </p>
            <div className="inner-div mt-[32px]">
              <h3
                className="text-[28px] font-normal"
                style={{ color: "rgba(65, 65, 65, 1)" }}
              >
                BREZPLAČNO v vaši cvetličarni.
              </h3>
            </div>
          </div>
          <div className="text-container mt-[98px] z-50">
            <Image
              src="/mobile-cards/iphone.png"
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
        className="relative w-full h-[1071px] border-t border-b border-solid overflow-hidden"
        style={{ borderColor: "#C6CFD5" }}
      >
        <div
          className="absolute left-0 top-0 w-full"
          style={{
            height: "1083.28px",
            background:
              "linear-gradient(180deg, rgba(182, 236, 236, 0.09) 0%, rgba(190, 244, 244, 0) 100%)",
            zIndex: 1,
            pointerEvents: "none",
          }}
        ></div>
        <div
          className="absolute"
          style={{
            width: "1186.52px",
            height: "1186.52px",
            left: "-340.08px",
            top: "-528.07px",
            background:
              "linear-gradient(180deg, rgba(216, 168, 0, 0.15) 0%, rgba(171, 237, 237, 0) 100%)",
            filter: "blur(106.45px)",
            zIndex: 2,
            pointerEvents: "none",
          }}
        ></div>
        <div
          className="absolute"
          style={{
            width: "805.96px",
            height: "805.96px",
            left: "690.88px",
            top: "-312.7px",
            background: "rgba(244, 196, 106, 0.15)",
            filter: "blur(89.4px)",
            zIndex: 2,
            pointerEvents: "none",
          }}
        ></div>
        <div
          className="absolute"
          style={{
            width: "703.42px",
            height: "703.42px",
            left: "433.48px",
            top: "201.67px",
            background: "rgba(243, 172, 165, 0.15)",
            filter: "blur(84.6px)",
            zIndex: 2,
            pointerEvents: "none",
          }}
        ></div>
        <div
          className="absolute"
          style={{
            width: "507.1px",
            height: "507.1px",
            left: "949.01px",
            top: "299.84px",
            background: "rgba(245, 211, 160, 0.06)",
            filter: "blur(84.6px)",
            zIndex: 2,
            pointerEvents: "none",
          }}
        ></div>
        <div
          className="absolute flex flex-col items-center justify-center gap-[16px]"
          style={{
            width: "744px",
            height: "319px",
            left: "calc(50% - 744px/2)",
            top: "67px",
            zIndex: 10,
          }}
        >
          <h2 className="w-[354px] h-[47px] font-['Roboto_Flex'] font-normal text-[40px] leading-[47px] text-[#1E2125] text-center">
            Obveščanje o pogrebu
          </h2>
          <p className="w-[495.45px] h-[48px] font-['Roboto_Flex'] font-normal text-[16px] leading-[24px] text-[#414141] text-center">
            V težkih trenutkih je včasih lažje poslati ali deliti po socialnih omrežjih, kot obveščati vsakega posebej.
          </p>
          <p className="w-[600px] h-[192px] font-['Roboto_Flex'] font-normal text-[16px] leading-[24px] text-[#414141] text-center">
            Digitalna obvestila o pogrebu za pošiljanje naprej preko mobilnega telefona lahko <br /> brezplačno prevzamete v vaši lokalni cvetličarni (ki jo najdete na naših straneh) <br /> in s pošiljanjem naprej lahko začnete takoj.
          </p>
          <p className="w-[600px] h-[192px] font-['Roboto_Flex'] font-normal text-[16px] leading-[24px] text-[#414141] text-center">
            Enako vam cvetličarne podarjajo tudi digitalne kartice Sožalje, Zahvalo in tudi <br /> mesečnega Skrbnika, nekatere pa tudi možnost vpisa osmrtnice. <br /> Op. Na naši strani mi teh kartic ne ponujamo.
          </p>
        </div>
        <div
          className="absolute flex flex-col items-center justify-center"
          style={{
            width: "537px",
            height: "500px",
            left: "calc(50% - 537px/2 - 0.5px)",
            top: "422px",
            gap: "64px",
            zIndex: 10,
          }}
        >
          <Image
            src="/mobile-cards/iphone.png"
            alt="iPhone X"
            width={250}
            height={500}
            style={{ width: "250px", height: "500px" }}
          />
        </div>
        <div
          className="absolute"
          style={{
            width: "744px",
            height: "679px",
            left: "calc(50% - 744px/2 - 340px)",
            top: "504px",
            background:
              "radial-gradient(50% 50% at 50% 50%, rgba(190, 247, 247, 0.2) 0%, rgba(149, 200, 200, 0.2) 100%)",
            filter: "blur(84.6px)",
            zIndex: 2,
            pointerEvents: "none",
          }}
        ></div>
        <span
          className="absolute font-['Roboto_Flex'] font-medium text-[28px] leading-[33px] text-[#414141] text-center"
          style={{
            width: "371px",
            height: "33px",
            left: "calc(50% - 371px/2 + 0.5px)",
            top: "967px",
            zIndex: 20,
          }}
        >
          BREZPLAČNO v vaši cvetličarni.
        </span>
      </div>
    );
  }

  // === Tablet Layout ===
  if (breakpoint === "tablet") {
    return (
      <div
        className="relative w-full h-[1032px] border-t border-b border-solid overflow-hidden"
        style={{ borderColor: "#C6CFD5" }}
      >
        <div
          className="absolute"
          style={{
            width: "744px",
            height: "1083.28px",
            left: "calc(50% - 744px/2 + 0.1px)",
            top: "-12.39px",
            background:
              "linear-gradient(180deg, rgba(182, 236, 236, 0.09) 0%, rgba(190, 244, 244, 0) 100%)",
            zIndex: 1,
            pointerEvents: "none",
          }}
        ></div>
        <div
          className="absolute"
          style={{
            width: "1186.52px",
            height: "1186.52px",
            left: "-340.08px",
            top: "-528.07px",
            background:
              "linear-gradient(180deg, rgba(216, 168, 0, 0.2) 0%, rgba(171, 237, 237, 0) 100%)",
            filter: "blur(106.45px)",
            zIndex: 2,
            pointerEvents: "none",
          }}
        ></div>
        <div
          className="absolute"
          style={{
            width: "805.96px",
            height: "805.96px",
            left: "690.88px",
            top: "-312.7px",
            background: "rgba(244, 196, 106, 0.15)",
            filter: "blur(89.4px)",
            zIndex: 2,
            pointerEvents: "none",
          }}
        ></div>
        <div
          className="absolute"
          style={{
            width: "703.42px",
            height: "703.42px",
            left: "433.48px",
            top: "201.67px",
            background: "rgba(243, 172, 165, 0.15)",
            filter: "blur(84.6px)",
            zIndex: 2,
            pointerEvents: "none",
          }}
        ></div>
        <div
          className="absolute"
          style={{
            width: "507.1px",
            height: "507.1px",
            left: "949.01px",
            top: "299.84px",
            background: "rgba(245, 211, 160, 0.06)",
            filter: "blur(84.6px)",
            zIndex: 2,
            pointerEvents: "none",
          }}
        ></div>
        <h2
          className="absolute font-['Roboto_Flex'] font-normal text-[28px] leading-[33px] text-[#22281C] text-center"
          style={{
            width: "260px",
            height: "33px",
            left: "calc(50% - 260px/2)",
            top: "54px",
            zIndex: 10,
          }}
        >
          Obveščanje o pogrebu
        </h2>
        <p
          className="absolute font-['Roboto_Flex'] font-normal text-[16px] leading-[24px] text-[#414141] text-center"
          style={{
            width: "325px",
            height: "192px",
            left: "calc(50% - 325px/2 - 0.5px)",
            top: "112px",
            zIndex: 10,
          }}
        >
          V težkih trenutkih je včasih lažje poslati ali <br /> deliti po socialnih omrežjih, kot obveščati <br /> vsakega posebej.
        </p>

        <p
          className="absolute font-['Roboto_Flex'] font-normal text-[16px] leading-[24px] text-[#414141] text-center"
          style={{
            width: "325px",
            height: "192px",
            left: "calc(50% - 325px/2 - 0.5px)",
            top: "212px",
            zIndex: 10,
          }}
        >
          Digitalna obvestila o pogrebu, sožalja, zahvale lahko brezplačno prevzamete v vaši lokalni cvetličarni (ki jo najdete na naših straneh) in s pošiljanjem naprej lahko začnete takoj.
        </p>

        <p
          className="absolute font-['Roboto_Flex'] font-normal text-[14px] leading-[24px] text-[#414141] text-center"
          style={{
            width: "325px",
            height: "24px",
            left: "calc(50% - 325px/2 - 0.5px)",
            top: "314px",
            zIndex: 10,
          }}
        >
          Op. Na naši strani mi teh kartic ne ponujamo.
        </p>
        <div
          className="absolute flex flex-col items-center justify-center"
          style={{
            width: "250px",
            height: "500px",
            left: "calc(50% - 250px/2)",
            top: "366px",
            zIndex: 10,
          }}
        >
          <Image
            src="/mobile-cards/iphone.png"
            alt="iPhone X"
            width={250}
            height={500}
            style={{ width: "250px", height: "500px" }}
          />
        </div>
        <span
          className="absolute font-['Roboto_Flex'] font-medium text-[24px] leading-[28px] text-[#414141] text-center"
          style={{
            width: "323px",
            height: "28px",
            left: "calc(50% - 323px/2 + 0.5px)",
            top: "925px",
            zIndex: 20,
          }}
        >
          BREZPLAČNO v vaši cvetličarni.
        </span>
      </div>
    );
  }

  if (breakpoint === "mobile") {
    return (
      <div className="bg-[url('/gradient_ozadje.avif')] bg-cover text-[#22281C] h-auto">
        <div className="py-[54px]">
          <div className="image-container w-[325px] text-center mx-auto">
            <h2 className="text-[28px] p-0 leading-[100%]">
              Obveščanje o pogrebu
            </h2>
            <p className="text-[#3C3E41] text-[16px] mt-[25px]">
              V težkih trenutkih je včasih lažje poslati ali deliti po socialnih
              omrežjih, kot obveščati vsakega posebej.{" "}
            </p>
            <p className="text-[#3C3E41] text-[16px] mt-[30px]">
              Digitalna obvestila o pogrebu, sožalja, zahvale lahko brezplačno
              prevzamete v vaši lokalni cvetličarni (ki jo najdete na naših
              straneh) in s pošiljanjem naprej lahko začnete takoj.{" "}
            </p>
            <p className="text-[#3C3E41] text-[16px] mt-[16px]">
              Op. Na naši strani mi teh kartic ne ponujamo.{" "}
            </p>
          </div>
          <div className="text-container mt-[36px] flex justify-center">
            <Image
              src="/mobile-cards/iphone.png"
              alt="iPad Landscape"
              width={250}
              height={500}
            />
          </div>
          <div className="inner-div mt-[45px] text-center">
            <h3 className="text-[#22281C] text-[20px] font-medium">
              BREZPLAČNO v vaši cvetličarni.
            </h3>
          </div>
        </div>
      </div>
    );
  }
};

export default IphoneView;
