import MobileNavigation from "@/components/MobileNavigation";
import Link from "next/link";

const Header = () => {
  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="navbar-start">
        <MobileNavigation />
        <Link href="/" className="btn btn-ghost text-xl">
          RD Roadmap
        </Link>
      </div>
    </div>
  );
};

export default Header;
