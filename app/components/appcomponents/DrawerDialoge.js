import React, { useState } from "react";
import { XMarkIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import { Dialog, DialogPanel } from "@headlessui/react";
import classNames from "classnames";

const DrawerDialoge = ({
  mobileMenuOpen,
  setMobileMenuOpen,
  OnDrawerButtonClicked,
}) => {
  const [navigation, setNavigation] = useState([
    { name: "Site", href: "https://www.mindiii.com/", isSelected: true },
    { name: "Person", href: "https://www.mindiii.com/", isSelected: false },
    { name: "Tag", href: "https://www.mindiii.com/", isSelected: false },
    { name: "Event", href: "https://www.mindiii.com/", isSelected: false },
    { name: "Caregiver", href: "https://www.mindiii.com/", isSelected: false },
    { name: "Setting", href: "https://www.mindiii.com/", isSelected: false },
  ]);
  const classNameDrawerBtn = (isSelected) =>
    classNames(
      "flex justify-between items-center w-full pl-3 py-3 text-sm border-l-themeGreen",
      {
        "text-themeGreen": isSelected,
        "text-textBlack": !isSelected,
        "border-l-2": isSelected,
        "font-medium": isSelected,
        "font-normal": !isSelected,
      }
    );
  const onBtnClick = (item, index) => {
    OnDrawerButtonClicked(item);
    setNavigation((prevState) =>
      prevState.map((prevItem, prevIndex) => ({
        ...prevItem,
        isSelected: prevIndex === index ? !prevItem.isSelected : false,
      }))
    );
    setMobileMenuOpen(false);
  };
  return (
    <Dialog
      className="sm:hidden block"
      open={mobileMenuOpen}
      onClose={setMobileMenuOpen}>
      <div className="fixed inset-0 z-50" />
      <DialogPanel className="bg-white bg-opacity-60 backdrop-blur-lg fixed inset-y-0 left-0 z-50 w-[80%] overflow-y-auto px-6 py-6 sm:max-w-sm ring-1 ring-gray-900/10">
        <div className="flex items-center justify-between">
          <a href="#" className="-m-1.5 p-1.5">
            <span className="sr-only">Your Company</span>
            <img className="h-10 w-auto" src="/vercel.svg" alt="" />
          </a>
          <button
            type="button"
            className="-m-2.5 rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(false)}>
            <span className="sr-only">Close menu</span>
            <XMarkIcon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div className="mt-6 flow-root">
          <div className="-my-6 divide-y divide-gray-500/10">
            <div className="space-y-2 py-6">
              {navigation.map((item, index) => (
                <button
                  key={item.name}
                  onClick={() => {
                    onBtnClick(item, index);
                  }}
                  className={classNameDrawerBtn(item.isSelected)}>
                  {item.name}
                  <ChevronRightIcon className="h-6 w-6" aria-hidden="true" />
                </button>
              ))}
            </div>
          </div>
        </div>
      </DialogPanel>
    </Dialog>
  );
};

export default DrawerDialoge;
