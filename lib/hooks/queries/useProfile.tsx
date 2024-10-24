"use client";

import { getProfile } from "@/lib/fetchers";
import { getAccessToken } from "@/lib/helpers/localStorage";
import { useQuery } from "@tanstack/react-query";

export const PROFILE_KEY = "PROFILE_KEY";

export const useProfile = () => {
  const accessToken = typeof window !== "undefined" && getAccessToken();

  return useQuery({
    queryKey: [PROFILE_KEY, accessToken],
    queryFn: () => getProfile(),
  });
};
