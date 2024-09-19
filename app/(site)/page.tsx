import { sleep } from "@/lib/utils";
import React from "react";

const page = async () => {
  await sleep(500);

  return <div>HomePage</div>;
};

export default page;
