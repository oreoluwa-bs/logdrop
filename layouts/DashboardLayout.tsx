import Sidebar from "@/components/Sidebar";
import { FC, ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const DashboardLayout: FC<Props> = ({ children }) => {
  return (
    <div className="flex">
      <div className="hidden lg:block border-r border-purple-500/20 w-[20%] fixed">
        <Sidebar />
      </div>
      <div className="w-[80%] ml-[20%]">
        <div className="flex justify-between border-b border-purple-500/20 px-7 py-5 w-full sticky top-0 bg-black/20 backdrop-blur-md z-50">
          <h2>Something goes here</h2>
          <button>Docs</button>
        </div>
        <div className="py-5 px-10">{children}</div>
      </div>
    </div>
  );
};

export default DashboardLayout;
