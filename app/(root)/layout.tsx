import { ReactNode } from "react";

import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <main className="root-container">
        <div className="content-container">
          <Header />
          {children}
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Layout;
