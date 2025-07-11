"use client";

import Image from "next/image";
import { FAQHeader } from "@/app/components/appcomponents/Header";
import { FooterForFaq2 } from "../components/appcomponents/Footer";

export default function Faq1() {
  return (
    <div className="bg-[#F9EBD4] min-h-[100vh] text-[#3C3E41] relative">
      <FAQHeader />
        <div className="tablet:w-[700px] desktop:w-[1200px] absolute top-[108px] left-1/2 -translate-x-1/2 flex items-end justify-end">
          <h1 className="text-[#0A85C2] text-[18px] desktop:text-[20px] mobile:hidden">
            CVETLIČARNE
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

      <div className="flex flex-col items-center pt-[200px] w-full px-4 max-w-[720px] mx-auto">
        <Image src="/faq_page_icon.png" alt="FAQ" width={94} height={94} />
        <h1 className="text-[40px] font-light mt-4 text-center mobile:text-[26px] ">
          Brezplačni vpis in oglaševanje
        </h1>
        <h2 className="text-[22px] mobile:hidden block mt-2 font-semibold text-center">
          Za prvih 60 cvetličarn oziroma do konca avgusta
        </h2>

        <h2 className="text-[22px] mobile:block hidden mobile:font-[20px] mt-2 font-semibold text-center">
          Dva meseca. Brez obveznosti.
        </h2>

        <section className="mt-10 text-[16px] space-y-6 leading-[1.6] mobile:w-[354px] w-[706px]">
          <div>
            <h3 className="font-semibold text-[18px] mb-1 ">Kaj dobim?</h3>
            <p className = "font-light text-[16px]">
              Priložnost biti na pravem mestu, ob pravem času, ko vas vaše stranke potrebujejo.<br /><br />
              Brezplačno izdelavo vaše strani. Dva meseca (to je do konca avgusta 2025)
              brezplačne uporabe in oglaševanja in ekskluzivne dodatne popuste kasneje. In seveda
              celo vrsto brezplačnih digitalnih produktov za vaše stranke. Prve pridružene
              cvetličarne pa bodo deležne še nekaj dodatnih ugodnosti.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-[18px] mb-1 ">Kakšne ‘digitalne produkte za naše stranke’?</h3>
            <p className = "font-light text-[16px]">
              Spominsko stran (s statusom Skrbnika). Mobi digitalna vabila, sožalja, zahvale za
              pošiljanje naprej. Izjemoma tudi možnost vpisovanja osmrtnic. In še več brezplačnih
              produktov v kratkem.
              <br /><br />
              To ni obveza; je zgolj konkurenčna prednost, ki jo lahko izkoristite in zaradi katerih
              bodo stranke iskale in tudi obiskale vas, ne vaše konkurence, ki (še) ni vključena v
              sistem. Ker gre za zanimive produkte, ki so popolna novost na trgu, ljudje o njih
              govorijo, kar prinaša posredno promocijo vašemu podjetju in dodatne obiske vaših
              klientov, ki jih sicer ne bi bilo.
              <br /><br />
              Produkte za vaše stranke zagotovimo brezplačno, vi pa jih sami po svoji presoji
              podarjate naprej.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-[18px] mb-1 ">Kaj, če se ne vključim ali zamudim?</h3>
            <p className = "font-light text-[16px]">
              Lahko se pridružite kadarkoli kasneje; le nekaj manj ugodnosti bo na voljo, npr.
              možnosti brezplačne izdelave strani, nekaj drugih koristi, popustov, oglaševanj, je pa
              nekaj gotovo - brez najmanjšega dvoma se boste v nadaljevanju pridružili, sploh ko
              bomo ponudili še naslednje nadgradnje. Ostati zunaj se ne splača.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-[18px] mb-1 ">Kakšna bo cena kasneje?</h3>
            <p className = "font-light text-[16px]">
              Naš cilj je povezati vse lokalne cvetličarne na enem mestu, od majhnih z dvema
              zaposlenima do velikanov, zato smo temu prilagodili tudi cene in omogočili sodelovanje
              vsem.
              <br /><br />
              Mesečni strošek brez popustov za cvetličarne bo tako znašal:
              <br />
              10€ na mesec - manjše občine
              <br />
              20€ na mesec - občine z nad 20.000 prebivalcev
              <br />
              30€ na mesec v Ljubljani -&nbsp;
              <span className="text-[14px]">
                 (op. vse tukaj navedene cene so brez vključenega DDV in brez upoštevanja popustov)
              </span>
              <br /><br />
               <span className="text-[14px]">
                  Op. V mesečni strošek je vključeno oglaševanje cvetličarne v svoji občini. Za
                  oglaševanje v več občinah odpri Pogosta vprašanja tukaj.
               </span>
              
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-[18px] mb-1 ">
              Nismo vešči računalnika. Ne bomo znali izdelati svojo stran ali pošiljati darila naprej.
            </h3>
            <p className = "font-light text-[16px]">
              Sistem je dovršen in avtomatiziran. Potrebno je zgolj dodati svoja besedila v za to
              namenjena okenca in prilepiti slike. V primeru težav bomo seveda pomagali do konca
              otvoritvene akcije, medtem ko se bo kasneje predvidoma izdelava strani zaračunavala in
              vam bomo torej stran zgradili mi.
              <br /><br />
              Obdarovanje strank z digitalnimi produkti je enostavno in traja manj kot minuto, ki je
              potrebna za vpis elektronskega naslova. Tudi vpis osmrtnice ne traja več kot dobro
              minuto. Tako enostavno je!
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-[18px] mb-1 ">Kaj naj storim zdaj, kako naj začnem?</h3>
            <p className = "font-light text-[16px]">
              Registrirajte podjetje <a href="#" className="text-[#0A85C2] underline">tukaj</a>.
              Testirajte brezplačno in brez obveznosti do konca avgusta. Ne splača se čakati, ker
              prvih 60 naročnikov čaka nekaj posebej privlačnih dolgoročnih ugodnosti.
            </p>
          </div>
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
