"use client";
import Image from "next/image";
import { BiMailSend, BiSearch, BiSolidContact } from "react-icons/bi";
import Link from "next/link";

const Search = () => {
  return (
    <div
      className="
  border-[1px]
  w-full
  md:w-auto
  py-2
  rounded-full
  shadow-sm
  hover:shadow-md
  transition
  cursor-pointer
  "
    >
      <div
        className="flex
flex-row
items-center
justify-between
"
      >
        <div
          className="
text-sm
font-semibold
px-6"
        >
          <Link href="/">HOME</Link>
        </div>

        {/*  Add Information */}

        <div
          className="
        
        text-sm
        pl-6
        pr-2
        text-gray-600
        font-semibold
         px-6
        flex
        flex-row
        items-center
        gap-3
        
        "
        >
          <div className="hidden sm:block">
            <Link href="/PersonalDataForm">Add information</Link>
          </div>
          <div>
            <Link href="/PersonalDataForm">
              <Image
                className="rounded-full"
                height="30"
                width="30"
                alt="Avatar"
                src="/images/add-friend.png"
              />
            </Link>
          </div>
        </div>
        {/*    Search Information */}

        <div
          className="
        text-sm
        pl-6
        pr-2
        text-gray-600
        font-semibold
        px-6
        flex
        flex-row
        items-center
        gap-3
        "
        >
          <Link href="/Contact">
            <div className="hidden sm:block">
              <p>Get in touch</p>
            </div>
          </Link>
          <Link href="/Contact">
            <div
              className="p-2
bg-rose-500
rounded-full
text-white"
            >
              <BiMailSend size={18} />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Search;

{
  /*   <div
          className="
        hidden
        sm:block
        text-sm
        font-semibold
        px-6
        border-x-[1px]
        flex-1
        text-center
        
        "
        >
          Ipsum
        </div> */
}

/*  className="

p-2
bg-rose-500
rounded-full
text-white
 " */
