import DeployList from "@/components/DeployList";
import MainColumn from "@/components/MainColumn";
import SectionHeader from "@/components/SectionHeader";
import Sidebar from "@/components/Sidebar";
import {appData} from "@/data/data";
import {FeatureStatuses} from '@/types/Feature';

const SectionPage = async ({
  params,
}: {
  params: Promise<{ section: keyof typeof appData }>;
}) => {
  const { section } = await params;
  const data = appData[section].filter((item) => item.status !== FeatureStatuses.Idea)
  const ideaData = appData[section].filter((item) => item.status === FeatureStatuses.Idea)

  return (
    <>
      <Sidebar/>
      <MainColumn>
        <SectionHeader section={section}/>
        <DeployList data={data}/>
      </MainColumn>
      <aside
        className="fixed top-16 inset-y-0 right-0 hidden w-96 overflow-y-auto border-l border-gray-200 px-4 py-6 sm:px-6 lg:px-8 xl:block">
        <ul role="list" className="divide-y divide-white/5">
          {ideaData.map((item) => (
            <p key={item.id}>{item.feature}</p>
          ))}
        </ul>
      </aside>
    </>
  );
};

export default SectionPage;
