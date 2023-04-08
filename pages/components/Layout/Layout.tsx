import Navbar from "./Navbar/Navbar";
import Footer from "./Footer";
import { FC } from "react";
import { montserrat } from "@/pages/_app";

type LayoutProps = React.HTMLAttributes<HTMLDivElement> & {
  children: React.ReactNode;
};

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <div className={`${montserrat.variable} font-sans`}>
      <Navbar />
      {children}
      {/* <Footer /> */}
    </div>
  );
};

export default Layout;
