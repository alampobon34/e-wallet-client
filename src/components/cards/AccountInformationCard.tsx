import useAuth from "@/hooks/useAuth";
import React from "react";
import Loader from "../common/Loader";

const AccountInformationCard = () => {
  const { user, isLoading } = useAuth();

  return (
    <div className="card bg-base-100 w-full shadow-md border">
      <div className="card-body min-h-[120]">
        <h2 className="card-title">Account Information</h2>
        {isLoading ? (
          <Loader className="" />
        ) : (
          <>
            <p>Name: {user?.name}</p>
            <p>Email: {user?.email}</p>
            <p>Phone: {user?.phone}</p>
            {user?.type === "USER" ||
              (user?.type === "AGENT" && <p>Balance: {user?.balance}</p>)}
            <div className="card-actions justify-end"></div>
          </>
        )}
      </div>
    </div>
  );
};

export default AccountInformationCard;
