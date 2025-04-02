"use client";

import { GeneralNavigation, Navigation } from "@/data/Routes";

import clsx from "clsx";
import Link from "next/link";
import { useParams } from "next/navigation";

const Sidebar = () => {
  const { section } = useParams();

  const navigation = Navigation.map((item) => ({
    ...item,
    current: item.href.replace("/", "") === section,
  }));

  const generalNavigation = GeneralNavigation.map((item) => ({
    ...item,
    current: item.href.replace("/", "") === section,
  }));

  return (
    <>
      <div className="hidden lg:fixed mt-16 lg:inset-y-0 lg:z-50 lg:flex lg:w-72 lg:flex-col">
        <div className="flex grow flex-col gap-y-5 overflow-y-auto border-r px-6">
          <nav className="mt-6 flex flex-1 flex-col">
            <ul role="list" className="flex flex-1 flex-col gap-y-7">
              <li className="font-semibold border-b border-gray-500">
                Application Sections
              </li>
              <li>
                <ul role="list" className="-mx-2 space-y-1">
                  {navigation.map((item) => (
                    <li key={item.name}>
                      <Link
                        href={item.href}
                        className={clsx(
                          item.current ? "btn-info btn-active" : "btn-default",
                          "btn btn-wide justify-start",
                        )}
                      >
                        <item.icon
                          aria-hidden="true"
                          className={clsx(
                            item.current
                              ? "text-indigo-600"
                              : "text-gray-400 group-hover:text-indigo-600",
                            "size-6 shrink-0",
                          )}
                        />
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </li>
              <li className="font-semibold border-b border-gray-500">
                App-Wide Updates
              </li>
              <li>
                <ul role="list" className="-mx-2 space-y-1">
                  {generalNavigation.map((item) => (
                    <li key={item.name}>
                      <Link
                        href={item.href}
                        className={clsx(
                          item.current ? "btn-info btn-active" : "btn-default",
                          "btn btn-wide justify-start",
                        )}
                      >
                        <item.icon
                          aria-hidden="true"
                          className={clsx(
                            item.current
                              ? "text-indigo-600"
                              : "text-gray-400 group-hover:text-indigo-600",
                            "size-6 shrink-0",
                          )}
                        />
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
