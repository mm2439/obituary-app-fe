import FuneralPromoHeader from "./FuneralPromoHeader";
import FuneralPromoFooter from "./FuneralPromoFooter";
import { useState } from "react";
import Image from "next/image";

const FuneralPromo2 = () => {

  const [openAccordionIndex, setOpenAccordionIndex] = useState(null);
  const toggleAccordion = (index) => {
    setOpenAccordionIndex(openAccordionIndex === index ? null : index);
  };
  
  return (
    <div className="w-full max-w-[1280px] bg-[#F9EBD4] max-h-[1200px] shadow-[5px_5px_16px_0px_#6262624D] mx-auto">
      <FuneralPromoHeader show={true} />
      <div className="main-container h-auto px-4 md:px-8">
        <div className="inner-container my-[90px] max-w-[700px] mx-auto text-[#3C3E41]">
          <img
            src="/funeralpromo/check-circle.png"
            className="w-[90px] h-[90px] mx-auto"
            alt=""
          />

          <div className="text-container w-auto h-[103px] mx-auto text-center mt-[12.5px] px-2 sm:px-4">
            <h2 className="text-[28px] sm:text-[36px] md:text-[40px] leading-[36px] sm:leading-[44px] md:leading-[48px] font-light">
              Kaj zdaj, kako naj začnem?
            </h2>
            <p className="text-[18px] sm:text-[20px] md:text-[22px] leading-[32px] sm:leading-[40px] md:leading-[48px] font-semibold">
              Cvetličarne - Preprosti napotki
            </p>
          </div>

          <div className="faq-accordion mt-[50px] mb-[65px]">
            {[0, 1, 2, 3, 4, 5].map((index) => {
              const titles = [
                "Registracija",
                "Izdelava spletne strani",
                "Objava osmrtnice",
                "Darila vašim strankam",
                "Imamo že svojo spletno stran. Ne rabimo še vaše.",
                "Imamo več cvetličarn. Dostavljamo v več mest.",
              ];

              return (
                <div
                  key={index}
                  className="w-full border-y border-[#D4D4D4]"
                >
                  <button
                    onClick={() => toggleAccordion(index)}
                    className={`w-full h-[48px] flex items-center justify-between 
                    px-[22.93px] pt-[11px] pb-[11px] text-[16px] 
                    ${openAccordionIndex === index ? "bg-[#083545] text-[#fff]" : "bg-transparent text-[#1E2125]"}`}
                  >
                    <span className="font-semibold leading-[27px] text-[18px]">
                      {titles[index]}
                    </span>
                    <Image
                      src={
                        openAccordionIndex === index
                          ? "/funeralpromo/minus.png"
                          : "/funeralpromo/plus.png"
                      }
                      width={24}
                      height={24}
                      alt="toggle-icon"
                      className={`${
                        openAccordionIndex === index
                          ? "filter brightness-0 invert"
                          : ""
                      }`}
                    />
                  </button>

                  {openAccordionIndex === index && (
                    <div className="px-[22.93px] pb-[20px] pt-1 text-[14px]">
                      {/* Sample content only for index 5 */}
                      {index === 5 ? (
                        <>
                          <p className="font-light leading-[24px] text-[16px] text-[#3C3E41]">
                            Odlično, potem je prav ta rešitev prava za vaše
                            podjetje! Na svoji spletni strani in imenikih boste
                            lahko oglaševali vse. Cena za matično cvetličarno se
                            obračuna kot običajno, cena za vsako naslednjo
                            cvetličarno pa znaša samo 50% siceršnje cene.
                          </p>
                          <br />
                          <p className="font-light leading-[24px] text-[16px] text-[#3C3E41]">
                            Ste mobilni ter opravljate dostavo in prodajo po
                            več mestih? Da bi se cvetličarna izpisovala v več
                            mestih = kot lokalna, boste morali ta mesta dodati.
                            Matična cvetličarna se obračuna kot običajno, cena
                            za vsako naslednjo občino pa znaša 50% siceršnje
                            cene (in tam se bo vaša cvetličarna izpisovala kot
                            lokalna cvetličarna).
                          </p>
                        </>
                      ) : (
                        <p className="font-light leading-[24px] text-[16px] text-[#3C3E41]">
                          {/* Accordion content goes here */}
                        </p>
                      )}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          <div className="most-outer-container flex justify-end px-2 sm:px-0">
            <div
              className="p-[2px] mt-[49px] w-[250px] rounded-[50px] shadow-[5px_5px_10px_0px_#A6ABBD,_-5px_-5px_10px_0px_#FAFBFF]"
              style={{
                background:
                  "linear-gradient(180deg, rgba(10,133,194,0.7), rgba(18,53,151,0.7))",
                borderRadius: "1000px",
                display: "inline-block",
              }}
            >
              <button
                className="w-full px-[9px] py-[15px] rounded-[50px] text-[#414B5A] font-semibold"
                style={{
                  backgroundColor: "white",
                }}
              >
                Prijavi se
              </button>
            </div>
          </div>
        </div>
      </div>

      <FuneralPromoFooter />
    </div>
  );
};

export default FuneralPromo2;
