import Link from "next/link";
import Hamburger from "./Hamburger";
import { useState } from "react";

export const navigation = [
  { title: "About", link: "/about" },
  { title: "Services", link: "/services" },
  { title: "Contact", link: "/contact" },
];

const Navbar = () => {
  const [isActive, setIsActive] = useState(false);

  return (
    <nav className="bg-primary-400 w-full text-primary-100 text-lg">
      <div className="max-w-7xl pt-4 pb-3 px-4 mx-auto flex justify-between items-baseline">
        <Link href="/">
          <h1 className="font-bold text-3xl sm:p-2 tracking-wider">
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
        <Hamburger setIsActive={setIsActive} isActive={isActive} />
      </div>
      <div
        className={`${
          isActive ? "visible opacity-100" : "invisible opacity-0"
        } block sm:hidden transition-all px-2`}
      >
        <ul className="flex justify-between -mt-2 py-2">
          {navigation.map(({ title, link }) => (
            <li
              className="hover:text-white w-full border-r last:border-none"
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
