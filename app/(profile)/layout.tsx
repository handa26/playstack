import { ReactNode } from "react";

import Header from "@/components/Header";
import Profile from "@/components/Profile";
import Footer from "@/components/Footer";
import HeaderNav from "@/components/HeaderNav";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <main className="root-container">
        <div className="content-container">
          <Header />
          <Profile />
          <HeaderNav />
          {children}
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Layout;
