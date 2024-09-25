"use client";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import headerBG from "@/public/img/HeaderBG_Img/headerBG.jpg";
import UserIcon from "@/components/UserIcon";
import PagePadding from "@/components/PagePadding";
import { FaChromecast } from "react-icons/fa";
import { FiSearch } from "react-icons/fi";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import Logo from "@/components/elements/Logo";
import Navigator from "@/components/elements/Navigator";
import { cn } from "../../lib/utils";

const HeaderDrawer = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Drawer direction="left" open={isOpen} onOpenChange={setIsOpen}>
      <DrawerTrigger>{children}</DrawerTrigger>
      <DrawerContent className="w-[240px] h-full">
        {/* Logo */}
        {/* playList, Navigation */}
        <div className="py-3">
          <div className="px-3">
            <Logo
              isInDrawer={true}
              onClickClose={() => setIsOpen(false)}
            ></Logo>
          </div>
          <Navigator />
        </div>
      </DrawerContent>
    </Drawer>
  );
};
const Header = ({ children }) => {
  const [isScroll, setIsScroll] = useState(false);
  const headRef = useRef();
  useEffect(() => {
    const handleScroll = () => {
      const scrollValue = headRef?.current?.scrollTop;
      setIsScroll(scrollValue !== 0);
      console.log(scrollValue);
    };
    headRef?.current?.addEventListener("scroll", handleScroll);

    return () => {
      headRef?.current?.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <header className="relative overflow-y-auto w-full h-full" ref={headRef}>
      {/* bgSection */}
      <section className="absolute top-0 w-full">
        <div className="relative h-[400px] w-full">
          <Image alt="mediaItem" className="object-cover" fill src={headerBG} />
          {/* nextjs 에서 이미지를 사용할 때 방법으로는 nextjs에서 제공하는 
          Image 컴포넌트를 통해 경로를 입력한 뒤,
          1. 상위 태그에 relative를 적용하고 Image 컴포넌트에 fill을 적용하거나
          2. Image 컴포넌트에 width와 height 값을 직접 명시해주는 방법이 있다. */}
          <div className="absolute h-[400px] top-0 bg-black opacity-40 w-full "></div>
          <div className="absolute h-[400px] top-0 bg-gradient-to-t from-black  w-full "></div>
        </div>
      </section>
      {/* searchSection */}
      <section
        className={cn(
          "sticky top-0 left-0 z-10",
          isScroll && "bg-black transition-colors duration-500"
        )}
      >
        <PagePadding>
          <div className="h-[64px] flex flex-row justify-between items-center">
            <article
              className={cn(
                "hidden lg:flex items-center h-[42px] min-w-[480px] bg-[rgba(0,0,0,0.34)] rounded-2xl px-[16px] gap-[16px] border",
                isScroll && "border-neutral-500 transition-all duration-500"
              )}
            >
              <div>
                <FiSearch size={24} />
              </div>
              <input
                type="text"
                className="h-full w-full bg-transparent"
                placeholder="노래, 앨럼, 아티스트, 팟캐스트 검색"
              />
            </article>
            <HeaderDrawer>
              <article className="lg:hidden">
                <Logo />
              </article>
            </HeaderDrawer>
            <article className="flex flex-row gap-6 items-center">
              <FaChromecast size={26} />
              <UserIcon></UserIcon>
            </article>
          </div>
        </PagePadding>
      </section>
      <section className="relative">{children}</section>
    </header>
  );
};

export default Header;
