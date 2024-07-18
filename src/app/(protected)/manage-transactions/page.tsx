import ProtectedGuard from "@/components/layouts/ProtectedGuard";
import React from "react";

const page = () => {
  return (
    <ProtectedGuard guardName={["AGENT"]}>
      <div>manage transaction page</div>;
    </ProtectedGuard>
  );
};

export default page;
