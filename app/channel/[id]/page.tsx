import React from "react";

interface Iprops {
  params: { id: string };
}
const page = ({ params }: Iprops) => {
  //   console.log(params);
  return <div>channel/[{params.id}]</div>;
};

export default page;
