import Link from "next/link";
import React from "react";

export default function NavBar() {
  return (
    <nav className="flex justify-center gap-6 items-center min-h-12 sticky top-0 ">
      <Link href={"/"} className="hover:text-amber-300">
        Home
      </Link>
      <Link href={"/about"} className="hover:text-amber-300">
        About
      </Link>
      <Link href={"/settings"} className="hover:text-amber-300">
        Settings
      </Link>
      <Link href={"/sports"} className="hover:text-amber-300">
        Sports
      </Link>
      <Link href={"/users/client-version"} className="hover:text-amber-300">
        Users client
      </Link>
      <Link href={"/users/server-version"} className="hover:text-amber-300">
        Users server
      </Link>
      <Link href={"/products/client-version"} className="hover:text-amber-300">
        Products client
      </Link>
      <Link href={"/products/server-version"} className="hover:text-amber-300">
        Products server
      </Link>
    </nav>
  );
}