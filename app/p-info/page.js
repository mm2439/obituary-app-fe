"use client";

import Image from "next/image";
import { FAQHeader } from "@/app/components/appcomponents/Header";
import { FooterForFaq2 } from "../components/appcomponents/Footer";

export default function Faq1() {
  return (
    <div className="bg-[#ECF0F3] min-h-[100vh] relative text-[#3C3E41]">
      <FAQHeader />

      <div className="tablet:w-[700px] desktop:w-[1200px] absolute top-[108px] left-1/2 -translate-x-1/2 flex items-end justify-end">
        <h1 className="text-[#0A85C2] text-[18px] desktop:text-[20px] mobile:hidden">
          POGREBNA PODJETJA
        </h1>
      </div>


        

        <div className="w-full hidden mobile:flex gap-[16px] absolute top-[80px] left-0 right-0 justify-center items-center">
          <div className="w-[140px] h-[35px] flex items-center justify-center rounded-[2px] text-[14px] text-[#FFFFFF]" 
          style={{background: "linear-gradient(180deg, #0D94E8 4.81%, #1860A3 100%)", border: "2px solid #6D778E"}}>
          PRILOŽNOST
          </div>
          <div className="w-[140px] h-[35px] flex items-center justify-center rounded-[2px] text-[14px] text-[#6D778E]" 
          style={{border: "2px solid #6D778E"}}>
          CENIK
          </div>
        </div>

      <div className="flex flex-col items-center mobile:pt-[189px] pt-[200px] w-full px-4 max-w-[720px] mx-auto">
          <Image src="/faq_page_icon.png" alt="FAQ" width={94} height={94} />
          <h1 className="text-[40px] font-light mt-4 text-center mobile:text-[26px] ">
            Brezplačno je
          </h1>
          <h2 className="text-[22px] mt-2 font-semibold text-center">
            Danes. Jutri. Za vedno!
          </h2>
          <section className="mt-10 text-[16px] space-y-6 leading-[1.6] mobile:w-[354px] w-[704px]">
            <hr className="h-[1px] bg-[#D4D4D4] w-full mobile:block hidden"/>
            <div>
              <h3 className="mb-1 font-semibold text-[18px] ">Kaj dobim?</h3>
              <p className="font-light text-[16px]">
                Brezplačna izdelava vaše strani. Brezplačni vpis osmrtnic in pogrebov. Prihranek več ur vsak teden. Brezplačne digitalne produkte za vaše kliente. Vidnost.
              </p>
            </div>
            <hr className="h-[1px] bg-[#D4D4D4] w-full mobile:block hidden"/>
            <div>
              <h3 className="mb-1 font-semibold text-[18px] ">Kakšne digitalne produkte?</h3>
              <p className="font-light text-[16px]">
                Poleg brezplačnega vpisa osmrtnic, jim lahko ponudite brezplačno še druge produkte. Morda tudi digitalne kartice za pošiljanje naprej preko telefona, zahvale in kmalu še nekaj drugih. Če to želite; to ni obveza.
              </p>
            </div>
            <hr className="h-[1px] bg-[#D4D4D4] w-full mobile:block hidden"/>
            <div>
              <h3 className="mb-1 font-semibold text-[18px] ">Pa je res brezplačno?</h3>
              <p className="font-light text-[16px]">
                Popolnoma in pri tem bo ostalo. Naše pričakovanje je zgolj, da ažurno dodajate nove dogodke, kar pa je tudi sicer v vašem interesu, ker prav to vam prihrani delo in čas.
              </p>
            </div>
            <hr className="h-[1px] bg-[#D4D4D4] w-full mobile:block hidden"/>
            <div>
              <h3 className="mb-1 font-semibold text-[18px] ">Prezamudno bi bilo redno vnašati osmrtnice. Nismo vešči računalnika.</h3>
              <p className="font-light text-[16px]">
                Sistem je dovršen, zato vnos nove osmrtnice traja dobro minuto, vnos pogreba pa pol minute. Tudi za izdelavo vaše spletne strani ni potrebno nikakšnje predznanje. Vsak si jo lahko izdela sam.
              </p>
            </div>
            <hr className="h-[1px] bg-[#D4D4D4] w-full mobile:block hidden"/>
            <div>
              <h3 className="mb-1 font-semibold text-[18px] ">Kaj naj storim zdaj, kako naj začnem?</h3>
              <p className="font-light text-[16px]">
                Registrirajte podjetje <a href="#" className="text-[#0A85C2] underline">tukaj</a>. V uporabniškem računu vas čaka nekaj strani, ki vam bodo v pomoč in pomagala za pošiljanje daril in izdelavo lastne spletne strani. Brez obveznosti in brezplačno za vedno.
              </p>
            </div>
            <hr className="h-[1px] bg-[#D4D4D4] w-full mobile:block hidden"/>
          </section>
          <div className="flex justify-end w-full mt-[50px] pb-[60px] mobile:hidden">
            <button>
              <Image
                src="/pridruzi-se-button.svg"
                alt="Arrow Right"
                width={250}
                height={60}
              />
            </button>
          </div>
      </div>

      <div className="w-full hidden mobile:flex gap-[16px] mt-12 mb-6 justify-center items-center">
        <div className="w-[140px] h-[35px] flex items-center justify-center rounded-[2px] text-[14px] text-[#FFFFFF]" 
        style={{background: "linear-gradient(180deg, #0D94E8 4.81%, #1860A3 100%)", border: "2px solid #6D778E"}}>
        PRILOŽNOST
        </div>
        <div className="w-[140px] h-[35px] flex items-center justify-center rounded-[2px] text-[14px] text-[#6D778E]" 
        style={{border: "2px solid #6D778E"}}>
        CENIK
        </div>
      </div>

      <FooterForFaq2 />
    </div>
  );
}
