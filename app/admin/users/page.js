"use client";

import React, { useEffect, useState } from "react";
import SideMenuAdmin from "../../components/appcomponents/SideMenuAdmin";
import Image from "next/image";

const Obituaries = () => {
  const [screen, setScreen] = useState(1);
  const [whichTab, setWhichTab] = useState("Gifts");

  useEffect(() => {
    if(screen === 1) {
      setWhichTab("Users - Basic Info");
    } else if(screen === 2) {
      setWhichTab("Gifts");
    } else if(screen === 3) {
      setWhichTab("Users - Monthly Stats");
    } else if(screen === 4) {
      setWhichTab("Users - Traffic Monthly");
    } else if(screen === 5) {
      setWhichTab("Contributions - by Users");
    } else if(screen === 6) {
      setWhichTab("Totals - Numbers");
    }
  }, [screen]);

  return (
    <div className="w-[1920px] bg-[#ECF0F3] min-h-screen pt-[80px] flex flex-row justify-start">
      <div>
        <SideMenuAdmin whichtab={whichTab} setWhichScreen={setScreen} headerCheck={1} />
      </div>

      {screen === 1 && <div className="w-full bg-[#e5eaf1] py-[2px] px-[20px] flex flex-col pt-[110px]">
        <table className="w-full h-[114px] py-[2px] max-w-[1600px]">
          <thead>
            <tr className="text-[#3C3E41] text-[12px] leading-[16px] font-variation-customOpt16 font-semibold uppercase">
              <th className="text-start px-[10px] w-[170px]">
                # <br />
                email
                <Image src="/admin-table-down.png" alt="edit" width={10} height={10} className="mt-2 mx-3" />
              </th>
              <th className="px-[10px] w-[120px] text-start">
                Local City
              </th>
              <th className="px-[10px] w-[100px]">
                Registered
                <Image src="/admin-table-down.png" alt="edit" width={10} height={10} className="mx-auto mt-1" />
              </th>
              <th className="px-[10px] w-[60px]">
                subscribed
              </th>
              <th className="px-[10px] w-[60px]">
                last <br />
                contribution
                <Image src="/admin-table-down.png" alt="edit" width={10} height={10} className="mx-auto mt-1" />
              </th>
              <th className="px-[10px] w-[60px]">
                Last <br/>
                login
                <Image src="/admin-table-down.png" alt="edit" width={10} height={10} className="mx-auto mt-1" />
              </th>
              <th className="px-[10px] w-[60px]">
                Days <br/>
                visited
                <Image src="/admin-table-down.png" alt="edit" width={10} height={10} className="mx-auto mt-1" />
              </th>
              <th className="px-[10px] w-[60px]">
                read <br/>
                time
                <Image src="/admin-table-down.png" alt="edit" width={10} height={10} className="mx-auto mt-1" />
              </th>
              <th className="w-[140px]"></th>
              <th className="px-[10px] w-[200px]">
                Notes I warnings <br />
                emails
              </th>
              <th className="w-[100px]">
                block  <span className="text-[#ACAAAA]">I</span>  delete <br />
                user
              </th>
              <th className="px-[10px] w-[60px]">
                award <br/>
                code
              </th>
              <th className="w-[60px]">
                goto user <br/>
                contributions
              </th>
              <th className="w-[70px]">
                goto user <br/>
                account
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="h-[64px] border-[0.5px] border-[solid] border-[#A1B1D4] bg-[#FFFFFF66] text-[#3C3E41]">
              <td className="px-[18px] py-[18px]">
                <p className="text-[12px] leading-[100%]">01002SIA</p>
                <p className="text-[10px] leading-[24px]">their@email.com</p>
              </td>
              <td className="px-[10px] py-[18px] text-[12px] leading-[16px]">
                Acapulco
              </td>
              <td className="px-[10px] py-[18px] text-[12px] leading-[16px] text-center">
                12.03.2023
              </td>
              <td className="px-[10px] py-[18px] text-[12px] leading-[16px] text-center">
                <Image src="/admin_table_check.png" alt="check" width={18} height={18} className="mx-auto" />
              </td>
              <td className="px-[10px] py-[18px] text-[12px] leading-[16px] text-center">
              21.05.2024
              </td>
              <td className="px-[10px] py-[18px] text-[12px] leading-[16px] text-center">
              21.05.2024
              </td>
              <td className="px-[10px] py-[18px] text-[12px] leading-[16px] text-center">
              29
              </td>
              <td className="px-[10px] py-[18px] text-[12px] leading-[16px] text-center">
              21 Hours
              </td>
              <td></td>
              <td className="px-[10px] py-[18px] text-[16px] leading-[16px] text-center">
                <div className="inline-flex gap-[10px] items-center text-[#ACAAAA] font-[100]">
                  <Image src="/admin_table_edit.png" alt="check" width={18} height={18} className="mx-auto" />
                  I
                  <Image src="/admin_table_info_muted.png" alt="check" width={18} height={18} className="mx-auto" />
                  I
                  <Image src="/admin_table_attherate.png" alt="check" width={18} height={18} className="mx-auto" />
                </div>
              </td>
              <td className="px-[10px] py-[18px] text-[12px] leading-[16px] text-center">
                <div className="inline-flex gap-[12px] items-center text-[#ACAAAA] font-[100]">
                  <Image src="/admin_table_cross_muted.png" alt="check" width={18} height={18} className="mx-auto" />
                  I
                  <Image src="/admin_table_delete_muted.png" alt="check" width={18} height={18} className="mx-auto" />
                </div>
              </td>
              <td className="px-[10px] py-[18px] text-[12px] leading-[16px] text-center">
                <Image src="/admin_table_award_muted.png" alt="check" width={22} height={22} className="mx-auto" />
              </td>
              <td className="px-[10px] py-[18px] text-[12px] leading-[16px] text-center">
                <Image src="/admin_table_right.png" alt="check" width={24} height={24} className="mx-auto" />
              </td>
              <td className="px-[10px] py-[18px] text-[12px] leading-[16px] text-center">
                <Image src="/admin_table_right.png" alt="check" width={24} height={24} className="mx-auto" />
              </td>
            </tr>
            <tr className="h-[64px] border-[0.5px] border-[solid] border-[#A1B1D4] text-[#3C3E41]">
              <td className="px-[18px] py-[18px]">
                <p className="text-[12px] leading-[100%]">01002SIA</p>
                <p className="text-[10px] leading-[24px]">their@email.com</p>
              </td>
              <td className="px-[10px] py-[18px] text-[12px] leading-[16px]">
                Acapulco
              </td>
              <td className="px-[10px] py-[18px] text-[12px] leading-[16px] text-center">
                12.03.2023
              </td>
              <td className="px-[10px] py-[18px] text-[12px] leading-[16px] text-center">
                <Image src="/admin_table_check.png" alt="check" width={18} height={18} className="mx-auto" />
              </td>
              <td className="px-[10px] py-[18px] text-[12px] leading-[16px] text-center">
              21.05.2024
              </td>
              <td className="px-[10px] py-[18px] text-[12px] leading-[16px] text-center">
              21.05.2024
              </td>
              <td className="px-[10px] py-[18px] text-[12px] leading-[16px] text-center">
              29
              </td>
              <td className="px-[10px] py-[18px] text-[12px] leading-[16px] text-center">
              21 Hours
              </td>
              <td></td>
              <td className="px-[10px] py-[18px] text-[16px] leading-[16px] text-center">
                <div className="inline-flex gap-[10px] items-center text-[#ACAAAA] font-[100]">
                  <Image src="/admin_table_edit.png" alt="check" width={18} height={18} className="mx-auto" />
                  I
                  <Image src="/admin_table_info.png" alt="check" width={18} height={18} className="mx-auto" />
                  I
                  <Image src="/admin_table_attherate_muted.png" alt="check" width={18} height={18} className="mx-auto" />
                </div>
              </td>
              <td className="px-[10px] py-[18px] text-[12px] leading-[16px] text-center">
                <div className="inline-flex gap-[12px] items-center text-[#ACAAAA] font-[100]">
                  <Image src="/admin_table_cross.png" alt="check" width={18} height={18} className="mx-auto" />
                  I
                  <Image src="/admin_table_delete_muted.png" alt="check" width={18} height={18} className="mx-auto" />
                </div>
              </td>
              <td className="px-[10px] py-[18px] text-[12px] leading-[16px] text-center">
                <Image src="/admin_table_award_muted.png" alt="check" width={22} height={22} className="mx-auto" />
              </td>
              <td className="px-[10px] py-[18px] text-[12px] leading-[16px] text-center">
                <Image src="/admin_table_right.png" alt="check" width={24} height={24} className="mx-auto" />
              </td>
              <td className="px-[10px] py-[18px] text-[12px] leading-[16px] text-center">
                <Image src="/admin_table_right.png" alt="check" width={24} height={24} className="mx-auto" />
              </td>
            </tr>
            <tr className="h-[64px] border-[0.5px] border-[solid] border-[#A1B1D4] text-[#3C3E41]">
              <td className="px-[18px] py-[18px]">
                <p className="text-[12px] leading-[100%]">01002SIA</p>
                <p className="text-[10px] leading-[24px]">their@email.com</p>
              </td>
              <td className="px-[10px] py-[18px] text-[12px] leading-[16px]">
                Acapulco
              </td>
              <td className="px-[10px] py-[18px] text-[12px] leading-[16px] text-center">
                12.03.2023
              </td>
              <td className="px-[10px] py-[18px] text-[12px] leading-[16px] text-center">
                <Image src="/admin_table_check.png" alt="check" width={18} height={18} className="mx-auto" />
              </td>
              <td className="px-[10px] py-[18px] text-[12px] leading-[16px] text-center">
              21.05.2024
              </td>
              <td className="px-[10px] py-[18px] text-[12px] leading-[16px] text-center">
              21.05.2024
              </td>
              <td className="px-[10px] py-[18px] text-[12px] leading-[16px] text-center">
              29
              </td>
              <td className="px-[10px] py-[18px] text-[12px] leading-[16px] text-center">
              21 Hours
              </td>
              <td></td>
              <td className="px-[10px] py-[18px] text-[16px] leading-[16px] text-center">
                <div className="inline-flex gap-[10px] items-center text-[#ACAAAA] font-[100]">
                  <Image src="/admin_table_edit.png" alt="check" width={18} height={18} className="mx-auto" />
                  I
                  <Image src="/admin_table_info.png" alt="check" width={18} height={18} className="mx-auto" />
                  I
                  <Image src="/admin_table_attherate_muted.png" alt="check" width={18} height={18} className="mx-auto" />
                </div>
              </td>
              <td className="px-[10px] py-[18px] text-[12px] leading-[16px] text-center">
                <div className="inline-flex gap-[12px] items-center text-[#ACAAAA] font-[100]">
                  <Image src="/admin_table_cross.png" alt="check" width={18} height={18} className="mx-auto" />
                  I
                  <Image src="/admin_table_delete_muted.png" alt="check" width={18} height={18} className="mx-auto" />
                </div>
              </td>
              <td className="px-[10px] py-[18px] text-[12px] leading-[16px] text-center">
                <Image src="/admin_table_award_muted.png" alt="check" width={22} height={22} className="mx-auto" />
              </td>
              <td className="px-[10px] py-[18px] text-[12px] leading-[16px] text-center">
                <Image src="/admin_table_right.png" alt="check" width={24} height={24} className="mx-auto" />
              </td>
              <td className="px-[10px] py-[18px] text-[12px] leading-[16px] text-center">
                <Image src="/admin_table_right.png" alt="check" width={24} height={24} className="mx-auto" />
              </td>
            </tr>
          </tbody>
        </table>
      </div>}

      {screen === 2 && <div className="w-full bg-[#e5eaf1] pt-[60px]  py-[2px] px-[20px] flex flex-col">
        <div className="w-full h-[114px] py-[2px] flex flex-row justify-between max-w-[1600px]">
          <RevenueComp
            amount={"35"}
            revenue={"Total obituaries "}
            byFlorist={"32"}
            floristNumbers={"12"}
          />
          <RevenueComp
            amount={"25"}
            revenue={"MOBI - Funeral info"}
            byFlorist={"32"}
            floristNumbers={"12"}
          />
          <RevenueComp
            amount={"8"}
            revenue={"MOBI - Thank You"}
            byFlorist={"32"}
            floristNumbers={"12"}
          />
          <RevenueComp
            amount={"21"}
            revenue={"MOBI - Condolences"}
            byFlorist={"32"}
            floristNumbers={"12"}
          />  
          <RevenueComp
            amount={"21"}
            revenue={"Tributes"}
            byFlorist={"32"}
            floristNumbers={"12"}
          />  
        </div>
        <div className="flex justify-end mt-[40px] max-w-[1600px]">
          <RevenueComp2
            amount={"212"}
            revenue={"Florists - City coverage "}
            byFlorist={"32"}
            floristNumbers={"12"}
            obituaries={"124"}
          />  
        </div>
        <div className="flex justify-between mt-[70px] max-w-[1600px]">
          <h3 className="text-[#0A85C2] text-[32px] leading-[100%] font-semibold" style={{
            fontVariationSettings: "'wdth' 50,'wght' 600,'opsz' 26"
          }}>October 2024</h3>
          <div className="inline-flex flex-row gap-[14px]">
            <div className="relative">
              <select className="w-[225px] py-[12px] px-[15px] rounded-[8px] border-[1px] border-[#6D778E] appearance-none text-[#6D778E]">
                <option value="1">Month</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
              </select>
              <div className="absolute top-1/2 right-[12px] -translate-y-1/2 z-10 bg-white pointer-events-none">
                <Image src="/admin_dropdown.png" alt="dropdown" width={32} height={32}/>
              </div>
            </div>
            <div className="relative">
              <select className="w-[225px] py-[12px] px-[15px] rounded-[8px] border-[1px] border-[#6D778E] appearance-none text-[#6D778E]">
                <option value="1">Company</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
              </select>
              <div className="absolute top-1/2 right-[12px] -translate-y-1/2 z-10 bg-white pointer-events-none">
                <Image src="/admin_dropdown.png" alt="dropdown" width={32} height={32}/>
              </div>
            </div>
            <div className="relative">
              <select className="w-[225px] py-[12px] px-[15px] rounded-[8px] border-[1px] border-[#6D778E] appearance-none text-[#6D778E]">
                <option value="1">City (Company)</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
              </select>
              <div className="absolute top-1/2 right-[12px] -translate-y-1/2 z-10 bg-white pointer-events-none">
                <Image src="/admin_dropdown.png" alt="dropdown" width={32} height={32}/>
              </div>
            </div>
            <div className="relative">
              <select className="w-[225px] py-[12px] px-[15px] rounded-[8px] border-[1px] border-[#6D778E] appearance-none text-[#6D778E]">
                <option value="1">Memory page</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
              </select>
              <div className="absolute top-1/2 right-[12px] -translate-y-1/2 z-10 bg-white pointer-events-none">
                <Image src="/admin_dropdown.png" alt="dropdown" width={32} height={32}/>
              </div>
            </div>
            <div className="relative">
              <select className="w-[225px] py-[12px] px-[15px] rounded-[8px] border-[1px] border-[#6D778E] appearance-none text-[#6D778E]">
                <option value="1">Show all gifts</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
              </select>
              <div className="absolute top-1/2 right-[12px] -translate-y-1/2 z-10 bg-white pointer-events-none">
                <Image src="/admin_dropdown.png" alt="dropdown" width={32} height={32}/>
              </div>
            </div>
            <div className="w-[48px] h-[48px] rounded-[8px] bg-[#414141] inline-flex items-center justify-center">
              <Image src="/admin_gifts_search.png" alt="check" width={20} height={20} className="mx-auto" />
            </div>
          </div>
        </div>

        <div className="py-[16px] flex items-center gap-[6px] text-[#D4D4D4] text-[12px] uppercase max-w-[1600px]">
          <p className="text-[#3C3E41] text-[10px] leading-[16px] font-light">
          <span className="text-[14px] text-[#3C3E41] leading-[16px]">F</span> = funeral company</p>
          I
          <p className="text-[10px] leading-[16px] font-light text-[#1FBE11]">
          <span className="text-[14px] text-[#1FBE11] leading-[16px]">C</span> = florist</p>
          I
          <p className="text-[#EB1D1D] text-[10px] leading-[16px] font-light">
          <span className="text-[14px] text-[#EB1D1D] leading-[16px]">A</span> = Admin</p>
        </div>
        <table className="w-full h-[114px] py-[2px] max-w-[1600px]">
          <thead>
            <tr className="text-[#3C3E41] text-[12px] leading-[16px] font-variation-customOpt16 font-semibold uppercase">
              <th className="text-start px-[10px] w-[100px]">
                <div className="inline-flex items-center gap-[6px]">
                  when
                  <Image src="/admin-table-down.png" alt="edit" width={10} height={10}/>
                </div>
              </th>
              <th className="px-[10px] w-[120px] text-start text-[#D4D4D4]">
                <span className="text-[#0A85C2]">F</span> I <span className="text-[#1FBE11]">C</span> I <span className="text-[#EB1D1D]">A</span>
              </th>
              <th className="px-[10px] text-start">
                <div className="inline-flex items-center gap-[6px]">
                  Who gifted
                  <Image src="/admin-table-down.png" alt="edit" width={10} height={10}/>
                </div>
              </th>
              <th className="px-[10px] text-start">
                <div className="inline-flex items-center gap-[6px]">
                  city
                  <Image src="/admin-table-down.png" alt="edit" width={10} height={10}/>
                </div>
              </th>
              <th className="px-[10px] text-start w-[200px]">
                <div className="inline-flex items-center gap-[6px]">
                  Whom
                  <Image src="/admin-table-down.png" alt="edit" width={10} height={10}/>
                </div>
              </th>
              <th className="px-[10px] text-start w-[150px]">
                <div className="inline-flex items-center justify-start gap-[6px]">
                  memory page
                  <Image src="/admin-table-down.png" alt="edit" width={10} height={10}/>
                </div>
              </th>
              <th className="px-[10px]">
                <div className="inline-flex items-center gap-[6px]">
                  <span className="text-center">
                  when <br/>
                  activated
                  </span>
                  <Image src="/admin-table-down.png" alt="edit" width={10} height={10}/>
                </div>
              </th>
              <th className="w-[100px]"></th>
              <th className="text-[#5EAE91]">
                Monthly <br/>
                keepers
              </th>
              <th className="text-[#5EAE91]">
                funeral<br/>
                info
              </th>
              <th className="text-[#5EAE91]">
                thank you<br/>
                note
              </th>
              <th className="text-[#5EAE91] w-[60px]">
                condo<br/>
                lences
              </th>
              <th className="w-[100px] text-[#5EAE91]">
                tributes <br/>
                etc
              </th>
              <th className="w-[50px] text-[#5EAE91]"></th>
            </tr>
          </thead>
          <tbody>
            <tr className="h-[64px] border-[0.5px] border-[solid] border-[#A1B1D4] bg-[#FFFFFF66] text-[#3C3E41]">
              <td className="px-[18px] py-[18px] text-[12px] leading-[100%] text-[#3C3E41]">
                03.05.2024
              </td>
              <td className="px-[10px] py-[18px] text-[14px] leading-[16px]">
              <span className="text-[#1FBE11]  font-bold">C</span>
              </td>
              <td className="px-[10px] py-[18px] text-[12px] leading-[16px]">
                <div className=" flex flex-col">
                  <span>Best Florist</span>
                  <span className="text-[#D4D4D4] font-regular">#1SS153S </span>
                </div>
              </td>
              <td className="px-[10px] py-[18px] text-[12px] leading-[16px]">
              Belo Horizonte
              </td>
              <td className="px-[18px] py-[18px] text-[12px] leading-[100%] text-[#3C3E41]">
                <div className="flex flex-col">
                  <span className="text-[#6D778E] text-[12px] ">Chris Jackson</span>
                  <span className="text-[#3C3E41] text-[8px]">ttmynewemailaddress@yahoo.com</span>
                </div>
              </td>
              <td className="px-[10px] py-[18px] text-[12px] leading-[16px]">
                <div className="flex flex-col ">
                  <span className="text-[#3C3E41] text-[13px] ">Mario Danilo Primo</span>
                  <span className="text-[#D4D4D4] text-[12px]">#1SS153S </span>
                </div>
              </td>
              <td className="px-[10px] py-[18px] text-[12px] leading-[16px] text-center">
              03.05.2024
              </td>
              <th></th>
              <td className="px-[10px] py-[18px] text-[12px] leading-[16px] text-center">
                <div className="w-[12px] h-[12px] rounded-full bg-[#3DA34D] mx-auto">

                </div>
              </td>
              <td className="px-[10px] py-[18px] text-[16px] leading-[16px] text-center">
                
              </td>
              <td className="px-[10px] py-[18px] text-[12px] leading-[16px] text-center">
                <div className="w-[12px] h-[12px] rounded-full bg-[#3DA34D] mx-auto" />
              </td>
              <td className="px-[10px] py-[18px] text-[12px] leading-[16px] text-center">
                
              </td>
              <td className="px-[10px] py-[18px] text-[12px] leading-[16px] text-center">
              </td>
              <td></td>
            </tr>
            <tr className="h-[64px] border-[0.5px] border-[solid] border-[#A1B1D4] bg-[#FFFFFF66] text-[#3C3E41]">
              <td className="px-[18px] py-[18px] text-[12px] leading-[100%] text-[#3C3E41]">
                03.05.2024
              </td>
              <td className="px-[10px] py-[18px] text-[14px] leading-[16px]">
              <span className="text-[#1FBE11]  font-bold">C</span>
              </td>
              <td className="px-[10px] py-[18px] text-[12px] leading-[16px]">
                <div className=" flex flex-col">
                  <span>Best Florist</span>
                  <span className="text-[#D4D4D4] font-regular">#1SS153S </span>
                </div>
              </td>
              <td className="px-[10px] py-[18px] text-[12px] leading-[16px]">
              Belo Horizonte
              </td>
              <td className="px-[18px] py-[18px] text-[12px] leading-[100%] text-[#3C3E41]">
                <div className="flex flex-col">
                  <span className="text-[#6D778E] text-[12px] ">Chris Jackson</span>
                  <span className="text-[#3C3E41] text-[8px]">ttmynewemailaddress@yahoo.com</span>
                </div>
              </td>
              <td className="px-[10px] py-[18px] text-[12px] leading-[16px]">
                <div className="flex flex-col ">
                  <span className="text-[#3C3E41] text-[13px] ">Mario Danilo Primo</span>
                  <span className="text-[#D4D4D4] text-[12px]">#1SS153S </span>
                </div>
              </td>
              <td className="px-[10px] py-[18px] text-[12px] leading-[16px] text-center">
              03.05.2024
              </td>
              <th></th>
              <td className="px-[10px] py-[18px] text-[12px] leading-[16px] text-center">
                <div className="w-[12px] h-[12px] rounded-full bg-[#3DA34D] mx-auto">

                </div>
              </td>
              <td className="px-[10px] py-[18px] text-[16px] leading-[16px] text-center">
                
              </td>
              <td className="px-[10px] py-[18px] text-[12px] leading-[16px] text-center">
                <div className="w-[12px] h-[12px] rounded-full bg-[#3DA34D] mx-auto" />
              </td>
              <td className="px-[10px] py-[18px] text-[12px] leading-[16px] text-center">
                
              </td>
              <td className="px-[10px] py-[18px] text-[12px] leading-[16px] text-center">
              </td>
              <td></td>
            </tr>
            <tr className="h-[64px] border-[0.5px] border-[solid] border-[#A1B1D4] bg-[#FFFFFF66] text-[#3C3E41]">
              <td className="px-[18px] py-[18px] text-[12px] leading-[100%] text-[#3C3E41]">
                03.05.2024
              </td>
              <td className="px-[10px] py-[18px] text-[14px] leading-[16px]">
              <span className="text-[#1FBE11]  font-bold">C</span>
              </td>
              <td className="px-[10px] py-[18px] text-[12px] leading-[16px]">
                <div className=" flex flex-col">
                  <span>Best Florist</span>
                  <span className="text-[#D4D4D4] font-regular">#1SS153S </span>
                </div>
              </td>
              <td className="px-[10px] py-[18px] text-[12px] leading-[16px]">
              Belo Horizonte
              </td>
              <td className="px-[18px] py-[18px] text-[12px] leading-[100%] text-[#3C3E41]">
                <div className="flex flex-col">
                  <span className="text-[#6D778E] text-[12px] ">Chris Jackson</span>
                  <span className="text-[#3C3E41] text-[8px]">ttmynewemailaddress@yahoo.com</span>
                </div>
              </td>
              <td className="px-[10px] py-[18px] text-[12px] leading-[16px]">
                <div className="flex flex-col ">
                  <span className="text-[#3C3E41] text-[13px] ">Mario Danilo Primo</span>
                  <span className="text-[#D4D4D4] text-[12px]">#1SS153S </span>
                </div>
              </td>
              <td className="px-[10px] py-[18px] text-[12px] leading-[16px] text-center">
              03.05.2024
              </td>
              <th></th>
              <td className="px-[10px] py-[18px] text-[12px] leading-[16px] text-center">
                <div className="w-[12px] h-[12px] rounded-full bg-[#3DA34D] mx-auto">

                </div>
              </td>
              <td className="px-[10px] py-[18px] text-[16px] leading-[16px] text-center">
                
              </td>
              <td className="px-[10px] py-[18px] text-[12px] leading-[16px] text-center">
                <div className="w-[12px] h-[12px] rounded-full bg-[#3DA34D] mx-auto" />
              </td>
              <td className="px-[10px] py-[18px] text-[12px] leading-[16px] text-center">
                
              </td>
              <td className="px-[10px] py-[18px] text-[12px] leading-[16px] text-center">
              </td>
              <td></td>
            </tr>
            <tr className="h-[64px] border-[0.5px] border-[solid] border-[#A1B1D4] bg-[#FFFFFF66] text-[#3C3E41]">
              <td className="px-[18px] py-[18px] text-[12px] leading-[100%] text-[#3C3E41]">
                03.05.2024
              </td>
              <td className="px-[10px] py-[18px] text-[14px] leading-[16px]">
              <span className="text-[#1FBE11]  font-bold">C</span>
              </td>
              <td className="px-[10px] py-[18px] text-[12px] leading-[16px]">
                <div className=" flex flex-col">
                  <span>Best Florist</span>
                  <span className="text-[#D4D4D4] font-regular">#1SS153S </span>
                </div>
              </td>
              <td className="px-[10px] py-[18px] text-[12px] leading-[16px]">
              Belo Horizonte
              </td>
              <td className="px-[18px] py-[18px] text-[12px] leading-[100%] text-[#3C3E41]">
                <div className="flex flex-col">
                  <span className="text-[#6D778E] text-[12px] ">Chris Jackson</span>
                  <span className="text-[#3C3E41] text-[8px]">ttmynewemailaddress@yahoo.com</span>
                </div>
              </td>
              <td className="px-[10px] py-[18px] text-[12px] leading-[16px]">
                <div className="flex flex-col ">
                  <span className="text-[#3C3E41] text-[13px] ">Mario Danilo Primo</span>
                  <span className="text-[#D4D4D4] text-[12px]">#1SS153S </span>
                </div>
              </td>
              <td className="px-[10px] py-[18px] text-[12px] leading-[16px] text-center">
              03.05.2024
              </td>
              <th></th>
              <td className="px-[10px] py-[18px] text-[12px] leading-[16px] text-center">
                <div className="w-[12px] h-[12px] rounded-full bg-[#3DA34D] mx-auto">

                </div>
              </td>
              <td className="px-[10px] py-[18px] text-[16px] leading-[16px] text-center">
                
              </td>
              <td className="px-[10px] py-[18px] text-[12px] leading-[16px] text-center">
                <div className="w-[12px] h-[12px] rounded-full bg-[#3DA34D] mx-auto" />
              </td>
              <td className="px-[10px] py-[18px] text-[12px] leading-[16px] text-center">
                
              </td>
              <td className="px-[10px] py-[18px] text-[12px] leading-[16px] text-center">
              </td>
              <td></td>
            </tr>
            <tr className="h-[64px] border-[0.5px] border-[solid] border-[#A1B1D4] bg-[#FFFFFF66] text-[#3C3E41]">
              <td className="px-[18px] py-[18px] text-[12px] leading-[100%] text-[#3C3E41]">
                03.05.2024
              </td>
              <td className="px-[10px] py-[18px] text-[14px] leading-[16px]">
              <span className="text-[#1FBE11]  font-bold">C</span>
              </td>
              <td className="px-[10px] py-[18px] text-[12px] leading-[16px]">
                <div className=" flex flex-col">
                  <span>Best Florist</span>
                  <span className="text-[#D4D4D4] font-regular">#1SS153S </span>
                </div>
              </td>
              <td className="px-[10px] py-[18px] text-[12px] leading-[16px]">
              Belo Horizonte
              </td>
              <td className="px-[18px] py-[18px] text-[12px] leading-[100%] text-[#3C3E41]">
                <div className="flex flex-col">
                  <span className="text-[#6D778E] text-[12px] ">Chris Jackson</span>
                  <span className="text-[#3C3E41] text-[8px]">ttmynewemailaddress@yahoo.com</span>
                </div>
              </td>
              <td className="px-[10px] py-[18px] text-[12px] leading-[16px]">
                <div className="flex flex-col ">
                  <span className="text-[#3C3E41] text-[13px] ">Mario Danilo Primo</span>
                  <span className="text-[#D4D4D4] text-[12px]">#1SS153S </span>
                </div>
              </td>
              <td className="px-[10px] py-[18px] text-[12px] leading-[16px] text-center">
              03.05.2024
              </td>
              <th></th>
              <td className="px-[10px] py-[18px] text-[12px] leading-[16px] text-center">
                <div className="w-[12px] h-[12px] rounded-full bg-[#3DA34D] mx-auto">

                </div>
              </td>
              <td className="px-[10px] py-[18px] text-[16px] leading-[16px] text-center">
                
              </td>
              <td className="px-[10px] py-[18px] text-[12px] leading-[16px] text-center">
                <div className="w-[12px] h-[12px] rounded-full bg-[#3DA34D] mx-auto" />
              </td>
              <td className="px-[10px] py-[18px] text-[12px] leading-[16px] text-center">
                
              </td>
              <td className="px-[10px] py-[18px] text-[12px] leading-[16px] text-center">
              </td>
              <td></td>
            </tr>
          </tbody>
        </table>
      </div>}

      {screen === 3 && <div className="w-full bg-[#e5eaf1] pt-[60px]  py-[2px] px-[20px] flex flex-col">
        <div className="w-full h-[114px] py-[2px] flex flex-row justify-between max-w-[1600px]">
          <div className="inline-flex flex-row gap-[15px]">
            <RevenueCompTab3
              amount={"35123"}
              revenue={"Visitors / day last month"}
              byFlorist={"322"}
              floristNumbers={"123"}
            />
            <RevenueCompTab3
              amount={"2524"}
              revenue={"New Registered users last m."}
              byFlorist={"323"}
              floristNumbers={"132"}
            />
          </div>
          <RevenueComp2Tab3
            amount={"2123"}
            revenue={"Local obits subscript"}
            byFlorist={"32"}
            floristNumbers={"12"}
            obituaries={"+24%"}
          />  
        </div>
        <div className="flex justify-between mt-[70px] max-w-[1600px]">
          <h3 className="text-[#0A85C2] text-[32px] leading-[100%] font-semibold" style={{
            fontVariationSettings: "'wdth' 50,'wght' 600,'opsz' 26"
          }}>October 2024</h3>
          <div className="inline-flex flex-row gap-[14px]">
            <div className="relative">
              <select className="w-[225px] py-[12px] px-[15px] rounded-[8px] border-[1px] border-[#6D778E] text-[#6D778E] outline-none  appearance-none">
                <option value="1">Company</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
              </select>
              <div className="absolute top-1/2 right-[12px] -translate-y-1/2 z-10 bg-white pointer-events-none">
                <Image src="/admin_dropdown.png" alt="dropdown" width={32} height={32}/>
              </div>
            </div>
            <div className="relative">
              <select className="w-[225px] py-[12px] px-[15px] rounded-[8px] border-[1px] border-[#6D778E] outline-none  appearance-none relative text-[#6D778E]">
                <option value="1">City (Company)</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
              </select>
              <div className="absolute top-1/2 right-[12px] -translate-y-1/2 z-10 bg-white pointer-events-none">
                <Image src="/admin_dropdown.png" alt="dropdown" width={32} height={32}/>
              </div>
            </div>
            <div className="relative">
              <select className="w-[225px] py-[12px] px-[15px] rounded-[8px] border-[1px] border-[#6D778E] outline-none  appearance-none relative text-[#6D778E]">
                <option value="1">Memory page</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
              </select>
              <div className="absolute top-1/2 right-[12px] -translate-y-1/2 z-10 bg-white pointer-events-none">
                <Image src="/admin_dropdown.png" alt="dropdown" width={32} height={32}/>
              </div>
            </div>
            <div className="relative">
              <select className="w-[225px] py-[12px] px-[15px] rounded-[8px] border-[1px] border-[#6D778E] outline-none  appearance-none text-[#6D778E]">
                <option value="1">City (Memory page)</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
              </select>
              <div className="absolute top-1/2 right-[12px] -translate-y-1/2 z-10 bg-white pointer-events-none">
                <Image src="/admin_dropdown.png" alt="dropdown" width={32} height={32}/>
              </div>
            </div>
            <div className="w-[48px] h-[48px] rounded-[8px] bg-[#414141] inline-flex items-center justify-center">
              <Image src="/admin_gifts_search.png" alt="check" width={20} height={20} className="mx-auto" />
            </div>
          </div>
        </div>

        {/* <div className="py-[16px] flex items-center gap-[6px] text-[#D4D4D4] text-[12px] uppercase mt-[50px]">
          <p className="text-[#3C3E41] text-[10px] leading-[16px] font-light">
          <span className="text-[14px] text-[#3C3E41] leading-[16px]">F</span> = funeral company</p>
          I
          <p className="text-[10px] leading-[16px] font-light text-[#1FBE11]">
          <span className="text-[14px] text-[#1FBE11] leading-[16px]">C</span> = florist</p>
          I
          <p className="text-[#EB1D1D] text-[10px] leading-[16px] font-light">
          <span className="text-[14px] text-[#EB1D1D] leading-[16px]">A</span> = Admin</p>
        </div> */}
        <table className="w-full h-[114px] py-[2px] mt-[50px] max-w-[1600px]">
          <thead>
            <tr className="text-[#3C3E41] text-[12px] leading-[16px] font-variation-customOpt16 font-semibold uppercase">
              <th className="text-start px-[10px] w-[100px]">
                <div className="inline-flex items-center gap-[6px]">
                month
                  <Image src="/admin-table-down.png" alt="edit" width={10} height={10}/>
                </div>
              </th>
              <th className="px-[10px] w-[150px] text-[#D4D4D4] text-center bg-white py-[10px]">
                <span className="text-[#530CC6]">Obituaries</span><br/>
                <span className="text-[#0D94E8]">Memory pages</span>
              </th>
              <th className="px-[10px] text-[14px] font-normal text-[#6D778E] bg-white text-center w-[80px]">
                Cities
              </th>
              <th className="px-[10px] text-start w-[50px]">
                
              </th>
              <th className="px-[10px] py-[10px] bg-[#f9f8ec] w-[110px]">
                <div className="flex flex-col justify-center items-center text-[#3C3E41] font-semibold">
                  <span>keepers </span>
                  <p className="text-[#6D778E] text-[10px]">
                    Free  I  <span className="text-[#F48F53]">Paid</span>
                  </p>
                </div>
              </th>
              <th className="px-[10px] text-center w-[80px] bg-[#f9f8ec]">
                <div>
                mobile <br/> <span className="text-[#3C3E41] text-[12px] font-[400]">gifts</span>
                </div>
              </th>
              <th className="px-[10px] py-[10px] bg-[#f9f8ec] text-[#6D778E] text-[14px] font-normal w-[90px]">
                cities
              </th>
              <th className="px-[10px] py-[10px] bg-[#f9f8ec] w-[80px]">
                
              </th>
              <th className="text-[#5EAE91] bg-[#f9f8ec] w-[100px]">
                Monthly <br/>
                keepers
              </th>
              <th className="text-[#5EAE91] bg-[#f9f8ec] w-[60px]">
                funeral<br/>
                info
              </th>
              <th className="text-[#5EAE91] bg-[#f9f8ec] w-[60px]">
                thank you<br/>
                note
              </th>
              <th className="text-[#5EAE91] bg-[#f9f8ec] w-[60px] ">
                condo<br/>
                lences
              </th>
              <th className="text-[#5EAE91] bg-[#f9f8ec] w-[80px]">
                tributes <br/>
                etc
              </th>
              <th className="text-[#3C3E41] bg-[#f9f8ec] w-[120px]">
                <span className="font-semibold">different</span> <br/>
                Users
              </th>
              <th className="w-[50px] bg-[#f9f8ec]">
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="h-[64px] border-[0.5px] border-[solid] border-[#A1B1D4] bg-[#FFFFFF66] text-[#3C3E41]">
              <td className="px-[18px] py-[18px] text-[12px] leading-[100%] text-[#3C3E41]">
              Aug 2024
              </td>
              <td className="px-[10px] text-[16px] leading-[16px] flex items-center gap-[10px] justify-center py-[22px]">
                <span className="text-[#530CC6] font-normal">612</span>
                I
                <span className="text-[#0D94E8] font-normal">596</span>
              </td>
              <td className="px-[10px] py-[18px] text-[12px] leading-[16px] text-[#6D778E] font-normal text-center">
              173 
              </td>
              <td className="px-[10px] py-[18px] text-[12px] leading-[16px]">
              </td>
              <td className="px-[10px] text-[16px] leading-[16px] flex items-center gap-[10px] justify-center py-[22px]">
                <span className="text-[#6D778E] font-light">264</span>
                I
                <span className="text-[#F48F53] font-semibold">16</span>
              </td>
              <td className="px-[10px] py-[18px] text-[16px] leading-[16px] text-center">
                437
              </td>
              <td className="px-[10px] py-[18px] text-[12px] leading-[16px] text-center text-[#6D778E]">
                198
              </td>
              <td className="px-[10px] py-[18px] text-[14px] leading-[16px] text-center text-[#6D778E]">
                
              </td>
              <td className="px-[10px] py-[18px] text-[14px] leading-[16px] text-center text-[#6D778E]">
                13
              </td>
              <td className="px-[10px] py-[18px] text-[14px] leading-[16px] text-center text-[#6D778E]">
                13
              </td>
              <td className="px-[10px] py-[18px] text-[14px] leading-[16px] text-center text-[#6D778E]">
                3
              </td>
              <td className="px-[10px] py-[18px] text-[14px] leading-[16px] text-center text-[#6D778E]">
                4
              </td>
              <td className="px-[10px] py-[18px] text-[14px] leading-[16px] text-center text-[#6D778E]">
                4
              </td>
              <td className="px-[10px] py-[18px] text-[14px] leading-[16px] text-center text-[#6D778E]">
                23
              </td>
              <td className="px-[10px] py-[18px] text-[14px] leading-[16px] text-center text-[#6D778E]">
                
              </td>
            </tr>
            <tr className="h-[64px] border-[0.5px] border-[solid] border-[#A1B1D4] bg-[#FFFFFF66] text-[#3C3E41]">
              <td className="px-[18px] py-[18px] text-[12px] leading-[100%] text-[#3C3E41]">
              Aug 2024
              </td>
              <td className="px-[10px] text-[16px] leading-[16px] flex items-center gap-[10px] justify-center py-[22px]">
                <span className="text-[#530CC6] font-normal">612</span>
                I
                <span className="text-[#0D94E8] font-normal">596</span>
              </td>
              <td className="px-[10px] py-[18px] text-[12px] leading-[16px] text-[#6D778E] font-normal text-center">
              173 
              </td>
              <td className="px-[10px] py-[18px] text-[12px] leading-[16px]">
              </td>
              <td className="px-[10px] text-[16px] leading-[16px] flex items-center gap-[10px] justify-center py-[22px]">
                <span className="text-[#6D778E] font-light">264</span>
                I
                <span className="text-[#F48F53] font-semibold">16</span>
              </td>
              <td className="px-[10px] py-[18px] text-[16px] leading-[16px] text-center">
                437
              </td>
              <td className="px-[10px] py-[18px] text-[12px] leading-[16px] text-center text-[#6D778E]">
                198
              </td>
              <td className="px-[10px] py-[18px] text-[14px] leading-[16px] text-center text-[#6D778E]">
                
              </td>
              <td className="px-[10px] py-[18px] text-[14px] leading-[16px] text-center text-[#6D778E]">
                13
              </td>
              <td className="px-[10px] py-[18px] text-[14px] leading-[16px] text-center text-[#6D778E]">
                13
              </td>
              <td className="px-[10px] py-[18px] text-[14px] leading-[16px] text-center text-[#6D778E]">
                3
              </td>
              <td className="px-[10px] py-[18px] text-[14px] leading-[16px] text-center text-[#6D778E]">
                4
              </td>
              <td className="px-[10px] py-[18px] text-[14px] leading-[16px] text-center text-[#6D778E]">
                4
              </td>
              <td className="px-[10px] py-[18px] text-[14px] leading-[16px] text-center text-[#6D778E]">
                23
              </td>
              <td className="px-[10px] py-[18px] text-[14px] leading-[16px] text-center text-[#6D778E]">
                
              </td>
            </tr>
            <tr className="h-[64px] border-[0.5px] border-[solid] border-[#A1B1D4] bg-[#FFFFFF66] text-[#3C3E41]">
              <td className="px-[18px] py-[18px] text-[12px] leading-[100%] text-[#3C3E41]">
              Aug 2024
              </td>
              <td className="px-[10px] text-[16px] leading-[16px] flex items-center gap-[10px] justify-center py-[22px]">
                <span className="text-[#530CC6] font-normal">612</span>
                I
                <span className="text-[#0D94E8] font-normal">596</span>
              </td>
              <td className="px-[10px] py-[18px] text-[12px] leading-[16px] text-[#6D778E] font-normal text-center">
              173 
              </td>
              <td className="px-[10px] py-[18px] text-[12px] leading-[16px]">
              </td>
              <td className="px-[10px] text-[16px] leading-[16px] flex items-center gap-[10px] justify-center py-[22px]">
                <span className="text-[#6D778E] font-light">264</span>
                I
                <span className="text-[#F48F53] font-semibold">16</span>
              </td>
              <td className="px-[10px] py-[18px] text-[16px] leading-[16px] text-center">
                437
              </td>
              <td className="px-[10px] py-[18px] text-[12px] leading-[16px] text-center text-[#6D778E]">
                198
              </td>
              <td className="px-[10px] py-[18px] text-[14px] leading-[16px] text-center text-[#6D778E]">
                
              </td>
              <td className="px-[10px] py-[18px] text-[14px] leading-[16px] text-center text-[#6D778E]">
                13
              </td>
              <td className="px-[10px] py-[18px] text-[14px] leading-[16px] text-center text-[#6D778E]">
                13
              </td>
              <td className="px-[10px] py-[18px] text-[14px] leading-[16px] text-center text-[#6D778E]">
                3
              </td>
              <td className="px-[10px] py-[18px] text-[14px] leading-[16px] text-center text-[#6D778E]">
                4
              </td>
              <td className="px-[10px] py-[18px] text-[14px] leading-[16px] text-center text-[#6D778E]">
                4
              </td>
              <td className="px-[10px] py-[18px] text-[14px] leading-[16px] text-center text-[#6D778E]">
                23
              </td>
              <td className="px-[10px] py-[18px] text-[14px] leading-[16px] text-center text-[#6D778E]">
                
              </td>
            </tr>
          </tbody>
        </table>
      </div>}

      {screen === 4 && <div className="w-full bg-[#e5eaf1] pt-[60px]  py-[2px] px-[20px] flex flex-col">
        <div className="w-full h-[114px] py-[2px] flex flex-row justify-between max-w-[1600px]">
          <div className="inline-flex flex-row gap-[15px]">
            <RevenueCompTab4
              amount={"35123"}
              revenue={"Visitors / day"}
              byFlorist={"322"}
              label1={"Previous week:"}
              label2={"Monthly total:"}
              average={"123"}
              floristNumbers={"123"}
            />
            <RevenueCompTab4
              amount={"2524"}
              revenue={"New registered users "}
              byFlorist={"323"}
              label1={"Previous m:"}
              label2={"Total:"}
              average={"last month"}
              floristNumbers={"132"}
            />
          </div>
          <RevenueComp2Tab4
            amount={"789  "}
            revenue={"New user’s subscriptions"}
            average={"(last month)"}
            byFlorist={"32"}
            floristNumbers={"12"}
            obituaries={"+24%"}
          />  
        </div>
        <div className="flex justify-between mt-[70px] max-w-[1600px]">
          <h3 
            className="text-[#0A85C2] text-[32px] leading-[100%] font-semibold" 
            style={{
              fontVariationSettings: "'wdth' 50,'wght' 600,'opsz' 26"
            }}
          >
            October 2024
          </h3>
          <div className="inline-flex flex-row gap-[14px]">
            <div className="relative">
              <select className="w-[225px] py-[12px] px-[15px] rounded-[8px] border-[1px] border-[#6D778E] appearance-none text-[#6D778E]">
                <option value="1">Month</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
              </select>
              <div className="absolute top-1/2 right-[12px] -translate-y-1/2 z-10 bg-white pointer-events-none">
                <Image src="/admin_dropdown.png" alt="dropdown" width={32} height={32}/>
              </div>
            </div>
            <div className="relative">
              <select className="w-[225px] py-[12px] px-[15px] rounded-[8px] border-[1px] border-[#6D778E] appearance-none  text-[#6D778E]">
                <option value="1">Year</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
              </select>
              <div className="absolute top-1/2 right-[12px] -translate-y-1/2 z-10 bg-white pointer-events-none">
                <Image src="/admin_dropdown.png" alt="dropdown" width={32} height={32}/>
              </div>
            </div>
            <div className="w-[48px] h-[48px] rounded-[8px] bg-[#414141] inline-flex items-center justify-center">
              <Image src="/admin_gifts_search.png" alt="check" width={20} height={20} className="mx-auto" />
            </div>
          </div>
        </div>
        <div className="w-full h-[50px] bg-[#F9F8ED] mt-[70px] max-w-[1600px]">
          <div className="flex items-center">
            <h4 className="text-[#3C3E41] text-[32px] font-[100] uppercase ml-[140px]">partner’s</h4>
            <h4 className="text-[#3C3E41] text-[32px] font-[100] uppercase ml-[270px]">user’s </h4>
            <h4 className="text-[#3C3E41] text-[32px] font-[100] uppercase ml-[620px]">traffic</h4>
          </div>
        </div>
        <table className="w-full h-[114px] py-[2px] max-w-[1600px]">
          <thead>
            <tr className="text-[#3C3E41] text-[12px] leading-[16px] font-variation-customOpt16 font-semibold uppercase bg-[#f9f8ec]">
              <th className="text-start px-[10px] w-[100px]">
                #
              </th>
              <th className="px-[10px] w-[120px] text-[#D4D4D4] text-center py-[10px]">
                <span className="text-[#530CC6]">Obituaries</span><br/>
                <span className="text-[#0D94E8]">Memory pages</span>
              </th>
              <th className="px-[10px] py-[10px] w-[60px]">
                <div className="flex flex-col justify-center items-center text-[#3C3E41] font-semibold">
                  <span>keepers </span>
                  <p className="text-[#6D778E] text-[10px]">
                    Free  I  <span className="text-[#F48F53]">Paid</span>
                  </p>
                </div>
              </th>
              <th className="px-[10px] text-center w-[60px]">
                <div>
                mobile <br/> <span className="text-[#3C3E41] text-[12px]">gifts</span>
                </div>
              </th>
              <th className="px-[10px] text-center w-[80px]">
                
              </th>
              <th className="px-[10px] text-center w-[100px]">
                <div>
                free user’s <br/> <span className="text-[#3C3E41] text-[12px]">contributions</span>
                </div>
              </th>
              <th className="px-[10px] text-center w-[120px]">
                <div>
                  on how many <br/> <span className="text-[#3C3E41] text-[12px]">memory pages</span>
                </div>
              </th>
              <th className="px-[10px] text-center w-[120px]">
                <div>
                Daily 
                 <br/> <span className="text-[#3C3E41] text-[12px]">Candles</span>
                </div>
              </th>
              <th className="px-[10px] py-[10px] w-[80px]">
                <div className="flex flex-col justify-center items-center text-[#3C3E41] font-semibold">
                  <span className="text-[#F48F53]">premium </span>
                  <span>upgrades</span>
                </div>
              </th>
              <th className="px-[10px] text-center w-[100px]">
                earnings <br/>
                total
              </th>
              <th className="px-[10px] text-center w-[70px]">
                
              </th>
              <th className="w-[80px]">
                Total
                <br/>
                visitors
              </th>
              <th className="w-[150px]">
                Registered
                <br/>
                new registrations
              </th>
              <th className="text-[#3C3E41] bg-[#f9f8ec] w-[170px] pr-[10px]">
                <span className="font-semibold">new companies</span> <br/>
                <div className="inline-flex items-center gap-[5px]">
                  <span className="text-[#6D778E] text-[13px]">registered</span> I <span className="text-[#2C853A] text-[13px]">new pages</span>
                </div>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="h-[64px] border-[0.5px] border-[solid] border-[#A1B1D4] bg-[#FFFFFF66] text-[#3C3E41]">
              <td className="px-[18px] py-[18px] text-[12px] leading-[100%] text-[#3C3E41]">
              01.
              </td>
              <td className="px-[10px] text-[16px] leading-[16px] flex items-center gap-[10px] justify-center py-[22px]">
                <span className="text-[#530CC6] font-normal">612</span>
                I
                <span className="text-[#0D94E8] font-normal">596</span>
              </td>
              <td className="px-[10px] text-[16px] leading-[16px]">
                <div className="flex items-center gap-[10px] justify-center">
                  <span className="text-[#6D778E] font-light">264</span>
                  I
                  <span className="text-[#F48F53] font-semibold">16</span>
                </div>
              </td>
              <td className="px-[10px] py-[18px] text-[12px] leading-[16px] text-[#6D778E] font-normal text-center">
              173 
              </td>
              <td className="px-[10px] py-[18px] text-[12px] leading-[16px]">
              </td>
              
              <td className="px-[10px] py-[18px] text-[16px] leading-[16px] text-center">
                437
              </td>
              <td className="px-[10px] py-[18px] text-[16px] leading-[16px] text-center">
                63
              </td>
              <td className="px-[10px] py-[18px] text-[12px] leading-[16px] text-center text-[#6D778E]">
                198
              </td>
              <td className="px-[10px] py-[18px] text-[14px] leading-[16px] text-center text-[#F48F53]">
                2
              </td>
              <td className="px-[10px] py-[18px] text-[14px] leading-[16px] text-center text-[#6D778E]">
                13€
              </td>
              <td className="px-[10px] py-[18px] text-[14px] leading-[16px] text-center text-[#6D778E]">
                
              </td>
              <td className="px-[10px] py-[18px] text-[14px] leading-[16px] text-center text-[#3C3E41] font-semibold">
              2.945
              </td>
              <td className="px-[10px] py-[18px] text-[14px] leading-[16px] text-center text-[#6D778E]">
                <div className="flex items-center gap-[10px] justify-center">
                  <span className="text-[#6D778E] font-light">214</span>
                  I
                  <span className="text-[#6D778E] font-light">62</span>
                </div>
              </td>
              <td className="px-[10px] py-[18px] text-[14px] leading-[16px] text-center text-[#6D778E]">
                <div className="flex items-center gap-[10px] justify-center">
                  <span className="text-[#6D778E] font-light">1</span>
                  I
                  <span className="text-[#2C853A] font-light">2</span>
                </div>
              </td>
              
            </tr>
            <tr className="h-[64px] border-[0.5px] border-[solid] border-[#A1B1D4] bg-[#FFFFFF66] text-[#3C3E41]">
              <td className="px-[18px] py-[18px] text-[12px] leading-[100%] text-[#3C3E41]">
              02.
              </td>
              <td className="px-[10px] text-[16px] leading-[16px] flex items-center gap-[10px] justify-center py-[22px]">
                <span className="text-[#530CC6] font-normal">612</span>
                I
                <span className="text-[#0D94E8] font-normal">596</span>
              </td>
              <td className="px-[10px] text-[16px] leading-[16px]">
                <div className="flex items-center gap-[10px] justify-center">
                  <span className="text-[#6D778E] font-light">264</span>
                  I
                  <span className="text-[#F48F53] font-semibold">16</span>
                </div>
              </td>
              <td className="px-[10px] py-[18px] text-[12px] leading-[16px] text-[#6D778E] font-normal text-center">
              173 
              </td>
              <td className="px-[10px] py-[18px] text-[12px] leading-[16px]">
              </td>
              
              <td className="px-[10px] py-[18px] text-[16px] leading-[16px] text-center">
                437
              </td>
              <td className="px-[10px] py-[18px] text-[16px] leading-[16px] text-center">
                63
              </td>
              <td className="px-[10px] py-[18px] text-[12px] leading-[16px] text-center text-[#6D778E]">
                198
              </td>
              <td className="px-[10px] py-[18px] text-[14px] leading-[16px] text-center text-[#F48F53]">
                2
              </td>
              <td className="px-[10px] py-[18px] text-[14px] leading-[16px] text-center text-[#6D778E]">
                13€
              </td>
              <td className="px-[10px] py-[18px] text-[14px] leading-[16px] text-center text-[#6D778E]">
                
              </td>
              <td className="px-[10px] py-[18px] text-[14px] leading-[16px] text-center text-[#3C3E41] font-semibold">
              2.945
              </td>
              <td className="px-[10px] py-[18px] text-[14px] leading-[16px] text-center text-[#6D778E]">
                <div className="flex items-center gap-[10px] justify-center">
                  <span className="text-[#6D778E] font-light">214</span>
                  I
                  <span className="text-[#6D778E] font-light">62</span>
                </div>
              </td>
              <td className="px-[10px] py-[18px] text-[14px] leading-[16px] text-center text-[#6D778E]">
                <div className="flex items-center gap-[10px] justify-center">
                  <span className="text-[#6D778E] font-light">1</span>
                  I
                  <span className="text-[#2C853A] font-light">2</span>
                </div>
              </td>
              
            </tr>
            <tr className="h-[64px] border-[0.5px] border-[solid] border-[#A1B1D4] bg-[#FFFFFF66] text-[#3C3E41]">
              <td className="px-[18px] py-[18px] text-[12px] leading-[100%] text-[#3C3E41]">
              03.
              </td>
              <td className="px-[10px] text-[16px] leading-[16px] flex items-center gap-[10px] justify-center py-[22px]">
                <span className="text-[#530CC6] font-normal">612</span>
                I
                <span className="text-[#0D94E8] font-normal">596</span>
              </td>
              <td className="px-[10px] text-[16px] leading-[16px]">
                <div className="flex items-center gap-[10px] justify-center">
                  <span className="text-[#6D778E] font-light">264</span>
                  I
                  <span className="text-[#F48F53] font-semibold">16</span>
                </div>
              </td>
              <td className="px-[10px] py-[18px] text-[12px] leading-[16px] text-[#6D778E] font-normal text-center">
              173 
              </td>
              <td className="px-[10px] py-[18px] text-[12px] leading-[16px]">
              </td>
              
              <td className="px-[10px] py-[18px] text-[16px] leading-[16px] text-center">
                437
              </td>
              <td className="px-[10px] py-[18px] text-[16px] leading-[16px] text-center">
                63
              </td>
              <td className="px-[10px] py-[18px] text-[12px] leading-[16px] text-center text-[#6D778E]">
                198
              </td>
              <td className="px-[10px] py-[18px] text-[14px] leading-[16px] text-center text-[#F48F53]">
                2
              </td>
              <td className="px-[10px] py-[18px] text-[14px] leading-[16px] text-center text-[#6D778E]">
                13€
              </td>
              <td className="px-[10px] py-[18px] text-[14px] leading-[16px] text-center text-[#6D778E]">
                
              </td>
              <td className="px-[10px] py-[18px] text-[14px] leading-[16px] text-center text-[#3C3E41] font-semibold">
              2.945
              </td>
              <td className="px-[10px] py-[18px] text-[14px] leading-[16px] text-center text-[#6D778E]">
                <div className="flex items-center gap-[10px] justify-center">
                  <span className="text-[#6D778E] font-light">214</span>
                  I
                  <span className="text-[#6D778E] font-light">62</span>
                </div>
              </td>
              <td className="px-[10px] py-[18px] text-[14px] leading-[16px] text-center text-[#6D778E]">
                <div className="flex items-center gap-[10px] justify-center">
                  <span className="text-[#6D778E] font-light">1</span>
                  I
                  <span className="text-[#2C853A] font-light">2</span>
                </div>
              </td>
              
            </tr>
            <tr className="h-[64px] border-[0.5px] border-[solid] border-[#A1B1D4] bg-[#FFFFFF66] text-[#3C3E41]">
              <td className="px-[18px] py-[18px] text-[12px] leading-[100%] text-[#3C3E41]">
              04.
              </td>
              <td className="px-[10px] text-[16px] leading-[16px] flex items-center gap-[10px] justify-center py-[22px]">
                <span className="text-[#530CC6] font-normal">612</span>
                I
                <span className="text-[#0D94E8] font-normal">596</span>
              </td>
              <td className="px-[10px] text-[16px] leading-[16px]">
                <div className="flex items-center gap-[10px] justify-center">
                  <span className="text-[#6D778E] font-light">264</span>
                  I
                  <span className="text-[#F48F53] font-semibold">16</span>
                </div>
              </td>
              <td className="px-[10px] py-[18px] text-[12px] leading-[16px] text-[#6D778E] font-normal text-center">
              173 
              </td>
              <td className="px-[10px] py-[18px] text-[12px] leading-[16px]">
              </td>
              
              <td className="px-[10px] py-[18px] text-[16px] leading-[16px] text-center">
                437
              </td>
              <td className="px-[10px] py-[18px] text-[16px] leading-[16px] text-center">
                63
              </td>
              <td className="px-[10px] py-[18px] text-[12px] leading-[16px] text-center text-[#6D778E]">
                198
              </td>
              <td className="px-[10px] py-[18px] text-[14px] leading-[16px] text-center text-[#F48F53]">
                2
              </td>
              <td className="px-[10px] py-[18px] text-[14px] leading-[16px] text-center text-[#6D778E]">
                13€
              </td>
              <td className="px-[10px] py-[18px] text-[14px] leading-[16px] text-center text-[#6D778E]">
                
              </td>
              <td className="px-[10px] py-[18px] text-[14px] leading-[16px] text-center text-[#3C3E41] font-semibold">
              2.945
              </td>
              <td className="px-[10px] py-[18px] text-[14px] leading-[16px] text-center text-[#6D778E]">
                <div className="flex items-center gap-[10px] justify-center">
                  <span className="text-[#6D778E] font-light">214</span>
                  I
                  <span className="text-[#6D778E] font-light">62</span>
                </div>
              </td>
              <td className="px-[10px] py-[18px] text-[14px] leading-[16px] text-center text-[#6D778E]">
                <div className="flex items-center gap-[10px] justify-center">
                  <span className="text-[#6D778E] font-light">1</span>
                  I
                  <span className="text-[#2C853A] font-light">2</span>
                </div>
              </td>
              
            </tr>
          </tbody>
        </table>
      </div>}

      {screen === 5 && <div className="w-full bg-[#e5eaf1] pt-[60px]  py-[2px] px-[20px] flex flex-col">
        <div className="w-full h-[114px] py-[2px] flex flex-row justify-between max-w-[1600px] mb-[120px] items-end">
          <div className="inline-flex flex-row gap-[15px]">
            <RevenueCompTab5
              amount={"54"}
              revenue={"Contributions / day"}
              lastM={"47"}
              total={"1223"}
            />
            <RevenueCompTab51
              amount={"9.3"}
              content={"Average contributions"}
              amount2={"5.6"}
              content2={"contributors / page"}
              lastM={"8.8"}
              lastM2={"4.6"}
            />
          </div>
          <div className="flex flex-col w-[610px] items-end gap-[20px]">
            <div className="inline-flex flex-row gap-[14px]">
              <input className="w-[225px] py-[12px] px-[15px] rounded-[8px] border-[1px] border-[#6D778E] text-[#6D778E]" placeholder="User ID / email" />
              <div className="relative">
                <select className="w-[225px] py-[12px] px-[15px] rounded-[8px] border-[1px] border-[#6D778E] appearance-none text-[#6D778E]">
                  <option value="1">City</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                  <option value="6">6</option>
                  <option value="7">7</option>
                </select>
                <div className="absolute top-1/2 right-[12px] -translate-y-1/2 z-10 bg-white pointer-events-none">
                  <Image src="/admin_dropdown.png" alt="dropdown" width={32} height={32}/>
                </div>
              </div>
              <div className="w-[48px] h-[48px] rounded-[8px] bg-[#414141] inline-flex items-center justify-center">
                <Image src="/admin_gifts_search.png" alt="check" width={20} height={20} className="mx-auto" />
              </div>
            </div>
          </div>
        </div>
        <div className="max-w-[1600px] overflow-hidden">
          <div className="w-full h-[80px] bg-[#F9F8ED] py-[15px] ml-[196px]">
            <div className="flex items-center">
              <h4 className="text-[#3C3E41] text-[32px] font-[100] uppercase ml-[40px]">memory pages</h4>
              <h4 className="text-[#3C3E41] text-[32px] font-[100] uppercase ml-[170px]">contributions</h4>
              <h4 className="text-[#3C3E41] text-[32px] font-[100] uppercase ml-[300px]">premiums</h4>
            </div>
          </div>
        </div>
        <table className="w-full h-[114px] py-[2px] max-w-[1600px]">
          <thead>
            <tr className="text-[#3C3E41] text-[12px] leading-[16px] font-variation-customOpt16 font-semibold uppercase">
              <th className="text-start px-[10px] w-[170px]">
                # <br />
                email
                <Image src="/admin-table-down.png" alt="edit" width={10} height={10} className="mt-2 mx-3" />
              </th>
              <th className="text-start pl-[10px] pr-[5px] py-[10px] w-[80px] bg-[#F9F8ED]">
                <div className="flex flex-col items-center">
                  opened <br />
                  m pages
                  <Image src="/admin-table-down.png" alt="edit" width={10} height={10} className="mt-2 mx-3" />
                </div>
              </th>
              <th className="text-start px-[5px] w-[80px] bg-[#F9F8ED]">
                <div className="flex flex-col items-center text-center">
                  contributed
                  <br />
                  on
                  <Image src="/admin-table-down.png" alt="edit" width={10} height={10} className="mt-2 mx-3" />
                </div>
              </th>
              <th className="text-start px-[5px] w-[80px] bg-[#F9F8ED]">
                <div className="flex flex-col items-center text-center">
                  total 
                  <br />
                  contributions
                  <Image src="/admin-table-down.png" alt="edit" width={10} height={10} className="mt-2 mx-3" />
                </div>
              </th>
              <th className="w-[50px] bg-[#F9F8ED]"></th>
              <th className="text-start px-[10px] w-[80px] bg-[#F9F8ED]">
                <div className="flex flex-col items-center text-center">
                  Grief
                  <br />
                  Book
                  <Image src="/admin-table-down.png" alt="edit" width={10} height={10} className="mt-2 mx-3" />
                </div>
              </th>
              <th className="text-start px-[10px] w-[60px] bg-[#F9F8ED]">
                <div className="flex flex-col items-center text-center">
                  Sympathy
                  <br />
                  Messages
                  <Image src="/admin-table-down.png" alt="edit" width={10} height={10} className="mt-2 mx-3" />
                </div>
              </th>
              <th className="text-start px-[10px] w-[60px] bg-[#F9F8ED]">
                <div className="flex flex-col items-center text-center">
                  Photos
                  <Image src="/admin-table-down.png" alt="edit" width={10} height={10} className="mt-2 mx-3" />
                </div>
              </th>
              <th className="text-start px-[10px] w-[60px] bg-[#F9F8ED]">
                <div className="flex flex-col items-center text-center">
                Tributes
                  <Image src="/admin-table-down.png" alt="edit" width={10} height={10} className="mt-2 mx-3" />
                </div>
              </th>
              <th className="text-start px-[10px] w-[60px] bg-[#F9F8ED]">
                <div className="flex flex-col items-center text-center">
                  daily
                  <br />
                  candle
                  <Image src="/admin-table-down.png" alt="edit" width={10} height={10} className="mt-2 mx-3" />
                </div>
              </th>
              <th className="px-[10px] text-center w-[70px] bg-[#f9f8ec]"></th>
              <th className="text-start px-[10px] w-[60px] bg-[#F9F8ED]">
                <div className="flex flex-col items-center text-center">
                  mobile
                  <br />
                  templates
                  <Image src="/admin-table-down.png" alt="edit" width={10} height={10} className="mt-2 mx-3" />
                </div>
              </th>
              <th className="text-start px-[10px] w-[60px] bg-[#F9F8ED]">
                <div className="flex flex-col items-center text-center">
                  <span>
                    Free <span className="text-[#ACAAAA]">I</span> paid
                  </span>
                  keeper
                  <Image src="/admin-table-down.png" alt="edit" width={10} height={10} className="mt-2 mx-3" />
                </div>
              </th>
              <th className="text-start px-[10px] w-[60px] bg-[#F9F8ED]">
                <div className="flex flex-col items-center text-center">
                  premium <br/>
                  candles
                  <Image src="/admin-table-down.png" alt="edit" width={10} height={10} className="mt-2 mx-3" />
                </div>
              </th>
              <th className="text-start px-[10px] w-[60px] bg-[#F9F8ED]">
                <div className="flex flex-col items-center text-center">
                  other
                  <Image src="/admin-table-down.png" alt="edit" width={10} height={10} className="mt-2 mx-3" />
                </div>
              </th>
              <th className="text-start px-[10px] w-[60px] bg-[#F9F8ED]">
                <div className="flex flex-col items-center text-center">
                  lifetime <br/>
                  spendings
                  <Image src="/admin-table-down.png" alt="edit" width={10} height={10} className="mt-2 mx-3" />
                </div>
              </th>
              <th className="text-start px-[10px] w-[60px] bg-[#F9F8ED]">
                stats
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="h-[64px] border-[0.5px] border-[solid] border-[#A1B1D4] bg-[#FFFFFF66] text-[#3C3E41]">
              <td className="px-[18px] py-[18px]">
                <p className="text-[12px] leading-[100%]">01002SIA</p>
                <p className="text-[10px] leading-[24px]">their@email.com</p>
              </td>
              <td className="px-[10px] text-[16px] leading-[16px] py-[22px] text-[#3C3E41] text-center">
                41
              </td>
              <td className="px-[10px] text-[16px] leading-[16px] py-[22px] text-[#3C3E41] text-center">
                8
              </td>
              <td className="px-[10px] text-[16px] leading-[16px] py-[22px] text-[#3C3E41] text-center">
                25
              </td>
              <td className="px-[10px] py-[18px] text-[12px] leading-[16px]">
              </td>
              
              <td className="px-[10px] py-[18px] text-[16px] leading-[16px] text-center">
                4
              </td>
              <td className="px-[10px] py-[18px] text-[16px] leading-[16px] text-center">
                6
              </td>
              <td className="px-[10px] py-[18px] text-[12px] leading-[16px] text-center text-[#6D778E]">
                0
              </td>
              <td className="px-[10px] py-[18px] text-[14px] leading-[16px] text-center text-[#F48F53]">
                2
              </td>
              <td className="px-[10px] py-[18px] text-[14px] leading-[16px] text-center text-[#6D778E]">
                42
              </td>
              <td className="px-[10px] py-[18px] text-[14px] leading-[16px] text-center text-[#6D778E]"></td>
              <td className="px-[10px] py-[18px] text-[14px] leading-[16px] text-center text-[#3C3E41] font-semibold">
                0
              </td>
              <td className="px-[10px] py-[18px] text-[14px] leading-[16px] text-center text-[#6D778E]">
                <div className="flex items-center gap-[10px] justify-center">
                  <span className="">0</span>
                  I
                  <span className="">1</span>
                </div>
              </td>
              <td className="px-[10px] py-[18px] text-[14px] leading-[16px] text-center text-[#3C3E41]">
                0
              </td>
              <td className="px-[10px] py-[18px] text-[14px] leading-[16px] text-center text-[#3C3E41]">
                0
              </td>
              <td className="px-[10px] py-[18px] text-[16px] leading-[16px] text-center text-[#3C3E41] font-semibold">
              40€
              </td>
              <td className="px-[10px] py-[18px] text-[12px] leading-[16px] text-center">
                <Image src="/admin_table_right.png" alt="check" width={24} height={24} className="mx-auto" />
              </td>
            </tr>
            <tr className="h-[64px] border-[0.5px] border-[solid] border-[#A1B1D4] bg-[#FFFFFF66] text-[#3C3E41]">
              <td className="px-[18px] py-[18px]">
                <p className="text-[12px] leading-[100%]">01002SIA</p>
                <p className="text-[10px] leading-[24px]">their@email.com</p>
              </td>
              <td className="px-[10px] text-[16px] leading-[16px] py-[22px] text-[#3C3E41] text-center">
                41
              </td>
              <td className="px-[10px] text-[16px] leading-[16px] py-[22px] text-[#3C3E41] text-center">
                8
              </td>
              <td className="px-[10px] text-[16px] leading-[16px] py-[22px] text-[#3C3E41] text-center">
                25
              </td>
              <td className="px-[10px] py-[18px] text-[12px] leading-[16px]">
              </td>
              
              <td className="px-[10px] py-[18px] text-[16px] leading-[16px] text-center">
                4
              </td>
              <td className="px-[10px] py-[18px] text-[16px] leading-[16px] text-center">
                6
              </td>
              <td className="px-[10px] py-[18px] text-[12px] leading-[16px] text-center text-[#6D778E]">
                0
              </td>
              <td className="px-[10px] py-[18px] text-[14px] leading-[16px] text-center text-[#F48F53]">
                2
              </td>
              <td className="px-[10px] py-[18px] text-[14px] leading-[16px] text-center text-[#6D778E]">
                42
              </td>
              <td className="px-[10px] py-[18px] text-[14px] leading-[16px] text-center text-[#6D778E]"></td>
              <td className="px-[10px] py-[18px] text-[14px] leading-[16px] text-center text-[#3C3E41] font-semibold">
                0
              </td>
              <td className="px-[10px] py-[18px] text-[14px] leading-[16px] text-center text-[#6D778E]">
                <div className="flex items-center gap-[10px] justify-center">
                  <span className="">0</span>
                  I
                  <span className="">1</span>
                </div>
              </td>
              <td className="px-[10px] py-[18px] text-[14px] leading-[16px] text-center text-[#3C3E41]">
                0
              </td>
              <td className="px-[10px] py-[18px] text-[14px] leading-[16px] text-center text-[#3C3E41]">
                0
              </td>
              <td className="px-[10px] py-[18px] text-[16px] leading-[16px] text-center text-[#3C3E41] font-semibold">
              40€
              </td>
              <td className="px-[10px] py-[18px] text-[12px] leading-[16px] text-center">
                <Image src="/admin_table_right.png" alt="check" width={24} height={24} className="mx-auto" />
              </td>
            </tr>
            <tr className="h-[64px] border-[0.5px] border-[solid] border-[#A1B1D4] bg-[#FFFFFF66] text-[#3C3E41]">
              <td className="px-[18px] py-[18px]">
                <p className="text-[12px] leading-[100%]">01002SIA</p>
                <p className="text-[10px] leading-[24px]">their@email.com</p>
              </td>
              <td className="px-[10px] text-[16px] leading-[16px] py-[22px] text-[#3C3E41] text-center">
                41
              </td>
              <td className="px-[10px] text-[16px] leading-[16px] py-[22px] text-[#3C3E41] text-center">
                8
              </td>
              <td className="px-[10px] text-[16px] leading-[16px] py-[22px] text-[#3C3E41] text-center">
                25
              </td>
              <td className="px-[10px] py-[18px] text-[12px] leading-[16px]">
              </td>
              
              <td className="px-[10px] py-[18px] text-[16px] leading-[16px] text-center">
                4
              </td>
              <td className="px-[10px] py-[18px] text-[16px] leading-[16px] text-center">
                6
              </td>
              <td className="px-[10px] py-[18px] text-[12px] leading-[16px] text-center text-[#6D778E]">
                0
              </td>
              <td className="px-[10px] py-[18px] text-[14px] leading-[16px] text-center text-[#F48F53]">
                2
              </td>
              <td className="px-[10px] py-[18px] text-[14px] leading-[16px] text-center text-[#6D778E]">
                42
              </td>
              <td className="px-[10px] py-[18px] text-[14px] leading-[16px] text-center text-[#6D778E]"></td>
              <td className="px-[10px] py-[18px] text-[14px] leading-[16px] text-center text-[#3C3E41] font-semibold">
                0
              </td>
              <td className="px-[10px] py-[18px] text-[14px] leading-[16px] text-center text-[#6D778E]">
                <div className="flex items-center gap-[10px] justify-center">
                  <span className="">0</span>
                  I
                  <span className="">1</span>
                </div>
              </td>
              <td className="px-[10px] py-[18px] text-[14px] leading-[16px] text-center text-[#3C3E41]">
                0
              </td>
              <td className="px-[10px] py-[18px] text-[14px] leading-[16px] text-center text-[#3C3E41]">
                0
              </td>
              <td className="px-[10px] py-[18px] text-[16px] leading-[16px] text-center text-[#3C3E41] font-semibold">
              40€
              </td>
              <td className="px-[10px] py-[18px] text-[12px] leading-[16px] text-center">
                <Image src="/admin_table_right.png" alt="check" width={24} height={24} className="mx-auto" />
              </td>
            </tr>
            <tr className="h-[64px] border-[0.5px] border-[solid] border-[#A1B1D4] bg-[#FFFFFF66] text-[#3C3E41]">
              <td className="px-[18px] py-[18px]">
                <p className="text-[12px] leading-[100%]">01002SIA</p>
                <p className="text-[10px] leading-[24px]">their@email.com</p>
              </td>
              <td className="px-[10px] text-[16px] leading-[16px] py-[22px] text-[#3C3E41] text-center">
                41
              </td>
              <td className="px-[10px] text-[16px] leading-[16px] py-[22px] text-[#3C3E41] text-center">
                8
              </td>
              <td className="px-[10px] text-[16px] leading-[16px] py-[22px] text-[#3C3E41] text-center">
                25
              </td>
              <td className="px-[10px] py-[18px] text-[12px] leading-[16px]">
              </td>
              
              <td className="px-[10px] py-[18px] text-[16px] leading-[16px] text-center">
                4
              </td>
              <td className="px-[10px] py-[18px] text-[16px] leading-[16px] text-center">
                6
              </td>
              <td className="px-[10px] py-[18px] text-[12px] leading-[16px] text-center text-[#6D778E]">
                0
              </td>
              <td className="px-[10px] py-[18px] text-[14px] leading-[16px] text-center text-[#F48F53]">
                2
              </td>
              <td className="px-[10px] py-[18px] text-[14px] leading-[16px] text-center text-[#6D778E]">
                42
              </td>
              <td className="px-[10px] py-[18px] text-[14px] leading-[16px] text-center text-[#6D778E]"></td>
              <td className="px-[10px] py-[18px] text-[14px] leading-[16px] text-center text-[#3C3E41] font-semibold">
                0
              </td>
              <td className="px-[10px] py-[18px] text-[14px] leading-[16px] text-center text-[#6D778E]">
                <div className="flex items-center gap-[10px] justify-center">
                  <span className="">0</span>
                  I
                  <span className="">1</span>
                </div>
              </td>
              <td className="px-[10px] py-[18px] text-[14px] leading-[16px] text-center text-[#3C3E41]">
                0
              </td>
              <td className="px-[10px] py-[18px] text-[14px] leading-[16px] text-center text-[#3C3E41]">
                0
              </td>
              <td className="px-[10px] py-[18px] text-[16px] leading-[16px] text-center text-[#3C3E41] font-semibold">
              40€
              </td>
              <td className="px-[10px] py-[18px] text-[12px] leading-[16px] text-center">
                <Image src="/admin_table_right.png" alt="check" width={24} height={24} className="mx-auto" />
              </td>
            </tr>
          </tbody>
        </table>
      </div>}

      {screen === 6 && <div className="w-full bg-[#e5eaf1] pt-[60px]  py-[2px] px-[20px] flex flex-col">
        <table className="w-full h-[114px] py-[2px] max-w-[1600px]">
          <thead>
            <tr className="text-[#3C3E41] text-[12px] leading-[16px] font-variation-customOpt16 font-semibold uppercase">
              <th className="text-start pl-[10px] w-[100px]">
                month
              </th>
              <th className="text-start pl-[10px] pr-[2px] pt-[20px] pb-[10px] w-[130px] bg-[#FFFFFFCC]">
                <div className="flex flex-col items-center gap-[3px]">
                  <p className="text-[#ACAAAA] text-[10px] leading-[16px]">total (212)</p>
                  <p className="text-[#3C3E41] text-[20px] leading-[16px]">169</p>
                  <p className="text-[#3C3E41] text-[14px] leading-[16px] font-semibold">cities</p>

                  <p className="text-[#6D778E] text-[10px] leading-[16px] mt-[5px] font-regular">fun comp <span className="text-[#D4D4D4]">|</span> florist</p>
                </div>
              </th>
              <th className="text-start px-[2px] pt-[20px] pb-[10px] w-[150px] bg-[#FFFFFFCC]">
                <div className="flex flex-col items-center gap-[3px]">
                  <p className="text-[#ACAAAA] text-[10px] leading-[16px]">total</p>
                  <p className="text-[#3C3E41] text-[20px] leading-[16px]">87</p>
                  <p className="text-[#3C3E41] text-[14px] leading-[16px] font-semibold">funeral c</p>
                  <p className="text-[#6D778E] text-[10px] leading-[16px] mt-[5px] font-regular">total <span className="text-[#D4D4D4]">|</span> own florist</p>
                </div>
              </th>
              <th className="text-start pl-[2px] pr-[10px] pt-[20px] pb-[10px] w-[190px] bg-[#FFFFFFCC]">
                <div className="flex flex-col items-center gap-[3px]">
                  <p className="text-[#ACAAAA] text-[10px] leading-[16px]">companies</p>
                  <p className="text-[#3C3E41] text-[20px] leading-[16px]">122</p>
                  <p className="text-[#3C3E41] text-[14px] leading-[16px] font-semibold">florists</p>

                  <p className="text-[#6D778E] text-[10px] leading-[16px] mt-[5px] font-regular">total <span className="text-[#D4D4D4]">|</span> shops <span className="text-[#D4D4D4]">|</span> subscribed</p>
                </div>
              </th>
              <th className="w-[30px]"></th>
              <th className="text-start px-[2px] pt-[20px] pb-[10px] w-[160px] bg-[#F9F8ED]">
                <div className="flex flex-col items-center gap-[3px]">
                  <p className="text-[#ACAAAA] text-[10px] leading-[16px]">total</p>
                  <p className="text-[#3C3E41] text-[20px] leading-[16px]">122</p>
                  <p className="text-[#3C3E41] text-[14px] leading-[16px] font-semibold">obits</p>

                  <p className="text-[#6D778E] text-[10px] leading-[16px] mt-[5px] font-regular">new <span className="text-[#D4D4D4]">|</span> photo <span className="text-[#D4D4D4]">|</span> funeral</p>
                </div>
              </th>
              <th className="text-start px-[2px] pt-[20px] pb-[10px] w-[160px] bg-[#F9F8ED]">
                <div className="flex flex-col items-center gap-[3px]">
                  <p className="text-[#ACAAAA] text-[10px] leading-[16px]">total</p>
                  <p className="text-[#3C3E41] text-[20px] leading-[16px]">122</p>
                  <p className="text-[#3C3E41] text-[14px] leading-[16px] font-semibold">memory pages</p>

                  <p className="text-[#6D778E] text-[10px] leading-[16px] mt-[5px] font-regular">new <span className="text-[#D4D4D4]">|</span> c’butions <span className="text-[#D4D4D4]">|</span> average</p>
                </div>
              </th>
              <th className="text-start px-[2px] pt-[20px] pb-[10px] w-[150px] bg-[#F9F8ED]">
                <div className="flex flex-col items-center gap-[3px]">
                  <p className="text-[#ACAAAA] text-[10px] leading-[16px]">paid total</p>
                  <p className="text-[#3C3E41] text-[20px] leading-[16px]">47</p>
                  <p className="text-[#3C3E41] text-[14px] leading-[16px] font-semibold">keepers</p>

                  <p className="text-[#6D778E] text-[10px] leading-[16px] mt-[5px] font-regular">free <span className="text-[#D4D4D4]">|</span> paid <span className="text-[#D4D4D4]">|</span> candles</p>
                </div>
              </th>
              <th className="text-start pl-[2px] pr-[10px] pt-[20px] pb-[10px] w-[200px] bg-[#F9F8ED]">
                <div className="flex flex-col items-center gap-[3px]">
                  <p className="text-[#ACAAAA] text-[10px] leading-[16px]">total</p>
                  <p className="text-[#3C3E41] text-[20px] leading-[16px]">791</p>
                  <p className="text-[#3C3E41] text-[14px] leading-[16px] font-semibold">gifts</p>

                  <p className="text-[#6D778E] text-[10px] leading-[16px] mt-[5px] font-regular">mobile <span className="text-[#D4D4D4]">|</span> tributes <span className="text-[#D4D4D4]">|</span> FL gifters</p>
                </div>
              </th>
              
              <th className="px-[10px] text-center w-[30px]"></th>
             
              <th className="text-start pl-[10px] pr-[2px] pt-[20px] pb-[10px] w-[250px] bg-[#eafbeb]">
                <div className="flex flex-col items-center gap-[3px]">
                  <p className="text-[#ACAAAA] text-[10px] leading-[16px]">total reg users</p>
                  <p className="text-[#3C3E41] text-[20px] leading-[16px]">21411</p>
                  <p className="text-[#3C3E41] text-[14px] leading-[16px] font-semibold">users</p>

                  <p className="text-[#6D778E] text-[10px] leading-[16px] mt-[5px] font-regular">new reg <span className="text-[#D4D4D4]">|</span> participating <span className="text-[#D4D4D4]">|</span> subscribed</p>
                </div>
              </th>
              <th className="text-start pl-[2px] pr-[10px] pt-[20px] pb-[10px] w-[200px] bg-[#eafbeb]">
                <div className="flex flex-col items-center gap-[3px]">
                  <p className="text-[#ACAAAA] text-[10px] leading-[16px]">monthly visitors</p>
                  <p className="text-[#3C3E41] text-[20px] leading-[16px]">257411</p>
                  <p className="text-[#3C3E41] text-[14px] leading-[16px] font-semibold">traffic</p>

                  <p className="text-[#6D778E] text-[10px] leading-[16px] mt-[5px] font-regular">daily <span className="text-[#D4D4D4]">|</span> av mem.pages <span className="text-[#D4D4D4]">|</span> av time</p>
                </div>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="h-[64px] border-[0.5px] border-[solid] border-[#A1B1D4] bg-[#FFFFFF66] text-[#3C3E41]">
              <td className="px-[18px] py-[18px] text-[12px] leading-[100%]">
                Apr 2024
              </td>
              <td className="px-[10px] text-[16px] leading-[16px] py-[22px] text-[#3C3E41] text-center">
                <p className="text-[#6D778E] text-[16px] leading-[16px] mt-[5px] font-semibold flex items-center gap-[6px] justify-center">104 <span className="text-[#D4D4D4]">|</span> 156</p>
              </td>
              <td className="px-[10px] text-[16px] leading-[16px] py-[22px] text-[#3C3E41] text-center">
                <p className="text-[#6D778E] text-[16px] leading-[16px] mt-[5px] font-semibold flex items-center gap-[6px] justify-center">104 <span className="text-[#D4D4D4]">|</span> 156</p>
              </td>
              <td className="px-[10px] text-[16px] leading-[16px] py-[22px] text-[#3C3E41] text-center">
                <p className="text-[#6D778E] text-[16px] leading-[16px] mt-[5px] font-semibold flex items-center gap-[6px] justify-center">104 <span className="text-[#D4D4D4]">|</span> 104 <span className="text-[#D4D4D4]">|</span> 156</p>
              </td>
              <td className="px-[10px] py-[18px] text-[12px] leading-[16px]">
              </td>
              
              <td className="px-[10px] text-[16px] leading-[16px] py-[22px] text-[#3C3E41] text-center">
                <p className="text-[#6D778E] text-[16px] leading-[16px] mt-[5px] font-semibold flex items-center gap-[6px] justify-center">104 <span className="text-[#D4D4D4]">|</span> 104 <span className="text-[#D4D4D4]">|</span> 156</p>
              </td>
              <td className="px-[10px] text-[16px] leading-[16px] py-[22px] text-[#3C3E41] text-center">
                <p className="text-[#6D778E] text-[16px] leading-[16px] mt-[5px] font-semibold flex items-center gap-[6px] justify-center">104 <span className="text-[#D4D4D4]">|</span> 104 <span className="text-[#D4D4D4]">|</span> 156</p>
              </td>
              <td className="px-[10px] text-[16px] leading-[16px] py-[22px] text-[#3C3E41] text-center">
                <p className="text-[#6D778E] text-[16px] leading-[16px] mt-[5px] font-semibold flex items-center gap-[6px] justify-center">104 <span className="text-[#D4D4D4]">|</span> 104 <span className="text-[#D4D4D4]">|</span> 156</p>
              </td>
              <td className="px-[10px] text-[16px] leading-[16px] py-[22px] text-[#3C3E41] text-center">
                <p className="text-[#6D778E] text-[16px] leading-[16px] mt-[5px] font-semibold flex items-center gap-[6px] justify-center">104 <span className="text-[#D4D4D4]">|</span> 104 <span className="text-[#D4D4D4]">|</span> 156</p>
              </td>
              <td className="px-[10px] py-[18px] text-[14px] leading-[16px] text-center text-[#6D778E]">
                
              </td>
              <td className="px-[10px] text-[16px] leading-[16px] py-[22px] text-[#3C3E41] text-center">
                <p className="text-[#6D778E] text-[16px] leading-[16px] mt-[5px] font-semibold flex items-center gap-[6px] justify-center">104 <span className="text-[#D4D4D4]">|</span> 104 <span className="text-[#D4D4D4]">|</span> 156</p>
              </td>
              <td className="px-[10px] text-[16px] leading-[16px] py-[22px] text-[#3C3E41] text-center">
                <p className="text-[#6D778E] text-[16px] leading-[16px] mt-[5px] font-semibold flex items-center gap-[6px] justify-center">104 <span className="text-[#D4D4D4]">|</span> 104 <span className="text-[#D4D4D4]">|</span> 156</p>
              </td>
            </tr>
            <tr className="h-[64px] border-[0.5px] border-[solid] border-[#A1B1D4] bg-[#FFFFFF66] text-[#3C3E41]">
              <td className="px-[18px] py-[18px] text-[12px] leading-[100%]">
                Apr 2024
              </td>
              <td className="px-[10px] text-[16px] leading-[16px] py-[22px] text-[#3C3E41] text-center">
                <p className="text-[#6D778E] text-[16px] leading-[16px] mt-[5px] font-semibold flex items-center gap-[6px] justify-center">104 <span className="text-[#D4D4D4]">|</span> 156</p>
              </td>
              <td className="px-[10px] text-[16px] leading-[16px] py-[22px] text-[#3C3E41] text-center">
                <p className="text-[#6D778E] text-[16px] leading-[16px] mt-[5px] font-semibold flex items-center gap-[6px] justify-center">104 <span className="text-[#D4D4D4]">|</span> 156</p>
              </td>
              <td className="px-[10px] text-[16px] leading-[16px] py-[22px] text-[#3C3E41] text-center">
                <p className="text-[#6D778E] text-[16px] leading-[16px] mt-[5px] font-semibold flex items-center gap-[6px] justify-center">104 <span className="text-[#D4D4D4]">|</span> 104 <span className="text-[#D4D4D4]">|</span> 156</p>
              </td>
              <td className="px-[10px] py-[18px] text-[12px] leading-[16px]">
              </td>
              
              <td className="px-[10px] text-[16px] leading-[16px] py-[22px] text-[#3C3E41] text-center">
                <p className="text-[#6D778E] text-[16px] leading-[16px] mt-[5px] font-semibold flex items-center gap-[6px] justify-center">104 <span className="text-[#D4D4D4]">|</span> 104 <span className="text-[#D4D4D4]">|</span> 156</p>
              </td>
              <td className="px-[10px] text-[16px] leading-[16px] py-[22px] text-[#3C3E41] text-center">
                <p className="text-[#6D778E] text-[16px] leading-[16px] mt-[5px] font-semibold flex items-center gap-[6px] justify-center">104 <span className="text-[#D4D4D4]">|</span> 104 <span className="text-[#D4D4D4]">|</span> 156</p>
              </td>
              <td className="px-[10px] text-[16px] leading-[16px] py-[22px] text-[#3C3E41] text-center">
                <p className="text-[#6D778E] text-[16px] leading-[16px] mt-[5px] font-semibold flex items-center gap-[6px] justify-center">104 <span className="text-[#D4D4D4]">|</span> 104 <span className="text-[#D4D4D4]">|</span> 156</p>
              </td>
              <td className="px-[10px] text-[16px] leading-[16px] py-[22px] text-[#3C3E41] text-center">
                <p className="text-[#6D778E] text-[16px] leading-[16px] mt-[5px] font-semibold flex items-center gap-[6px] justify-center">104 <span className="text-[#D4D4D4]">|</span> 104 <span className="text-[#D4D4D4]">|</span> 156</p>
              </td>
              <td className="px-[10px] py-[18px] text-[14px] leading-[16px] text-center text-[#6D778E]">
                
              </td>
              <td className="px-[10px] text-[16px] leading-[16px] py-[22px] text-[#3C3E41] text-center">
                <p className="text-[#6D778E] text-[16px] leading-[16px] mt-[5px] font-semibold flex items-center gap-[6px] justify-center">104 <span className="text-[#D4D4D4]">|</span> 104 <span className="text-[#D4D4D4]">|</span> 156</p>
              </td>
              <td className="px-[10px] text-[16px] leading-[16px] py-[22px] text-[#3C3E41] text-center">
                <p className="text-[#6D778E] text-[16px] leading-[16px] mt-[5px] font-semibold flex items-center gap-[6px] justify-center">104 <span className="text-[#D4D4D4]">|</span> 104 <span className="text-[#D4D4D4]">|</span> 156</p>
              </td>
            </tr>
            <tr className="h-[64px] border-[0.5px] border-[solid] border-[#A1B1D4] bg-[#FFFFFF66] text-[#3C3E41]">
              <td className="px-[18px] py-[18px] text-[12px] leading-[100%]">
                Apr 2024
              </td>
              <td className="px-[10px] text-[16px] leading-[16px] py-[22px] text-[#3C3E41] text-center">
                <p className="text-[#6D778E] text-[16px] leading-[16px] mt-[5px] font-semibold flex items-center gap-[6px] justify-center">104 <span className="text-[#D4D4D4]">|</span> 156</p>
              </td>
              <td className="px-[10px] text-[16px] leading-[16px] py-[22px] text-[#3C3E41] text-center">
                <p className="text-[#6D778E] text-[16px] leading-[16px] mt-[5px] font-semibold flex items-center gap-[6px] justify-center">104 <span className="text-[#D4D4D4]">|</span> 156</p>
              </td>
              <td className="px-[10px] text-[16px] leading-[16px] py-[22px] text-[#3C3E41] text-center">
                <p className="text-[#6D778E] text-[16px] leading-[16px] mt-[5px] font-semibold flex items-center gap-[6px] justify-center">104 <span className="text-[#D4D4D4]">|</span> 104 <span className="text-[#D4D4D4]">|</span> 156</p>
              </td>
              <td className="px-[10px] py-[18px] text-[12px] leading-[16px]">
              </td>
              
              <td className="px-[10px] text-[16px] leading-[16px] py-[22px] text-[#3C3E41] text-center">
                <p className="text-[#6D778E] text-[16px] leading-[16px] mt-[5px] font-semibold flex items-center gap-[6px] justify-center">104 <span className="text-[#D4D4D4]">|</span> 104 <span className="text-[#D4D4D4]">|</span> 156</p>
              </td>
              <td className="px-[10px] text-[16px] leading-[16px] py-[22px] text-[#3C3E41] text-center">
                <p className="text-[#6D778E] text-[16px] leading-[16px] mt-[5px] font-semibold flex items-center gap-[6px] justify-center">104 <span className="text-[#D4D4D4]">|</span> 104 <span className="text-[#D4D4D4]">|</span> 156</p>
              </td>
              <td className="px-[10px] text-[16px] leading-[16px] py-[22px] text-[#3C3E41] text-center">
                <p className="text-[#6D778E] text-[16px] leading-[16px] mt-[5px] font-semibold flex items-center gap-[6px] justify-center">104 <span className="text-[#D4D4D4]">|</span> 104 <span className="text-[#D4D4D4]">|</span> 156</p>
              </td>
              <td className="px-[10px] text-[16px] leading-[16px] py-[22px] text-[#3C3E41] text-center">
                <p className="text-[#6D778E] text-[16px] leading-[16px] mt-[5px] font-semibold flex items-center gap-[6px] justify-center">104 <span className="text-[#D4D4D4]">|</span> 104 <span className="text-[#D4D4D4]">|</span> 156</p>
              </td>
              <td className="px-[10px] py-[18px] text-[14px] leading-[16px] text-center text-[#6D778E]">
                
              </td>
              <td className="px-[10px] text-[16px] leading-[16px] py-[22px] text-[#3C3E41] text-center">
                <p className="text-[#6D778E] text-[16px] leading-[16px] mt-[5px] font-semibold flex items-center gap-[6px] justify-center">104 <span className="text-[#D4D4D4]">|</span> 104 <span className="text-[#D4D4D4]">|</span> 156</p>
              </td>
              <td className="px-[10px] text-[16px] leading-[16px] py-[22px] text-[#3C3E41] text-center">
                <p className="text-[#6D778E] text-[16px] leading-[16px] mt-[5px] font-semibold flex items-center gap-[6px] justify-center">104 <span className="text-[#D4D4D4]">|</span> 104 <span className="text-[#D4D4D4]">|</span> 156</p>
              </td>
            </tr>
          </tbody>
        </table>
      </div>}
    </div>
  )
}


