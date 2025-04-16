"use client";
import AuthForm from "@/components/AuthForm";

import { signUpSchema } from "@/lib/validations";

const Page = () => {
  return (
    <AuthForm
      type="SIGN_UP"
      schema={signUpSchema}
      defaultValues={{
        username: "",
        email: "",
        password: "",
      }}
      onSubmit={() => {}}
    />
  );
};

export default Page;
