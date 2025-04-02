import DeployList from "@/components/DeployList";
import MainColumn from "@/components/MainColumn";
import SectionHeader from "@/components/SectionHeader";
import Sidebar from "@/components/Sidebar";
import { appData } from "@/data/data";

const SectionPage = async ({
  params,
}: {
  params: Promise<{ section: keyof typeof appData }>;
}) => {
  const { section } = await params;
  const data = appData[section];

  return (
    <>
      <Sidebar />
      <MainColumn>
        <SectionHeader section={section} />
        <DeployList data={data} />
      </MainColumn>
    </>
  );
};

export default SectionPage;