const RevenueComp = ({
  amount,
  revenue,
  byFlorist,
  floristNumbers,
}) => {
  return (
    <div
      className={`w-[310px] rounded-[8px] px-[16px] py-[14px] bg-[#fafbfc] border-[#0A85C2] border-[2px] h-[110px] flex flex-row justify-between shadow-md`}
    >
      <div className="flex flex-col justify-between h-[79px] w-[57%]">
        <div className="text-[40px] leading-[47px] font-variation-customOpt40 font-bold text-[#6D778E]">
          {amount}
        </div>
        <div className="min-w-[241px] text-[16px] text-[#1E2125] font-medium font-variation-customOpt14 leading-[16px]">
          {revenue}
        </div>
      </div>

      <div className="flex flex-col justify-start items-end gap-[7px]">
        <div className="inline-flex items-center gap-x-[4px]">
          <span className="text-[12px] leading-[100%] text-[#6D778E]">By florists:</span>
          <span className="text-[16px] leading-[100%] text-[#5EAE91] font-bold">{byFlorist}</span>
        </div>
        <div className="inline-flex items-center gap-x-[4px]">
          <span className="text-[12px] leading-[100%] text-[#6D778E]"># florists:</span>
          <span className="text-[16px] leading-[100%] text-[#5EAE91] font-bold">{floristNumbers}</span>
        </div>
      </div>
    </div>
  );
};

