"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import IconButton from "@/components/elements/IconButton";
import { IoCloseOutline } from "react-icons/io5";

const Logo = ({ isInDrawer = false, onClickClose = () => {} }) => {
  const { push } = useRouter();
  const onClickLogo = () => {
    push("/");
  };
  const onClickMenu = () => {};

  console.log(isInDrawer);
  return (
    <section className="flex flex-row items-center gap-3">
      {isInDrawer ? (
        <IconButton
          onClickIcon={onClickClose}
          icon={<IoCloseOutline size={32} />}
        />
      ) : (
        <IconButton
          onClickIcon={onClickMenu}
          icon={<RxHamburgerMenu size={24} />}
        />
      )}
      <div className="cursor-pointer" onClick={onClickLogo}>
        <Image src={"/main-logo.svg"} width={100} height={30} alt="logo" />
      </div>
    </section>
  );
};

export default Logo;
