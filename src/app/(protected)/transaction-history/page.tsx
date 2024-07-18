import ProtectedGuard from "@/components/layouts/ProtectedGuard";
import React from "react";

const page = () => {
  return (
    <ProtectedGuard guardName={["USER", "AGENT"]}>
      <div>page</div>;
    </ProtectedGuard>
  );
};

export default page;
