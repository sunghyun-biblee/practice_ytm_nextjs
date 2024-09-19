"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import IconButton from "@/components/elements/IconButton";

const Logo = () => {
  const { push } = useRouter();
  const onClickLogo = () => {
    push("/");
  };
  const onClickMenu = () => {};
  return (
    <section className="flex flex-row items-center gap-3">
      <IconButton
        onClickIcon={onClickMenu}
        icon={<RxHamburgerMenu size={24} />}
      />
      <div className="cursor-pointer" onClick={onClickLogo}>
        <Image src={"/main-logo.svg"} width={100} height={30} alt="logo" />
      </div>
    </section>
  );
};

export default Logo;