const RevenueCompTab3 = ({
  amount,
  revenue,
  byFlorist,
  floristNumbers,
}) => {
  return (
    <div
      className={`w-[310px] rounded-[8px] px-[16px] py-[14px] bg-[#fafbfc] border-[#0A85C2] border-[2px] h-[110px] flex flex-row justify-between shadow-md`}
    >
      <div className="flex flex-col justify-between h-[79px] w-[57%]">
        <div className="text-[40px] leading-[47px] font-variation-customOpt40 font-bold text-[#6D778E]">
          {amount}
        </div>
        <div className="min-w-[241px] text-[16px] text-[#1E2125] font-medium font-variation-customOpt14 leading-[16px]">
          {revenue}
        </div>
      </div>

      <div className="flex flex-col justify-start items-end gap-[7px]">
        <div className="inline-flex items-center gap-x-[4px]">
          <span className="text-[12px] leading-[100%] text-[#6D778E]">Previous m:</span>
          <span className="text-[16px] leading-[100%] text-[#5EAE91] font-bold">{byFlorist}</span>
        </div>
        <div className="inline-flex items-center gap-x-[4px]">
          <span className="text-[12px] leading-[100%] text-[#6D778E]">Monthly total:</span>
          <span className="text-[16px] leading-[100%] text-[#5EAE91] font-bold">{floristNumbers}</span>
        </div>
      </div>
    </div>
  );
};

