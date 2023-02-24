"use client";

import AnimatedText from "@/components/AnimatedText";
import CodeWrapper from "@/components/CodeWrapper";
import Image from "next/image";
import { useEffect } from "react";

export default function Home() {
  function angle(cx: number, cy: number, ex: number, ey: number) {
    const dy = ey - cy;
    const dx = ex - cx;
    const rad = Math.atan2(dy, dx);
    const deg = (rad * 180) / Math.PI;
    return deg;
  }

  const rotateEyes = (x: number, y: number) => {
    const anchor = document.getElementById("anchor");
    if (anchor) {
      const rekt = anchor!.getBoundingClientRect();
      const anchorX = (rekt.left + rekt.width) / 2;
      const anchorY = (rekt.top + rekt.height) / 2;
      const angleDeg = angle(x, y, anchorX, anchorY);

      const eyes = document.querySelectorAll(".eye");
      eyes.forEach((eye) => {
        eye.style.transform = `rotate(${90 + angleDeg}deg)`;
      });
    }
  };

  useEffect(() => {
    window.addEventListener("mousemove", (e) => {
      const mouseX = e.clientX;
      const mouseY = e.clientY;

      rotateEyes(mouseX, mouseY);
    });
  }, []);

  useEffect(() => {
    window.addEventListener("touchmove", (e) => {
      const touchX = e.touches[0].clientX;
      const touchY = e.touches[0].clientY;

      rotateEyes(touchX, touchY);
    });
  }, []);

  const MyRick = () => {
    return (
      <div
        id="anchor"
        className="ml-[50px] absolute right-[-60px] bottom-[-30px] z-2"
      >
        <Image src="/eyeless-me.png" alt="Gofer" height={100} width={100} />
        <div>
          <Image
            className="eye absolute top-[33px] left-[34px] rounded"
            src="/my-eye.png"
            alt="eye"
            height={5}
            width={7}
          />
          <Image
            className="eye absolute top-[33px] left-[53px] rounded"
            src="/my-eye.png"
            alt="eye"
            height={5}
            width={7}
          />
        </div>
      </div>
    );
  };

  return (
    <>
      <CodeWrapper tailwindStyles="m-auto relative rounded w-[70%] min-h-[60vh] p-[20px]">
        {MyRick()}
        <AnimatedText></AnimatedText>
      </CodeWrapper>
    </>
  );
}
