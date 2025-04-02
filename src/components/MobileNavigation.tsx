import { GeneralNavigation, Navigation } from "@/data/Routes";
import clsx from "clsx";
import Link from "next/link";

const MobileNavigation = () => {
  return (
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16"
          />
        </svg>
      </div>
      <ul
        tabIndex={0}
        className=" dropdown-content bg-base-100 rounded-box space-y-1 z-1 mt-3 w-52 p-2 shadow"
      >
        <li>
          <ul className="space-y-1">
            <li>Application Sections</li>
            {Navigation.map((item) => (
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
        <li>
          <ul className="space-y-1">
            <li>App-Wide Updates</li>
            {GeneralNavigation.map((item) => (
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
    </div>
  );
};

export default MobileNavigation;