const RevenueCompTab4 = ({
  amount,
  revenue,
  average,
  label1,
  label2,
  byFlorist,
  floristNumbers,
}) => {
  return (
    <div
      className={`w-[310px] rounded-[8px] px-[16px] py-[14px] bg-[#fafbfc] border-[#0A85C2] border-[2px] h-[110px] flex flex-row justify-between shadow-md`}
    >
      <div className="flex flex-col justify-between h-[79px] w-[57%]">
        <div className="text-[40px] leading-[47px] font-variation-customOpt40 font-bold text-[#6D778E]">
          {amount}
        </div>
        <div className="min-w-[241px] text-[16px] text-[#1E2125] font-medium font-variation-customOpt14 leading-[16px]">
          {revenue}{" "}<span className="text-[#6D778E] text-[14px]">({average})</span>
        </div>
      </div>

      <div className="flex flex-col justify-start items-end gap-[7px]">
        <div className="inline-flex items-center gap-x-[4px]">
          <span className="text-[12px] leading-[100%] text-[#6D778E]">{label1}</span>
          <span className="text-[16px] leading-[100%] text-[#5EAE91] font-bold">{byFlorist}</span>
        </div>
        <div className="inline-flex items-center gap-x-[4px]">
          <span className="text-[12px] leading-[100%] text-[#6D778E]">{label2}</span>
          <span className="text-[16px] leading-[100%] text-[#6D778E] font-bold">{floristNumbers}</span>
        </div>
      </div>
    </div>
  );
};

