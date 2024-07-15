import React from "react";

interface Props {
  children: React.ReactNode;
}
const FormLayout = ({ children }: Props) => {
  return <div className="flex flex-col gap-3">{children}</div>;
};

export default FormLayout;
