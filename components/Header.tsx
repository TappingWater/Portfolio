"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import styles from "./Header.module.scss";

/**
 * Header component: Client side component
 * Used for navigation and displaying logo
 * Responsive design
 */
const Header = () => {
  // Use state to determine whether to use desktop or mobile menu
  let [showMenu, setShowMenu] = useState(false);
  const showMenuHandler = () => {
    setShowMenu((prevState) => {
      return !prevState;
    });
  };

  // Render links for mobile and desktop menu
  type link = {
    href: string;
    name: string;
    id: number;
  };
  const homeLink = { href: "/", name: "Home", id: 1 };
  const projectLink = { href: "/projects", name: "Projects", id: 2 };
  const blogLink = { href: "/blog", name: "Blog", id: 3 };
  const aboutLink = { href: "/about", name: "About", id: 4 };
  const headerMenu: link[] = [homeLink, projectLink, blogLink, aboutLink];

  // Tailwind styling for rendering
  const headerStyling: string =
    "fixed w-[100%] h-[90px] pt-3 pb-3 flex items-center bg-white z-20 border-b-4 border-solid border-slate-600";
  const logoDivStyling: string = "ml-5 flex-1";
  const logoStyling: string = "flex items-center";
  const desktopMenuStyling: string =
    "hidden md:flex flex-1 flex-row items-baseline gap-x-10 justify-end mr-5 mt-10";
  const mobileMenuStyling: string =
    "sm:flex flex-col fixed bg-gray-100 ml-[80%] mt-[90px] w-[20%] h-[100vh] pt-2 pb-2 pl-2 space-y-5 z-10 md:hidden";
  const mobileHamburgerIconStyling: string =
    "relative flex flex-row first-letter:flex-1 justify-end items-center md:hidden";
  const menuTabsStyles: string =
    "hover:bg-gray-900 hover:text-white active:bg-gray-600 p-2 rounded transition-colors";
  const desktopMenuTabStyling: string = `${menuTabsStyles} text-center`;
  const mobileMenuTabStyling: string = `${menuTabsStyles} w-[85%]`;

  // Render tabs for menu function
  const renderMenu = (useDesktop: boolean) => {
    return (
      <>
        {headerMenu.map((link) => {
          return (
            <>
              <Link href={link.href}>
                <div
                  key={link.id}
                  className={
                    useDesktop ? desktopMenuTabStyling : mobileMenuTabStyling
                  }
                >
                  {link.name}
                </div>
              </Link>
            </>
          );
        })}
      </>
    );
  };

  // Main render
  return (
    <>
      <header className={headerStyling}>
        <div className={logoDivStyling}>
          <Link className={logoStyling} href="/">
            <Image src="./favicon.svg" alt="Logo" height={40} width={40} />
            <p className="ml-2">Chanaka Perera</p>
          </Link>
        </div>
        <div className={desktopMenuStyling}>{renderMenu(true)}</div>
        <div className={mobileHamburgerIconStyling}>
          <div
            className={`${styles.btn} ${showMenu ? styles.open : ""}`}
            onClick={showMenuHandler}
          >
            <div className={styles.iconCircle}></div>
            <div className={styles.icon}></div>
          </div>
        </div>
      </header>
      {/* Render mobile menu as sidebar if needed */}
      {showMenu && <div className={mobileMenuStyling}>{renderMenu(false)}</div>}
    </>
  );
};

export default Header;
