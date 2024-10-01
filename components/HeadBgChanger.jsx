"use client";
import React, { useEffect } from "react";
import { useUIState } from "@/hooks/useUIState";

const HeadBgChanger = ({ imageSrc }) => {
  const { setHeaderImageSrc } = useUIState();
  useEffect(() => {
    if (imageSrc) {
      setHeaderImageSrc(imageSrc);
    }
  }, [imageSrc, setHeaderImageSrc]);
  return <></>;
};

export default HeadBgChanger;