const RevenueCompTab5 = ({
  amount,
  revenue,
  lastM,
  total,
}) => {
  return (
    <div
      className={`w-[310px] rounded-[8px] px-[16px] py-[14px] bg-[#fafbfc] border-[#0A85C2] border-[2px] h-[110px] flex flex-row justify-between shadow-md`}
    >
      <div className="flex flex-col justify-between h-[79px] w-[57%]">
        <div className="text-[40px] leading-[47px] font-variation-customOpt40 font-bold text-[#6D778E]">
          {amount}
        </div>
        <div className="min-w-[241px] text-[16px] text-[#1E2125] font-medium font-variation-customOpt14 leading-[16px]">
          {revenue}
        </div>
      </div>

      <div className="flex flex-col justify-between items-end gap-[7px]">
        <div className="inline-flex items-center gap-x-[4px]">
          <span className="text-[12px] leading-[100%] text-[#6D778E]">Last M:</span>
          <span className="text-[16px] leading-[100%] text-[#5EAE91] font-bold">{lastM}</span>
        </div>
        <div className="inline-flex items-center gap-x-[4px]">
          <span className="text-[12px] leading-[100%] text-[#6D778E]">Total:</span>
          <span className="text-[16px] leading-[100%] text-[#5EAE91] font-bold">{total}</span>
        </div>
      </div>
    </div>
  );
};

