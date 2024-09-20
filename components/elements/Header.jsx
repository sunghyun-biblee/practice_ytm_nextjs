import Image from "next/image";
import React from "react";
import headerBG from "@/public/img/HeaderBG_Img/headerBG.jpg";
const Header = ({ children }) => {
  return (
    <header className="relative overflow-y-auto w-full h-full">
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
      <section className="absolute">{children}</section>
    </header>
  );
};

export default Header;
