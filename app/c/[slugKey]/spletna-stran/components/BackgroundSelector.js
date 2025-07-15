"use client";

import Image from "next/image";
import { useState } from "react";

export default function BackgroundSelector({ setFile }) {
  const [selectedBackground, setSelectedBackground] = useState(0);
  const handleChange = (background) => {
    setSelectedBackground(background.id);
    setFile(background);
  };

  const backgrounds = [
    {
      id: 1,
      image: "/florist/bg.jpg",
      name: "Cvetličarna Suniflower, Milano",
    },
    {
      id: 2,
      image: "/florist/bg1.png",
      name: "Cvetličarna Suniflower, Milano",
    },
    {
      id: 3,
      image: "/florist/bg2.jpg",
      name: "Cvetličarna Suniflower, Milano",
    },
  ];
  return (
    <div className="flex flex-wrap items-center gap-[8px]">
      {backgrounds.map((background) => (
        <div
          key={background.id}
          className="w-[120px] h-[50px] rounded-[4px] overflow-hidden relative"
          onClick={() => handleChange(background)}
        >
          {selectedBackground === background.id && (
            <div className="absolute top-0 left-0 w-full h-full bg-[#00000066] flex items-center justify-center">
              <img
                src="/icon_tick.png"
                alt="Spletna stran"
                className="w-[24px] h-[24px]"
              />
            </div>
          )}
          <Image
            src={background.image}
            width={120}
            height={50}
            alt="Spletna stran"
            className="w-full h-full object-cover"
          />
        </div>
      ))}
    </div>
  );
}

export function BackgroundSelectorStep2({ setFile }) {
  const [selectedBackground, setSelectedBackground] = useState(0);
  const handleChange = (background) => {
    setSelectedBackground(background.id);
    setFile(background);
  };
  const backgrounds = [
    {
      id: 1,
      image: "/florist/step2/1.jpg",
      name: "Cvetličarna Suniflower, Milano",
    },
    {
      id: 2,
      image: "/florist/step2/2.jpg",
      name: "Cvetličarna Suniflower, Milano",
    },
    {
      id: 3,
      image: "/florist/step2/3.jpg",
      name: "Cvetličarna Suniflower, Milano",
    },
    {
      id: 4,
      image: "/florist/step2/4.jpg",
      name: "Cvetličarna Suniflower, Milano",
    },
    {
      id: 5,
      image: "/florist/step2/5.jpg",
      name: "Cvetličarna Suniflower, Milano",
    },
  ];
  return (
    <div className="flex flex-wrap items-center gap-[8px]">
      {backgrounds.map((background) => (
        <div
          key={background.id}
          className="w-[64px] h-[64px] rounded-[4px] overflow-hidden relative"
          onClick={() => handleChange(background)}
        >
          {selectedBackground === background.id && (
            <div className="absolute top-0 left-0 w-full h-full bg-[#00000066] flex items-center justify-center">
              <img
                src="/icon_tick.png"
                alt="Spletna stran"
                className="w-[24px] h-[24px]"
              />
            </div>
          )}
          <Image
            src={background.image}
            width={64}
            height={64}
            alt="Spletna stran"
            className="w-[64px] h-[64px] object-cover"
          />
        </div>
      ))}
    </div>
  );
}

export function IconSelectorStep4({ setBoxIcon }) {
  const [selectedBackground, setSelectedBackground] = useState(null);

  const handleChange = (background) => {
    setSelectedBackground(background.id);
    setBoxIcon("icon", background.image);
  };

  const backgrounds = [
    {
      id: 1,
      image: "/florist/step4/1.png",
      name: "Cvetličarna Suniflower, Milano",
    },
    {
      id: 2,
      image: "/florist/step4/2.png",
      name: "Cvetličarna Suniflower, Milano",
    },
    {
      id: 3,
      image: "/florist/step4/3.png",
      name: "Cvetličarna Suniflower, Milano",
    },
    {
      id: 4,
      image: "/florist/step4/4.png",
      name: "Cvetličarna Suniflower, Milano",
    },
    {
      id: 5,
      image: "/florist/step4/5.png",
      name: "Cvetličarna Suniflower, Milano",
    },
  ];
  return (
    <div className="flex flex-wrap items-center gap-[8px]">
      {backgrounds.map((background) => (
        <div
          key={background.id}
          className="w-[64px] h-[64px] rounded-[4px] overflow-hidden relative bg-white flex items-center justify-center"
          onClick={() => handleChange(background)}
        >
          {selectedBackground === background.id && (
            <div className="absolute top-0 left-0 w-full h-full bg-[#00000066] flex items-center justify-center">
              <img
                src="/icon_tick.png"
                alt="Spletna stran"
                className="w-[24px] h-[24px]"
              />
            </div>
          )}
          <Image
            src={background.image}
            width={36}
            height={36}
            alt="Spletna stran"
            className="h-[36px] w-auto"
          />
        </div>
      ))}
    </div>
  );
}
