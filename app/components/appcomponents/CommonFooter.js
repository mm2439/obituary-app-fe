"use client";

import Image from "next/image";
import logo2 from "@/public/footer_logo.png";
import logoWhite from "@/public/footer_logo.png";
import Link from "next/link";
import { usePathname } from "next/navigation";

// ✅ Footer link sets based on page identifier
const footerLinkSets = {
  "/osmrtnice": [
    { label: "Prva stran", path: "/", showOnMobile: false },
    { label: "Osmrtnice", path: "/osmrtnice ", showOnMobile: true },
    { label: "Pogrebi", path: "/pogrebi ", showOnMobile: true },
    { label: "Spominske", path: "/osmrtnice ", showOnMobile: true },
    { label: "Cvetličarne", path: "/cvetlicarne  ", showOnMobile: true },
  ],
  "/pogrebi": [
    { label: "Prva stran", path: "/", showOnMobile: false },
    { label: "Osmrtnice", path: "/osmrtnice ", showOnMobile: true },
    { label: "Pogrebi", path: "/pogrebi ", showOnMobile: true },
    { label: "Spominske", path: "/osmrtnice ", showOnMobile: true },
    { label: "Cvetličarne", path: "/cvetlicarne  ", showOnMobile: true },
  ],
  "/pogrebna-p": [
    { label: "Prva stran", path: "/", showOnMobile: false },
    { label: "Osmrtnice", path: "/osmrtnice ", showOnMobile: true },
    { label: "Pogrebi", path: "/pogrebi ", showOnMobile: true },
    { label: "Spominske", path: "/osmrtnice ", showOnMobile: true },
    { label: "Cvetličarne", path: "/cvetlicarne  ", showOnMobile: true },
  ],
  "/cvetlicarne": [
    { label: "Prva stran", path: "/", showOnMobile: false },
    { label: "Osmrtnice", path: "/osmrtnice ", showOnMobile: true },
    { label: "Pogrebi", path: "/pogrebi ", showOnMobile: true },
    { label: "Spominske", path: "/osmrtnice ", showOnMobile: true },
    { label: "Cvetličarne", path: "/cvetlicarne  ", showOnMobile: true },
  ],
  "/zalna-stran": [
    { label: "Prva stran", path: "/", showOnMobile: false },
    { label: "Osmrtnice", path: "/osmrtnice ", showOnMobile: true },
    { label: "Pogrebi", path: "/pogrebi ", showOnMobile: true },
    { label: "Spominske", path: "/osmrtnice ", showOnMobile: true },
    { label: "Cvetličarne", path: "/cvetlicarne  ", showOnMobile: true },
  ],
  "/spominska": [
    { label: "Prva stran", path: "/", showOnMobile: false },
    { label: "Osmrtnice", path: "/osmrtnice ", showOnMobile: true },
    { label: "Pogrebi", path: "/pogrebi ", showOnMobile: true },
    { label: "Spominske", path: "/osmrtnice ", showOnMobile: true },
    { label: "Cvetličarne", path: "/cvetlicarne  ", showOnMobile: true },
  ],
  "/resitve-za-cvetlicarne": [
    { label: "Začetna ", path: "/ ", showOnMobile: false },
    { label: "Cvetličarne", path: "/resitve-za-cvetlicarne ", showOnMobile: true },
    { label: "Priložnost", path: "/c-priloznost ", showOnMobile: true },
    { label: "Pogrebna", path: "/resitve-za-pogrebna-podjetja ", showOnMobile: true },
  ],
  "/resitve-za-pogrebna-podjetja": [
    { label: "Začetna ", path: "/ ", showOnMobile: false },
    { label: "Cvetličarne", path: "/resitve-za-cvetlicarne ", showOnMobile: true },
    { label: "Pogrebna", path: "/resitve-za-pogrebna-podjetja ", showOnMobile: true },
    { label: "Priložnost", path: "/p-priloznost ", showOnMobile: true },
  ],
};

