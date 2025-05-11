"use client";

import { Suspense } from "react";

import CustomTabs from "@/components/CustomTabs";

const Page = () => {
  return (
    <Suspense>
      <CustomTabs />
    </Suspense>
  );
};

export default Page;
