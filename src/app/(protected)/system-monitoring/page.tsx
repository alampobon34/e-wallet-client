import ProtectedGuard from "@/components/layouts/ProtectedGuard";
import React from "react";

const page = () => {
  return (
    <ProtectedGuard guardName={["ADMIN"]}>
      <div>manage users page</div>;
    </ProtectedGuard>
  );
};

export default page;
