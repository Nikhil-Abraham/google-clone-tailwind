import React from "react";
import Image from "next/image";
import { Input } from "postcss";
import { useRouter } from "next/router";

function Header() {
  const searchInputRef = useRouter(null);
  return (
    <Header>
      <Image
        src="https://www.google.co.uk/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"
        height={40}
        width={120}
        alt="google logo"
        className="cursor-pointer"
      />
      <form className="flex border border-gray-200 shadow-lg rounded-full max-w-3xl icons-center px-6 py-3 ml-10 mr-5">
        <input
          ref={searchInputRef}
          className="flex-grow w-full focus:outline-none"
          type="text"
        />
      </form>
    </Header>
  );
}

export default Header;