const RevenueCompTab51 = ({
  amount,
  amount2,
  content,
  lastM,
  lastM2,
  content2,
}) => {
  return (
    <div
      className={`w-[310px] rounded-[8px] px-[16px] py-[14px] bg-[#fafbfc] border-[#0A85C2] border-[2px] h-[110px] flex flex-row justify-between shadow-md`}
    >
      <div className="flex flex-col justify-between h-[79px] w-full">
        <div className="flex justify-between items-start w-full">
          <div className="text-[40px] leading-[47px] font-variation-customOpt40 font-bold text-[#6D778E] w-[60%]">
            {amount} <span className="text-[#ACAAAA] text-[40px] font-[200]">I</span> <span className="text-[#ACAAAA] text-[32px]">{amount2}</span>
          </div>
          <div className="inline-flex items-center justify-end gap-x-[4px] w-[40%]">
            <span className="text-[12px] leading-[100%] text-[#6D778E]">Last M:</span>
            <span className="text-[16px] leading-[100%] text-[#5EAE91] font-bold">{lastM} <span className="text-[#CCCCCC1A] text-[16px]">I</span> <span className="text-[#ACAAAA] text-[14px]">{lastM2}</span></span>
          </div>
        </div>
          
        <div className="text-[14px] text-[#1E2125] font-medium leading-[16px] w-full">
          {content}
          <span className="text-[#ACAAAA] text-[16px] mx-[4px]">I</span> 
          <span className="text-[#ACAAAA] text-[14px]">{content2}</span>
        </div>
      </div>
    </div>
  );
};

