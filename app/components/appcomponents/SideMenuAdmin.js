import React, { useEffect, useState } from "react";
import HeaderAdmin from "./HeaderAdmin";
import AdminSideMenuButton from "./AdminSideMenuButton";
import { usePathname } from "next/navigation";

const SideMenuAdmin = ({
  setWhichScreen,
  headerCheck,
  isSelectedLabel,
  whichtab,
}) => {
  const [isSelected, setIsSelected] = useState("Financials");
  const pathname = usePathname();

  useEffect(() => {
    console.log("Current path:", pathname);

    const currentItem = menuItems.find((item) => item.path === pathname);
    if (currentItem) {
      setIsSelected(currentItem.text);
    }
  }, [pathname]);

  const menuItems = [
    { text: "Notifications", imgSrc: "/ico_notification_bell.png", path: "#" },
    { text: "Obituaries", imgSrc: "/ico_user.png", path: "/Obituaries" },
    { text: "Memory Books", imgSrc: "/ico_funerals.png", path: "/memorybook" },
    {
      text: "Funeral Companies",
      imgSrc: "/ico_funeral_comp.png",
      path: "/funeralcompanydata",
    },
    { text: "Florists", imgSrc: "/ico_funerals.png", path: "/floristfirst" },
    { text: "Users", imgSrc: "/user_active_icon.png", imgActive: "/ico_funeral_comp.png", path: "/admin-user" },
    { text: "Keepers", imgSrc: "/ico_funeral_comp.png", path: "/keepers" },
    {
      text: "Financials",
      imgSrc: "/ico_cursor.png",
      path: "/adminfinancialsoverview",
    },
    {
      text: "Permissions",
      imgSrc: "/ico_funeral_comp.png",
      path: "",
    },
    { text: "Emails", imgSrc: "/ico_funeral_comp.png", path: "" },
    { text: "Actions history", imgSrc: "/ico_setting.png", path: "" },
    { text: "Download Mobile", imgSrc: "/ico_setting.png", path: "" },
    { text: "Settings", imgSrc: "/ico_setting_admin.png", path: "" },
    { text: "Logout", imgSrc: "/ico_logout_admin.png", path: "" },
  ];

  return (
    <div className="bg-white min-h-screen overflow-hidden border-[2px] border-white">
      <HeaderAdmin
        setWhichScreen={setWhichScreen}
        headerCheck={headerCheck}
        isSelectedLabel={isSelectedLabel}
        selectedTab={whichtab}
      />
      <div className="bg-[#6D778E30] h-full flex flex-row justify-center">
        <div className="desktop:flex flex-col px-[24px] bg-gradient-to-br pt-[43px] from-[#FFFFFF] to-[#FFFFFF30] min-h-screen border-[2px] border-[#FFFFFF]">
          <div className="flex flex-col space-y-2">
            {menuItems.map((item) => (
              <div key={item.text} onClick={() => setIsSelected(item.text)}>
                <AdminSideMenuButton
                  isSelectedButton={pathname === item.path}
                  isFrom={isSelected}
                  placeholderText={item.text}
                  placeholderImg={item.imgSrc}
                  pageName={item.path}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideMenuAdmin;
