import MainColumn from '@/components/MainColumn';
import Sidebar from '@/components/Sidebar';
import SideColumn from '@/components/SideColumn';

export default function Home() {
  return (
    <div>
      <Sidebar />
      <MainColumn />
      <SideColumn />
    </div>
  );
}