const RevenueComp2 = ({
  amount,
  revenue,
  byFlorist,
  floristNumbers,
  obituaries,
}) => {
  return (
    <div
      className={`w-[310px] rounded-[8px] px-[16px] py-[14px] bg-[#e8f5fd] border-[#0A85C2] border-[2px] h-[110px] flex flex-row justify-between shadow-md`}
    >
      <div className="flex flex-col justify-between h-[79px] w-[46%]">
        <div className="text-[40px] leading-[47px] font-variation-customOpt40 font-bold text-[#6D778E]">
          {amount}
        </div>
        <div className="min-w-[241px] text-[16px] text-[#1E2125] font-medium font-variation-customOpt14 leading-[16px]">
          {revenue}
        </div>
      </div>

      <div className="flex flex-col justify-between h-full items-end">
        <div className="flex flex-col justify-start items-end gap-[7px]">
          <div className="inline-flex items-center gap-x-[4px]">
            <span className="text-[12px] leading-[100%] text-[#6D778E]">Monthly Keepers:</span>
            <span className="text-[16px] leading-[100%] text-[#5EAE91] font-bold">{byFlorist}</span>
          </div>
          <div className="inline-flex items-center gap-x-[4px]">
            <span className="text-[12px] leading-[100%] text-[#6D778E] w-[120px]">Mobile Notifications:</span>
            <span className="text-[16px] leading-[100%] text-[#6D778E] font-bold">{floristNumbers}</span>
          </div>
        </div>
        <div className="inline-flex items-center gap-x-[4px]">
          <span className="text-[12px] leading-[100%] text-[#1E2125] font-medium">Obituaries:</span>
          <span className="text-[16px] leading-[100%] text-[#EB1D1D] font-bold">{obituaries}</span>
        </div>
      </div>
    </div>
  );
};

