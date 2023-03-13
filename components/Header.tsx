"use client";

import Image from "next/image";
import dynamic from "next/dynamic";

import { motion, useCycle } from "framer-motion";
const HamburgerMenu = dynamic(()=>import("./HamburgerMenu"));
const MenuTabs = dynamic(()=> import("./MenuTabs"));

/**
 * Header component: Client side component
 * Used for navigation and displaying logo
 * Responsive design
 */
const Header = () => {
  // Use state to determine whether to use desktop or mobile menu
  const [isOpen, toggleOpen] = useCycle(false, true);

  // Tailwind styling for rendering
  const headerStyling: string =
    "fixed w-[100%] h-[90px] pt-3 pb-3 flex items-center bg-white z-20 border-b-4 border-solid border-slate-600";
  const logoDivStyling: string = "ml-5 flex-1 flex items-center";
  const desktopMenuStyling: string =
    "hidden md:flex flex-1 flex-row items-baseline gap-x-10 justify-end mr-5 mt-10";
  const mobileSideBarStyling: string =
    "sm:flex flex-col fixed bg-gray-100 ml-[75%] mt-[90px] w-[25%] h-[100vh] pt-2 pb-2 pl-2 space-y-5 z-50 md:hidden";
  const mobileHamburgerIconStyling: string =
    "relative flex flex-row first-letter:flex-1 justify-end items-center md:hidden";

  // Framer motion variants for sidebar animation
  // Variants for sidebar
  const sidebarVariants = {
    open: {
      x: "0%",
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 40,
        staggerChildren: 0.07,
        delayChildren: 0.15,
      },
    },
    closed: {
      x: "100%",
      transition: {
        delay: 0.5,
        type: "spring",
        stiffness: 400,
        damping: 40,
        staggerChildren: 0.05,
        staggerDirection: -1,
        bounce: 0,
      },
    },
  };

  // Render header component and sidebar if needed
  return (
    <motion.div initial={false} animate={isOpen ? "open" : "closed"}>
      <header className={headerStyling}>
        <div className={logoDivStyling}>
          <Image src="/favicon.svg" alt="Logo" height={40} width={40} />
          <p className="ml-2 font-heading font-semibold text-md">Chanaka Perera</p>
        </div>
        <div className={desktopMenuStyling}>
          <MenuTabs useDesktop={true} />
        </div>
        <div className={mobileHamburgerIconStyling}>
          <HamburgerMenu toggle={() => toggleOpen()}></HamburgerMenu>
        </div>
      </header>
      {/* Render mobile menu as sidebar if needed */}
      <motion.div variants={sidebarVariants} className={mobileSideBarStyling}>
        <MenuTabs useDesktop={false} />
      </motion.div>
    </motion.div>
  );
};

export default Header;
