import { ReactNode } from "react";

import Header from "@/components/Header";
import Profile from "@/components/Profile";
import Footer from "@/components/Footer";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <main className="root-container">
        <div className="content-container">
          <Header />
          <Profile />
          {children}
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Layout;
