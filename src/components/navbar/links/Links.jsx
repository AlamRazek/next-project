"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const Links = () => {
  const session = true;
  const isAdmin = true;
  const pathName = usePathname();

  const links = [
    {
      title: "Homepage",
      path: "/",
    },
    {
      title: "About",
      path: "/about",
    },
    {
      title: "Contact",
      path: "/contact",
    },
    {
      title: "Blog",
      path: "/blog",
    },
  ];

  return (
    <div className="">
      <div className="flex items-center gap-5 mt-4">
        {links.map((link) => (
          <Link
            href={link.path}
            key={link.title}
            className={`${
              pathName === link.path
                ? "bg-white rounded-full text-black px-3 py-1 "
                : ""
            }`}
          >
            {link.title}
          </Link>
        ))}
        {session ? (
          <>
            {isAdmin && <Link href="/admin">Admin</Link>}
            <button className="px-2 py-1 rounded cursor-pointer font-bold text-black bg-white">
              Logout
            </button>
          </>
        ) : (
          <Link href="/login">Login</Link>
        )}
      </div>
    </div>
  );
};

export default Links;
