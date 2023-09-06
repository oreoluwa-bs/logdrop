import Sidebar from "@/components/Sidebar";
import { axios } from "@/configs/axios";
import { useProjectStore } from "@/stores/projectStore";
import Head from "next/head";
import { useRouter } from "next/router";
import { FC, ReactNode, useEffect, useState } from "react";

interface Props {
  children: ReactNode;
  pageTitle: string;
}

const DashboardLayout: FC<Props> = ({ children, pageTitle }) => {
  const { project, setProject } = useProjectStore();
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  useEffect(() => {
    (async () => {
      try {
        const { data } = await axios("/project");
        if (data[0]) {
          setProject(data[0].name, data[0].id);
          setLoading(false);
        } else {
          router.push("/onboarding");
        }
      } catch (error) {}
    })();
  }, []);

  return (
    <div className="flex">
      <Head>
        <title>{`${pageTitle} • Snaplog`}</title>
      </Head>
      <>
        {loading ? (
          <div>Loading</div>
        ) : (
          <>
            <div className="hidden lg:block border-r border-gray-800 w-[20%] fixed">
              <Sidebar />
            </div>
            <div className="w-[80%] ml-[20%]">
              <div className="flex justify-between border-b border-gray-800 px-10 py-5 w-full sticky top-0 bg-black/20 backdrop-blur-md z-50">
                <h2 className="text-2xl font-medium">{pageTitle}</h2>
                <button>Docs</button>
              </div>
              <div className="py-5 px-10">{children}</div>
            </div>
          </>
        )}
      </>
    </div>
  );
};

export default DashboardLayout;
