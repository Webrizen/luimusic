"use client";
import React from 'react';
import { useAuthContext } from "@/context/AuthContext";
import { useRouter } from "next/navigation";

export default function page() {
  const { user } = useAuthContext()
    const router = useRouter()

    React.useEffect(() => {
        if (user == null) router.push("/login")
    }, [user])

  return (
    <div>
      Music Dashboard - Login User Will See!
    </div>
  )
}
