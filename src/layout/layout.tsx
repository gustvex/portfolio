import { ReactNode } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import CustomCursor from "../components/CustomCursor";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="flex flex-col min-h-screen bg-custom-black">
      <CustomCursor />
      <Header />
      <main className="flex-grow ">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
