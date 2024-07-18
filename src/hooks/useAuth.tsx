"use client";

import { api, apiSecure } from "@/services/axios";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import { User } from "../../types/types";

const useAuth = () => {
  const [isLoading, setLoading] = useState(false);
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    return () => {
      setLoading(true);
      apiSecure.get("/me").then((res) => {
        res.data?.user ? setUser(res?.data?.user) : setUser(null);
      });
      setLoading(false);
    };
  }, []);
  return { isLoading, user };
};

export default useAuth;
