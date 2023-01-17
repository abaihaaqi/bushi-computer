import { useTheme } from "next-themes";
import Link from "next/link";
import {
  IconMenu,
  IconMoonStars,
  IconSun,
  IconUser,
  IconX,
} from "@tabler/icons";
import Image from "next/image";
import logoBlack from "../public/logo/black-transparent-32.png";
import logoWhite from "../public/logo/white-transparent-32.png";
import { useEffect, useState } from "react";
import { Fira_Code } from "@next/font/google";

const firaCode = Fira_Code({ subsets: ["latin"] });

export default function Navbar() {
  const [logoFile, setLogoFile] = useState(logoWhite);
  const [isOpen, setIsOpen] = useState(false);
  const { theme, setTheme } = useTheme();

  const changeTheme = () => {
    if (theme == "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  useEffect(() => {
    theme == "light" ? setLogoFile(logoBlack) : setLogoFile(logoWhite);
  }, [theme]);

  return (
    <>
      <div className="bg-zinc-200 dark:bg-zinc-900 sticky top-0 z-50">
        <div className="h-[50px] flex justify-between items-center max-w-3xl mx-auto px-3">
          <a href="#top" className="flex items-center gap-3">
            <Image src={logoFile} width={24} alt="Logo Bushi Computer" />
            <code className={`${firaCode.className} font-bold`}>
              Bushi Computer
            </code>
          </a>
          <div className="hidden md:flex gap-6">
            <a href="#whyus" className="hover:underline">
              Why Us?
            </a>
            <a href="#products" className="hover:underline">
              Products
            </a>
            <a href="#about" className="hover:underline">
              About Us
            </a>
          </div>
          <div className="flex gap-3">
            <button onClick={() => changeTheme()}>
              {theme == "light" ? (
                <IconSun size={24} />
              ) : (
                <IconMoonStars size={24} />
              )}
            </button>
            <button className="md:hidden" onClick={() => setIsOpen(true)}>
              <IconMenu size={24} />
            </button>
            {/* md:block */}
            <Link href="/profile" className="hidden">
              <IconUser size={24} />
            </Link>
          </div>
        </div>
      </div>
      {isOpen && (
        <>
          <div
            className="bg-black/70 fixed inset-0 z-50"
            onClick={() => setIsOpen(false)}
          />
          <div className="bg-white dark:bg-zinc-800 fixed inset-y-0 right-0 z-50 w-[200px] flex flex-col">
            <div className="h-[50px] bg-zinc-200 dark:bg-zinc-900 flex justify-end gap-3 px-3">
              <button onClick={() => changeTheme()}>
                {theme == "light" ? (
                  <IconSun size={24} />
                ) : (
                  <IconMoonStars size={24} />
                )}
              </button>
              <button onClick={() => setIsOpen(false)}>
                <IconX size={24} />
              </button>
            </div>
            <a onClick={() => setIsOpen(false)} href="#top" className="btn">
              Home
            </a>
            <a onClick={() => setIsOpen(false)} href="#whyus" className="btn">
              Why Us?
            </a>
            <a
              onClick={() => setIsOpen(false)}
              href="#products"
              className="btn"
            >
              Products
            </a>
            <a onClick={() => setIsOpen(false)} href="#about" className="btn">
              About Us
            </a>
          </div>
        </>
      )}
    </>
  );
}
