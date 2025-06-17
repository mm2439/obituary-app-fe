"use client"

import { useState, useEffect } from "react";
import Image from "next/image";
import { toast } from "react-hot-toast";
import userService from "@/services/user-service";
import { usePathname, useRouter } from "next/navigation";

export default function ChangeUrlSlug({open, setOpen}) {
  const [slug, setSlug] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [newSlug, setNewSlug] = useState("");
  const pathname = usePathname();
  const router = useRouter();

  const handleChangeSlug = async () => {
    setIsLoading(true);
    try {
    const response = await userService.changeSlug(newSlug);
    if(!response.error) {
      localStorage.setItem("user", JSON.stringify({ ...JSON.parse(localStorage.getItem("user")), slugKey: newSlug }));
      setSlug(newSlug);
      setOpen(false);
      toast.success("Naslov strani je bil uspešno spremenjen");
      router.push(`/c/${newSlug}/${pathname.split("/").pop()}`);
    } else {
        toast.error("Prišlo je do napake pri spreminjanju naslova strani");
      }
    } catch (error) {
      toast.error("Prišlo je do napake pri spreminjanju naslova strani");
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    setSlug(JSON.parse(localStorage.getItem("user"))?.slugKey || "");
  }, [open]);

  return <div className={`w-full h-screen fixed bg-[#344054B2] backdrop-blur-[16px] z-[1000] flex items-center justify-center transition-all duration-300 ${open ? "opacity-100 visible" : "opacity-0 invisible"}`}>
   <div className="w-[595px] h-[700px] rounded-[16px] border-[1px] border-[#D4D4D4] bg-[#E8F0F6] p-[2px]">
      <div className="w-full flex items-center justify-end">
        <Image src="/change_slug_cencel.png" alt="close" className="cursor-pointer" width={72} height={72} onClick={() => setOpen(false)} />
      </div>
      <div className="bg-[#E1E6EC] border-[1px] border-[#6D778E] py-[48px] px-[32px] mx-auto w-[500px] h-[550px] rounded-[16px] mt-[16px]">
        <h3 className="text-[#1E2125] font-[400] text-[24px] leading-[100%]">Potrditev naslova vaše strani</h3>
        <div className="space-y-[12px] mt-[12px]">
          <p className="text-[#414141] text-[14px] leading-[24px] font-[400]"><br/>Spletni naslov vaše strani bo</p>
          <div className="border-[0.5px] border-[#FFFFFF66] rounded-[8px] p-[12px] text-[16px] leading-[100%] font-[400] text-[#6D778E] py-[11px] px-[14px]" style={{
            // s
            boxShadow: "2.5px 2.5px 5px 0px #A6ABBD inset, -2.5px -2.5px 5px 0px #FAFBFF inset"
          }}>
            www.osmrtnica.com/c/<span className="text-[#3C3E41]">{slug}</span>
          </div>
        </div>
        <div className="space-y-[12px] mt-[12px]">
          <p className="text-[#6D778E] text-[16px] leading-[26px] font-[400]"><br/>Če želite kak drug naslov, potem napišite kaj naj bo za /c/ 
          (sicer preskočite ta okvirček in ga pustite praznega)</p>
          <input 
            type="text" 
            className="border-[0.5px] border-[#FFFFFF66] rounded-[8px] p-[12px] placeholder:text-[16px] placeholder:leading-[100%] placeholder:font-[400] placeholder:text-[#6D778E] py-[7px] px-[14px] w-full bg-[#ecf1f9] outline-none" 
            style={{
              boxShadow: "2.5px 2.5px 5px 0px #A6ABBD inset, -2.5px -2.5px 5px 0px #FAFBFF inset"
            }} 
            placeholder="npr. komunala-mesto ali Gradec ali ime podjetja"
            value={newSlug}
            onChange={(e) => setNewSlug(e.target.value)}
          />
        </div>
        <p className="text-[#6D778E] font-[400] text-[14px] leading-[26px] text-end mt-[12px]">op. napiši samo svoj del naslova; prvi del ne vpisuj. <br/>
        op. piši brez presledkov: komunala-trbovlje, cvetlicarna-maja</p>

        <button className="w-[250px] h-[60px] rounded-[10px] text-[20px] leading-[24px] font-[600] flex items-center justify-center outline-none relative overflow-hidden mt-[34px]" style={{
          boxShadow: "5px 5px 10px 0px #A6ABBD, -5px -5px 10px 0px #FAFBFF",
        }} onClick={handleChangeSlug}>
          <div className="absolute top-0 left-0 w-full h-full" style={{
            background: "linear-gradient(180deg, rgba(10, 133, 194, 0.7) 0%, rgba(18, 53, 151, 0.7) 100%)"
          }}></div>
          <div className="absolute top-[2px] left-[2px] w-[246px] h-[56px] bg-[#f5f7fb] rounded-[8px]"></div>
          <p className="text-[#414B5A] font-[600] text-[20px] leading-[24px] relative z-[1] w-[246px] h-[56px] flex items-center justify-center" style={{
            background: "linear-gradient(180deg, rgba(0, 0, 0, 0) 60.83%, rgba(24, 96, 163, 0.1) 100%)" 
          }}>Potrdi</p>
        </button>
      </div>
   </div>
  </div>;
}