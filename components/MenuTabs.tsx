import Link from "next/link";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";

// Render tabs for menu function
const MenuTabs: React.FC<{ useDesktop: boolean }> = (props) => {
  // Render links for mobile and desktop menu
  type link = {
    href: string;
    name: string;
    id: number;
  };

  //Framer motion variants for tab animations
  // Variants for mobile tabs
  const mobileTabVariants = {
    open: {
      y: 0,
      opacity: 1,
      transition: {
        y: { stiffness: 1000, velocity: -100 },
      },
    },
    closed: {
      y: 50,
      opacity: 0,
      transition: {
        y: { stiffness: 1000 },
      },
    },
  };

  // Define link objects for navigation and rendering
  const homeLink = { href: "/", name: "Home", id: 1 };
  const projectLink = { href: "/projects", name: "Projects", id: 2 };
  const blogLink = { href: "/blog", name: "Blog", id: 3 };
  const aboutLink = { href: "/about", name: "About", id: 4 };
  const headerMenu: link[] = [homeLink, projectLink, blogLink, aboutLink];

  // Tailwind styling
  const commonTabsStyles: string =
    "hover:bg-gray-900 hover:text-white active:bg-gray-600 p-2 rounded transition-colors font-tabs";
  const desktopMenuTabStyling: string = `${commonTabsStyles}`;
  const mobileMenuTabStyling: string = `${commonTabsStyles} w-[85%] text-left`;
  const activeStyling: string = " font-semibold";

  const pathname = usePathname();

  // Render tabs to be used for desktop and mobile menu
  return (
    <>
      {headerMenu.map((link) => {
        return (
          <Link
            href={link.href}
            key={props.useDesktop ? link.id : link.id + "a"}
          >
            <motion.button
              className={(props.useDesktop
                ? desktopMenuTabStyling
                : mobileMenuTabStyling
              ).concat(pathname === link.href ? activeStyling : "")}
              variants={props.useDesktop ? {} : mobileTabVariants}
              whileTap={{ scale: 0.85 }}
              key={props.useDesktop ? link.id + "b" : link.id + "c"}
            >
              {link.name}
            </motion.button>
          </Link>
        );
      })}
    </>
  );
};

export default MenuTabs;
