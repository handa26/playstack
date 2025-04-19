import { ReactNode } from "react";

import Header from "@/components/Header";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <main className="root-container">
      <div className="content-container">
        <Header />
        {children}
      </div>
    </main>
  );
};

export default Layout;
