"use client";

import Image from "next/image";

import { useRouter } from "next/navigation";
const Logo = () => {
  const router = useRouter();
  return (
    <Image
      alt="Logo"
      className="hidden md:block cursor-pointer"
      height="100"
      width="200"
      src="/images/logcccco.svg"
    />
  );
};
export default Logo;
