"use client";

import { AiOutlineMenu } from "react-icons/ai";
import Avatar from "./Avatar";
import { useCallback, useEffect, useState } from "react";
import MenuItem from "./MenuItem";
import useRegisterModal from "@/app/hooks/useRegisterModal";
import useLoginModal from "@/app/hooks/useLoginModal";
import admin from "./admin panel/admin";
import { signOut } from "next-auth/react";
import { SafeUser } from "@/app/types";

import PersonalDataForm from "../../../pages/PersonalDataForm";
import Link from "next/link";
import { useRouter } from "next/navigation";

interface UserMenuProps {
  currentUser?: SafeUser | null;
}

const UserMenu: React.FC<UserMenuProps> = ({ currentUser }) => {
  const registerModal = useRegisterModal();

  const loginModal = useLoginModal();
  const [isOpen, setIsOpen] = useState(false);
  const [isClient, setIsClient] = useState(false);

  // This effect runs only on the client side after rendering
  /*  useEffect(() => {
    setIsClient(true);
  }, []); */
  /* const handlePersonalDataFormClick = () => {
    router.push("/app/components/navbar/PersonalDataForm.tsx");
  }; */

  /*  const handleGoAdmin = () => {
    if (isClient) {
      const router = require("next/router");
      router.push("./admin panel/admin.tsx");
    }
  }; */
  const toggleOpen = useCallback(() => {
    setIsOpen((value) => !value);
  }, []);
  /* const router = useRouter();
  const handleButtonClick = () => {
    router.push("/pages/MyPersonalData.tsx");
  }; */

  const onRent = useCallback(() => {
    if (!currentUser) {
      return loginModal.onOpen();
    }
  }, [currentUser, loginModal]);
  const router = useRouter();
  return (
    <div className="relative">
      <div className=" flex flex-row items-center gap-3">
        <div
          onClick={onRent}
          className="
 
hidden
md:block

text-sm
font-semibold
py-3
px-4
rounded-full
hover:bg-neutral-100
transition
cursor-pointer

"
        >
          {/* IMOT Your Info */}
          Go Green with IMOT
        </div>

        <div
          onClick={toggleOpen}
          className="
      
      p-4
      md:py-1
      md:px-2
      border-[1px]
      border-neutral-200
      flex
      flex-row
      items-center
      gap-3
      rounded-full
      cursor-pointer
      hover:shadow-md
      transition"
        >
          <AiOutlineMenu />

          <div className="hidden md:block">
            <Avatar src={currentUser?.image} />
          </div>
        </div>
      </div>
      {isOpen && (
        <div
          className="
        
        
        
        absolute
        rounded-xl
        shadow-md
        w-[40vw]
        md:w-3/4
        bg-white
        overflow-hidden
        right-0
        top-12
        text-sm
        "
        >
          <div className="flex flex-col cursor-pointer">
            {currentUser ? (
              <>
                {/*        to show items when user login */}
                <MenuItem
                  onClick={() => {
                    if (typeof window !== "undefined") {
                      router.push("/Listing");
                    }
                  }}
                  label=" Information Lists"
                />

                {/*  <MenuItem
                  onClick={() => {
                    router.push("./admin panel/admin.tsx");
                  }}
                  label="View My Information"
                />
                {/*            <Link href="/test.tsx">Go to Next Page</Link> */}
                {/*   <MenuItem onClick={() => {}} label=" How to used?" /> */}
                <hr />
                <MenuItem onClick={() => signOut()} label="Logout" />
              </>
            ) : (
              <>
                <MenuItem onClick={loginModal.onOpen} label="Login" />
                <MenuItem onClick={registerModal.onOpen} label="Sign Up" />
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default UserMenu;
