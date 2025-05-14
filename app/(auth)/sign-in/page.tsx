"use client";
import { useState, useEffect } from "react";
import { useRouter, redirect } from "next/navigation";

import AuthForm from "@/components/AuthForm";

import { signInSchema } from "@/lib/validations";
import { signIn, getCurrentUser } from "@/lib/storage";

const Page = () => {
  const [user, setUser] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const getUser = getCurrentUser();
    setUser(getUser);
  }, []);
  
  if (user) redirect("/");

  const onSubmit = (e) => {
    signIn(e.username);
    router.push("/");
  };

  return <AuthForm 
    type="SIGN_IN"
    schema={signInSchema}
    defaultValues={{
      // email: "",
      // password: "",
      username: "",
    }}
    onSubmit={onSubmit}
  />;
};

export default Page;
