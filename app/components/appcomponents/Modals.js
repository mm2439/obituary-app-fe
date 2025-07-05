import React, { useState, useEffect, useMemo } from "react";
import API_BASE_URL from "@/config/apiConfig";
import Image from "next/image";
import ButtonBlue from "./ButtonBlue";
import ButtonGreen from "./ButtonGreen";
import ButtonBlueBorder from "./ButtonBlueBorder";
import DescriptionFieldComp from "./DescriptionFieldComp";
import TextFieldComp from "./TextFieldComp";
import ModalDropBox from "./ModalDropBox";
import ButtonBlueCustom from "./ButtonBlueCustom";
import TextFieldCompSixtyHeight from "./TextFieldCompSixtyHeight";
import SayingsOfCondolenceField from "./SayingsOfCondolenceField";
import strings from "../../strings";
import plus_icon from "@/public/plus_icon.png";
import img_light_candle from "@/public/img_light_candle.png";
import add_photo_place from "@/public/add_photo_place.png";
import check_ico from "@/public/check_ico.png";
import ico_gradient from "@/public/ico_gradient.png";
import ico_gradient_last from "@/public/ico_gradient_last.png";
import user6 from "@/public/mario_danilo_primo.avif";
import img_placeholder from "@/public/img_placholder.png";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { getYear, getMonth } from "date-fns"; // To extract year and month info
import obituaryService from "@/services/obituary-service";
import toast from "react-hot-toast";
import keeperService from "@/services/keeper-service";

