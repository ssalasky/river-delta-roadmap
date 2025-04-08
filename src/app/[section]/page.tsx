import DeployList from "@/components/DeployList";
import MainColumn from "@/components/MainColumn";
import SectionHeader from "@/components/SectionHeader";
import Sidebar from "@/components/Sidebar";
import SideColumn from "@/components/SideColumn";
import { appData } from "@/data/data";
import { FeatureStatuses } from "@/types/Feature";

const SectionPage = async ({
  params,
}: {
  params: Promise<{ section: keyof typeof appData }>;
}) => {
  const { section } = await params;
  const data = appData[section].filter(
    (item) => item.status !== FeatureStatuses.Idea,
  );
  const ideaData = appData[section].filter(
    (item) => item.status === FeatureStatuses.Idea,
  );

  return (
    <>
      <Sidebar />
      <MainColumn>
        <SectionHeader section={section} />
        <DeployList data={data} />
      </MainColumn>
      <SideColumn>
        <h2 className="font-semibold mb-2 border-b">
          Future ideas under consideration:
        </h2>
        <ul role="list" className="divide-y divide-white/5 py-2 space-y-2">
          {ideaData.map((item) => (
            <p key={item.id}>{item.feature}</p>
          ))}
        </ul>
      </SideColumn>
    </>
  );
};

export default SectionPage;
