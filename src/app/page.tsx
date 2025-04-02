import MainColumn from "@/components/MainColumn";
import Sidebar from "@/components/Sidebar";
import Hero from "@/data/Hero";

export default function Home() {
  return (
    <div>
      <Sidebar />
      <MainColumn>
        <Hero />
      </MainColumn>
    </div>
  );
}
