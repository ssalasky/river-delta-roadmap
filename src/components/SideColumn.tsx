import { ReactNode } from "react";

const SideColumn = ({ children }: { children: ReactNode }) => {
  return (
    <aside className="fixed mt-16 inset-y-0 right-0 hidden w-96 overflow-y-auto border-l border-gray-200 px-4 py-6 sm:px-6 lg:px-8 xl:block">
      {children}
    </aside>
  );
};

export default SideColumn;