const RevenueComp2Tab3 = ({
  amount,
  revenue,
  byFlorist,
  floristNumbers,
  obituaries,
}) => {
  return (
    <div
      className={`w-[310px] rounded-[8px] px-[16px] py-[14px] bg-[#e8f5fd] border-[#0A85C2] border-[2px] h-[110px] flex flex-row justify-between shadow-md`}
    >
      <div className="flex flex-col justify-between h-[79px] w-[57%]">
        <div className="text-[40px] leading-[47px] font-variation-customOpt40 font-bold text-[#6D778E]">
          {amount}
        </div>
        <div className="min-w-[241px] text-[16px] text-[#1E2125] font-medium font-variation-customOpt14 leading-[16px]">
          {revenue}
        </div>
      </div>

      <div className="flex flex-col justify-between h-full items-end">
        <div className="flex flex-col justify-start items-end gap-[7px]">
          <div className="inline-flex items-center gap-x-[4px]">
            <span className="text-[12px] leading-[100%] text-[#6D778E]">Previous m:</span>
            <span className="text-[16px] leading-[100%] text-[#5EAE91] font-bold">{byFlorist}</span>
          </div>
          <div className="inline-flex items-center gap-x-[4px]">
            <span className="text-[12px] leading-[100%] text-[#6D778E]">In total:</span>
            <span className="text-[16px] leading-[100%] text-[#5EAE91] font-bold">{floristNumbers}</span>
          </div>
        </div>
        <div className="inline-flex items-center gap-x-[4px]">
          <span className="text-[12px] leading-[100%] text-[#1E2125] font-medium">Change:</span>
          <span className="text-[16px] leading-[100%] text-[#EB1D1D] font-bold">{obituaries}</span>
        </div>
      </div>
    </div>
  );
};

const RevenueComp2Tab4 = ({
  amount,
  revenue,
  average,
  byFlorist,
  floristNumbers,
  obituaries,
}) => {
  return (
    <div
      className={`w-[310px] rounded-[8px] px-[16px] py-[14px] bg-[#e8f5fd] border-[#0A85C2] border-[2px] h-[110px] shadow-md`}
    >
      <div className="flex flex-row justify-between">
        <div className="flex flex-col justify-between h-[60px] w-[57%]">
          <div className="text-[40px] leading-[47px] font-variation-customOpt40 font-bold text-[#6D778E]">
            {amount}
          </div>
        </div>

        <div className="flex flex-col justify-between h-full items-end">
          <div className="flex flex-col justify-start items-end gap-[7px]">
            <div className="inline-flex items-center gap-x-[4px]">
              <span className="text-[12px] leading-[100%] text-[#6D778E]">Previous m:</span>
              <span className="text-[16px] leading-[100%] text-[#5EAE91] font-bold">{byFlorist}</span>
            </div>
            <div className="inline-flex items-center gap-x-[4px]">
              <span className="text-[12px] leading-[100%] text-[#6D778E]">In total:</span>
              <span className="text-[16px] leading-[100%] text-[#5EAE91] font-bold">{floristNumbers}</span>
            </div>
          </div>
        </div>
      </div>
      
      <div className="min-w-[241px] text-[16px] text-[#1E2125] font-medium font-variation-customOpt14 leading-[16px]">
        {revenue}{" "}<span className="text-[#6D778E] text-[14px]">{average}</span>
      </div>
    </div>
  );
};

export default Obituaries;