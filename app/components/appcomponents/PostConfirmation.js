"use client";
import React, { useState, useEffect } from "react";
import rightImg from "../../../public/right.png";
import crossImage from "../../../public/cross.png";
import filter from "../../../public/ico_sand_clock2.png";
import Image from "next/image";
import { FaAngleRight } from "react-icons/fa6";
import { AiOutlineExport } from "react-icons/ai";
import danger from "../../../public/danger.png";
import obituaryService from "@/services/obituary-service";
import { toast } from "react-hot-toast";
import Link from "next/link";

const PostConfirmation = () => {
  const [isTableVisible, setIsTableVisible] = useState(false);

  const toggleTableVisibility = () => {
    setIsTableVisible((prev) => !prev);
  };
  const [pendingPosts, setPendingPosts] = useState([]);
  const [previousPosts, setPreviousPosts] = useState([]);
  const [obituaryId, setObituaryId] = useState("");
  const [userId, setUserId] = useState("");
  const mockData = [
    {
      title: "Mary ",
      titlespan: "Poppins",
      OpenText: "Annonymus",
      spanText: "Photo",
      time: "18:22",
      date: "12.02.2024",
      imageSrc: rightImg,
      imageSrc2: crossImage,
      imageSrc3: danger,
      imageSrc4: filter,
    },
    {
      title: "Elizabeth",
      titlespan: "Frederickson",
      OpenText: "Bruce Lee",
      spanText: "Tribute",
      time: "18:22",
      date: "12.02.2024",
      imageSrc: rightImg,
      imageSrc2: crossImage,
      imageSrc3: danger,
      imageSrc4: filter,
    },
  ];

  const tabelData = [
    {
      title: "Elizabeth ",
      titlespan: "Frederickson",
      OpenText: "John Wayne",
      spanText: "Sympathy message",
      time: "18:31",
      date: "12.02.2024",
      imageSrc: rightImg,
    },

    {
      title: "Mary",
      titlespan: "Poppins",
      OpenText: " John Wayne",
      spanText: "Photo ",
      time: "15:27",
      date: "12.02.2024",
      imageSrc: crossImage,
    },
    {
      title: "Elizabeth ",
      titlespan: "Frederickson",
      OpenText: "JK",
      spanText: "Sympathy message",
      time: "3:16",
      date: "12.02.2024",
      imageSrc: crossImage,
    },

    {
      title: "Mary",
      titlespan: "Poppins",
      OpenText: "El Chico",
      spanText: "Sympathy message",
      time: "23:54",
      date: "11.02.2024",
      imageSrc: danger,
    },
  ];
  useEffect(() => {
    fetchPendingPosts();
  }, []);

  const fetchPendingPosts = async () => {
    try {
      const response = await obituaryService.fetchPendingPosts();

      if (response.error) {
        toast.error(
          response.error || "Something went wrong. Please try again!"
        );
        return;
      }
      console.log(response);
      setPendingPosts(response.pending);
      setPreviousPosts(response.others);
    } catch (err) {
      console.error("Error Fetching Pending Posts:", err);
      toast.error(err.message || "Failed To Pending Posts:");
    }
  };

  const approvePost = async (interactionId, type, logId, action) => {
    try {
      const postData = {
        interactionId: interactionId,
        type: type,
        action: action,
        logId: logId,
      };
      const response = await obituaryService.changePostStatus(postData);

      if (response.error) {
        toast.error(
          response.error || "Something went wrong. Please try again!"
        );
        return;
      }
      toast.success("Post Approved");

      const approvedPost = pendingPosts.find((post) => post.id === logId);
      if (approvedPost) {
        setPendingPosts((prev) => prev.filter((post) => post.id !== logId));
        setPreviousPosts((prev) => [
          { ...approvedPost, status: response.post.status },
          ...prev,
        ]);
      }
      console.log(response);
    } catch (err) {
      console.error("Error Fetching Pending Posts:", err);
      toast.error(err.message || "Failed To Pending Posts:");
    }
  };

  const formatDate = (timestamp) => {
    const date = timestamp ? new Date(timestamp) : new Date();
    return date.toLocaleString("sl-SI", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    });
  };
  const formatTime = (timestamp) => {
    const date = timestamp ? new Date(timestamp) : new Date();
    return date.toLocaleString("sl-SI", {
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  //To be deleted
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const assignData = {
        userId: userId,
        obituaryId: obituaryId,
      };
      const response = await obituaryService.assignKeeper(assignData);

      if (response.error) {
        toast.error(
          response.error || "Something went wrong. Please try again!"
        );
        return;
      }
      toast.success("Keeper Assigned");
      console.log(response);
    } catch (err) {
      console.error("Error Assgining Keeper", err);
      toast.error(err.message || "Error Assgining Keeper");
    }
  };

  const funeralDateFormatted = (timestamp) => {
    const funeralDate = new Date(timestamp);
    if (isNaN(funeralDate.getTime())) return "";

    const day = funeralDate.getDate().toString().padStart(2, "0");
    const month = (funeralDate.getMonth() + 1).toString().padStart(2, "0");
    const year = funeralDate.getFullYear();

    return `${day}.${month}.${year}`;
  };
  return (
    <>
      <div className="tabletUserAcc:hidden mobileUserAcc:hidden flex flex-col mt-[86px] tabletUserAcc:mt-[46px] gap-y-5 mobileUserAcc:gap-y-3 mobileUserAcc:mt-[27px] desktopUserAcc:pr-[40px] pr-0 ">
        <div className="flex tabletUserAcc:gap-[26px] mobileUserAcc:gap-3 mobileUserAcc:flex-col tabletUserAcc:justify-between desktopUserAcc:justify-between ">
          <div className="ml-0 grid gap-4 grid-cols-2 mobileUserAcc:grid-cols-2 mobileUserAcc:ml-0 max-[360px]:grid-cols-2 ">
            <div className="border-gradient-rounded  flex flex-col w-[252px] h-[73px] mobileUserAcc:w-full mobileUserAcc:flex-row mobileUserAcc:justify-around mobileUserAcc:items-center py-[13px] px-[15px] border-[2px] border-[#0A85C2] rounded-xl bg-[#fff]">
              <div className="items-center flex justify-between ">
                <h2 className="items-center text-[32px] text-[#1E2125] font-semibold leading-10">
                  {previousPosts?.length}
                </h2>
                <div className="uppercase text-[16px] text-[#6D778E] font-regular leading-[18.75px]">
                  <p> vseh prispevkov </p>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-b from-[#0D94E8] to bg-[#1860A3] rounded-[10px] flex flex-col w-[206px] h-[73px] mobileUserAcc:w-full mobileUserAcc:flex-row mobileUserAcc:justify-around mobileUserAcc:items-center py-[16px] px-[15px] border-[2px] border-[#0A85C2] ">
              <div className="items-center flex justify-between ">
                <h2 className=" items-center text-[32px] text-[#fff] font-semibold leading-10">
                  {pendingPosts?.length}
                </h2>
                <div className="uppercase  text-[16px] text-[#fff] font-regular leading-[18.75px]">
                  <p> še ni potrditve </p>
                </div>
              </div>
            </div>
            <div className="text-[#3C3E41] text-[16px] font-normal text-end mt-[60px]"></div>
          </div>

          <div className="flex h-[73px] items-end">
            <p className="text-[#3C3E41] text-[16px]">
              Skrbnik določa, kaj je objavljeno in kaj ne
            </p>
          </div>
        </div>

        {pendingPosts && pendingPosts.length > 0 ? (
          <div className="overflow-x-auto mt-[40px]">
            <div className="overflow-x-auto">
              <div className="overflow-x-auto">
                <table className="min-w-full border-separate border-spacing-y-[10px] border-spacing-x-[0px]">
                  <thead>
                    <tr className="">
                      <th className="uppercase px-3 py-2 text-[14px] font-semibold text-[#3c3e41] text-left">
                        spominska stran
                      </th>
                      <th className="uppercase px-3 py-2 text-[14px] font-semibold text-[#3c3e41] text-left">
                        odpri I kdo I kaj
                      </th>
                      <th className="uppercase px-3 py-2 text-[14px] font-semibold text-[#3c3e41] text-left">
                        kdaj
                      </th>
                      <th className="uppercase px-3 py-2 text-[14px] font-semibold text-[#3c3e41] text-left">
                        potrdi
                      </th>
                      <th className="uppercase px-3 py-2 text-[14px] font-semibold text-[#3c3e41] text-left">
                        zavrni
                      </th>
                      <th className="w-[60px] uppercase px-3 py-2 text-[14px] font-semibold text-[#3c3e41] text-left">
                        prijavi
                      </th>
                      <th className="text-end uppercase px-5 py-2 text-[14px] font-semibold text-[#3c3e41]">
                        STATUS
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {pendingPosts?.map((item, index) => (
                      <tr
                        key={index}
                        className="border border-[#0D94E8] rounded-[4px] bg-[#fff]"
                      >
                        <td className="w-[250px] text-[#0D94E8] text-[16px] font-normal  p-4  leading-[19px] font-variation-customOpt18 border-t border-b border-l rounded-l border-[#0D94E8]">
                          <div className="flex items-center justify-arounds">
                            <span className="flex flex-col text-[14px] text-[#6D778E] font-normal">
                              {item?.Obituary?.name}
                              <span className="text-[16px] font-normal text-[#3C3E41]">
                                {item?.Obituary?.sirName}
                              </span>
                            </span>
                            <FaAngleRight className="ml-2 w-[24px] h-[24px] text-[#6D778E]" />
                          </div>
                        </td>
                        <td className="w-[300px] p-4 border-t border-b border-[#0D94E8]">
                          <div className="flex items-center justify-arounds">
                            <AiOutlineExport className="ml-2 w-[24px] h-[24px] text-[#6D778E] mr-4" />
                            <span className="flex flex-col text-[#6D778E]">
                              {item?.userName}
                              <span className="text-[14px] font-medium text-[#3C3E41]">
                                {item?.typeInSL}
                              </span>
                            </span>
                          </div>
                        </td>
                        <td className="w-[180px] p-4 border-t border-b border-[#0D94E8]">
                          <div className="flex items-center">
                            <span className="text-[#6D778E] text-[14px] flex flex-col">
                              {formatTime(item?.createdTimestamp)}
                              <span className="text-[14px] font-medium text-[#3C3E41]">
                                {formatDate(item?.createdTimestamp)}
                              </span>
                            </span>
                          </div>
                        </td>
                        <td className="p-4 border-t border-b border-[#0D94E8]">
                          <div
                            className="w-[48px] cursor-pointer h-[48px] flex items-center justify-center shadow-lg rounded-[8px]"
                            style={{
                              background:
                                "linear-gradient(135deg, #E3E8EC, #FFFFFF)",
                            }}
                            onClick={() =>
                              approvePost(
                                item?.interactionId,
                                item?.type,
                                item?.id,
                                "approved"
                              )
                            }
                          >
                            <Image
                              src={rightImg}
                              alt={item.message}
                              className="w-[21px] h-[21px]"
                            />
                          </div>
                        </td>
                        <td className="p-4 border-t border-b border-[#0D94E8]">
                          <div
                            className="w-[48px] cursor-pointer h-[48px] flex items-center justify-center shadow-lg rounded-[8px]"
                            style={{
                              background:
                                "linear-gradient(135deg, #E3E8EC, #FFFFFF)",
                            }}
                            onClick={() =>
                              approvePost(
                                item?.interactionId,
                                item?.type,
                                item?.id,
                                "rejected"
                              )
                            }
                          >
                            <Image
                              src={crossImage}
                              alt={item.message}
                              className="w-[21px] h-[21px]"
                            />
                          </div>
                        </td>
                        <td className="w-[60px]  p-4 border-t border-b border-[#0D94E8]">
                          <div
                            className="w-[48px] cursor-pointer h-[48px] flex items-center justify-center shadow-lg rounded-[8px]"
                            style={{
                              background:
                                "linear-gradient(135deg, #E3E8EC, #FFFFFF)",
                            }}
                          >
                            <Image
                              src={danger}
                              alt={item.message}
                              className="w-[21px] h-[21px]"
                            />
                          </div>
                        </td>
                        <td className="pl-[60px] w-[135px] border-t border-b border-r rounded-r border-[#0D94E8] bg-[#Fff]">
                          <div className="w-[48px] h-[48px] flex items-center justify-center">
                            <Image
                              src={filter}
                              alt={item.message}
                              className="w-[21px] h-[21px]"
                            />
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        ) : null}

        {previousPosts && previousPosts.length > 0 ? (
          <div className="overflow-x-auto">
            <div className="overflow-x-auto">
              <div className="overflow-x-auto">
                <table className="min-w-full border-separate border-spacing-y-[10px] border-spacing-x-[0px]">
                  {/* 25 October 2024 */}
                  <thead>
                    <tr>
                      <th
                        style={{
                          fontVariationSettings:
                            "'wdth' 50,'wght' 600,'opsz' 20",
                        }}
                        className="text-[20px] leading-[23px] font-semibold text-[#0A85C2] text-left"
                      >
                        Prejšnje potrditve
                      </th>
                      <th className="uppercase px-4 py-2 text-[14px] font-semibold text-[#3c3e41] text-left"></th>
                      <th className="uppercase px-4 py-2 text-[14px] font-semibold text-[#3c3e41] text-left"></th>
                      <th className="uppercase px-4 py-2 text-[14px] font-semibold text-[#3c3e41] text-left"></th>
                      <th className="uppercase px-4 py-2 text-[14px] font-semibold text-[#3c3e41] text-left"></th>
                      <th className="uppercase px-4 py-2 text-[14px] font-semibold text-[#3c3e41] text-left"></th>
                      <th className=" uppercase  text-[14px] font-semibold text-[#3c3e41] text-left">
                        STATUS
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {previousPosts?.map((item, index) => (
                      <tr
                        key={index}
                        className="border border-[#A1B1D4] rounded-[4px]"
                      >
                        <td className="w-[250px] ml-[20px] p-4 leading-[19px] font-variation-customOpt18 border-t border-b border-l rounded-l border-[#A1B1D4]">
                          <div className="flex ">
                            <span className="flex flex-col text-[14px] font-normal text-[#6D778E]">
                              {item?.Obituary?.name}
                              <span className="text-[16px] font-medium text-[#3C3E41]">
                                {item?.Obituary?.sirName}
                              </span>
                            </span>
                            <FaAngleRight className="ml-2 w-[24px] h-[24px] text-[#6D778E]" />
                          </div>
                        </td>
                        <td className="w-[300px] ml-[20px] p-[16px] border-t border-b border-[#A1B1D4]">
                          <div className="flex items-center">
                            <AiOutlineExport className="ml-2 w-[24px] h-[24px] text-[#6D778E] mr-4" />
                            <span className="flex flex-col text-[14px] font-medium text-[#6D778E]">
                              {item?.userName}
                              <span className="text-[16px] font-medium text-[#3C3E41]">
                                {item?.typeInSL}
                              </span>
                            </span>
                          </div>
                        </td>
                        <td className="ml-[20px] w-[180px] p-[16px] border-t border-b border-[#A1B1D4]">
                          <div className="flex">
                            <span className="flex flex-col text-[14px] font-medium text-[#6D778E]">
                              {formatTime(item?.createdTimestamp)}
                              <span className="text-[16px] font-medium text-[#3C3E41]">
                                {formatDate(item?.createdTimestamp)}
                              </span>
                            </span>
                          </div>
                        </td>
                        <td className="ml-[20px]  w-[80px] p-2 border-t border-b border-[#A1B1D4]">
                          <div className="flex  justify-end">
                            <span className="flex flex-col text-[14px] font-medium text-[#6D778E]">
                              <span className="text-[16px] font-medium text-[#3C3E41]"></span>
                            </span>
                          </div>
                        </td>
                        <td className="w-[200px] p-2 border-t border-b border-[#A1B1D4]">
                          <div className="flex items-center justify-start">
                            <span className="flex flex-col text-[14px] font-medium text-[#6D778E]">
                              <span className="text-[16px] font-medium text-[#3C3E41]"></span>
                            </span>
                          </div>
                        </td>
                        <td className="w-[180px] p-2 border-t border-b border-[#A1B1D4]">
                          <div className="flex items-center justify-start">
                            <span className="flex flex-col text-[14px] font-medium text-[#6D778E]">
                              <span className="text-[16px] font-medium text-[#3C3E41]"></span>
                            </span>
                          </div>
                        </td>
                        <td className="w-[60px] p-2 ml-[20px] border-t border-b border-r rounded-r border-[#A1B1D4]">
                          <Image
                            src={
                              item.status === "approved"
                                ? rightImg
                                : item.status === "rejected"
                                ? crossImage
                                : ""
                            }
                            alt={item.message}
                            className="w-[24px] h-[24px]"
                          />
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        ) : null}
      </div>
      <div>
        <h1>Assign Keeper</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="User ID"
            value={userId}
            onChange={(e) => setUserId(e.target.value)}
          />
          <input
            type="text"
            placeholder="Obituary ID"
            value={obituaryId}
            onChange={(e) => setObituaryId(e.target.value)}
          />
          <button type="submit">Assign</button>
        </form>
      </div>
      {/*  responsive code for tablet */}
      <div className="desktopUserAcc:hidden">
        <div className="text-[14px] text-[#6D778E] mobileUserAcc:text-nowrap font-medium text-right mt-[50px]">
          {/* 25 October 2024 */}
          <p
            style={{
              fontVariationSettings: "'wdth' 75, 'opsz' 14, 'wght' 400",
            }}
            className="leading-[16px]"
          >
            Prispevek drugih moraš potrditi, sicer ne bo objavljen{" "}
          </p>
        </div>
        <div className="w-full border-t border-[#000000] border-opacity-50 mobileUserAcc:hidden"></div>

        {pendingPosts && pendingPosts?.length > 0 ? (
          pendingPosts.map((item, index) => (
            <>
              <div className="flex justify-between mt-[20px]">
                <h4 className="text-[#1E2125] text-[18px] font-medium">
                  {item?.Obituary?.name} {item?.Obituary?.sirName}
                </h4>
                <p className="text-[#ACACAC] text-[14px] font-medium tabletUserAcc:mr-7">
                  {formatDate(item?.createdTimestamp)}
                </p>
              </div>
              <div className="flex justify-between mt-[2px]">
                <h4 className="text-[#717B8C] text-[14px] font-medium mt-[0px]">
                  {item?.typeInSL}
                </h4>
                {/* 17 October 2024 */}
                <div
                  className="mobileUserAcc:w-[78px] h-[32px] flex items-center justify-center shadow-lg rounded w-[154px]"
                  style={{
                    background: "linear-gradient(135deg, #E3E8EC, #FFFFFF)",
                  }}
                >
                  <p className="text-[#717B8C] text-[12px] mt-[0px]">Odpri</p>
                </div>
              </div>

              <p className="mt-[-8px] text-[#ACACAC] text-[14px] font-medium">
                Anonymous
              </p>

              <div className="flex justify-between tabletUserAcc:justify-around">
                <div className="p-4 flex flex-col items-center">
                  <div
                    className="w-[40px] h-[40px] flex items-center justify-center shadow-lg rounded"
                    style={{
                      background: "linear-gradient(135deg, #E3E8EC, #FFFFFF)",
                    }}
                    onClick={() =>
                      approvePost(
                        item?.interactionId,
                        item?.type,
                        item?.id,
                        "approved"
                      )
                    }
                  >
                    <Image
                      src={rightImg}
                      alt=""
                      className="w-[21px] h-[21px]"
                    />
                  </div>
                  <p className="mt-2 text-center text-[#717B8C] text-[14px]">
                    Objavi
                  </p>
                </div>

                <div className="p-4 flex flex-col items-center">
                  <div
                    className="w-[40px] h-[40px] flex items-center justify-center shadow-lg rounded"
                    style={{
                      background: "linear-gradient(135deg, #E3E8EC, #FFFFFF)",
                    }}
                    onClick={() =>
                      approvePost(
                        item?.interactionId,
                        item?.type,
                        item?.id,
                        "rejected"
                      )
                    }
                  >
                    <Image
                      src={crossImage}
                      alt=""
                      className="w-[21px] h-[21px]"
                    />
                  </div>
                  <p className="text-[#717B8C] text-[14px] mt-2 text-center">
                    Zavrni
                  </p>
                </div>

                <div className=" tabletUserAcc:block p-4 flex flex-col items-center">
                  <div
                    className="w-[40px] h-[40px] flex items-center justify-center shadow-lg rounded"
                    style={{
                      background: "linear-gradient(135deg, #E3E8EC, #FFFFFF)",
                    }}
                  >
                    <Image src={danger} alt="" className="w-[21px] h-[21px]" />
                  </div>
                  <p className="text-[#717B8C] text-[14px] mt-2 text-center">
                    Prijavi
                  </p>
                </div>

                <div className="mobileUserAcc:hidden p-4 flex flex-col items-center">
                  <div className="w-[40px] h-[40px] flex items-center justify-center">
                    <Image src={filter} alt="" className="w-[21px] h-[21px]" />
                  </div>
                  <p className="text-[#717B8C] text-[14px] mt-2 text-center">
                    Status
                  </p>
                </div>
              </div>
              <div className="w-full border-t border-[#000000] border-opacity-50 "></div>
            </>
          ))
        ) : (
          <p>No Pending Posts Found</p>
        )}

        <div className="mobileUserAcc:hidden overflow-x-auto mt-[100px]">
          {/* 25 October 2024 */}
          <div
            style={{
              fontVariationSettings: "'wdth' 50,'wght' 600,'opsz' 20",
            }}
            className="text-[20px] font-semibold text-[#0A85C2] text-left"
          >
            Prejšnje potrditve
          </div>
          {previousPosts && previousPosts.length > 0 ? (
            <div className="overflow-x-auto">
              <div className="overflow-x-auto border-[#0A85C2]">
                <table className="min-w-full border-separate border-spacing-y-[10px] border-spacing-x-[0px]">
                  <thead>
                    <tr>
                      <th className="w-[200px] uppercase px-4 py-2 text-[14px] font-semibold text-[#3c3e41] text-left">
                        Spominska
                      </th>
                      <th className="w-[350px] uppercase px-4 py-2 text-[14px]  font-semibold text-[#3c3e41] text-center">
                        kdo i kaj
                      </th>
                      <th className="w-[280px] uppercase px-4 py-2 text-[14px] font-semibold text-[#3c3e41] text-left">
                        datum
                      </th>
                      <th className="w-[80px] uppercase px-4 py-2 text-[14px] font-semibold text-[#3c3e41] text-left">
                        STATUS
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {previousPosts.map((item, index) => (
                      <tr
                        key={index}
                        className="border border-[#A1B1D4] rounded-[4px]"
                      >
                        <td className="w-[400px] p-2 leading-[19px] font-variation-customOpt18 border-t border-b border-l rounded-l border-[#A1B1D4]">
                          <div className="flex items-center justify-start">
                            <span className="flex flex-col text-[14px] font-normal text-[#6D778E]">
                              {item?.Obituary?.name}
                              <span className="text-[16px] font-medium text-[#3C3E41]">
                                {item?.Obituary?.sirName}
                              </span>
                            </span>
                            <FaAngleRight className="ml-2 w-[24px] h-[24px] text-[#6D778E]" />
                          </div>
                        </td>
                        <td className="w-[350px]  p-2 border-t border-b border-[#A1B1D4]">
                          <div className="flex items-center justify-start">
                            <AiOutlineExport className="ml-2 w-[24px] h-[24px] text-[#6D778E] mr-4" />
                            <span className="flex flex-col text-[14px] font-medium text-[#6D778E]">
                              Anonymous
                              <span className="text-[16px] font-medium text-[#3C3E41]">
                                {item?.typeInSL}
                              </span>
                            </span>
                          </div>
                        </td>
                        <td className="w-[80px] p-2 border-t border-b border-[#A1B1D4]">
                          <div className="">
                            <span className="flex flex-col text-[14px] font-medium text-[#6D778E]">
                              {formatTime(item?.createdTimestamp)}
                              <span className="text-[16px] font-medium text-[#3C3E41]">
                                {formatDate(item?.createdTimestamp)}
                              </span>
                            </span>
                          </div>
                        </td>
                        <td className="w-[150px] p-2 border-t border-b border-r rounded-r border-[#A1B1D4] ml-auto">
                          <Image
                            src={
                              item.status === "approved"
                                ? rightImg
                                : item.status === "rejected"
                                ? crossImage
                                : ""
                            }
                            alt={item.message}
                            className="w-[24px] h-[24px]"
                          />
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          ) : (
            <p>No Previous Posts Found</p>
          )}
        </div>

        {/* new dropdown code */}
        <div className="flex flex-col mt-[20px] desktopUserAcc:mt-[103px] tabletUserAcc:hidden justify-between w-full items-start ">
          <div className="flex justify-between w-full items-center mb-3 border border-[#0A85C2] rounded-lg">
            <div
              className="text-[20px] tabletUserAcc:text-[20px] text-[#0A85C2] font-semibold rounded-lg bg-white h-[60px] flex  justify-between items-center p-1 desktopUserAcc:bg-transparent tabletUserAcc:bg-transparent tabletUserAcc:border-none desktopUserAcc:border-none w-full"
              onClick={toggleTableVisibility}
            >
              {/* 24 October 2024 */}
              {/* 25 October 2024 */}
              <span
                style={{
                  fontVariationSettings: "'wdth' 50,'wght' 600,'opsz' 20",
                }}
                className="ml-[16px] text-[20px]"
              >
                Dosedanje potrditve
              </span>
              {/*For Mobile-only*/}
              {!isTableVisible ? (
                <Image
                  src="/img_left_arrow.png"
                  className="w-8 h-10 object-cover tabletUserAcc:hidden desktopUserAcc:hidden"
                  width={28}
                  height={32}
                />
              ) : (
                <Image
                  src="/img_down_arrow.png"
                  className="w-7 h-7 border-2 mx-1 border-[#EB1D1D] p-2 px-1.5 tabletUserAcc:hidden desktopUserAcc:hidden" // Only show on mobile when visible
                  width={32}
                  height={32}
                />
              )}
            </div>
            {/* Always visible on tablet and desktop */}
            <Image
              src="/img_down_arrow.png"
              className="mr-[10px] w-7 h-7 border-2 border-[#EB1D1D] p-2 px-1.5 hidden tabletUserAcc:block desktopUserAcc:block"
              width={32}
              height={32}
            />
          </div>

          <div
            className={`overflow-x-auto w-full ${
              isTableVisible
                ? "block"
                : "hidden tabletUserAcc:block desktopUserAcc:block"
            }`}
          >
            {previousPosts && previousPosts.length > 0 ? (
              previousPosts.map((item, index) => (
                <div className="mt-[30px]" key={index}>
                  <div className="flex justify-between">
                    <h3 className="text-[#1E2125] text-[16px] font-medium">
                      {item?.Obituary?.name} {item?.Obituary?.sirName}
                    </h3>
                    <p className="text-[#ACACAC] text-[12px] font-medium">
                      {formatDate(item?.createdTimestamp)}
                    </p>
                  </div>
                  <div className="flex justify-between mt-[10px]">
                    <p className="text-[#717B8C] text-[14px] font-medium">
                      {item?.typeInSL}
                    </p>
                    <Image
                      src={
                        item.status === "approved"
                          ? rightImg
                          : item.status === "rejected"
                          ? crossImage
                          : ""
                      }
                      alt=""
                      className="w-[21px] h-[21px]"
                    />
                  </div>

                  <div className="flex justify-between mt-[10px]">
                    <p className="text-[#ACACAC] text-[12px] font-medium">
                      by {item?.userName}
                    </p>
                    {/* <p className="text-[#ACACAC] text-[12px] font-medium">
                      21:56 12.03.23
                    </p> */}
                  </div>
                </div>
              ))
            ) : (
              <p>No Previous Post Found</p>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default PostConfirmation;
