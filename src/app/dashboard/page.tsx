"use client";
import { useSession } from "next-auth/react";
const page = () => {
  const { data: session } = useSession();
  console.log(session?.user?._id);
  return (
    <div>
      <h1>{JSON.stringify(session)}</h1>
    </div>
  );
};

export default page;