const Modals = ({
  select_id,
  set_Id,
  selectedImage,
  data,
  updateObituary,
  setIsShowModal,
}) => {
  const musicList = [
    "BREZ glasbe",
    "Prva izbira",
    "Druga izbira",
    "Tretja izbira",
    "Četrta izbira",
    "Peta izbira",
  ];
  //common
  const [error, setError] = useState(null);
  const [startDate, setStartDate] = useState(new Date()); // Store selected date
  const [openPicker, setOpenPicker] = useState(null); // Manage which dropdown is open: day, month, or year
  const [select, setSelect] = useState(1); // Manage which dropdown is select or not
  const [selectedHour, setSelectedHour] = useState(null);
  const [selectedMinute, setSelectedMinute] = useState(null);
  const [obituaryText, setObituaryText] = useState("");
  const [uploadedPicture, setUploadedPicture] = useState(null);
  const [uploadedImage, setUploadedImage] = useState(null);
  const [verse, setVerse] = useState(null);
  const [user, setUser] = useState(null);
  const [keeperEmail, setKeeperEmail] = useState(null);
  const [keeperMessage, setKeeperMessage] = useState(null);

  //
  const closeModal = () => {
    setIsShowModal(false);
  };
  //sorrow book
  const [name, setName] = useState(null);
  const [relation, setRelation] = useState(null);

  const emptyField = (field) => {
    console.log(`here ${field}`);
    const setters = {
      title: setTitle,
      message: setMessage,
      name: setName,
      relation: setRelation,
    };

    if (setters[field]) {
      setters[field](null);
    }
  };

  const handleKeeperAssignment = async () => {
    if (!isKeeper()) {
      toast.error("Only Keeper is allowed to invite other keeper");
      return;
    }

    if (keeperEmail.trim() === "") {
      toast.error("Please Enter Email");
      return;
    }

    try {
      const formData = new FormData();

      formData.append("obituaryId", data?.id);
      formData.append("time", String(2));
      formData.append("email", keeperEmail);
      if (keeperMessage) {
        //tp be done tomorrow
        formData.append("relation", message);
      }

      console.log(formData);

      const response = await keeperService.assignKeeper(formData);
      toast.success("Keeper Assigned Successfully");
      console.log(response);
    } catch (error) {
      toast.error("Some Error Occured");
    }
  };
  useEffect(() => {
    console.log(keeperMessage);
  }, [keeperMessage]);
  // add sorrow book
  const addSorrowBook = async () => {
    if (!name || name.trim() === "") {
      toast.error("Please enter a name before submitting.");
      return;
    }

    if (!user) {
      toast.error("You must log in to enter your name in list of sorrow book.");
      return;
    }
    if (isCompany()) {
      toast.error("You are not allowed to do this!");
      return;
    }

    const sorrowBookData = {
      name,
      relation,
    };

    try {
      const response = await obituaryService.createSorrowBook(
        data.id,
        sorrowBookData
      );

      console.log(`Sorrow Book Created successfully!`, response);

      emptyField("name");
      emptyField("relation");

      const updatedSorrowBooks = [...data.SorrowBooks, response];
      updateObituary({ ["SorrowBooks"]: updatedSorrowBooks });
      toast.success("Sorrow Book Created Successfully");
      updateObituary();
      closeModal();
    } catch (error) {
      console.error("Failed to create SorrowBook:", error);

      if (error.status === 409) {
        toast.error("You are already in the Book of Sorrow.");
        closeModal();
      } else {
        toast.error(
          error.data?.message || "Error Creating Sorrow Book. Please try again."
        );
      }
    }
  };

  //dedication
  const [title, setTitle] = useState(null);
  const [message, setMessage] = useState(null);
  const addDedication = async () => {
    if (!title?.trim() || !message?.trim() || !name?.trim()) {
      toast.error("Please fill in all required fields before submitting.");
      return;
    }
    if (!user) {
      toast.error("You must log in to add dedication.");
      return;
    }
    if (isCompany()) {
      toast.error("You are not allowed to do this!");
      return;
    }

    if (!memoryHasKeeper()) {
      toast.error("Current Memory has no keeper! You cannot proceed");
      return;
    }
    const dedicationData = {
      title,
      message,
      name,
      isKeeper: isKeeper(),
    };

    try {
      const response = await obituaryService.createDedication(
        data.id,
        dedicationData
      );

      console.log(`Dedication Created successfully!`, response);

      if (isKeeper()) {
        const updatedDedication = [...data.Dedications, response];
        updateObituary({ ["Dedications"]: updatedDedication });
        toast.success("Dedication Created Successfully");
      } else {
        toast.success("Dedication Sent to Keeper for review!");
      }
      emptyField("name");
      emptyField("message");
      emptyField("title");
      closeModal();
    } catch (error) {
      console.error(`Failed to create Dedication`, error);
      toast.error("Error Creating Dedication");
    }
  };

  //add photo
  const addPhoto = async () => {
    if (!user) {
      toast.error("You must log in to add photo.");
      return;
    }

    if (isCompany()) {
      toast.error("You are not allowed to do this!");
      return;
    }

    if (!memoryHasKeeper()) {
      toast.error("Current Memory has no keeper! You cannot add photo");
      return;
    }
    if (!uploadedPicture) {
      toast.error("No image selected!");
      return;
    }
    const formData = new FormData();
    formData.append("picture", uploadedPicture);
    formData.append("isKeeper", isKeeper());
    try {
      const response = await obituaryService.addPhoto(data.id, formData);

      console.log(`Photo Sent to Keeper for review!`, response);

      setUploadedPicture(null);
      setUploadedImage(null);

      if (isKeeper()) {
        const updatedPhoto = [...data.Photos, response];
        updateObituary({ ["Photos"]: updatedPhoto });
        toast.success("Photo Added Successfully!");
      } else if (!isKeeper()) {
        toast.success("Photo Sent to Keeper for review!");
      }
      closeModal();
    } catch (error) {
      console.error(`Failed to add  photo`, error);
      toast.error("Error Adding Photo");
    }
  };

  //add condolence
  const addCondolence = async () => {
    if (!user) {
      toast.error("You must log in to add condolence.");
      return;
    }
    if (isCompany()) {
      toast.error("You are not allowed to do this!");
      return;
    }

    if (!name?.trim()) {
      toast.error("Please enter name before submitting.");
      return;
    } else if (!memoryHasKeeper() && !placeholderName?.trim()) {
      toast.error("Please select a message.");
      return;
    }

    const isCustomMessage = Boolean(
      memoryHasKeeper() && message?.trim().length > 0
    );

    const finalMessage = isCustomMessage ? message : placeholderName;

    const condolenceData = {
      message: finalMessage,
      isCustomMessage,
      name,
      relation,
      isKeeper: isKeeper(),
    };

    try {
      const response = await obituaryService.createCondolence(
        data.id,
        condolenceData
      );

      console.log(`Condolence Created successfully!`, response);

      emptyField("name");
      emptyField("message");
      emptyField("relation");
      if (isKeeper() || !isCustomMessage) {
        const updatedCondolences = [...data.Condolences, response];
        updateObituary({ ["Condolences"]: updatedCondolences });
        toast.success("Condolence Created Successfully");
      } else if (!isKeeper()) {
        toast.success("Condolence Sent to Keeper for review!");
      }
      closeModal();
    } catch (error) {
      if (error.status === 409) {
        toast.error("You can only add a condolence once every 24 hours.");
        closeModal();
      } else {
        toast.error(
          error.data?.message || "Error Creating Condolence. Please try again."
        );
      }
    }
  };

  const addReport = async () => {
    if (!user) {
      toast.error("You must log in to update.");
      return;
    }
    if (isCompany()) {
      toast.error("You are not allowed to do this!");
      return;
    }

    if (!name?.trim() || !message?.trim()) {
      toast.error("Please enter complete details before submitting.");
      return;
    }

    const reportData = {
      message,
      name,
    };

    try {
      const response = await obituaryService.addReport(data.id, reportData);

      console.log(`Report Submitted successfully!`, response);

      toast.success("Report Submitted successfully");
      emptyField("name");
      emptyField("message");
      closeModal();
    } catch (error) {
      console.error(`Failed to submit report`, error);
      toast.error("Error submitting report");
    }
  };

  //add event
  const [location, setLocation] = useState(null);
  const initialEvent = {
    eventName: "",
    eventLocation: "",
    eventDate: null,
    eventHour: null,
    eventMinute: null,
  };
  const [newEvent, setNewEvent] = useState(initialEvent);

  const updateEventField = (field, value) => {
    setNewEvent((prevEvent) => ({
      ...prevEvent,
      [field]: value,
    }));
  };

  //checking if memory has keepers
  const memoryHasKeeper = () => {
    return data?.Keepers?.length > 0;
  };
  //checking if current user is keeper
  const isKeeper = () => {
    return (
      user?.id && data?.Keepers?.some((keeper) => keeper.userId === user.id)
    );
  };

  // Toggle function for each dropdown
  const togglePicker = (type) => {
    setSelect(!select);
    setOpenPicker(openPicker === type ? null : type); // Close if already open
  };
  const updateMemory = async (field, value) => {
    if (!user) {
      toast.error("You must log in to update.");
      return;
    }
    if (isCompany()) {
      toast.error("You are not allowed to do this!");
      return;
    }

    if (!isKeeper()) {
      toast.error("Only keepers can update!");
      return;
    }
    if (field === "events") {
      const requiredFields = [
        "eventName",
        "eventLocation",
        "eventDate",
        "eventHour",
        "eventMinute",
      ];
      const isValidEvent = requiredFields.every(
        (key) => value[key] !== null && value[key]?.toString().trim() !== ""
      );

      if (!isValidEvent) {
        toast.error("Please fill in all event details.");
        return;
      }

      // Parse existing events and update
      const parsedEvents = data?.events ? data.events : [];

      const updatedEvents =
        parsedEvents.length > 0 ? [...parsedEvents, value] : [value];

      value = JSON.stringify(updatedEvents);
    } else if (field === "picture") {
      if (!value) {
        toast.error("No image selected!");
        return;
      }
    } else {
      if (!value.trim() && field !== "symbol") {
        toast.error(`${field} field is empty`);
        return;
      }
    }

    const formData = new FormData();
    formData.append(field, value);

    console.log(formData);

    try {
      const response = await obituaryService.updateObituary(data.id, formData);
      console.log(`${field} updated successfully!`, response);
      toast.success(`${field} updated successfully!`);

      if (field === "picture") {
        setUploadedImage(URL.createObjectURL(value));
      }
      if (field === "picture") {
        updateObituary({ ["image"]: response.image });
      }
      if (field === "events") {
        updateObituary({ [field]: JSON.parse(value) });
      } else {
        updateObituary({ [field]: value });
      }
      closeModal();
    } catch (error) {
      console.error(`Failed to update ${field}:`, error);
      toast.error(`Failed to update ${field}`);
    }
  };

  const [showHoursDropdown, setShowHoursDropdown] = useState(false);
  const [showMinutesDropdown, setShowMinutesDropdown] = useState(false);

  const hours = Array.from({ length: 19 }, (_, i) => i + 1);
  const minutes = Array.from({ length: 4 }, (_, i) => i * 15);

  const [selectMusic, setSelectMusic] = useState("");

  //get current user
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const isCompany = () => {
    if (user && user.id === data.id) {
      return true;
    }
    return false;
  };
  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (!file) return;

    setUploadedPicture(file);

    const reader = new FileReader();
    reader.onload = (e) => {
      setUploadedImage(e.target.result);
    };
    reader.readAsDataURL(file);
  };
  const customButtonData = [
    {
      placeholder: "Poljubno sožalje",
      color: "yellowBorder",
    },
    {
      placeholder: "Dodaj fotografije",
      color: "yellowBorder",
    },
    {
      placeholder: "Posvetilo, Zadnji pozdrav",
      color: "yellowBackground",
    },
    {
      placeholder: "Deljenje zgodb, čarobnih trenutkov",
      color: "yellowBackground",
    },
    {
      placeholder: "Spremeni osmrtnico",
    },
    {
      placeholder: "Dodaj glavno fotografijo",
    },
    {
      placeholder: "Dodaj religiozni simbol",
    },
    {
      placeholder: "Dodaj nov dogodek",
    },
    {
      placeholder: "Dodaj verz, misel",
    },

    {
      placeholder: "Spremeni ozadje",
    },
    {
      placeholder: "Dodaj glasbo",
    },

    {
      placeholder: "Nastavi zasebnost / skrij stran",
      color: "redBackground",
    },
    {
      placeholder: "Povabi dodatnega Skrbnika",
      color: "greenBackground",
    },
  ];

  const arrCondolenceSayings = [
    {
      name: "Iskreno sožalje.",
    },
    {
      name: "RIP",
    },
    {
      name: "Počivaj v miru.",
    },
    {
      name: "Žalostni so dnevi brez tebe. V mojem srcu boš vedno.",
    },
    {
      name: "Če imaš nekoga rad, nikoli ne umre, le daleč, daleč je.",
    },
    {
      name: "Nekoč, nekje se ponovno srečamo! Tam za mavrico, kjer pravijo, da ni trpljenja in ne slovesa.",
    },
    {
      name: "Ni smrt tisto, kar nas loči in življenje ni, kar druži nas. So vezi močnejše, brez pomena zanje so razdalje, kraj in čas.",
    },
  ];
  const nameData = [
    {
      name: "Kim Primo Vanc, nečakinja",
      smallName: "KPV",
      color: "pinkBorder",
    },
    {
      name: "Elizabeta Novy, soseda",
      smallName: "EN",
      color: "purpleBorder",
    },
    {
      name: "Frenk, sodelavec",
      smallName: "F",
      color: "orangeBorder",
    },
    {
      name: "Albin Drago Završnik",
      smallName: "ADZ",
      color: "blueBorder",
    },
    {
      name: "K.F., sorodnik",
      smallName: "KF",
      color: "redBorder",
    },
    {
      name: "Maja Cvetka Koritnik, soseda",
      smallName: "MCK",
      color: "greenBorder",
    },
    {
      name: "Snežana Radojić Knežić",
      smallName: "SRK",
    },
    {
      name: "Mare z družino",
      smallName: "MZD",
      color: "whiteBorder",
    },
    {
      name: "Ilija z družino",
      smallName: "IZD",
    },
    {
      name: "K.",
      smallName: "K",
    },
    {
      name: "Janez Cveto Švarc",
      smallName: "JCŠ",
    },
  ];
  const modelOption = (index) => {
    switch (index) {
      case 0:
        set_Id("sayings_condolence");
        break;
      case 1:
        set_Id("6");
        break;
      case 2:
        set_Id("13");
        break;
      case 3:
        set_Id("13");
        break;
      case 4:
        set_Id("change_obituary");
        break;
      case 5:
        set_Id("add_photo");
        break;
      case 6:
        set_Id("religious_symbol");
        break;
      case 7:
        set_Id("add_event");
        break;
      case 8:
        set_Id("add_thought");
        break;
      case 9:
        set_Id("change_background");
        break;
      case 10:
        set_Id("add_music");
        break;
      case 11:
        set_Id("hide_page");
        break;
      case 12:
        set_Id("invite_admin");

        break;
      // default:
      //   set_Id("");
    }
  };

  const [placeholderName, setPlaceholderName] = useState("");

  const [isSelectedRelegion, setIsSelectedReligion] = useState("");

  const formatDate = (timestamp) => {
    const date = timestamp ? new Date(timestamp) : new Date();
    return date.toLocaleString("sl-SI", {
      day: "2-digit",
      month: "long",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  //code for cnadle countdown
  const [timeLeft, setTimeLeft] = useState(0);

  useEffect(() => {
    if (
      !data?.candles ||
      data.candles.length === 0 ||
      !data.candles[0]?.myLastBurntCandleTime
    )
      return;

    const targetDate =
      new Date(data?.candles[0].myLastBurntCandleTime).getTime() +
      24 * 60 * 60 * 1000;

    const updateCountdown = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;
      setTimeLeft(difference > 0 ? difference : 0);
    };

    updateCountdown(); // Initial call
    const timer = setInterval(updateCountdown, 1000);

    return () => clearInterval(timer);
  }, [data?.candles]);

  const formatTime = (milliseconds) => {
    const totalSeconds = Math.floor(milliseconds / 1000);
    const hours = String(Math.floor(totalSeconds / 3600)).padStart(2, "0");
    const minutes = String(Math.floor((totalSeconds % 3600) / 60)).padStart(
      2,
      "0"
    );
    const seconds = String(totalSeconds % 60).padStart(2, "0");
    console.log(`${hours}:${minutes}:${seconds}`);
    return `${hours}:${minutes}:${seconds}`;
  };

  //truncate file name
  const truncateFileName = (fileName, maxLength) => {
    const parts = fileName.split(".");
    if (parts.length < 2) return fileName; // If no extension, return full name

    const extension = parts.pop(); // Extract the file extension
    const name = parts.join("."); // Handle cases where name includes dots

    return name.length > maxLength
      ? `${name.substring(0, maxLength)}...${extension}`
      : fileName; // If name is short, return original
  };

  return (
    <div className="w-full bg-[#E1E6EC] py-8 px-[12px] mobile:px-[8px] rounded-2xl border-[1px] border-[#6D778E] ">
      {select_id == "religious_symbol" ? (
        <div>
          <div className="mobile:text-[20px] text-[24px] leading-[28px] text-[#1E2125] mobile:leading-[23px] mobile:font-variation-customOpt20 font-variation-customOpt24 font-[500px]">
            Dodaj religiozni simbol
          </div>
          <div className="flex flex-row flex-wrap gap-x-[10px] gap-y-[30px] mobile:gap-x-[20px] items-center mt-[32px]">
            <div
              onClick={() => {
                if (isSelectedRelegion !== "1") {
                  setIsSelectedReligion("1");
                } else {
                  setIsSelectedReligion("");
                }
              }}
              className={`p-[10px] ${
                isSelectedRelegion === "1" ? "shadow-custom-dark-to-white" : ""
              }`}
            >
              <Image
                src={"/icon_cross.png"}
                alt="cross_img"
                width={57}
                height={70}
              />
            </div>

            <div
              onClick={() => {
                if (isSelectedRelegion !== "2") {
                  setIsSelectedReligion("2");
                } else {
                  setIsSelectedReligion("");
                }
              }}
              className={`p-[10px] ${
                isSelectedRelegion === "2" ? "shadow-custom-dark-to-white" : ""
              }`}
            >
              <Image
                src={"/img_plus2.png"}
                alt="cross_img"
                width={57}
                height={70}
              />
            </div>

            <div
              onClick={() => {
                if (isSelectedRelegion !== "3") {
                  setIsSelectedReligion("3");
                } else {
                  setIsSelectedReligion("");
                }
              }}
              className={`py-[20px] px-[10px] ${
                isSelectedRelegion === "3" ? "shadow-custom-dark-to-white" : ""
              }`}
            >
              <Image
                src={"/img_moon_star.png"}
                alt="cross_img"
                width={57}
                height={70}
              />
            </div>

            <div
              onClick={() => {
                if (isSelectedRelegion !== "4") {
                  setIsSelectedReligion("4");
                } else {
                  setIsSelectedReligion("");
                }
              }}
              className={`p-[10px] ${
                isSelectedRelegion === "4" ? "shadow-custom-dark-to-white" : ""
              }`}
            >
              <Image
                src={"/img_plus3.png"}
                alt="cross_img"
                width={57}
                height={70}
              />
            </div>

            <div
              onClick={() => {
                if (isSelectedRelegion !== "5") {
                  setIsSelectedReligion("5");
                } else {
                  setIsSelectedReligion("");
                }
              }}
              className={`p-[10px] ${
                isSelectedRelegion === "5" ? "shadow-custom-dark-to-white" : ""
              }`}
            >
              <Image
                src={"/img_star.png"}
                alt="cross_img"
                width={57}
                height={70}
              />
            </div>
          </div>
          <div className="flex mobile:hidden text-[#3C3E41] mobile:leading-[16px] leading-[24px] text-[15px] font-variation-customOpt16  mt-[32px]">
            Izberi simbol. Prikazan bo v seznamu osmrtnic in na spominski
            strani.
          </div>
          <div className="hidden mobile:flex text-[#3C3E41]  mobile:leading-[16px] leading-[24px] text-[15px] font-variation-customOpt16  mt-[32px]">
            Prikazan bo v seznamu osmrtnic in na spominski strani.
          </div>
          <div className="mobile:w-[100%] w-[254px] mt-6">
            <ButtonBlueBorder
              placeholder={"Objavi"}
              onClick={() => updateMemory("symbol", isSelectedRelegion)}
            />
          </div>
        </div>
      ) : null}
      {select_id == "add_photo" ? (
        <div className="flex flex-col w-full items-center ">
          <div
            className="text-[#1E2125] text-[24px] leading-[28px] font-variation-customOpt24 font-medium mobile:text-[20px] mobile:leading-[23px]
          mobile:font-variation-customOpt20"
          >
            Dodaj glavno sliko za osmrtnico
          </div>
          <div className="mt-6 mobile:mt-4">
            {uploadedImage ? (
              <Image
                src={uploadedImage}
                alt="place photo"
                width={85}
                height={120}
              />
            ) : (
              <Image
                src={add_photo_place}
                alt="place photo"
                width={85}
                height={120}
              />
            )}
          </div>
          <div className="flex mt-6 ">
            <div
              className={
                "flex flex-col rounded-[6px] bg-[#F2F8FF66] shadow-custom-dark-to-white w-full py-7 px-[80px] mobile:px-5 items-center justify-center "
              }
            >
              <div className=" flex mobile:hidden">
                <ButtonBlue
                  placeholder={"Poišči sliko in jo prenesi"}
                  isFor="upload-button"
                />
                <input
                  id="upload-button"
                  type="file"
                  accept="image/*"
                  className="hidden"
                  onChange={handleImageUpload}
                />
              </div>
              <div className="hidden mobile:flex">
                <ButtonBlue
                  placeholder={"Izberi sliko in jo prenesi"}
                  isFor="upload-button"
                />
                <input
                  id="upload-button"
                  type="file"
                  accept="image/*"
                  className="hidden"
                  onChange={handleImageUpload}
                />
              </div>
              <div className="text-[#939393] font-normal text-xs mt-3 self-center ">
                Format: jpg, png, webp
              </div>
            </div>
          </div>
          <div className="mobile:w-[100%] w-[254px] mt-8">
            <ButtonBlueBorder
              placeholder={"Objavi"}
              onClick={() => {
                updateMemory("picture", uploadedPicture);
              }}
            />
          </div>
        </div>
      ) : null}
      {select_id == "change_obituary" ? (
        <div className="flex flex-col w-full">
          <div
            className="text-[#1E2125] mobile:text-[20px] mobile:leading-[23px] leading-[28px] font-variation-customOpt24 
          mobile:font-variation-customOpt20 text-2xl font-medium "
          >
            Dopolni osmrtnico
          </div>

          <div className="flex mt-6 text-[15px] font-normal text-[#6D778E] ">
            Sestavi bolj osebno, toplejšo osmrtnico; lahko deliš življenjsko
            pot, zanimive zgodbe, čarobne trenutke, poezijo. Omejitev je 5.000
            znakov.
          </div>
          <div className="flex mobile:hidden mt-6  ">
            <DescriptionFieldComp
              placeholder={
                "Sporočamo žalostno vest, da je nas je v 76. letu starosti zapustil naša predragi Mario Danilo Primo. Vsi njegovi. "
              }
              height={"191px"}
              value={obituaryText}
              onChange={(e) => {
                console.log(e.target.value);
                setObituaryText(e.target.value);
              }}
              maxLength={1000}
            />
          </div>
          <div className="hidden mobile:flex mt-6 h-[306px] ">
            <DescriptionFieldComp
              placeholder={
                "Sporočamo žalostno vest, da je nas je v 76. letu starosti zapustil naša predragi Mario Danilo Primo. Vsi njegovi. "
              }
              height={"306px"}
              value={obituaryText}
              maxLength={1000}
              onChange={(e) => setObituaryText(e.target.value)}
            />
          </div>

          <div className="w-[254px] mobile:w-[100%] mt-[42px]">
            <ButtonBlueBorder
              placeholder={"Objavi"}
              onClick={() => updateMemory("obituary", obituaryText)}
            />
          </div>
        </div>
      ) : null}
      {select_id == "add_event" ? (
        <div className="flex flex-col w-full ">
          <div
            className="text-[#1E2125] mobile:text-[20px] mobile:leading-[23px] leading-[28px] font-variation-customOpt24 
          mobile:font-variation-customOpt20 text-2xl font-medium "
          >
            Dodaj nov dogodek
          </div>

          <div className="mt-[42px]">
            <TextFieldComp
              placeholder={"Poimenuj dogodek"}
              value={name}
              onChange={(e) => {
                const newValue = e.target.value;
                setName(newValue);
                updateEventField("eventName", newValue);
              }}
            />
          </div>
          <div className="mt-4">
            <TextFieldComp
              placeholder={"Kje poteka"}
              value={location}
              onChange={(e) => {
                const newValue = e.target.value;
                setLocation(newValue);
                updateEventField("eventLocation", newValue);
              }}
            />
          </div>
          <div className="text-[#1E2125] text-[14px] leading-[24px] font-variation-customOpt14  font-normal mt-[32px] ">
            DATUM
          </div>

          <div className="flex flex-row mobile:gap-x-[11px] gap-x-[32px] gap-y-[8px] flex-wrap">
            <ModalDropBox
              placeholder={`Dan:`}
              onClick={() => {
                setShowMinutesDropdown(false);
                setShowHoursDropdown(false);
                togglePicker("day");
              }}
              isSelectText={startDate ? startDate.getDate() : ""}
            />

            {openPicker === "day" && (
              <div className="absolute mt-12 bg-white border rounded shadow-lg z-10">
                <DatePicker
                  selected={startDate}
                  onChange={(date) => {
                    setStartDate(date); // Update only day
                    setOpenPicker(null);
                    updateEventField("eventDate", date); // Close picker after selection
                  }}
                  dateFormat="d" // Show only day
                  showDayPicker // Show only day selection
                  inline // Display as dropdown
                  minDate={new Date()} // Prevent selecting past days
                  maxDate={
                    new Date(
                      new Date().setFullYear(new Date().getFullYear(), 11, 31)
                    )
                  } // Restrict to current year
                  onClickOutside={() => {
                    setOpenPicker(null);
                  }}
                />
              </div>
            )}

            <div className="flex relative">
              <ModalDropBox
                placeholder={`Mesec:`}
                onClick={() => {
                  setShowMinutesDropdown(false);
                  setShowHoursDropdown(false);
                  togglePicker("month");
                }}
                isSelectText={startDate ? getMonth(startDate) + 1 : ""}
              />

              {openPicker === "month" && (
                <div className="absolute mt-12 bg-white border rounded shadow-lg z-10">
                  <DatePicker
                    selected={startDate}
                    onChange={(date) => {
                      const updatedDate = new Date(
                        startDate.getFullYear(),
                        date.getMonth(),
                        startDate.getDate()
                      );
                      setStartDate(updatedDate); // Update only month
                      setOpenPicker(null);
                      updateEventField("eventDate", date); // Close picker after selection
                    }}
                    dateFormat="MM" // Show only month
                    showMonthYearPicker // Show only month selection
                    inline
                    minDate={new Date()} // Prevent selecting past months of the current year
                    maxDate={
                      new Date(
                        new Date().setFullYear(new Date().getFullYear(), 11, 31)
                      )
                    } // Restrict to current year
                    onClickOutside={() => {
                      setOpenPicker(null);
                    }}
                  />
                </div>
              )}
            </div>

            <ModalDropBox
              placeholder={`Leto:`}
              onClick={() => {
                setShowMinutesDropdown(false);
                setShowHoursDropdown(false);
                togglePicker("year");
              }}
              isSelectText={startDate ? getYear(startDate) : ""}
            />

            {openPicker === "year" && (
              <div className="absolute mt-12 left-[56%] bg-white border rounded shadow-lg z-10">
                <DatePicker
                  selected={startDate}
                  onChange={(date) => {
                    const updatedDate = new Date(
                      date.getFullYear(),
                      startDate.getMonth(),
                      startDate.getDate()
                    );
                    setStartDate(updatedDate); // Update only year
                    setOpenPicker(null);
                    updateEventField("eventDate", date); // Close picker after selection
                  }}
                  dateFormat="yyyy" // Show only year
                  showYearPicker // Show only year selection
                  inline
                  minDate={
                    new Date(
                      new Date().setFullYear(new Date().getFullYear(), 0, 1)
                    )
                  } // Restrict to current year (start of the year)
                  maxDate={
                    new Date(
                      new Date().setFullYear(new Date().getFullYear(), 11, 31)
                    )
                  } // Restrict to current year (end of the year)
                  onClickOutside={() => {
                    setOpenPicker(null);
                  }}
                />
              </div>
            )}
          </div>

          <div className="text-[#1E2125] text-[14px] leading-[24px] font-variation-customOpt14  font-normal mt-[32px] ">
            ČAS
          </div>

          <div className="flex flex-row mobile:gap-x-[11px] gap-x-[32px] gap-y-[8px] flex-wrap">
            <ModalDropBox
              placeholder={"Ura"}
              onClick={() => {
                setOpenPicker(false);
                setShowHoursDropdown(!showHoursDropdown);
                setShowMinutesDropdown(false); // Hide minutes dropdown if open
              }}
              isSelectText={
                selectedHour
                  ? `${selectedHour.toString().padStart(2, "0")}`
                  : "Ura:"
              }
            />

            {showHoursDropdown && (
              <div className="bg-white border overflow-y-scroll mt-12 h-[210px] absolute border-gray-300 rounded-md m-2 w-32 z-10">
                <div className="flex p-2 flex-col">
                  {hours
                    .filter((hour) => hour >= 7 && hour <= 19)
                    .map((hour) => (
                      <div
                        key={hour}
                        className="cursor-pointer hover:bg-gray-100 px-2 py-1 text-black"
                        onClick={() => {
                          setShowHoursDropdown(false);
                          setSelectedHour(hour);
                          updateEventField("eventHour", hour);
                        }}
                      >
                        {hour.toString().padStart(2, "0")}
                      </div>
                    ))}
                </div>
              </div>
            )}

            <div className="flex relative ">
              <ModalDropBox
                placeholder={"Min"}
                onClick={() => {
                  setOpenPicker(false);
                  setShowMinutesDropdown(!showMinutesDropdown);
                  setShowHoursDropdown(false); // Hide hours dropdown if open
                }}
                isSelectText={
                  selectedMinute !== null && selectedMinute !== undefined
                    ? `${selectedMinute}`
                    : "Min:"
                }
              />

              {showMinutesDropdown && (
                <div className="bg-white border absolute z-10 mt-12 overflow-y-scroll h-[150px] text-black border-gray-300 rounded-md p-2 w-32">
                  {minutes.map((minute) => (
                    <div
                      key={minute}
                      className="cursor-pointer hover:bg-gray-100 px-2 py-1"
                      onClick={() => {
                        console.log(`Selected minute: ${minute}`);
                        setShowMinutesDropdown(false);
                        setSelectedMinute(minute);
                        updateEventField("eventMinute", minute);
                      }}
                    >
                      {minute}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          <div className="w-[254px] mt-[42px]">
            <ButtonBlueBorder
              placeholder={"Objavi"}
              onClick={() => updateMemory("events", newEvent)}
            />
          </div>
        </div>
      ) : null}
      {select_id == "add_thought" ? (
        <div className="flex flex-col w-full">
          <div
            className="text-[#1E2125] text-[24px] leading-[28px] font-variation-customOpt24 font-medium mobile:text-[20px] mobile:leading-[23px]
          mobile:font-variation-customOpt20"
          >
            Dodaj lepo misel, verz
          </div>
          <div className="mt-8 text-[15px] font-normal text-[#3C3E41] ">
            Prikazano bo pod sliko
          </div>
          <div className=" mt-8 ">
            <DescriptionFieldComp
              placeholder={"Omejitev je 120 znakov."}
              height={"80px"}
              value={verse}
              onChange={(e) => {
                console.log(e.target.value);
                setVerse(e.target.value);
              }}
              maxLength={120}
            />
          </div>
          <div className="mobile:w-[100%] w-[254px] mt-8">
            <ButtonBlueBorder
              placeholder={"Objavi"}
              onClick={() => updateMemory("verse", verse)}
            />
          </div>
        </div>
      ) : null}

      {select_id == "add_music" ? (
        <div className="flex flex-col w-full  ">
          <div
            className="text-[#1E2125] text-[24px] leading-[28px] font-variation-customOpt24 font-medium mobile:text-[20px] mobile:leading-[23px]
          mobile:font-variation-customOpt20"
          >
            Dodaj glasbo
          </div>
          <div className="flex flex-col mt-9 ">
            {musicList?.map((item, index) => (
              <CommonView
                text={item}
                key={index}
                onPress={() => {
                  setSelectMusic(item);
                }}
                selectMusic={selectMusic}
              />
            ))}
          </div>
          <div className="mobile:w-[100%] w-[254px] mt-12">
            <ButtonBlueBorder placeholder={"Potrdi"} />
          </div>
        </div>
      ) : null}
      {select_id == "change_background" ? (
        <div className="flex flex-col w-full">
          <div
            className="text-[#1E2125] text-[24px] leading-[28px] font-variation-customOpt24 font-medium mobile:text-[20px] mobile:leading-[28px]
              mobile:font-variation-customOpt20"
          >
            Spremeni ozadje
          </div>

          <div className="flex flex-row flex-wrap w-full items-center mt-8 gap-x-[30px] gap-y-[25px]">
            <div className="bg-[#ECF0F3] w-[60px] h-[60px] rounded-full"></div>

            <div className="bg-gradient-to-b from-[#F8ECDA] to-[#B2E6E3] w-[60px] h-[60px] rounded-full"></div>

            <div className="bg-gradient-to-b from-[#FFDCB8] to-[#C7FFD0] w-[60px] h-[60px] rounded-full"></div>

            <div className="bg-gradient-to-b from-[#F8ECDA] to-[#B2E6E3] w-[60px] h-[60px] rounded-full">
              <Image
                src={ico_gradient}
                width={60}
                height={60}
                alt="Gradient icon"
              />
            </div>
            <div className="bg-gradient-to-b from-[#F8ECDA] to-[#B2E6E3] w-[60px] h-[60px] rounded-full">
              <Image
                src={ico_gradient_last}
                width={60}
                height={60}
                alt="Gradient icon"
              />
            </div>
          </div>

          <div
            className="text-[#414141] text-[16px] mt-8 leading-[24px] font-variation-customOpt16 font-normal mobile:text-[16px] 
               whitespace-nowrap mobile:whitespace-normal"
          >
            Izberi barvno kombinacijo (prvi izbor je povrnitev v prvotno stanje)
          </div>

          <div className="mobile:w-[100%] w-[254px] mt-6">
            <ButtonBlueBorder placeholder={"Potrdi"} />
          </div>
        </div>
      ) : null}
      {select_id == "hide_page" ? (
        <div className="flex flex-col w-full  ">
          <div
            className="text-[#1E2125] text-[24px] leading-[28px] font-variation-customOpt24 font-medium mobile:text-[18px] mobile:leading-[23px]
          mobile:font-variation-customOpt20"
          >
            Omejitev dostopa do spominske strani
          </div>
          <div className="mt-3 text-[#414141] text-base mobile:text-sm font-normal font-variation-customOpt16 mobile:font-variation-customOpt14 ">
            Stran lahko umakneš za javnost. Dostopna bo samo tistim, ki jim boš
            sam poslal geslo.
          </div>
          <div className="mt-8 text-[#414141] text-base mobile:text-sm font-normal font-variation-customOpt16 mobile:font-variation-customOpt14 ">
            IZBERI GESLO
          </div>
          <div className="mt-3 flex ">
            <TextFieldComp placeholder={"Vsaj 6 znakov"} />
          </div>
          <div className="mt-8 text-[#414141] text-base mobile:text-sm font-normal font-variation-customOpt16 mobile:font-variation-customOpt14 ">
            POTRDI GESLO
          </div>
          <div className="mt-3 flex ">
            <TextFieldComp placeholder={"Ponovi geslo"} />
          </div>
          <div className="relative flex justify-center mt-3 h-[50px] items-center">
            <div className="bg-[#989898] h-[1px] w-full" />

            <div className="absolute w-[60px] mobile:h-[35px] mobile:w-[54px] h-[50px] rounded-[4px] shadow-custom-dark-bottom">
              <div
                className="h-[50px] mobile:h-[35px] bg-gradient-to-b from-[#0D94E8] to-[#0A85C2] border-[1px] border-[#FFFFFF40] 
        flex justify-center items-center rounded-[4px]"
              >
                <div
                  className="w-full mx-[2px] h-full my-[2px] text-base  text-[#FFFFFF]
            font-variation-customOpt16 font-normal leading-[24px] flex justify-center items-center "
                >
                  ALI
                </div>
              </div>
            </div>
          </div>
          <div className="mt-3">
            <CommonView
              text={"Stran naj bo dostopna vsem"}
              index={6}
              onPress={() => {
                setSelectMusic("Stran naj bo dostopna vsem");
              }}
              selectMusic={selectMusic}
            />
          </div>

          <div className="mt-4">
            <ButtonGreen
              placeholder={"Potrdi nastavitev"}
              bg={"bg-[#F95948]"}
            />
          </div>
          <div className="flex self-center mt-6 text-[#6D778E] text-sm font-normal">
            Na e-naslov ti bomo poslali povezavo za dokončno potrditev.
          </div>
        </div>
      ) : null}
      {select_id == "invite_admin" ? (
        <div className="flex flex-col w-full  ">
          <div
            className="text-[#1E2125] text-[24px] leading-[28px] font-variation-customOpt24 font-medium mobile:text-[20px] mobile:leading-[23px]
          mobile:font-variation-customOpt20"
          >
            Povabi še drugega Skrbnika
          </div>
          <div className="mt-8 flex ">
            <TextFieldComp
              value={keeperEmail}
              onChange={(e) => {
                setKeeperEmail(e.target.value);
              }}
              placeholder={"Njegov / njen e-naslov"}
            />
          </div>
          <div className=" mt-4 ">
            <DescriptionFieldComp
              placeholder={"Lahko mu napišeš nekaj besed ali pustiš prazno"}
              height={"101px"}
              value={keeperMessage}
              onChange={(e) => {
                setKeeperMessage(e.target.value);
              }}
            />
          </div>
          <div className="mt-4">
            <button
              onClick={handleKeeperAssignment}
              className="w-[100%] rounded-[10px] shadow-custom-dark-bottom"
            >
              <div
                className={`h-[60px] w-full bg-[#09C1A3] flex justify-center items-center rounded-[8px]`}
              >
                <div
                  className=" text-[20px]  text-[#FFFFFF]
            font-variation-customOpt20 font-semibold leading-[24px] "
                >
                  Pošlji povabilo
                </div>
              </div>
            </button>
          </div>
          <div className="mt-8 text-[#414141] text-base font-normal">
            Prejel/a bo e-pošto za potrditev.
          </div>
        </div>
      ) : null}
      {select_id == "error_report" ? (
        <div className="flex flex-col w-full">
          <div className="text-[#1E2125] mobile:text-xl text-2xl font-medium ">
            Prijava napak
          </div>
          <div className="mt-6">
            <TextFieldComp
              value={`${data?.name} ${data?.sirName}`}
              readOnly
              background="none"
              textColor="#3C3E41"
            />
          </div>
          <div className="flex mt-6 w-[100%] mobile:w-[100%] ">
            <DescriptionFieldComp
              placeholder={"Tvoje ime"}
              height={"48px"}
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
              maxLength={100}
            />
          </div>
          <div className="flex mobile:hidden mt-6 h-[140px] ">
            <DescriptionFieldComp
              placeholder={"Opis napake"}
              height={"140px"}
              value={message}
              onChange={(e) => {
                setMessage(e.target.value);
              }}
              maxLength={1000}
            />
          </div>
          <div className="hidden mobile:flex mt-6 h-[153px]">
            <DescriptionFieldComp
              placeholder={"Opis napake"}
              height={"153px"}
              value={message}
              onChange={(e) => {
                setMessage(e.target.value);
              }}
            />
          </div>
          <div className="mobile:w-[100%] desktop:w-[254px] tablet:w-[254px] mt-6">
            <ButtonBlueBorder placeholder={"Pošlji"} onClick={addReport} />
          </div>
        </div>
      ) : null}
      {select_id == "sayings_condolence" ? (
        <div className="text-[15px] leading-[24px] font-variation-customOpt14 text-[#3C3E41]">
          <div
            className="text-[24px] leading-[28px] font-variation-customOpt24 text-[#1E2125] 
         mobile:text-[20px] mobile:leading-[23px] mobile:font-variation-customOpt20 font-medium"
          >
            Izreki sožalja
          </div>
          <div className="text-[16px] mt-[10px] leading-[20px] font-variation-customOpt16 text-[#3C3E41]">
            Izberi eno od možnosti.
          </div>
          <div className="mt-[32px]">
            {arrCondolenceSayings.map((item, index) => {
              return (
                <div key={index}>
                  {index !== 0 && <div className="h-[10px]" />}
                  <SayingsOfCondolenceField
                    name={item.name}
                    key={index}
                    onPress={async () => {
                      await setPlaceholderName(item?.name);
                      set_Id("selected_condolences");

                      //  setModal(true);
                    }}
                  />
                </div>
              );
            })}
          </div>

          <div className="text-[16px] mobile:text-[14px] leading-[20px] mt-[32px] mobile:font-variation-customOpt14 font-variation-customOpt16 text-[#3C3E41]">
            Če ima spominska stran Skrbnika, boš lahko na naslednji strani
            napisal/a poljubno sožalje.
          </div>
        </div>
      ) : null}
      {select_id == "selected_condolences" ? (
        <div>
          <div className="text-[20px] leading-[23px] font-variation-customOpt20 text-[#1E2125]">
            Izbrano sožalje
          </div>

          <div className="mt-[22px]">
            <TextFieldComp
              value={placeholderName}
              readOnly
              background="none"
              textColor="#3C3E41"
            />
          </div>

          <div className="text-[14px] leading-[20px] font-variation-customOpt14 text-[#1E2125] mt-[32px]">
            Samo, če ima spominska stran Skrbnika:
          </div>

          <div className="h-[134px] w-full mt-[12px]">
            <DescriptionFieldComp
              placeholder={
                "Napiši poljubno sožalje (do 250 znakov) \n( bo povozilo prejšnjo izbiro ). \nČe pustiš prazno, bo objavljeno izbrano sožalje zgoraj. "
              }
              height={"134px"}
              readOnly={!memoryHasKeeper()}
              value={message}
              onChange={(e) => {
                console.log(e.target.value);
                setMessage(e.target.value);
              }}
              maxLength={250}
            />
          </div>

          <div className="text-[14px] mt-[32px] leading-[24px] font-variation-customOpt24 text-[#414141]">
            Dodaj svoje ime in povezavo. npr vnuk, stric, sodelavec, sošolec,
            itd
          </div>

          <div className="mt-[12px]">
            <TextFieldComp
              placeholder={"Napiši svoje ime ali vzdevek"}
              value={name}
              onChange={(e) => {
                console.log(e.target.value);
                setName(e.target.value);
              }}
              maxLength={25}
            />
          </div>

          <div className="mt-[12px]">
            <TextFieldComp
              placeholder={"Dodaj še povezavo (ni obvezno)"}
              value={relation}
              onChange={(e) => {
                console.log(e.target.value);
                setRelation(e.target.value);
              }}
              maxLength={50}
            />
          </div>

          <div className="mt-[32px] w-[254px]">
            <ButtonBlueBorder placeholder={"Objavi"} onClick={addCondolence} />
          </div>

          <div className="mt-[22px] flex flex-col text-[13px] leading-[20px] font-variation-customOpt12 text-[#6D778E] mobile:hidden">
            <div>
              Če si izbral eno od 8 predloženih možnosti, bo tvoje sporočilo
              objavljeno takoj.
            </div>

            <div>
              Če si napisal poljubno besedilo, ga mora pred objavo potrditi
              Skrbnik
            </div>
          </div>
        </div>
      ) : null}

      {select_id == "2" ? (
        <div>
          <div
            className="text-[24px] text-[#1E2125] leading-[28px] font-variation-customOpt24
      mobile:text-[20px] mobile:leading-[23px] mobile:font-variation-customOpt20"
          >
            {strings.PozabljenoGeslo}
          </div>

          <div
            className="text-[#3C3E41] mobile:font-[400px] text-[14px] leading-[20px] desktop:font-variation-customOpt14 
      tablet:font-variation-customOpt14 mt-[32px]"
          >
            {strings.VnesiNaslov}
          </div>

          <div className="mt-[10px]">
            <TextFieldComp placeholder={"Email naslov"} />
          </div>

          <div className="mt-[32px]">
            {/* 23 October 2024 */}
            <ButtonBlue placeholder={"Pošlji"} isFor="Moj Račun" />
          </div>

          <div className="mt-[32px] mobile:text-[13px] text-[#6D778E] mobile:leading-[20px] mobile:font-[400px]">
            Če imaš težave pri obnovitvi računa, lahko pošlješ sporočilo na{" "}
            <span className="text-[#0A85C2]">Pomoč uporabnikom.</span> Običajno
            odgovorimo še isti dan.
          </div>
        </div>
      ) : null}
      {select_id == "3" ? (
        <div>
          <video
            width={300}
            height={153}
            className="mx-auto hidden mobile:block"
            autoPlay
            muted
            playsInline
          >
            <source
              src={`${API_BASE_URL}/assets/candleBurn.mp4`}
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>

          <video
            width={300}
            height={153}
            className="mx-auto mobile:hidden block"
            autoPlay
            muted
            playsInline
          >
            <source
              src={`${API_BASE_URL}/assets/candleBurn.mp4`}
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>

          <div
            className="text-[#1E2125] flex justify-center mt-[16px] mobile:text-[20px] text-[24px] mobile:leading-[23px]
           leading-[28px] mobile:font-variation-customOpt20 font-variation-customOpt24
           font-medium"
          >
            {strings.SvečkaJeZagorela}
          </div>

          <div className="text-[16px] mt-[12px] text-center leading-[24px] text-[#1E2125] font-variation-customOpt16">
            To so dnevne svečke. Gorijo en dan.
          </div>
          <div className="text-[16px] text-center leading-[24px] text-[#1E2125] font-variation-customOpt16">
            Novo lahko prižgeš čez:
          </div>

          <div className="text-[16px] mt-2 leading-[19px] text-[#1E2125] text-center flex justify-center font-variation-customOpt16">
            {formatTime(timeLeft)}
          </div>
          <div className="flex mobile:w-[100%] w-[254px] mt-8 justify-center mx-auto">
            <ButtonBlueBorder
              placeholder={"Zapri"}
              onClick={() => closeModal()}
            />
          </div>

          <div className="mt-[45px] flex flex-row justify-center mobile:hidden">
            <div className="text-[14px] text-[#1E2125] leading-[16px] font-variation-customOpt14 mr-[10px]">
              Zadnja prižgana svečka:
            </div>

            <div className="text-[14px] text-[#1E2125] leading-[16px] font-variation-customOpt14 font-medium">
              {formatDate(data?.candles?.[0]?.lastBurnedCandleTime)}
            </div>
          </div>
        </div>
      ) : null}
      {select_id == "4" ? (
        <div className="flex flex-col w-full">
          <div className="text-[#1E2125] mobile:text-xl text-2xl font-medium ">
            Obvesti sorodnike, prijatelje, znance
          </div>
          <div className="hidden mobile:flex mt-6">
            <TextFieldComp placeholder={"Njihov e-mail naslov"} />
          </div>
          <div className=" flex mobile:hidden mt-6">
            <TextFieldComp placeholder={"Dodaj naslov prijatelja"} />
          </div>
          <div className="flex mobile:hidden mt-2">
            <TextFieldComp
              placeholder={"Dodaj e-naslov še drugega prijatelja, znanca"}
            />
          </div>
          <div className="flex w-full mt-2 tablet:items-center desktop:items-center ">
            {/* //icon_plus_round */}
            <Image
              src={"/icon_plus_round.png"}
              alt="plus icon"
              width={57}
              height={70}
              className="w-6 h-6"
            />
            <div className="flex mobile:flex-col">
              <div className="text-[#1E2125] mobile:text-sm text-base font-medium ml-3 ">
                Dodaj še en naslov
              </div>
              <div className="text-[#ACAAAA] mobile:text-xs text-sm font-medium ml-3 ">
                (lahko pošlješ večim hkrati)
              </div>
            </div>
          </div>
          <div className="flex mobile:hidden mt-6">
            <DescriptionFieldComp
              placeholder={"Tvoje sporočilo"}
              height={"80px"}
            />
          </div>
          <div className="hidden mobile:flex h-[112px] mt-6">
            <DescriptionFieldComp
              placeholder={"Tvoje sporočilo"}
              height={"112px"}
            />
          </div>
          <div className=" flex mt-2 text-[#6D778E] text-xs font-normal">
            Op. ne pozabi dopisati svoje ime, morda tudi priimek, da bodo
            vedeli, kdo pošilja
          </div>
          <div className=" flex mobile:hidden mt-6 text-[#6D778E] text-xs font-normal">
            K sporočilu bo spodaj dodana še povezava do te strani:
          </div>
          <div className="hidden mobile:flex mt-8 text-[#6D778E] text-xs font-normal">
            Da bodo lažje našli stran in informacije, bo k sporočilu spodaj
            dodano še tole:
          </div>
          <div
            className={
              "flex  flex-col mobile:flex-row rounded-[6px] bg-[#E8F0F6] shadow-custom-dark-to-white w-full px-6 py-3 mt-3 "
            }
          >
            <div className="flex mobile:hidden text-base font-normal text-[#6D778E] ">
              Osmrtnica in več informacij na strani:
            </div>
            <div className="flex mobile:hidden text-base font-normal text-[#0A85C2] mt-1 underline ">
              {`${
                typeof window !== "undefined" ? window.location.origin : ""
              }/m/${data?.slugKey}`}
            </div>
            <div className="hidden mobile:flex text-sm font-medium text-[#6D778E] ">
              Osmrtnica in več informacij na strani:
            </div>
            <div className="hidden mobile:flex text-sm font-normal text-[#0A85C2] ml-1 underline ">
              tukaj
            </div>
          </div>
          <div className="mobile:w-[100%] w-[254px] mt-8">
            <ButtonBlueBorder placeholder={"Pošlji"} />
          </div>
        </div>
      ) : null}

      {select_id == "6" ? (
        <div className="flex flex-col w-full">
          <div className="text-[#1E2125] mobile:text-xl text-2xl font-medium ">
            Dodaj fotografije
          </div>
          <div className="flex mt-6 text-[#3D3D3D] text-base ">
            Vsak lahko doda slike, za objavo pa jih mora potrditi Skrbnik
          </div>
          {/* <div className="mt-6">
            <TextFieldComp placeholder={"Napiši naslov"} />
          </div> */}
          <div className="flex mt-6 ">
            <div
              className={
                "flex flex-col rounded-[6px] bg-[#F2F8FF66] shadow-custom-dark-to-white w-full py-7 px-[80px] mobile:px-5 items-center justify-center "
              }
            >
              <ButtonBlue
                placeholder={
                  uploadedImage
                    ? truncateFileName(uploadedPicture.name, 10)
                    : "Izberi sliko in jo prenesi"
                }
                isFor="upload-button"
              />
              <input
                id="upload-button"
                type="file"
                accept="image/*"
                className="hidden"
                onChange={handleImageUpload}
              />
              <div className="text-[#939393] font-normal text-xs mt-3 self-center ">
                Format: jpg, png, webp
              </div>
            </div>
          </div>
          {false && (
            <div className="flex mt-4 items-center">
              <Image src={plus_icon} alt="imgCall" className="w-4 h-4 " />
              <div className=" text-[#1E2125] text-sm ml-2">
                {"Dodaj še eno sliko".toUpperCase()}
              </div>
            </div>
          )}

          <div className="mobile:w-[100%] w-[254px] mt-6">
            <ButtonBlueBorder placeholder={"Objavi"} onClick={addPhoto} />
          </div>
        </div>
      ) : null}

      {select_id == "13" ? (
        <div className="flex flex-col w-full">
          <div
            className="text-[#1E2125] text-[24px] leading-[28px] font-variation-customOpt24 font-medium mobile:text-[20px] mobile:leading-[23px]
          mobile:font-variation-customOpt20"
          >
            Dodaj posvetilo
          </div>
          <div className="mt-[24px] flex mobile:hidden">
            <TextFieldComp
              placeholder={
                "Napiši naslov, npr  Posvetilo, Zadnji pozdrav, Zahvala, Nepozabni trenutki, Dragi..."
              }
              value={title}
              onChange={(e) => {
                setTitle(e.target.value);
              }}
              maxLength={25}
            />
          </div>
          <div className=" hidden mobile:flex mt-[24px]">
            <TextFieldComp
              placeholder={"Napiši naslov"}
              value={title}
              onChange={(e) => {
                setTitle(e.target.value);
              }}
              maxLength={25}
            />
          </div>
          <div className="hidden mobile:flex mt-6 text-[14px] font-normal text-[#6D778E] ">
            npr Posvetilo, Zadnji pozdrav, Zahvala, Nepozabni trenutki, Dragi...
          </div>
          <div className="flex mobile:hidden h-[170px] mt-[24px]">
            <DescriptionFieldComp
              placeholder={"Dodaj tekst. Omejitev je 10.000 znakov."}
              height={"170px"}
              value={message}
              onChange={(e) => {
                setMessage(e.target.value);
              }}
              maxLength={5000}
            />
          </div>
          <div className="mt-[24px] flex mobile:hidden">
            <TextFieldComp
              placeholder={"Napiši svoje ime ali vzdevek"}
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
              maxLength={100}
            />
          </div>
          <div className="mobile:w-[100%] w-[254px] mt-[24px]">
            <div className="hidden mobile:flex mt-[24px] h-[423px]">
              <DescriptionFieldComp
                placeholder={`Dodaj tekst.${"\n"}Omejitev je 10.000 znakov.`}
                height={"423px"}
                value={message}
                onChange={(e) => {
                  setMessage(e.target.value);
                }}
                maxLength={10000}
              />
            </div>
            <div className=" hidden mobile:flex mt-[24px]">
              <TextFieldComp
                placeholder={"Napiši svoje ime ali vzdevek"}
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                }}
                maxLength={100}
              />
            </div>

            <div className="mobile:w-[100%] w-[254px] mt-[24px]">
              <ButtonBlueBorder
                placeholder={"Objavi"}
                onClick={addDedication}
              />
            </div>
          </div>
        </div>
      ) : null}
      {select_id == "14" ? (
        <div className="flex flex-col w-full ">
          <div
            className="text-[#1E2125] text-[32px]  leading-[28px] font-semibold font-variation-customOpt24 text-center  mobile:text-[28px] mobile:leading-[28px]
          mobile:font-variation-customOpt20"
          >
            Še dodatne možnosti
          </div>

          <div
            className="text-[#1E2125] text-[24px] font-medium mt-2 leading-[28px] font-variation-customOpt32 text-center  mobile:text-[16px] mobile:leading-[23px]
          mobile:font-variation-customOpt24"
          >
            ko ima stran svojega Skrbnika
          </div>

          <div
            className="text-[#1E2125] text-[20px] mt-10 font-normal leading-[28px] font-variation-customOpt20 text-center  mobile:text-[18px] 
          mobile:font-variation-customOpt16"
          >
            Možnosti za VSE
          </div>
          <div className=" w-full  flex-col">
            {customButtonData?.map((item, index) => {
              return (
                <React.Fragment key={index}>
                  {index === 4 && (
                    <React.Fragment>
                      <div
                        className="text-[#1E2125] text-[16px]  mb-14 leading-[28px] font-medium mobile:font-normal font-variation-customOpt20 text-center  mobile:text-[14px] 
          mobile:font-variation-customOpt16"
                      >
                        Objavo na strani mora potrditi Skrbnik.
                      </div>
                      <div
                        className="text-[#1E2125] text-[20px] font-normal  leading-[28px] font-variation-customOpt20 text-center  mobile:text-[18px] 
          mobile:font-variation-customOpt16"
                      >
                        Možnosti za SKRBNIKA
                      </div>
                    </React.Fragment>
                  )}
                  <ButtonBlueCustom
                    placeholder={item.placeholder}
                    color={item?.color}
                    onPress={() => modelOption(index)}
                  />
                </React.Fragment>
              );
            })}
          </div>

          <div
            className="text-[#1E2125] text-[16px] font-medium mt-2 leading-[22px] font-variation-customOpt16 text-center mobile:font-normal  mobile:text-[14px] 
          mobile:font-variation-customOpt13"
          >
            Kmalu še več možnosti za Skrbnika
          </div>
        </div>
      ) : null}

      {select_id == "16" ? (
        <div>
          <div className="flex flex-col gap-y-[12px] text-[16px] font-light leading-[18px] text-[#000000] font-variation-customOpt16 italic">
            <div>Name of Florist</div>
            <div>Tel. 012-994-285</div>

            <div>Their website</div>
          </div>

          <div
            className="mobile:text-[20px] text-[24px] mt-[24px] mobile:leading-[23px] leading-[28px] font-variation-customOpt24
 mobile:font-variation-customOpt20 text-[#1E2125] font-medium"
          >
            Kontaktiraj cvetličarno
          </div>

          <div
            className="mobile:text-[14px] text-[16px] leading-[24px] mt-[24px] mobile:font-variation-customOpt14
 font-variation-customOpt16 text-[#414141]"
          >
            Običajno odgovorijo v nekaj urah. Lahko pa jih tudi pokličeš po
            telefonu.
          </div>

          <div className="mt-[24px]">
            <TextFieldComp placeholder={"Tvoje ime"} />
          </div>

          <div className="mt-[24px]">
            <TextFieldComp placeholder={"Tvoj E-naslov"} />
          </div>

          <div className="mt-[24px] h-[207px] hidden mobile:block">
            <DescriptionFieldComp
              placeholder={"Napiši jim sporočilo"}
              height={"207px"}
            />
          </div>

          <div className="mt-[24px] h-[116px] block mobile:hidden">
            <DescriptionFieldComp
              placeholder={"Napiši jim sporočilo"}
              height={"116px"}
            />
          </div>

          <div className="mobile:w-[100%] w-[254px] mt-6">
            <ButtonBlueBorder placeholder={"Pošlji"} />
          </div>
        </div>
      ) : null}
      {select_id == "17" ? (
        <div>
          <div
            className="text-[24px] leading-[28px] font-variation-customOpt24 text-[#1E2125] mobile:text-[20px] mobile:leading-[23px]
  mobile:font-variation-customOpt20 font-medium"
          >
            Vpis v Žalno knjigo
          </div>

          <div className="mt-[22px]">
            <TextFieldCompSixtyHeight
              placeholder={"Dodaj svoje ime *"}
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
          </div>

          <div className="text-[13px] leading-[24px] mt-[6px] whitespace-nowrap overflow-hidden text-ellipsis font-variation-customOpt12 text-[#6D778E]">
            {"(lahko tudi priimek, vzdevek, tvoja Mari, družina Majcen...)"}
          </div>

          <div className="mt-[6px]">
            <TextFieldCompSixtyHeight
              placeholder={"Dodaj povezavo s pokojnim/no "}
              value={relation}
              onChange={(e) => {
                setRelation(e.target.value);
              }}
            />
          </div>

          <div className="text-[13px] leading-[24px] mt-[6px] whitespace-nowrap text-ellipsis overflow-hidden font-variation-customOpt12 text-[#6D778E]">
            {"(hči, stric, sosed, sošolec, frend... lahko pustiš tudi prazno)"}
          </div>

          <div className="mt-[22px]">
            <ButtonBlueBorder placeholder={"Objavi"} onClick={addSorrowBook} />
          </div>
        </div>
      ) : null}

      {select_id == "20" ? (
        <div className="flex flex-col w-full">
          <div className="rounded-md self-center mb-[10px]">
            <Image
              src={
                data.image
                  ? `${API_BASE_URL}/${data.image}`
                  : "/add_photo_place.png"
              }
              alt=" photo"
              width={85}
              height={85}
              className="rounded-md"
            />
          </div>

          <div
            className="text-[#1E2125] mobile:text-nowrap text-[36px] mt-[5px] leading-[42px]  mobile:font-variation-customOpt24 text-center font-light mobile:text-[24px] 
                "
          >
            {data?.name} {data?.sirName}
          </div>

          <div
            className="text-[#414B5A] text-[24px]  mobile:mt-1 leading-[38px] font-variation-customOpt36 mobile:font-variation-customOpt16 text-center font-semibold mobile:text-[24px] 
                "
          >
            Žalna knjiga
          </div>

          <div className="flex w-full mt-8 flex-col px-[20px] mobile:px-0">
            {data.SorrowBooks.map((item, index) => (
              <CommonStyle item={item} index={index} key={index} />
            ))}
          </div>

          <div className=" w-[328px] mobile:w-full rounded-[10px] self-center mt-14 shadow-custom-dark-bottom">
            <div
              onClick={() => {
                set_Id("17");
              }}
              className="h-[60px] w-full bg-gradient-to-b from-[#D8A800] to-[#F48F5370] border-[1.5px] border-[#D8A800] 
        flex justify-center items-center rounded-[10px]"
            >
              <div
                className="w-full m-[2px] h-full text-[20px]  text-[#414B5A]
            font-variation-customOpt20 font-medium leading-[24px] flex justify-center items-center"
              >
                {"Vpis v Žalno knjigo"}
              </div>
            </div>
          </div>

          <div className="w-[328px] mobile:w-full rounded-[10px] self-center mt-8 shadow-custom-dark-bottom">
            <div
              className="h-[60px] bg-gradient-to-b from-[#0000000] to-[#1860A3] border-[1px] border-[#D8A800] 
                flex justify-center items-center rounded-[10px]"
            >
              <div
                onClick={() => {
                  set_Id("sayings_condolence");
                  // set_Id("18");
                }}
                className="w-full mx-[2px] h-full my-[2px] text-[20px]  text-[#D8A800]
                    font-variation-customOpt20 font-normal leading-[24px] flex justify-center items-center cursor-pointer"
              >
                {"Napiši sožalje"}
              </div>
            </div>
          </div>

          <div className="flex mx-[20px] mobile:mx-0 mt-8 flex-col">
            <p className="w-full text-center text-[24px] mobile:text-[20px] text-[#414B5A] font-greatVibes font-normal">
              {data?.verse
                ? data?.verse
                : "The song is ended but the melody lingers on."}
            </p>
            {/* {data?.verse && (
              <p className="w-full text-end text-[20px] text-[#414B5A] font-greatVibes font-normal">
                Irving Berlin
              </p>
            )} */}
          </div>

          <div className="rounded-[6px] mt-8 bg-[#F2F8FF66] shadow-custom-dark-to-white w-full py-[17px]">
            <div className="flex mobile:hidden text-[16px] text-[#1E2125] justify-center items-center font-normal  text-center">
              K vpisu v Žalno knjigo lahko povabiš tudi druge
            </div>

            <div className="hidden mobile:block text-[14px] self-center text-[#1E2125] font-normal  text-center">
              K vpisu v Žalno knjigo povabi tudi druge
            </div>

            <div className="flex px-[73px] mobile:px-2 w-full gap-2 mobile:gap-1 mt-[27.5px]">
              <div className=" w-[160px] mobile:w-[145px] rounded-[10px] shadow-custom-dark-bottom">
                <div
                  className="h-[50px] bg-gradient-to-b from-[#0D94E8] to-[#0A85C2] border-[1px] border-[#FFFFFF40] 
        flex justify-center items-center rounded-[10px]"
                >
                  <div
                    onClick={() => {
                      set_Id("4");
                      setModal(true);
                    }}
                    className="w-full mx-[2px] h-full my-[2px] text-[16px]  text-[#FFFFFF]
            font-variation-customOpt16 font-normal leading-[24px] mobile:text-[14px] flex justify-center items-center cursor-pointer"
                  >
                    {"Pošlji sporočilo"}
                  </div>
                </div>
              </div>

              <div className="w-[160px] mobile:w-[145px] rounded-[10px] shadow-custom-dark-bottom">
                <div
                  className="h-[50px] bg-gradient-to-b from-[#4E71BA] to-[#3B5998] border-[1px] border-[#FFFFFF40] 
        flex justify-center items-center rounded-[10px]"
                >
                  <div
                    className="w-full mx-[2px] h-full my-[2px] text-[16px]  text-[#FFFFFF]
            font-variation-customOpt16 font-normal leading-[24px] mobile:text-[14px] flex justify-center items-center "
                  >
                    {"Povabi preko FB"}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : null}

      {select_id == "21" ? (
        <div className="flex flex-col w-full">
          <div className="rounded-md self-center">
            <Image
              src={selectedImage ? selectedImage : img_placeholder}
              width={300}
              height={300}
              alt="User Icon"
              className="rounded-md"
            />
          </div>
        </div>
      ) : null}
    </div>
  );
};

const getConsistentIndex = (input, length) => {
  let hash = 0;
  for (let i = 0; i < input.length; i++) {
    hash = input.charCodeAt(i) + ((hash << 5) - hash);
  }
  return Math.abs(hash) % length;
};

// Use this for gradients
const getConsistentGradientClass = (input) => {
  const index = getConsistentIndex(input, gradientStyles.length);
  return gradientStyles[index].class;
};
const gradientStyles = [
  {
    class: "bg-gradient-to-br from-[#F1A5F380] to-[#FFFFFF30] border-[#F1A5F3]",
  },

  {
    class: "bg-gradient-to-br from-[#A6A5F380] to-[#FFFFFF30] border-[#A6A5F3]",
  },
  {
    class: "bg-gradient-to-br from-[#ABEDED80] to-[#FFFFFF30] border-[#ABEDED]",
  },
  {
    class: "bg-gradient-to-br from-[#F3ACA580] to-[#FFFFFF30] border-[#F3ACA5]",
  },
  {
    class: "bg-gradient-to-br from-[#B9D1DF80] to-[#FFFFFF30] border-[#B9D1DF]",
  },
  {
    class: "bg-gradient-to-br from-[#B2E6E380] to-[#FFFFFF30] border-[#B2E6E3]",
  },
];
function CommonStyle({ item, index, key }) {
  const userIdentifier = item?.createdTimestamp || "default";
  const gradientClass = useMemo(
    () => getConsistentGradientClass(userIdentifier),
    [userIdentifier]
  );

  return (
    <div
      key={key}
      className={` ${
        index % 2 !== 0 ? "bg-[#E8F0F6]" : "bg-white popup-custom-shadow"
      }  h-14 flex-row flex items-center border-b-[1px] border-[#D4D4D4] mobile:flex-row-reverse mobile:justify-between mobile:pr-[4px] relative `}
    >
      <div
        className={`py-[10px] border-2 text-[#6D778E]
       ${gradientClass} w-11 h-11 ml-8 mobile:ml-4 rounded-full text-center`}
      >
        {(() => {
          const nameParts = item?.name?.split(" ") || [];
          const initials =
            nameParts.length > 1
              ? nameParts[0][0] + nameParts[1][0]
              : nameParts[0]?.substring(0, 1) || "";

          return initials.toUpperCase();
        })()}
      </div>

      <div className="text-[16px] mobile:absolute whitespace-nowrap text-[#000000] font-variation-customOpt16 font-light ml-[31.5px] mobile:left-[7px] mobile:ml-[7px]">
        {item.name}
        {item?.relation ? `, ${item?.relation}` : ""}
      </div>
    </div>
  );
}

function CommonView({ text, key, onPress, selectMusic }) {
  return (
    <div
      onClick={onPress}
      key={key}
      className={
        "flex mt-3 rounded-[6px] bg-[#F2F8FF66] shadow-custom-dark-to-white w-full py-3 px-4 items-center "
      }
    >
      <div className="flex w-6 h-6 border-[1px] border-[#D4D4D4] justify-center items-center ">
        {selectMusic == text ? (
          <Image src={check_ico} alt="check icon" width={14} height={10} />
        ) : null}
      </div>
      <div className="text-[#767676] text-[16px] font-normal font-variation-customOpt16 ml-4 ">
        {text}
      </div>
    </div>
  );
}
export default Modals;