const CommonFooter = ({ currentPage = "/" }) => {
  const pathname = usePathname();
  const linksToRender = footerLinkSets[currentPage] || [];

  return (
    <div className="bg-[#D4E6F9] border-l-1 border-r-1 border-t-1 border-b-1 border-color-[#D3D3D3] tablet:pt-[31px] pt-[29px] mobile:pt-[15px] pb-[14px]">
      {/* Top Section */}
      <div className="flex justify-between items-center tablet:w-[744px] mobile:w-[360px] desktop:w-[1190px] px-[15px] mobile:px-[5px] mx-auto">
        <Image
          src={logoWhite}
          width={160}
          height={20}
          alt="c"
          className="w-[160px] h-[20px] mobile:hidden"
        />
        <div className="inline-flex gap-[10px] mobile:gap-[8px] text-[14px] items-center mobile:justify-end mobile:px-[20px] mobile:w-full">
          {linksToRender.map((link, index) => (
            <>
              <Link
                key={link.label}
                href={link.path}
                className={`text-[#1860A3] underline ${link.showOnMobile === false ? "mobile:hidden" : ""
                  }`}
              >
                {link.label}
              </Link>
              {index < linksToRender.length - 1 && (
                <div
                  className={`w-[5px] h-[5px] bg-[#1860A3] rounded-full ${link.showOnMobile === false ? "mobile:hidden" : ""
                    }`}
                ></div>
              )}
            </>
          ))}
        </div>
      </div>

      {/* Divider */}
      <div className="flex justify-between items-center tablet:w-[744px] mobile:w-[320px] desktop:w-[1190px] mx-auto bg-[#D4D4D4] h-[1px] mt-[18px] mobile:hidden"></div>

      {/* Bottom Section - Desktop */}
      <div className="flex justify-between items-center tablet:w-[744px] mobile:w-[320px] desktop:w-[1190px] px-[15px] mobile:px-[5px] mx-auto mt-[18px] mobile:hidden">
        <div className="flex flex-col">
          <Image
            src={logo2}
            width={160}
            height={20}
            alt="c"
            className="w-[160px] h-[20px] hidden mobile:flex mb-[5px]"
          />
          <span className="text-[12px] text-[#1E2125] font-normal leading-[24px]">
            © 2025 Vse pravice zadržane
          </span>
        </div>
        <div className="inline-flex gap-[30px] mobile:gap-[16px]">
          <Link
            href="/kontakt"
            className="text-[#1860A3] underline w-[65px] text-[14px]"
          >
            Pišite nam
          </Link>
          <Link href="/" className="">
            <Image
              src={"/promo_footer_facebook.png"}
              width={18}
              height={18}
              alt="Facebook Icon"
            />
          </Link>
          <Link href="/" className="">
            <Image
              src={"/promo_footer_instagram.png"}
              width={18}
              height={18}
              alt="Instagram Icon"
            />
          </Link>
        </div>
      </div>

      {/* Bottom Section - Mobile */}
      <div className="mobile:flex justify-between items-center tablet:w-[744px] mobile:w-[360px] desktop:w-[1190px] px-[15px] mobile:px-[22px] mx-auto mt-[18px] hidden">
        <div className="flex flex-col">
          <Image
            src={logo2}
            width={140}
            height={17}
            alt="c"
            className="w-[140px] h-[17px] hidden mobile:flex mb-[5px]"
          />
          <span className="text-[10.5px] text-[#1E2125] opacity-70 font-normal leading-[24px]">
            © 2025 Vse pravice zadržane
          </span>
        </div>
        <div className="inline-flex gap-[30px] mobile:gap-[16px]">
          <Link
            href="/kontakt"
            className="text-[#1860A3] underline w-[65px] text-[14px]"
          >
            Pišite nam
          </Link>
          <Link href="/" className="">
            <Image
              src={"/promo_footer_facebook.png"}
              width={18}
              height={18}
              alt="Facebook Icon"
            />
          </Link>
          <Link href="/" className="">
            <Image
              src={"/promo_footer_instagram.png"}
              width={18}
              height={18}
              alt="Instagram Icon"
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CommonFooter;
