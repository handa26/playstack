"use client";
import { ReactNode, useState, useEffect } from "react";

import Header from "@/components/Header";
import Footer from "@/components/Footer";

import { getCurrentUser } from "@/lib/storage";

const Layout = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState();

  useEffect(() => {
    const getUser = getCurrentUser();
    setUser(getUser);
  }, []);

  return (
    <>
      <main className="root-container">
        <div className="content-container">
          <Header user={user!} />
          {children}
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Layout;
