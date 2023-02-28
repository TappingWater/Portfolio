import Image from "next/image";
import { useEffect } from "react";

/**
 * Functional component used to render image on home page.
 * Eyes rotate on mouse move or touch.
 */
const MyRick = () => {
  // Calculate angle between image and client touch / mouse
  function angle(cx: number, cy: number, ex: number, ey: number) {
    const dy = ey - cy;
    const dx = ex - cx;
    const rad = Math.atan2(dy, dx);
    const deg = (rad * 180) / Math.PI;
    return deg;
  }

  // Rotate eyes of image based on number
  const rotateEyes = (x: number, y: number, anchor: HTMLElement) => {   
			const rekt = anchor!.getBoundingClientRect();
			const anchorX = (rekt.left + rekt.width) / 2;
			const anchorY = (rekt.top + rekt.height) / 2;
			const angleDeg = angle(x, y, anchorX, anchorY);

			const eyes = document.querySelectorAll<HTMLElement>(".eye");
			eyes.forEach((eye) => {        
				eye.style.transform = `rotate(${90 + angleDeg}deg)`;
			});		
  };

  // Mouse move event
  useEffect(() => {
    window.addEventListener("mousemove", (e) => {
			const anchor = document.getElementById("anchor");
      if (anchor) {
        const mouseX = e.clientX;
        const mouseY = e.clientY;

        rotateEyes(mouseX, mouseY, anchor);
      }
    });
  });

  // Touch event
  useEffect(() => {
    window.addEventListener("touchmove", (e) => {
      const anchor = document.getElementById("anchor");
      if (anchor) {
        const touchX = e.touches[0].clientX;
        const touchY = e.touches[0].clientY;

        rotateEyes(touchX, touchY, anchor);
      }
    });
  });

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

export default MyRick;
