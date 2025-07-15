'use client'
import Image from "next/image";
import { useEffect, useState, useRef } from "react";
import image_diff1 from "@/public/flologo2.avif";
import image_diff2 from "@/public/flower1.jpeg";
import icon_left_right from "@/public/icon_left_right.png";
import icon_transparency from "@/public/icon_transparency.png";

const ResizableDiv = () => {
    const [position, setPosition] = useState(50);
    const containerRef = useRef(null);

    const handleMove = (clientX) => {
        if (containerRef.current) {
            const rect = containerRef.current.getBoundingClientRect();
            const x = clientX - rect.left;
            const percentage = (x / rect.width) * 100;
            const newPosition = Math.max(0, Math.min(100, percentage));
            setPosition(newPosition);
        }
    };
    const handleTouchMove = (e) => {
        const touch = e.touches[0];
        handleMove(touch.clientX);
    };
    const handleMouseMove = (e) => {
        const slider = e.target;
        const rect = slider.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const percentage = (x / rect.width) * 100;
        console.log(Math.max(0, Math.min(100, percentage)));
        setPosition(Math.max(0, Math.min(100, percentage)));
    };

    return (
        <div
            ref={containerRef}
            className="relative flex items-center h-full w-full mobile:w-full "
            onTouchMove={handleTouchMove} onDragOver={handleMouseMove}
        >
            <Image src={icon_transparency}
                className="absolute object-cover  w-[400px] h-[500px] mobile:w-[296px] mobile:h-[460px] z-30 rounded-b" />
            <Image
                src={image_diff1}
                alt="imgCall"
                className="w-full h-full relative object-cover rounded-b"
            />
            <Image
                src={image_diff2}
                alt="imgCall"
                className="absolute  w-[400px] h-[500px] mobile:w-[296px] mobile:h-[460px] mobile:w-full object-cover rounded-b"
                style={{ clipPath: `inset(0 0 0 ${position}%)` }}
            />
            <div
                className="absolute h-full bg-white shadow-slider-line"
                style={{ width: '4px', left: `${position}%` }}
            />
            <Image
                src={icon_left_right}
                alt="imgCall"
                className=" flex mobile:hidden absolute h-[40px] w-[40px] object-cover bg-[#00000050] rounded-full shadow-slider-line"
                style={{ left: `${position - 4.7}%` }}
            />
              <Image
                src={icon_left_right}
                alt="imgCall"
                className="  mobile:flex hidden absolute h-[40px] w-[40px] object-cover bg-[#00000050] rounded-full shadow-slider-line"
                style={{ left: `${position - 6.2}%` }}
            />
        </div>
    );
};

export default ResizableDiv;
