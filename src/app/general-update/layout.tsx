import MainColumn from "@/components/MainColumn";
import Sidebar from "@/components/Sidebar";
import { ReactNode } from "react";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Sidebar />
      <MainColumn>{children}</MainColumn>
    </>
  );
};

export default Layout;
