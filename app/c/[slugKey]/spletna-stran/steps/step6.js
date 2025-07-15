"use client";

import Image from "next/image";
import OpenableBlock from "../components/OpenAbleBlock";
import ImageSelector from "../components/ImageSelector";
import { useEffect, useState } from "react";
import companyService from "@/services/company-service";
import shopService from "@/services/shop-service";
import toast from "react-hot-toast";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Step6({ data, onChange, handleStepChange }) {
  const [openBlock, setOpenBlock] = useState(1);
  const router = useRouter();
  const [shops, setShops] = useState([
    {
      index: 1,
      title: "Podatki o trgovini",
      isDefaultOpen: true,
      shopName: "",
      hours: "",
      address: "",
      email: "",
      telephone: "",
    },
  ]);
  const [name, setName] = useState("");
  const [companyId, setCompanyId] = useState(null);
  const [logo, setLogo] = useState(null);
  const [highlightText, setHighlightText] = useState("");
  const [instagram, setInstagram] = useState("");
  const [facebook, setFacebook] = useState("");

  const addSliderBlock = () => {
    setShops([
      ...shops,
      {
        index: shops.length + 1,
        title: "Podatki o trgovini",
        isDefaultOpen: false,
        shopName: "",
        hours: "",
        address: "",
        email: "",
        telephone: "",
        secondaryHours: "",
        tertiaryHours: "",
        quaternaryHours: "",
      },
    ]);
  };

  const handleShopChange = (index, updatedShop) => {
    const updatedShops = [...shops];
    updatedShops[index] = { ...updatedShop, updated: true };

    setShops(updatedShops);
  };

  const handleBCSubmit = async () => {
    try {
      const formData = new FormData();

      if (name) formData.append("name", name);
      if (companyId) formData.append("companyId", companyId);
      if (highlightText) formData.append("highlightText", highlightText);
      if (facebook) formData.append("facebook", facebook);
      if (logo) formData.append("logo", logo);
      if (instagram) formData.append("instagram", instagram);

      const response = await companyService.updateCompany(formData, companyId);
      onChange(response.company);
      toast.success("Podatki so shranjeni");

      console.log(response);
      return true;
    } catch (error) {
      console.log(error);
      return false;
    }
  };

  const validateFields = () => {
    const hasEmpty = shops.some(
      (shop) =>
        !shop.shopName?.trim() ||
        !shop.address?.trim() ||
        !shop.telephone?.trim() ||
        !shop.email?.trim() ||
        !shop.hours?.trim()
    );

    if (hasEmpty) {
      toast.error("Vpišite vse podatke o trgovini");
      return false;
    }

    return true;
  };

  const handleShopSubmit = async () => {
    try {
      // if (!validateFields()) return;

      const shopsToSend = shops.filter((shop) => {
        const isEmpty =
          !shop.shopName?.trim() &&
          !shop.address?.trim() &&
          !shop.telephone?.trim() &&
          !shop.email?.trim() &&
          !shop.hours?.trim();

        return !isEmpty && (!shop.id || shop.updated);
      });

      const data = {
        companyId,
        shops: shopsToSend,
      };
      await handlePublish();
      const response = await shopService.createShop(data);
      const updatedCompany = {
        ...data,
        shops: response.shops,
      };
      onChange(updatedCompany);
      toast.success("Trgovine so ustvarjene, podjetje je poslano za odobritev");
      router.push(`/floristdetails/${companyId}`);

      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  const handlePublish = async () => {
    try {
      if (data && data.status === "DRAFT") {
        return;
      }
      const formData = new FormData();
      formData.append("status", "DRAFT");

      const response = await companyService.updateCompany(formData, companyId);
      onChange(response.company);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    setCompanyId(data.id);
    setName(data.name);
    setHighlightText(data.highlightText);
    setFacebook(data.facebook);
    setInstagram(data.instagram);
    setLogo(data.logo);

    if (data?.shops && data?.shops?.length > 0) {
      console.log(data.shops, "===================");
      const updatedShops = data.shops.map((shop, index) => ({
        ...shop,
        index: index + 1,
      }));
      setShops(updatedShops);
    }
  }, [data]);

  return (
    <>
      <div className="absolute top-[-24px] z-10 right-[30px] text-[14px] leading-[24px] text-[#6D778E]">
        Blue Daisy Florist, London
      </div>
      <div className="min-h-full flex flex-col justify-between gap-[16px]">
        <div className="space-y-[44px]">
          <div className="flex justify-between items-center">
            <div className="inline-flex gap-[17px] items-center">
              <div className="w-[48px] h-[48px] rounded-full bg-[#D4DCF0] border border-[#0A85C2] flex items-center justify-center text-[20px] leading-[100%] text-[#0A85C2]">
                6
              </div>
              <div className="space-y-0">
                <div className="text-[14px] text-[#6D778E] leading-[24px] font-normal">
                  KORAK 6
                </div>
                <div className="text-[20px] text-[#1E2125] leading-[100%] font-semibold">
                  Noga
                </div>
              </div>
            </div>
            {companyId && (
              <Link href={`/floristdetails/${companyId}`} target="blank">
                <div className="inline-flex gap-[8px] cursor-pointer">
                  <span className="text-[14px] text-[#3C3E41] leading-[24px]">
                    Predogled strani
                  </span>
                  <Image
                    src="/external_open.png"
                    alt="Predogled strani"
                    width={20}
                    height={20}
                    className="shrink-0 w-[20px] h-[20px]"
                  />
                </div>
              </Link>
            )}
          </div>
          <div className="space-y-[8px]">
            <OpenableBlock
              isDefaultOpen={true}
              title={"Vizitka"}
              index={1}
              openBlock={openBlock === 1}
              handleOpenBlock={() => setOpenBlock(1)}
            >
              <div className="space-y-[16px]">
                <div className="space-y-[8px]">
                  <div className="text-[16px] text-[#3C3E41] font-normal leading-[24px]">
                    Ime cvetličarne
                  </div>
                  <input
                    type="text"
                    name="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full border border-[#6D778E] bg-[#FFFFFF] outline-none rounded-[8px] py-[12px] px-[20px] text-[16px] text-[#3C3E41] placeholder:text-[#ACAAAA] leading-[24px]"
                    placeholder="Cvetličarna Suniflower"
                  />
                </div>
                <div className="space-y-[8px]">
                  <div className="text-[16px] text-[#3C3E41] font-normal leading-[24px]">
                    Logo
                    <span className="text-[#ACAAAA]">
                      (max velikost 370x240, razmerje 3:2)
                    </span>
                  </div>
                  <ImageSelector
                    setFile={(file) => setLogo(file)}
                    inputId="logo-upload"
                  />
                </div>
                <div className="space-y-[8px]">
                  <label className="text-[16px] text-[#3C3E41] font-normal leading-[24px]">
                    Poudarjen tekst{" "}
                    <span className="text-[#ACAAAA] text-[14px]">
                      (naj ne bo predolg)
                    </span>
                  </label>
                  <input
                    type="text"
                    name="highlight"
                    value={highlightText}
                    onChange={(e) => setHighlightText(e.target.value)}
                    className="w-full border border-[#6D778E] bg-[#FFFFFF] outline-none rounded-[8px] py-[12px] px-[20px] text-[16px] text-[#3C3E41] placeholder:text-[#ACAAAA] leading-[24px]"
                    placeholder="Obiščite našo spletno stran: www.suniflower.com "
                  />
                </div>
                <div className="space-y-[8px]">
                  <label className="text-[16px] text-[#3C3E41] font-normal leading-[24px] flex items-center gap-[8px]">
                    <img
                      src="/outline_facebook_icon.png"
                      alt="Facebook"
                      className="w-[24px] h-[24px]"
                    />
                    <div>
                      Facebook{" "}
                      <span className="text-[#ACAAAA] text-[14px]">
                        (lahko izpustite)
                      </span>
                    </div>
                  </label>
                  <input
                    type="text"
                    className="w-full border border-[#6D778E] bg-[#FFFFFF] outline-none rounded-[8px] py-[12px] px-[20px] text-[16px] text-[#3C3E41] placeholder:text-[#ACAAAA] leading-[24px]"
                    placeholder="Vaš Facebook"
                    name="facebook"
                    value={facebook}
                    onChange={(e) => setFacebook(e.target.value)}
                  />
                </div>
                <div className="space-y-[8px]">
                  <label className="text-[16px] text-[#3C3E41] font-normal leading-[24px] flex items-center gap-[8px]">
                    <img
                      src="/outline_instagram_icon.png"
                      alt="Facebook"
                      className="w-[24px] h-[24px]"
                    />
                    <div>
                      Instagram{" "}
                      <span className="text-[#ACAAAA] text-[14px]">
                        (lahko izpustite)
                      </span>
                    </div>
                  </label>
                  <input
                    type="text"
                    className="w-full border border-[#6D778E] bg-[#FFFFFF] outline-none rounded-[8px] py-[12px] px-[20px] text-[16px] text-[#3C3E41] placeholder:text-[#ACAAAA] leading-[24px]"
                    placeholder="Vaš Instagram"
                    name="instagram"
                    value={instagram}
                    onChange={(e) => setInstagram(e.target.value)}
                  />
                </div>
              </div>
            </OpenableBlock>
            {shops.map((block, index) => (
              <SliderBlock
                openBlock={openBlock}
                setOpenBlock={setOpenBlock}
                title={`Podatki o trgovini ${block.index}`}
                key={block.index}
                index={block.index}
                shop={block}
                onChange={handleShopChange}
              />
            ))}
            {openBlock === 2 && (
              <div className="flex items-center justify-end pt-[8px] pb-[0px]">
                <div
                  className="inline-flex items-center gap-[8px] cursor-pointer"
                  onClick={addSliderBlock}
                >
                  <img
                    src="/florist_plus.png"
                    alt="Dodaj sliko"
                    className="w-[16px] h-[16px]"
                  />
                  <span className="text-[14px] text-[#3C3E41] font-normal leading-[100%]">
                    DODAJ ŠE EN SLAJD
                  </span>
                </div>
              </div>
            )}
          </div>
        </div>
        <div className="space-y-[29px]">
          {openBlock === 2 && (
            <p className="text-[14px] text-[#6D778E] leading-[100%]">
              Ko vnesete vse pritisnite gumb objavi <br />
              in vašo stran bomo izdelali in objavili najkasneje v 48 urah.
            </p>
          )}
          {openBlock === 2 ? (
            <div className="flex items-center gap-[8px] justify-between w-full">
              <div className="flex items-center gap-[8px]">
                <button
                  type="button"
                  onClick={handleShopSubmit}
                  className="bg-[#3DA34D] text-[#FFFFFF] font-normal leading-[24px] text-[16px] py-[12px] px-[25px] rounded-[8px]"
                >
                  Shrani
                </button>
                <button
                  className="bg-gradient-to-r from-[#E3E8EC] to-[#FFFFFF] text-[#1E2125] font-normal leading-[24px] text-[16px] py-[12px] px-[25px] rounded-[8px] shadow-[5px_5px_10px_0px_rgba(194,194,194,0.5)]"
                  onClick={() => {
                    if (openBlock === 1) {
                      handleStepChange(5);
                    } else {
                      setOpenBlock(1);
                    }
                  }}
                >
                  Nazaj
                </button>
              </div>
              <button
                className="bg-gradient-to-b from-[#F916D6] to-[#9D208A] text-[#FFFFFF] font-semibold leading-[24px] text-[20px] py-[12px] px-[66px] rounded-[8px] shadow-[5px_5px_10px_0px_rgba(194,194,194,0.5)]"
                onClick={() => {
                  if (openBlock === 1) {
                    setOpenBlock(2);
                  } else {
                    handleShopSubmit();
                    handleStepChange(6);
                  }
                }}
              >
                Objavi
              </button>
            </div>
          ) : (
            <div className="space-y-[8px]">
              <div className="flex items-center gap-[8px] justify-between w-full">
                <button
                  type="button"
                  onClick={handleBCSubmit}
                  className="bg-[#3DA34D] text-[#FFFFFF] font-normal leading-[24px] text-[16px] py-[12px] px-[25px] rounded-[8px]"
                >
                  Shrani
                </button>
                <div className="flex items-center gap-[8px]">
                  <button
                    className="bg-gradient-to-r from-[#E3E8EC] to-[#FFFFFF] text-[#1E2125] font-normal leading-[24px] text-[16px] py-[12px] px-[25px] rounded-[8px] shadow-[5px_5px_10px_0px_rgba(194,194,194,0.5)]"
                    onClick={() => handleStepChange(5)}
                  >
                    Nazaj
                  </button>
                  <button
                    className="bg-gradient-to-r from-[#E3E8EC] to-[#FFFFFF] text-[#1E2125] font-normal leading-[24px] text-[16px] py-[12px] px-[25px] rounded-[8px] shadow-[5px_5px_10px_0px_rgba(194,194,194,0.5)]"
                    onClick={async () => {
                      if (openBlock === 1) {
                        const success = await handleBCSubmit();
                        if (success) {
                          setOpenBlock(2);
                        }
                      }
                    }}
                  >
                    Naslednji korak
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      <div className="w-full">
        {openBlock === 2 ? (
          <img
            src="/florist/6.png"
            alt="Spletna stran"
            className="w-full h-full object-contain"
          />
        ) : (
          <img
            src="/florist/6-1.png"
            alt="Spletna stran"
            className="w-full h-full object-contain"
          />
        )}
      </div>
    </>
  );
}

function SliderBlock({
  index,
  title,
  shop,
  onChange,
  openBlock,
  setOpenBlock,
}) {
  const handleChange = (e) => {
    onChange(index - 1, { ...shop, [e.target.name]: e.target.value });
  };
  return (
    <OpenableBlock
      isDefaultOpen={false}
      title={title}
      index={index}
      openBlock={openBlock === 2}
      handleOpenBlock={() => setOpenBlock(2)}
    >
      <div className="space-y-[16px] ">
        <div className="space-y-[8px]">
          <div className="text-[16px] text-[#3C3E41] font-normal leading-[24px]">
            Ime cvetličarne
          </div>
          <input
            type="text"
            name="shopName"
            value={shop.shopName}
            onChange={handleChange}
            className="w-full border border-[#6D778E] bg-[#FFFFFF] outline-none rounded-[8px] py-[12px] px-[20px] text-[16px] text-[#3C3E41] placeholder:text-[#ACAAAA] leading-[24px]"
            placeholder="Cvetličarna št.1"
          />
        </div>
        <div className="space-y-[8px]">
          <div className="text-[16px] text-[#3C3E41] font-normal leading-[24px]">
            Naslov
          </div>
          <input
            type="text"
            className="w-full border border-[#6D778E] bg-[#FFFFFF] outline-none rounded-[8px] py-[12px] px-[20px] text-[16px] text-[#3C3E41] placeholder:text-[#ACAAAA] leading-[24px]"
            placeholder="Zidarska ulica 184, Ljubno ob Savinji"
            name="address"
            value={shop.address}
            onChange={handleChange}
          />
        </div>
        <div className="space-y-[8px]">
          <div className="text-[16px] text-[#3C3E41] font-normal leading-[24px]">
            Telefon
          </div>
          <input
            type="text"
            className="w-full border border-[#6D778E] bg-[#FFFFFF] outline-none rounded-[8px] py-[12px] px-[20px] text-[16px] text-[#3C3E41] placeholder:text-[#ACAAAA] leading-[24px]"
            placeholder="012-994-285"
            name="telephone"
            value={shop.telephone}
            onChange={handleChange}
          />
        </div>
        <div className="space-y-[8px]">
          <div className="text-[16px] text-[#3C3E41] font-normal leading-[24px]">
            Spletna pošta
          </div>
          <input
            type="text"
            className="w-full border border-[#6D778E] bg-[#FFFFFF] outline-none rounded-[8px] py-[12px] px-[20px] text-[16px] text-[#3C3E41] placeholder:text-[#ACAAAA] leading-[24px]"
            placeholder="vasnaslov@email.com"
            name="email"
            value={shop.email}
            onChange={handleChange}
          />
        </div>

        <div className="space-y-[8px]">
          <div className="text-[16px] text-[#3C3E41] font-normal leading-[24px]">
            Delovni čas
          </div>
          <small className="text-[#6D778E] text-[14px] font-normal ">
            Pišite dneve skupaj (na voljo so samo 4 vrstice) npr Pon-Pet
            9:00-17:00 ali Pon, Tor, Čet 10:00 do 18:00
          </small>
        </div>
        <div className="space-y-[8px] ms-2">
          <div className="text-[16px] text-[#3C3E41] font-normal leading-[24px]">
            Prva vrstica
          </div>
          <input
            type="text"
            className="w-full border border-[#6D778E] bg-[#FFFFFF] outline-none rounded-[8px] py-[12px] px-[20px] text-[16px] text-[#3C3E41] placeholder:text-[#ACAAAA] leading-[24px]"
            placeholder="Pon - Pet: 8:00 - 17:30"
            name="hours"
            value={shop.hours}
            onChange={handleChange}
          />
        </div>
        <div className="space-y-[8px] ms-2">
          <div className="text-[16px] text-[#3C3E41] font-normal leading-[24px]">
            Druga vrstica
          </div>
          <input
            type="text"
            className="w-full border border-[#6D778E] bg-[#FFFFFF] outline-none rounded-[8px] py-[12px] px-[20px] text-[16px] text-[#3C3E41] placeholder:text-[#ACAAAA] leading-[24px]"
            placeholder="Sobota: 7:30 - 14:00"
            name="secondaryHours"
            value={shop.secondaryHours}
            onChange={handleChange}
          />
        </div>
        <div className="space-y-[8px] ms-2">
          <div className="text-[16px] text-[#3C3E41] font-normal leading-[24px]">
            Tretja vrstica
          </div>
          <input
            type="text"
            className="w-full border border-[#6D778E] bg-[#FFFFFF] outline-none rounded-[8px] py-[12px] px-[20px] text-[16px] text-[#3C3E41] placeholder:text-[#ACAAAA] leading-[24px]"
            placeholder="Nedelja: Zaprto"
            name="tertiaryHours"
            value={shop.tertiaryHours}
            onChange={handleChange}
          />
        </div>
        <div className="space-y-[8px] ms-2">
          <div className="text-[16px] text-[#3C3E41] font-normal leading-[24px]">
            Četrta vrstica
          </div>
          <input
            type="text"
            className="w-full border border-[#6D778E] bg-[#FFFFFF] outline-none rounded-[8px] py-[12px] px-[20px] text-[16px] text-[#3C3E41] placeholder:text-[#ACAAAA] leading-[24px]"
            placeholder="Dodaj samo če je potrebno"
            name="quaternaryHours"
            value={shop.quaternaryHours}
            onChange={handleChange}
          />
        </div>
      </div>
    </OpenableBlock>
  );
}
