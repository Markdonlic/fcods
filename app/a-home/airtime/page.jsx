import Providers from "@/components/Providers";
import Link from "next/link";

let networkProviders = require("@/APIs/Providers.json");

const page = () => {
  return (
    <div className="w-[768px] min-h-screen m-0">
      <div className="flex flex-col gap-3">
        {/* top menu */}
        <div className="bg-sky-500 z-10 min-w-max sticky top-0 left-0 right-0 h-16 flex gap-[3px] items-center text-white text-sm px-4">
          <Link
            href="/a-home"
            className="tracking-normal py-1 px-4 rounded-full bg-sky-900 text-xs"
          >
            Home
          </Link>{" "}
          /
          <Link
            href="/a-home/pay-bills"
            className="tracking-normal py-1 px-4 rounded-full bg-sky-900 text-xs"
          >
            Pay Bills
          </Link>{" "}
          /
          <Link
            href="/a-home/airtime"
            className="tracking-normal py-1 px-4 rounded-full bg-gray-100 text-neutral-800"
          >
            Airtime
          </Link>{" "}
        </div>
        <div className="flex flex-col gap-2 px-2">
          <div className="bg-gray-100 w-full flex flex-col justify-center gap-3">
            <input
              className="w-full sticky top-[70px] left-0 right-0 px-4 py-3 rounded-full border-sky-500 border-[1px] text-sm"
              type="text"
              name="search"
              placeholder="Search Your Airtime Provider..."
            />
            <div className="w-full flex flex-col justify-center">
              {networkProviders?.map((items) => {
                return (
                  <Providers
                    key={items.id}
                    name={items.name}
                    code={items.code}
                    link={items.link}
                  />
                );
              })}
            </div>
          </div>
          <div className="h-8 w-full"></div>
        </div>
      </div>
    </div>
  );
};

export default page;
