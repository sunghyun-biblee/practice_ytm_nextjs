import React from "react";

const layout = ({ children }: { children: React.ReactNode }) => {
  return <div>layout 먼저 {children}</div>;
};

export default layout;
