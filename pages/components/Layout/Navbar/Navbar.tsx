import Link from "next/link";
import Hamburger from "./Hamburger";
import { useState, useEffect } from "react";

export const navigation = [
  { title: "About", link: "/about" },
  { title: "Services", link: "/services" },
  { title: "Contact", link: "/contact" },
];

const Navbar = () => {
  const [isActive, setIsActive] = useState(false);
  const [y, setY] = useState(0);

  useEffect(() => {
    window.addEventListener("scroll", () => setY(window.scrollY));
    return () => {
      window.removeEventListener("scroll", () => setY(window.scrollY));
    };
  });

  return (
    <nav
      className={`${
        y > 20
          ? "bg-primary-100 shadow-md text-primary-400"
          : "bg-transparent text-primary-100"
      } fixed top-0 w-full z-10 text-lg transition-colors rounded-b-lg`}
    >
      <div className="max-w-7xl pt-4 pb-3 px-4 mx-auto flex justify-between items-center">
        <Link href="/">
          <h1 className="font-bold text-2xl sm:p-2 tracking-wider">
            GLOBAL BNS
          </h1>
        </Link>
        <div className="hidden sm:block">
          <ul className="flex gap-4">
            {navigation.map(({ title, link }) => (
              <li className="hover:text-white" key={title}>
                <Link href={link}>{title}</Link>
              </li>
            ))}
          </ul>
        </div>
        <Hamburger setIsActive={setIsActive} isActive={isActive} y={y} />
      </div>
      <div
        className={`${
          isActive ? "visible opacity-100" : "invisible opacity-0"
        } block sm:hidden transition-all px-2`}
      >
        <ul className="flex justify-between -mt-5 py-2">
          {navigation.map(({ title, link }) => (
            <li
              className={` w-full border-r last:border-none ${
                y > 20 ? "border-primary-400" : "border-primary-100"
              }`}
              key={title}
            >
              <Link className="flex justify-center w-full" href={link}>
                {title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
