"use client";

import { SafeUser } from "@/app/types";
import Container from "../Container";
import Logo from "./Logo";
import Search from "./Search";
import UserMenu from "./UserMenu";
import ShowInformation from "../../../pages/PersonalDataForm";
import PersonalDataForm from "../../../pages/PersonalDataForm";
import styles from "../../styles.module.css";
interface NavbarProps {
  currentUser?: SafeUser | null;
}

const Navbar: React.FC<NavbarProps> = ({ currentUser }) => {
  return (
    <div className="fixed w-full bg-white z-10 shadow-sm ">
      <div className="py-4 border-b-[1px]">
        <Container>
          <div
            className="
          flex
          flex-row 
          items-center
          justify-between
          gap-1
          md:gap-0"
          >
            <Logo />

            <Search />
            <UserMenu currentUser={currentUser} />
          </div>
        </Container>
      </div>
      <div className={styles.container}></div>
    </div>
  );
};

export default Navbar;
