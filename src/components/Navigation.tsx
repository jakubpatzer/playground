"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  {
    name: "Home",
    url: "/",
  },
  {
    name: "Blocks",
    url: "/blocks",
  },
  {
    name: "Users",
    url: "/users",
  },
  {
    name: "Todos (redux)",
    url: "/todos",
  },
];

const Navigation = () => {
  const pathname = usePathname();
  return (
    <ul className="flex self-start mb-10 w-full bg-white px-4">
      {navLinks.map((link) => (
        <li
          key={link.name}
          className={`text-black p-2 transform transition duration-200 ease-in-out hover:scale-110 ${
            pathname === link.url ? "font-bold text-red-500" : ""
          }`}
        >
          <Link href={link.url}>{link.name}</Link>
        </li>
      ))}
    </ul>
  );
};

export default Navigation;
