import React from "react";
import { Service } from "../../../types/types";

const ServiceCard = ({ service }: { service: Service }) => {
  return (
    <div
      style={{ borderColor: service.bgColor }}
      className="border-2 rounded-lg w-full p-4 h-[120px] flex items-center justify-center cursor-pointer"
    >
      <div className="flex flex-col items-center gap-2">
        <h1 className="text-xl font-medium">{service.name}</h1>
        <img height={32} width={32} src={service.icon} alt="" />
      </div>
    </div>
  );
};

export default ServiceCard;
