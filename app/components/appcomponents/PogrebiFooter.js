import Image from "next/image";
import logo2 from "@/public/footer_logo.png";
import logoWhite from "@/public/footer_logo.png";
import Link from "next/link";

const PogrebiFooter = () => {
 return (
    <div className="bg-[#D4E6F9] border-l-1 border-r-1 border-t-1 border-b-1 border-color-[#D3D3D3] pt-[29px] mobile:pt-[15px] pb-[9px]">
      <div className="flex justify-between items-center tablet:w-[744px] mobile:w-[360px] desktop:w-[1190px] px-[15px] mobile:px-[5px] mx-auto">
        <Image src={logoWhite} width={160} height={20} alt="c" className="w-[160px] h-[20px] mobile:hidden" />
        <div className="inline-flex gap-[10px] mobile:gap-[8px] text-[14px] items-center mobile:justify-center mobile:w-full">
          <Link href="/" className="text-[#1860A3] underline mobile:hidden">Prva stran</Link>
          <div className="w-[5px] h-[5px] bg-[#1860A3] rounded-full mobile:hidden"></div>
          <Link href="/" className="text-[#1860A3] underline">Osmrtnice</Link>
          <div className="w-[5px] h-[5px] bg-[#1860A3] rounded-full"></div>
          <Link href="/" className="text-[#1860A3] underline">Pogrebi</Link>
          <div className="w-[5px] h-[5px] bg-[#1860A3] rounded-full"></div>
          <Link href="/" className="text-[#1860A3] underline">Spominske</Link>
          <div className="w-[5px] h-[5px] bg-[#1860A3] rounded-full"></div>
          <Link href="/" className="text-[#1860A3] underline">Cvetličarne</Link>
        </div>
      </div>
     
      <div className="flex justify-between items-center tablet:w-[744px] mobile:w-[320px] desktop:w-[1190px] mx-auto bg-[#D4D4D4] h-[1px] mt-[18px] mobile:hidden"></div>
     
      <div className="flex justify-between items-center tablet:w-[744px] mobile:w-[320px] desktop:w-[1190px] px-[15px] mobile:px-[5px] mx-auto mt-[18px] mobile:hidden">
        <div className="flex flex-col">
        <Image src={logo2} width={160} height={20} alt="c" className="w-[160px] h-[20px] hidden mobile:flex mb-[5px]" />

        <span className="text-[12px] text-[#1E2125] font-normal leading-[24px]">© 2025 Vse pravice zadržane</span>
        </div>
        <div className="inline-flex gap-[30px] mobile:gap-[16px]">
          <Link href="/" className="text-[#1860A3] underline w-[65px] text-[14px]">Pišite nam</Link>
          <Link href="/" className="">
            <Image src={"/promo_footer_facebook.png"} width={18} height={18} alt="Facebook Icon" />
          </Link>
          <Link href="/" className="">
            <Image src={"/promo_footer_instagram.png"} width={18} height={18} alt="Instagram Icon" />
          </Link>
        </div>
      </div>


      {/* MOBILE  */}
       <div className="mobile:flex justify-between items-center tablet:w-[744px] mobile:w-[360px] desktop:w-[1190px] px-[15px] mobile:px-[22px] mx-auto mt-[18px] hidden">
        <div className="flex flex-col">
        <Image src={logo2} width={140} height={17} alt="c" className="w-[140px] h-[17px] hidden mobile:flex mb-[5px]" />

        <span className="text-[10.5px] text-[#1E2125] opacity-70 font-normal leading-[24px]">© 2025 Vse pravice zadržane</span>
        </div>
        <div className="inline-flex gap-[30px] mobile:gap-[16px]">
          <Link href="/" className="text-[#1860A3] underline w-[65px] text-[14px]">Pišite nam</Link>
          <Link href="/" className="">
            <Image src={"/promo_footer_facebook.png"} width={18} height={18} alt="Facebook Icon" />
          </Link>
          <Link href="/" className="">
            <Image src={"/promo_footer_instagram.png"} width={18} height={18} alt="Instagram Icon" />
          </Link>
        </div>
      </div>
     
    </div>
  )
}

export default PogrebiFooter